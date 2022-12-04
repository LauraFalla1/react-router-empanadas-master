import React from "react";
import { UserContext } from '../context/user.context'
import { useNavigate } from 'react-router-dom';


const CloseSection = () => {
    let navigate = useNavigate()
    const { setAuthUser } = React.useContext(UserContext)

    React.useEffect(() => {
        localStorage.clear()
        setAuthUser({
            token: "",
            isAuth: false,
            isAdmin: false
        })
        navigate("/")

    }, [setAuthUser,navigate])
    return (
        <></>
    )
}


export default CloseSection