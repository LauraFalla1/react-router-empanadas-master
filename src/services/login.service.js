import axios from "../utils/axios"

const Register = ()=>{

}

const Login =async (login)=>{
    try{
        const {data }= await axios.post("/auth",login)
        return data 
    }catch(e){
        return e.response
    }

}

const loginService ={
    Register,
    Login
}
export default loginService