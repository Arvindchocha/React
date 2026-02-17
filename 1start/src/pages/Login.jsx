import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData,setFormData] = useState({
        userName:'',
        userEmail:'',
    });
    const {login} = useContext(AuthContext);
    const navigate= useNavigate();

    const handelChange =(e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
        login(formData);
        navigate('/cart');
    }
    return <div className="formOtr">
        <form onSubmit={handelSubmit}>
            <h1>SIGN IN</h1>
            <div className="filed">
                <label htmlFor="userName">user name</label>
                <input type="text" name="userName" id="userName" onChange={handelChange} placeholder="your name" />
            </div>
            <div className="filed">
                <label htmlFor="userEmail">user email</label>
                <input type="email" name="userEmail" id="userEmail" onChange={handelChange} placeholder="your email" />
            </div>
            <div className="filed">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
}