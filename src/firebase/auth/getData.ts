import UserModel from "@/model/UserModel";
import app from "@/services/firebase";
import {
  WhereFilterOp,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const db = getFirestore(app);
const userRef = collection(db, "users");

export default async function getDataUser(condition: unknown) {
  const qEx = query(userRef, where("email", "==", condition));

  const snapshot = await getDocs(qEx);
  const data: UserModel = {
    nama: "",
    email: "",
    asal_sekolah: "",
    id_lomba: 0,
    ktm: "",
    no_hp: "",
    upassword: "",
    url: "",
  };
  const res = snapshot.docs.map((doc) => {
    data.nama = doc.data().nama;
    data.email = doc.data().email;
    data.asal_sekolah = doc.data().asal_sekolah;
    data.id_lomba = doc.data().id_lomba;
    data.ktm = doc.data().ktm;
    data.no_hp = doc.data().no_hp;
    data.upassword = doc.data().upassword;
    data.url = doc.data().url;
  });
  return data;
}
