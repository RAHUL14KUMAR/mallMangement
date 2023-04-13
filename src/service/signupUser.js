import axios from 'axios';
const url='http://localhost:5000'

export const signupUsers=async(signup)=>{
    try{
        const res= await axios.post(`${url}/signup`,signup);
        console.log("signupuserscredentials",res);
        return res;
    }catch(error){
        console.log("we get the error from signupUser",error);
    }
}