import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const getAllRecipies = async () => {
  const data = await getDocs(collection(db, 'recipies'));
  return data;
};

export const createRecipe = async (data) => {
  await addDoc(collection(db, 'recipies'), { ...data });
};
