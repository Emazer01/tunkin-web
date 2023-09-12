import { Sidebar } from '../component/Sidebar';
import * as React from 'react';

export const Perubahan = () => {
    React.useEffect(() => {
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.add('sidebar-active')
        document.getElementById('btn-tambah').classList.remove('sidebar-active')
    }, [])

    const changeFind = () => {
        var find = document.getElementById('find').value
        console.log(find)
    }

    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3'>
                    Perubahan
                </div>
                <div className='p-2'>
                    <div class="input-group">
                        <span class="input-group-text">Cari Nama</span>
                        <input type="text" onChange={() => { changeFind() }} id='find' class="form-control bg-putihdikit" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>
                    </div>
            </div>
        </div>
    )
}