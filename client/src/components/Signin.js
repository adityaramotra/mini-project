import './Signup.css';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const Signinuser = () => {
    const history = useHistory("");

    const [inpval, setINP] = useState({
        email: "",
        password: ""
        
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

        const { email, password } = inpval;

        const res = await fetch("/api/user/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        if (res.status === 401 || !data) {
            console.log("error ");
            alert("error user not found");

        } else {
            alert("Signin");
            console.log("data added");
            history.push(`/uhome/${data.token}`);
        }
    }
  return (
    <div className="container-main">
        <div className="form-box">
            <h1>Sign In</h1>
                <form>
                    <div className="input-group">
                        <div className="input-field">
                            <input type="email" value={inpval.email} onChange={setdata} name="email" placeholder="Email"></input>
                        </div>
                        <div className="input-field">
                            <input type="password" value={inpval.password} onChange={setdata} name="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="btn-field">
                        <button type="submit">Sign Up</button>
                        <button type="submit" onClick={addinpdata}>Sign In</button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Signinuser