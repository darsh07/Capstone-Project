import React from "react";
//import { Button } from "@material-ui/core";
import "./login.css";
import {auth , provider} from "./firebase";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login(){
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src=""
                    alt=""
                />
                <div className="login__text">
                    <h1> Welcome to our messaging App</h1>
                </div>
                <div className="signup_btn">
                <button  type="submit" onClick={signIn}>
                    Sign In using Google
                </button>
                </div>
                
            </div>
        </div>
    )
}

export default Login