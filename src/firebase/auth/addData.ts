import app from "@/services/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(app);
export default async function addData(colllection: any, id: any, data: any) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
