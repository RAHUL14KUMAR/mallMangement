import axios from 'axios';
const url='http://localhost:5000'

export const addProduct=async({title,image,price,description})=>{
    try{
        const res=axios.post(`${url}/all`,{title,image,price,description});
        console.log(res);
        return res;
    }catch(error){
        return  alert("you are not the admin");
    }
}