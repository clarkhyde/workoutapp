
import React from 'react';

const LoginPage = () => {
    return (
        <div className = "">
            <h1 className = "">LOGIN</h1>
            <form>
                <label 
                    className= "" 
                    htmlFor = "loginId"
                >
                    Login ID:
                </label>
                <input 
                    className= "" 
                    type = "text" 
                    name = "loginId"
                />
                <label 
                    className= "" 
                    htmlFor ="password"
                >
                    Enter Password:
                </label>
                <input 
                    className= "" 
                    type = "text" 
                    name = "password"
                />
                <button 
                    className = ""
                    type = ""
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;