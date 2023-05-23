import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

type RequestData = {
  prompt: string;
};

type ResponseData = {
  message?: unknown | string;
};

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

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
  "budget": 300,
  "expenses": [
    {
      "name": "Groceries",
      "amount": 200
    },
    {
      "name": "Restaurants",
      "amount": 100
    }
}`;
}

const openai = new OpenAIApi(configuration);

// example prompt
// {
//   "prompt": "monthly income is 3000, location is singapore, category is food, total budget is 300, taken out is 100, restaurant is 200"
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  try {
    const { prompt } = req.body as RequestData;
    const response = await openai.createChatCompletion({
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
    });
    console.log(response.data.choices[0].message?.content);
    const jsonResult = JSON.parse(response.data.choices[0].message?.content!);
    res.status(200).json(jsonResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error || 'Something went wrong' });
  }
}
