import axios from 'axios'
const url='http://localhost:5000'

export const loginUser=async(data)=>{
    try{
        const resp=await axios.post(`${url}/login`,data);
        console.log("from axios resp",resp);
        return resp;
    }catch(error){
        alert("register yourself");
        console.log("we ge the error from login user",error);
        const resp=await axios.post(`${url}/login`,data);
        console.log(resp);
        return resp;
        // console.log(error.response.data.error);
    }
}