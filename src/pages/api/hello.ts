import clientPromise from '@/lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  isConnected: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    await clientPromise;
    return res.status(200).json({ isConnected: true });
  }
  return res.status(200).json({ isConnected: false });
}
