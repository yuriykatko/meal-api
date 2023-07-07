import path from 'path';
import { promises as fs } from 'fs';
import { useSearchParams } from 'next/navigation';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  //Return the content of the data file in json format

  const data = JSON.parse(fileContents);
  const parsed = data.actors.filter(actor => actor.type === req.query.type);

  res.status(200).json(parsed);
}