import getAllData from "../../utils/getAllData";

export default async function handler(req, res) {
  const data = await getAllData();
  const type = req.query.type;

  let result = data.actors;

  if (type !== undefined) {
    result = data.actors.filter((actor) => actor.type === type);
  }

  res.status(200).json(result);
}
