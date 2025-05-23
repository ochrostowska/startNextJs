import { ContactInformation } from "./types";

const TABLE_KEY = "contact";

const DEFAULT_DATA: ContactInformation = {
  phone: ["+48 536 13 13 13"],
  email: ["biuro@start.biz.pl"],
  address: "Mieszka I 81, 71-011 Szczecin",
  mapUrl: "",
};

export const useContactInformation = () => {
  // const ref = collection(firestoreDb, TABLE_KEY);
  // const que = useFirestoreQueryData([TABLE_KEY], ref);

  let data: ContactInformation = DEFAULT_DATA;
  // const dataFromDb = que.data as ContactInformation[];
  // if (dataFromDb && dataFromDb.length > 0) {
  //   if (dataFromDb[0].phone) {
  //     data.phone = dataFromDb[0].phone;
  //   }
  //   if (dataFromDb[0].email) {
  //     data.email = dataFromDb[0].email;
  //   }
  //   if (dataFromDb[0].address) {
  //     data.address = dataFromDb[0].address;
  //   }
  // }

  // return {
  //   data,
  //   isLoading: que.isLoading,
  //   isError: que.isError,
  //   error: que.error,
  // };

  return {
    data,
    isLoading: false,
    isError: false,
    error: null,
  };
};
