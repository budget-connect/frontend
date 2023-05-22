import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

type RequestData = {
  system: string;
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
  const currentDate = new Date().toISOString().split('T')[0];
  return `You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nCurrent date: ${currentDate}\n`;
}

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    let { system, prompt } = req.body as RequestData;
    if (!system) {
      system = defaultSystemPrompt();
    }
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).json({
      message: response.data.choices[0].message?.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error || 'Something went wrong' });
  }
}
