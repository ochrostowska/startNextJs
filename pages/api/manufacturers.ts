import { getManufacturers } from "@/services/contentful/contentfulApi";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const manufacturers = await getManufacturers();
    res.status(200).json(manufacturers);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch manufacturers" });
  }
}
