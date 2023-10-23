import { getAnalytics } from "firebase/analytics";
import { firebaseApp } from "./firebaseAppConfig";

export const analytics = getAnalytics(firebaseApp);
