import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { auth, database } from "./firebase";
import { onValue, ref, set } from "firebase/database";
import { set_users } from "../store/slice/user_auth_slice";



  const create_account = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const login_account = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
//
  function write_user_data(user_id, data) {
    return set(ref(database, "users/" + user_id), {
      ...data,
    });
  }
///
  const read_user_data = (user_id) => {
    console.log("Reading user data for user ID:", user_id);
    const reference = ref(database,"users/"+user_id);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      console.log("Retrieved user data:", data);
      localStorage.setItem('userData', JSON.stringify(data));
    });
  };
//
const read_all_users = () => {
  console.log("Reading all users from the database:");
  const usersRef = ref(database, "users");
  const usersArray = [];

  return new Promise((resolve, reject) => {
    onValue(usersRef, (snapshot) => {
      const users = snapshot.val();
      if (users) {
        Object.keys(users).forEach((userId) => {
          console.log("User ID:", userId);
          console.log("User Data:", users[userId]);
          usersArray.push({
            userId: userId,
            userData: users[userId]
          });
        });
      } else {
        console.log("No users found.");
      }

      console.log("All users data array:", usersArray);
      resolve(usersArray); // Resolve the promise with usersArray
    }, (error) => {
      reject(error); // Reject the promise in case of error
    });
  });
};
////
const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const usersArray = await read_all_users(); // Fetch users data
      dispatch(set_users(usersArray)); // Dispatch action to set all users
    } catch (error) {
      console.error('Error fetching all users:', error);
      // Handle error if needed
    }
  };
};
  
  export { create_account, login_account, fetchAllUsers,write_user_data,read_user_data,read_all_users};
  