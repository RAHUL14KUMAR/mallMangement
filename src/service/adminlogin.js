import axios from 'axios';
const url='http://localhost:5000'

export const adminLogin=async({username,password})=>{
    try{
        const res=axios.post(`${url}/adminlogin`,{username,password});
        console.log(res);
        return res;
    }catch(error){
        return  alert("you are not the admin");
    }
}