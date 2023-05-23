import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

export const config = {
  runtime: 'edge',
};

export function defaultSystemPrompt() {
  return `Act as expert budget planner with 20 years of experience. Given the user context, return the following:
1. "recommendation": Succinct budget review and recommendation
2. "recommended range": the recommended upper and lower spending range out of user income, e.g. 10-15 percent of your total income,
3. "modified budget": the modified, improved budget including the following details:
  Example modified_budget: "category": "Food", "budget": "300", "expenses": 1. "Groceries, amount 200" 2. "Restaurants, amount 100"\nAnswer as concisely as possible, not more than 100 words.\n`;
}

const handler = async (req: Request): Promise<Response> => {
  let { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response('No prompt in the request', { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: defaultSystemPrompt() },
      { role: 'user', content: prompt },
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 2000,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload, process.env.OPENAI_API_KEY ?? '');
  return new Response(stream, {
    headers: { 'Content-Type': 'text/event-stream' },
  });
};

export default handler;
