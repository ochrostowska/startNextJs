import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query } from "firebase/firestore";
import { firestoreDb } from "../firebase/firebaseDb";
import { Manufacturer } from "./types";

const TABLE_KEY = "manufacturers";

export const useManufacturers = () => {
  const ref = query(collection(firestoreDb, TABLE_KEY));

  // Provide the query to the hook
  const que = useFirestoreQueryData([TABLE_KEY], ref);

  const data = que.data as Manufacturer[];

  return {
    data,
    isLoading: que.isLoading,
    isError: que.isError,
    error: que.error,
  };
};
