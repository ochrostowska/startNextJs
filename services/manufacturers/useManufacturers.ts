import { useQuery } from "react-query";
import { StartApi } from "../StartApi";

export const useManufacturers = () =>
  useQuery("manufacturers", StartApi.getManufacturers);
