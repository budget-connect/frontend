import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

export const config = {
  runtime: 'edge',
};

export function defaultSystemPrompt() {
  const currentDate = new Date().toISOString().split('T')[0];
  return `You are an expert event budget planner to give advice and answer any questions. Answer as concisely as possible. Be cheerful.\nCurrent date: ${currentDate}\n`;
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
