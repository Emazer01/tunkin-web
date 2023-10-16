import logo from '../images/menulogo.png';
import * as React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, Title, ArcElement, Tooltip, Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { Sidebar } from '../component/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend);
    

export const Main = () => {
    const navigate = useNavigate()
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];
    const data1 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 40, 20, 40, 23, 12, 50, 23, 12,],
                backgroundColor: '#BB3214',
            }
        ],
    };
    var data = {
        labels: ["Red", "Blue"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 40],
                backgroundColor: [
                    "#BB321499",
                    "#BB3214"
                ],
                borderColor: [
                    "#BB321499",
                    "#BB3214"
                ],
                borderWidth: 0
            }
        ],
    }

    React.useEffect(() => {
        
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        function verifikasi(id,token) {
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
        verifikasi(id,token)
        document.getElementById('btn-beranda').classList.add('sidebar-active')
        document.getElementById('btn-perubahan').classList.remove('sidebar-active')
        document.getElementById('btn-tambah').classList.remove('sidebar-active')
        document.getElementById('btn-cetak').classList.remove('sidebar-active')
        document.getElementById('btn-index').classList.remove('sidebar-active')

        function dataLog() {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/dataLog`)
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response.data)
                        var stringRecent = ""
                        for (let index = 0; index < response.data.length; index++) {
                            var jam = Number(response.data[index].log_stamp.slice(11, 13)) + 7
                            if (jam >= 24) {
                                jam = jam - 24
                            }
                            var jab_label = response.data[index].jab_label
                            if (jab_label == null) {
                                jab_label = " "
                            }
                            const stringWaktu = response.data[index].tipe_label + ' pada ' + response.data[index].log_stamp.slice(8, 10) + ' ' + response.data[index].log_stamp.slice(5, 7) + ' ' + response.data[index].log_stamp.slice(0, 4) + ' ' + jam + response.data[index].log_stamp.slice(13, 20)
                            stringRecent +=
                                `<div class='row border-2 border-bottom'>
                                    <p class='col-6 col-md-3 border-2 border-end py-2 m-0'>${response.data[index].pers_nama}</p>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${response.data[index].pangkat_label} ${response.data[index].korps_kode}</p>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${response.data[index].satker_label}</p>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${jab_label}</p>
                                    <p class='col-6 col-md-3 border-2 border-end py-2 m-0'>${stringWaktu}</p>
                                </div>`
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

            axios.get(`${process.env.REACT_APP_BACKEND_URL}/main`)
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response.data[0][0].count)
                        document.getElementById('total').innerHTML = response.data[0][0].count
                        document.getElementById('ubah').innerHTML = response.data[1][0].count
                        document.getElementById('tambah').innerHTML = response.data[2][0].count
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

        dataLog()


    }, [])

    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3 border-bottom border-4'>
                    Beranda
                </div>
                <div className='p-3 p-md-5'>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                                <h5>Total Record</h5>
                                <p>{Date().slice(0, 25)}</p>
                                <h1 id='total'></h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                                <h5>Jumlah Perubahan</h5>
                                <p>{Date().slice(4, 7)} {Date().slice(11, 15)}</p>
                                <h1 id='ubah'></h1>
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                                <h5>Jumlah Penambahan</h5>
                                <p>{Date().slice(4, 7)} {Date().slice(11, 15)}</p>
                                <h1 id='tambah'></h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-putihdikit rounded-2 p-3 my-3 border border-3'>
                        <div className='row'>
                            <h5 className='col-6'>Riwayat Perubahan</h5>
                            <a href='/log' className='col-6 text-end text-dark'>Lihat Semua</a>
                        </div>
                        <div className='px-2'>
                            <div className='row mt-3 border-2 border-bottom'>
                                <p className='col-6 col-md-3 border-2 border-end py-1 m-0'><strong>Nama</strong></p>
                                <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'><strong>Pangkat</strong></p>
                                <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'><strong>Satker</strong></p>
                                <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'><strong>Jabatan</strong></p>
                                <p className='col-6 col-md-3 border-2 border-end py-1 m-0'><strong>Keterangan</strong></p>
                            </div>
                            <div id='recent'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}