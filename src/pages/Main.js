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

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend);

export const Main = () => {
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
        document.getElementById('btn-beranda').classList.add('sidebar-active')
        document.getElementById('btn-perubahan').classList.remove('sidebar-active')
        document.getElementById('btn-tambah').classList.remove('sidebar-active')
        function dataLog() {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/dataLog`)
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response.data)
                        var stringRecent = ""
                        for (let index = 0; index < response.data.length; index++) {
                            var jam = Number(response.data[index].log_stamp.slice(11,13)) + 7
                            if (jam>=24) {
                                jam=jam-24
                            }
                            const stringWaktu = response.data[index].tipe_label + ' pada ' + response.data[index].log_stamp.slice(8,10) + ' ' + response.data[index].log_stamp.slice(5,7) + ' ' + response.data[index].log_stamp.slice(0,4) + ' ' + jam + response.data[index].log_stamp.slice(13,20)
                            stringRecent +=
                                `<div class='row border-2 border-bottom'>
                                    <p class='col-6 col-md-3 border-2 border-end py-2 m-0'>${response.data[index].pers_nama}</p>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${response.data[index].pangkat_label} ${response.data[index].korps_kode}</p>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${response.data[index].satker_label}</p>
                                    <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${response.data[index].jab_label}</p>
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
                        <div className='col-12 col-md-6'>
                            <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                                <h5>Kumulatif Tunjangan Kinerja</h5>
                                <Bar data={data1} />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                                <h5>DSPP Pusinfolahta TNI</h5>
                                <Doughnut data={data} />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                                <h5>DSPP Pusinfolahta TNI</h5>
                                <Doughnut data={data} />
                            </div>
                        </div>
                    </div>
                    <div className='bg-putihdikit rounded-2 p-3 my-3 border border-3'>
                        <h5>Riwayat Perubahan</h5>
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