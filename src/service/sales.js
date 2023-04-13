import axios from 'axios';
const url='http://localhost:5000'

export const register=async([data])=>{
    try{
        const res=axios.post(`${url}/order/ord`,[data]);
        console.log(res);
        return res;
    }catch(error){
        return  alert("we dont get the item from order register route axios");
    }
}
export const registers=async()=>{
    try{
        const res=axios.get(`${url}/order/ord`);
        console.log(res);
        return res;

    }catch(error){
        return  alert("we dont get the item from order registers route axios");
    }
}