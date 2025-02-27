"use client";

import { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";

export default function LogIn() {
    const [username, setUsername] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)

    const onClickLogin = () => {
        dispatch(logIn(username))
    };

    const onClickToggle = () => {
        dispatch(toggleModerator())
    };

    const onClickLogOut = () => {
        dispatch(logOut())
    };

    return (
        <div>
            <input  type="text" onChange={(e) => setUsername(e.target.value)} />
            <br/>
            <button onClick={onClickLogin}>Log In</button>
            <br/>
            <button onClick={onClickLogOut}>Log Out</button>
            <br/>

            {isAuth && (<button onClick={onClickToggle}>Toggle Moderator Status</button>)}
            
        </div>
    );

}