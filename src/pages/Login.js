import { Sidebar } from '../component/Sidebar';
import * as React from 'react';
import axios from 'axios';
import logo from '../images/menulogo.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        //document.getElementById("login-loading").classList.remove("d-none")
        const data = new FormData(event.currentTarget);
        const username = data.get('username');
        const password = data.get('password');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            username: username,
            password: password,
        })
            .then(function (response) {
                //document.getElementById("login-loading").classList.add("d-none")
                if (response.data == 'Password Salah' || response.data == 'Email Tidak Valid' || response.data == null) {
                    //document.getElementById("login-fail").classList.remove("opacity-0")
                } else {
                    localStorage.setItem('username', response.data.username)
                    localStorage.setItem('id', response.data.id)
                    localStorage.setItem('token', response.data.token)
                    navigate('/')
                }
            })
            .catch(function (error) {
                //document.getElementById("login-fail").classList.remove("opacity-0")
                //document.getElementById("login-loading").classList.add("d-none")
                console.log(error);
            });
    }

    return (
        <div className="bg-img text-light text-center">
            <img className='p-5' src={logo} />
            <div className='row m-2'>
                <div className='col-4 d-none d-md-flex'></div>
                <div className='col-12 col-md-4 bg-dark rounded p-4'>
                    <form onSubmit={handleSubmit}>
                        <h3 className='p-3'>Login</h3>
                        <div class="form-floating mb-3 bg-dark">
                            <input type="text" class="form-control bg-secondary text-light" id="floatingInput" name='username' placeholder="username" />
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control bg-secondary text-light" id="floatingPassword" name='password' placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button type="submit" class="mt-3 p-2 px-5 btn btn-danger">Masuk</button>
                    </form>
                </div>
                <div className='col-4 d-none d-md-flex'></div>
            </div>
        </div>
    )
}