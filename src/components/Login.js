import React, { useState } from 'react';
function Login() {
    const [Name , setName]=useState("");
    var op = (a)=>{
        a.preventDefault();
        console.log("Vantan Osama bildan vantann");
        console.log(Name);
    }
    return (
        <div className="container">
            <form>
                <div>
                    <label>LogIn</label>
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" value={Name} onChange={e=> setName(e.target.value)} ></input>
                </div>
                <div className="formgroup">
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <button className="btn btn-primary" onClick={op}>Login</button>
            </form>
         </div>
    );
}

export default Login;
