import { db } from '../firebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  arrayUnion,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

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

export const updateRecipe = async (id, data) => {
  const recipe = doc(db, 'recipies', id);
  await updateDoc(recipe, data);
};

export const deleteRecipe = async (id) => {
  const recipe = doc(db, 'recipies', id);
  await deleteDoc(recipe);
};

export const addLike = async (id, userId) => {
  const recipe = doc(db, 'recipies', id);
  await updateDoc(recipe, {
    likes: arrayUnion(userId),
  });
};
