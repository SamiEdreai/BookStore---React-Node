import React, { useState } from "react";
import './loginPage.style.css';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from "validator/lib/isStrongPassword";

import Loader from '../../componets/shared/loader/Loader.component';


const LoginPage = () => {
    const [isEmailValide, setIsEmailValide] = useState(true);
    const [emailErrorMassege, setemailErrorMassege] = useState('')
    const [isPasswordValide, setIspasswordValide] = useState(true)
    const [passwordErrorMassege, setPasswordErrorMassege] = useState('')

    const handleEmail = (event) => {
        const emailInput = event.target.value.toLowerCase().trim();

        if (emailInput === '') {
            setemailErrorMassege('Please Enter an email adress');
            setIsEmailValide(false);
            return;
        }

        if (!isEmail(emailInput)) {
            setemailErrorMassege('Please Enter an valid adress');
            setIsEmailValide(false);
            return;
        }

        setIsEmailValide(true);



    };

    const handlePassword = (event) => {
        const passwordInput = event.target.value.toLowerCase().trim();

        if (passwordInput === '') {
            setPasswordErrorMassege('Please Enter an password');
            setIspasswordValide(false);
            return;
        }

        if (!isStrongPassword(passwordInput)) {
            setPasswordErrorMassege('Please Enter an valid password');
            setIspasswordValide(false);
            return;
        }

        setIspasswordValide(true);



    };

    return (
        <main className="login-page">
            <card className="login-page-card">
                <h1> Login Page</h1>

                <form action="#" className="login-form">

                    <div className="form-group">

                        <div className="form-input-container">
                            <label className="form-label" htmlFor="emailInput">Email:</label>

                            <input onInput={handleEmail} type="text" id="emailInput" required />

                            {!isEmailValide && <div className="email-valid">{emailErrorMassege}</div>}
                        </div>


                        <div className="form-input-container">
                            <label className="form-label" htmlFor="Password">Password:</label>
                            <input onInput={handlePassword} type="password" id="password" required />
                            {!isPasswordValide && <div className="email-valid">{passwordErrorMassege}</div>}
                        </div>

                    </div>
                    <a href="#" className="singup-login">Dont have account? singup</a>

                    <button className="login-btn" type="submit">Login</button>
                </form>
            </card>
        </main>
    )
}

export default LoginPage;