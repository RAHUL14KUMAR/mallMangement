import axios from 'axios';
const url='http://localhost:5000'

export const remove=async({id})=>{
    try{
        const res=axios.delete(`${url}/all`,{id});
        console.log(res);
        return res;
    }catch(error){
        return  alert("we get the error from delete axios");
    }
}