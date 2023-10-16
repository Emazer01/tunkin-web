import { Sidebar } from '../component/Sidebar';
import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Perubahan = () => {
    const navigate = useNavigate()
    const [recent, setRecent] = React.useState(
        [{
            nrp: 123456,
            nama: 'Angelina Deva Adella Putri',
            pangkat: 'Sersan Mayor Satu Kadet',
            satker: 'Resimen Korps Kadet Mahasiswa',
            jabatan: 'Komandan Batalyon Korps Tk 2'
        }]
    )
    React.useEffect(() => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        function verifikasi(id, token) {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify`, {
                token: token
            })
                .then(function (response) {
                    console.log(response)
                    if (response.status == 200 && id == response.data[0].user_id) {
                        return
                    } else {
                        navigate('/login')
                    }
                })
                .catch(function (error) {
                    navigate('/login')
                });
        }
        // panggil fungsi verifikasi token di bawah sini
        verifikasi(id, token)
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.add('sidebar-active')
        document.getElementById('btn-tambah').classList.remove('sidebar-active')
        document.getElementById('btn-cetak').classList.remove('sidebar-active')
        document.getElementById('btn-index').classList.remove('sidebar-active')

        function dataPers() {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/dataPers`)
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response.data)
                        setRecent(response.data)
                        var stringRecent = ""
                        for (let index = 0; index < response.data.length; index++) {
                            var jab_label = response.data[index].jab_label
                            if (jab_label == null) {
                                jab_label = " "
                            }
                            stringRecent +=
                                `<a href='/view/?id=${response.data[index].pers_id}' class='row btn btn-light d-flex p-0 rounded-0 text-start border-2 border-bottom'>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-1 m-0'><small>${response.data[index].pers_nrp}</small></p>
                                    <p class='col-6 col-md-3 border-2 border-end py-1 m-0'><small>${response.data[index].pers_nama}</small></p>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-1 m-0'><small>${response.data[index].pangkat_label} ${response.data[index].korps_kode}</small></p>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-1 m-0'><small>${response.data[index].satker_label}</small></p>
                                    <p class='col-6 col-md-3 border-2 border-end py-1 m-0'><small>${jab_label}</small></p>
                                </a>`
                        }
                        document.getElementById('recent').innerHTML = stringRecent
                    } else {
                        console.log('Tidak berhasil mengambil postingan')
                        return
                    }
                })
                .catch(async function (error) {
                    console.log(error)
                    return
                });

        }

        dataPers()

    }, [])

    const changeFind = () => {
        var find = document.getElementById('find').value.toLowerCase()
        console.log(find)
        var stringRecent = ""
        for (let index = 0; index < recent.length; index++) {
            if (recent[index].pers_nama.toLowerCase().includes(find)) {
                var jab_label = recent[index].jab_label
                if (jab_label == null) {
                    jab_label = " "
                }
                stringRecent +=
                    `<a href='/view/?id=${recent[index].pers_id}' class='row btn btn-light d-flex p-0 rounded-0 text-start border-2 border-bottom'>
                    <p class='col-2 d-none d-md-block border-2 border-end py-1 m-0'><small>${recent[index].pers_nrp}</small></p>
                    <p class='col-6 col-md-3 border-2 border-end py-1 m-0'><small>${recent[index].pers_nama}</small></p>
                    <p class='col-2 d-none d-md-block border-2 border-end py-1 m-0'><small>${recent[index].pangkat_label} ${recent[index].korps_kode}</small></p>
                    <p class='col-2 d-none d-md-block border-2 border-end py-1 m-0'><small>${recent[index].satker_label}</small></p>
                    <p class='col-6 col-md-3 border-2 border-end py-1 m-0'><small>${jab_label}</small></p>
                </a>`
            }

        }
        document.getElementById('recent').innerHTML = stringRecent

    }

    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3 border-bottom border-4'>
                    Perubahan
                </div>
                <div className='p-3 p-md-5'>
                    <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                        <div className='row'>
                            <div className='col-12 col-md-3'>
                                <a href='/log' type="button" class="btn btn-secondary w-100 mb-2">Riwayat Perubahan</a>
                            </div>
                            <div className='col-12 col-md-9'>
                                <div class="input-group">
                                    <span class="input-group-text">Cari Nama</span>
                                    <input type="text" onChange={() => { changeFind() }} id='find' class="form-control bg-putihdikit" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                </div>
                            </div>
                        </div>
                        <div className='p-1 pt-3'>
                            <div className='row border-transparant border-2 border-bottom'>
                                <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'><strong>NRP</strong></p>
                                <p className='col-6 col-md-3 border-2 border-end py-1 m-0'><strong>Nama</strong></p>
                                <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'><strong>Pangkat</strong></p>
                                <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'><strong>Satker</strong></p>
                                <p className='col-6 col-md-3 border-2 border-end py-1 m-0'><strong>Jabatan</strong></p>
                            </div>
                            <div id='recent'>
                                <a className='row btn btn-light d-flex p-0 rounded-0 text-start border-2 border-bottom'>
                                    <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'>NRP</p>
                                    <p className='col-6 col-md-3 border-2 border-end py-1 m-0'>Nama</p>
                                    <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'>Pangkat</p>
                                    <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'>Satker</p>
                                    <p className='col-6 col-md-3 border-2 border-end py-1 m-0'>Jabatan</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}