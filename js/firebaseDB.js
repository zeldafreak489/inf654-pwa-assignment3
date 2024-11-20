// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { 
    getFirestore,
    collection,
    doc,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc
 } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
const firebaseConfig = {
    apiKey: "AIzaSyAfmuVqG3opRDsxF__6ARwL7pmZKHL_fo4",
    authDomain: "anonchef-df4bd.firebaseapp.com",
    projectId: "anonchef-df4bd",
    storageBucket: "anonchef-df4bd.firebasestorage.app",
    messagingSenderId: "619983012072",
    appId: "1:619983012072:web:c81fb0e2a2e7169e84c95d",
    measurementId: "G-XYY7R7FXHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Add a Recipe
export async function addRecipeToFirebase(recipe) {
    try {
        const docRef = await addDoc(collection(db, "recipes"), recipe);
        return { id: docRef.id, ...recipe };
    } catch (error) {
        console.error("Error adding task: ", error);
    }
}

// const recipe = {
//     title: "example recipe",
//     description: "test for firebase", 
//     image: "test",
//     body: "example recipe",
//     status: true
// }

// addRecipeToFirebase(recipe);

// Get Recipes
export async function getRecipesFromFirebase() {
    const recipes = [];
    try {
        const querySnapshot = await getDocs(collection(db, "recipes"));
        querySnapshot.forEach((doc) => {
            recipes.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error("Error retrieving recipes: ", error);
    }
    return recipes;
}

// Delete Recipe
export async function deleteRecipeFromFirebase(id) {
    try {
        await deleteDoc(doc(db, "recipes", id));
    } catch (error) {
        console.error("Error deleting recipe: ", error);
    }
}

// Update Recipe
export async function updateTaskInFirebase(id, updatedData) {
    try {
        const recipeRef = doc(db, "recipes", id);
        await updateDoc(recipeRef, updatedData);
    } catch (error) {
        console.error("Error updating recipe: ", error);
    }
}