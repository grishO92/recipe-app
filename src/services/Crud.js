import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';

export const getAllRecipies = async () => {
  const recipies = await getDocs(collection(db, 'recipies'));
  return recipies;
};

export const getRecipeById = async (id) => {
  const recipe = await getDoc(doc(db, 'recipies', id));
  return recipe;
};

export const createRecipe = async (data) => {
  await addDoc(collection(db, 'recipies'), { ...data });
};
