import getAllData from "../../utils/getAllData";
import getRandomNumber from "../../utils/getRandomNumber";

export default async function handler(req, res) {
  const data = await getAllData();
  const randomIndex = getRandomNumber(0, data.length);
  const result = data[randomIndex];

  res.status(200).json(result);
}
