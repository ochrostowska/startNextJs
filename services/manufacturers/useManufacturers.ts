import { useQuery } from "react-query";
import { getManufacturers } from "../contentful/contentfulApi";

export const useManufacturers = () =>
  useQuery("manufacturers", getManufacturers);
