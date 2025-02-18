import { getManufacturers } from "./contentful/contentfulApi";
import { Manufacturer } from "./contentful/types";

export class StartApi {
  static async getManufacturers(): Promise<Manufacturer[]> {
    try {
      return getManufacturers();
    } catch (error) {
      console.error("StartApi Error:", error);
      return [];
    }
  }
}

async function fetchJson<T>(url: string): Promise<T> {
  const absoluteUrl = createUrl(url);
  const response = await fetch(absoluteUrl);
  if (!response.ok) {
    throw new Error(`Fetch ${absoluteUrl} failed: ${response.statusText}`);
  }
  return response.json();
}

function createUrl(path: string): string {
  return (
    (typeof window === "undefined" // Check if running on the server
      ? `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}`
      : "") + `/api${path}`
  );
}
