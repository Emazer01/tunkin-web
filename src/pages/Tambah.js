import { Sidebar } from '../component/Sidebar';
import * as React from 'react';

export const Tambah = () => {
    React.useEffect(() => {
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.remove('sidebar-active')
        document.getElementById('btn-tambah').classList.add('sidebar-active')
    }, [])

    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3'>
                    Tambah
                </div>
                
            </div>
        </div>
    )
}