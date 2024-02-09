import { promises as fs } from "fs";

export const getProducts = async () => {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const data = JSON.parse(file);
  return data;
};
