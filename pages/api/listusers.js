import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'database', 'listusers.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const file = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(file);
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
