export const config = {
  runtime: 'edge',
};

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

export function defaultSystemPrompt() {
  return `Act as expert budget planner with 20 years of experience. Given the user context, fill in and return just the JSON output in the following format, minified:
{
  "recommendation": "[Generated succinct budget recommendation]",
  "upper": "[Generated recommended upper spending range out of user income, e.g. 15]",
  "lower": "[Generated recommended lower spending range out of user income, e.g. 10]",
  "modified_budget": "[Generated modified budget in the form of a JSON object]"
}
Example modified_budget:
{
  "category": "Food",
  "budget": "300",
  "expenses": [
    {
      "name": "Groceries",
      "amount": "200"
    },
    {
      "name": "Restaurants",
      "amount": "100"
    }
}`;
}

// example prompt
// {
//   "prompt": "monthly income is 3000, location is singapore, category is food, total budget is 300, taken out is 100, restaurant is 200"
// }

const handler = async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 500 });
  }
  let { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response('No prompt in the request', { status: 400 });
  }

  try {
    const payload = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: JSON.stringify(defaultSystemPrompt()) },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });

    try {
      const data = await response.json();
      console.log(data);
      const jsonResult = data.choices[0].message?.content!;
      return new Response(jsonResult, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
      return new Response('Fail to parse JSON', {
        status: 500,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

export default handler;
