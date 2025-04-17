import { ProductTypeBasic } from "./types";

import fs from "fs/promises";
import path from "path";

export const getProductsBasic = async () => {
  const filePath = path.join(process.cwd(), "data", "productsBasic.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString()) as ProductTypeBasic[];

  return data;
};
