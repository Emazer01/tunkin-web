import { Sidebar } from '../component/Sidebar';
import * as React from 'react';
import axios from 'axios';
import logo from '../images/menulogo.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        document.getElementById('login-alert').classList.remove('opacity-0');
        event.preventDefault();
        //document.getElementById("login-loading").classList.remove("d-none")
        const data = new FormData(event.currentTarget);
        const username = data.get('username');
        const password = data.get('password');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            username: username,
            password: password,
        })
            .then(async function (response) {
                document.getElementById("login-loading").classList.add("d-none")
                if (response.data == 'Password Salah' || response.data == 'Email Tidak Valid' || response.data == null) {
                    document.getElementById("login-danger").classList.remove("d-none")
                    await sleep(1500)
                    document.getElementById("login-danger").classList.add("d-none")
                    document.getElementById("login-loading").classList.remove("d-none")
                    document.getElementById('login-alert').classList.add('opacity-0');
                } else {
                    document.getElementById('login-success').classList.remove("d-none")
                    await sleep(1000)
                    localStorage.setItem('username', response.data.username)
                    localStorage.setItem('id', response.data.id)
                    localStorage.setItem('token', response.data.token)
                    navigate('/')
                }
            })
            .catch(async function (error) {
                document.getElementById("login-loading").classList.add("d-none")
                document.getElementById("login-danger").classList.remove("d-none")
                await sleep(1500)
                document.getElementById("login-danger").classList.add("d-none")
                document.getElementById("login-loading").classList.remove("d-none")
                document.getElementById('login-alert').classList.add('opacity-0');
                console.log(error);
            });
    }

    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
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
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control bg-secondary text-light" id="floatingPassword" name='password' placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className='opacity-0' id='login-alert'>
                            <div class="spinner-border" role="status" id="login-loading">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="alert alert-success d-flex align-items-center p-1 d-none" role="alert" id='login-success'>
                                <i class="bi bi-check-circle-fill flex-shrink-0 me-2" role="img" aria-label="Danger:"></i>
                                <small>
                                    <strong>Berhasil Login</strong>&nbsp; Mengalihkan . . .
                                </small >
                            </div>
                            <div class="alert alert-danger d-flex align-items-center p-1 d-none" role="alert" id='login-danger'>
                                <i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" role="img" aria-label="Danger:"></i>
                                <div>
                                    <strong>Gagal Login!</strong>&nbsp; Periksa kembali data yang dimasukkan
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="mt-1 p-2 px-5 btn btn-danger">Masuk</button>
                    </form>
                </div>
                <div className='col-4 d-none d-md-flex'></div>
            </div>
            <p className='position-absolute bottom-0 start-50 translate-middle-x'>Aplikasi Tunjangan Kinerja Pusinfolahta TNI</p>
        </div>
    )
}