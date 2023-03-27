import './Signup.css';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const RegisterUser = () => {
    const history = useHistory("");

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        password:"",
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const addinpdata = async (e) => {
        e.preventDefault();

        const { name,email,password} = inpval;

        const res = await fetch("/api/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email,password
            })
        });

        const data = await res.json();

        if (res.status === 422 ) {
            console.log("error ");
            alert("error1");

        } else {
            alert("added");
            console.log("data added");
            history.push("/");
        }
        
        
    }


  return (
    <div className="container-main">
        <div className="form-box">
            <h1>Sign Up</h1>
                <form>
                    <div className="input-group">
                        <div className="input-field">
                            <input type="text" value={inpval.name} onChange={setdata} name="name" placeholder="Name"></input>
                        </div>
                        <div className="input-field">
                            <input type="email" value={inpval.email} onChange={setdata} name="email" placeholder="Email"></input>
                        </div>
                        <div className="input-field">
                            <input type="password" value={inpval.password} onChange={setdata} name="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="btn-field">
                        <button type="submit" onClick={addinpdata}>Sign Up</button>
                        <button type="button">Sign In</button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default RegisterUser