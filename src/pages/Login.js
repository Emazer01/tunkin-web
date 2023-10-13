import { Sidebar } from '../component/Sidebar';
import * as React from 'react';
import axios from 'axios';
import logo from '../images/menulogo.png';

export const Login = () => {
    React.useEffect(() => {

    }, [])

    return (
        <div className="bg-img text-light text-center">
            <img className='p-5' src={logo} />
            <div className='row m-2'>
                <div className='col-4 d-none d-md-flex'></div>
                <div className='col-12 col-md-4 bg-dark rounded p-4'>
                    <form>
                        <h3 className='p-3'>Login</h3>
                        <div class="form-floating mb-3 bg-dark">
                            <input type="text" class="form-control bg-secondary" id="floatingInput" name='username' placeholder="username" />
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control bg-secondary" id="floatingPassword" name='password' placeholder="Password" />
                            <label className='bg-transparent' for="floatingPassword">Password</label>
                        </div>
                        <button type="submit" class="mt-3 p-2 px-5 btn btn-danger">Masuk</button>

                    </form>
                </div>
                <div className='col-4 d-none d-md-flex'></div>
            </div>
        </div>
    )
}