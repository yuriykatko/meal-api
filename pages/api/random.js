import getAllData from "../../utils/getAllData";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default async function handler(req, res) {
  const data = await getAllData();
  const randomIndex = getRandomNumber(0, data.length);
  const result = data[randomIndex];

  res.status(200).json(result);
}
