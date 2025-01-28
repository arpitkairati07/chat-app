// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMuC4kb47wI4lIU7S22W-WzBm3kndUwHk",
  authDomain: "chat-app-79f36.firebaseapp.com",
  projectId: "chat-app-79f36",
  storageBucket: "chat-app-79f36.firebasestorage.app",
  messagingSenderId: "163007629906",
  appId: "1:163007629906:web:4301bbdc0af2ee9028ed8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup =async(username,email,password)=>{
  try {
    const res=await createUserWithEmailAndPassword(auth,email,password);
    const user=res.user;
    await setDoc(doc(db,"users",user.uid),{
      id:user.uid,
      username:username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:"Hey,there I'm using ChatApp",
      lastSeen:Date.now()
    })
    toast.success("User registered successfully!");
    await setDoc(doc(db,"chats",user.uid),{
      chatData:[]
    })
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
const Login =async (email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
const logout =async ()=>{
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }

}
export {signup,Login,logout,auth,db}