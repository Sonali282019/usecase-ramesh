import axios from 'axios'
const API_URL ="http://localhost:8082/api/auth/";
    const register = ( fname, lname, dob,username, email, password) => {
alert("register");
      return axios.post(API_URL + "signup", {
        fname ,
        lname,
        dob,
        username,
        email,
        password,
    
      });}
      export {register};