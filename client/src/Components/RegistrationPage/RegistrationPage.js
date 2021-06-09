import React from 'react';
import './RegistrationPage.scss';
import { Link } from 'react-router-dom';


const RegistrationPage = () => {
    return (
        <div>
            {/*Probably the location of a header or maybe a nav componenent */}
            <h1 className="">Register</h1>
            <form
                className=""
            >
                <label 
                    className="" 
                    htmlFor="username">
                        UserName: 
                </label>
                <input 
                    type="text" 
                    className="" 
                    name="username"
                    placeholder="Enter username here"
                />
                <label
                    className=""
                    htmlFor="password"
                >
                    Password:
                </label>
                <input 
                    type="text"
                    className=""
                    name="password"
                    placeholder="Enter Password"
                />
                                <label
                    className=""
                    htmlFor="confirmPassword"
                >
                    Confirm Password:
                </label>
                <input 
                    type="text"
                    className=""
                    name="confirmPassword"
                    placeholder="Confirm Password"
                />
                <label
                    type="text"
                    className=""
                    htmlFor="goals"
                >
                    Enter Goals:
                </label>
                <input 
                    type="text"
                    className=""
                    name="goals"
                    placeholder="Enter goals if applicable."
                />
                <button
                    className=""
                    type=""> 
                    Register
                </button>
            </form>
            <Link 
                className=""
                to="/login"
            > 
                Already Registered? Click here to login
            </Link>
        </div>
    );
};

export default RegistrationPage;