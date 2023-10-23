import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebaseAppConfig";

export const firestoreDb = getFirestore(firebaseApp);

export const getData = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(firestoreDb, collectionName));
};

export const addData = async (collectionName: string, element: any) => {
  try {
    const docRef = await addDoc(
      collection(firestoreDb, collectionName),
      element
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
