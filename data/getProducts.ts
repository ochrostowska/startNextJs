const fs = require("fs");

export const readJSON = (path: string) => {
  // Read the file synchronously
  const rawData = fs.readFileSync(path, "utf8");

  // Parse the JSON data
  const data = JSON.parse(rawData);
  return data;
};

export const getProducts = () => readJSON("products.json");
