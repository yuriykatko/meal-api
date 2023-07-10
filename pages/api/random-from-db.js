import { sql } from "@vercel/postgres";

import getRandomNumber from "../../utils/getRandomNumber";

export default async function handler(req, res) {
  const data = await sql`SELECT * from meals`;
  const randomIndex = getRandomNumber(0, data.rows.length);
  const result = data.rows[randomIndex];

  res.status(200).json(result);
}
