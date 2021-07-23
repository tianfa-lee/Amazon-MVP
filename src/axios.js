import axios from "axios";

const instance = axios.create({
  
   /* 
     THE API (cloud function) URL
     Select to run the cloud function in production or development environment
  */
   baseURL: process.env.REACT_APP_AXIOS_PROD_HOST ||process.env.REACT_APP_AXIOS_DEV_HOST

});

export default instance;