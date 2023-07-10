import { sql } from "@vercel/postgres";

import getAllData from "../../utils/getAllData";

export default async function handler(req, res) {
  const data = await getAllData();

  data.forEach(async function insertDataItem(item) {
    await sql`[ALREADY RUN] INVALID INSERT INTO meals (idMeal, strMeal, strMealThumb, strSource, 
        strArea, strCategory,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, 
        strIngredient5, strIngredient6, strIngredient7, strIngredient8, 
        strIngredient9, strIngredient10, strIngredient11, strIngredient12, 
        strIngredient13, strIngredient14, strIngredient15, strIngredient16, 
        strIngredient17, strIngredient18, strIngredient19, strIngredient20,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4, 
        strMeasure5, strMeasure6, strMeasure7, strMeasure8, 
        strMeasure9, strMeasure10, strMeasure11, strMeasure12, 
        strMeasure13, strMeasure14, strMeasure15, strMeasure16, 
        strMeasure17, strMeasure18, strMeasure19, strMeasure20) 
        VALUES (${item.idMeal}, ${item.strMeal}, ${item.strMealThumb}, ${item.strSource}, 
            ${item.strArea}, ${item.strCategory},
            ${item.strIngredient1}, ${item.strIngredient2}, ${item.strIngredient3}, ${item.strIngredient4}, 
            ${item.strIngredient5}, ${item.strIngredient6}, ${item.strIngredient7}, ${item.strIngredient8}, 
            ${item.strIngredient9}, ${item.strIngredient10}, ${item.strIngredient11}, ${item.strIngredient12}, 
            ${item.strIngredient13}, ${item.strIngredient14}, ${item.strIngredient15}, ${item.strIngredient16}, 
            ${item.strIngredient17}, ${item.strIngredient18}, ${item.strIngredient19}, ${item.strIngredient20},
            ${item.strMeasure1}, ${item.strMeasure2}, ${item.strMeasure3}, ${item.strMeasure4}, 
            ${item.strMeasure5}, ${item.strMeasure6}, ${item.strMeasure7}, ${item.strMeasure8}, 
            ${item.strMeasure9}, ${item.strMeasure10}, ${item.strMeasure11}, ${item.strMeasure12}, 
            ${item.strMeasure13}, ${item.strMeasure14}, ${item.strMeasure15}, ${item.strMeasure16}, 
            ${item.strMeasure17}, ${item.strMeasure18}, ${item.strMeasure19}, ${item.strMeasure20});`;
  });

  res.status(200).json({ status: "ok" });
}
