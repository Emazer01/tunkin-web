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

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend);

export const Main = () => {
    const [recent, setRecent] = React.useState(
        [{
            nama: 'Angelina Deva Adella Putri',
            pangkat: 'Sersan Mayor Satu Kadet',
            satker: 'Resimen Korps Kadet Mahasiswa',
            jabatan: 'Komandan Batalyon Korps Tk 2'
        },
        {
            nama: 'Ardiman Hasudungan Simanjuntak',
            pangkat: 'Sersan Mayor Satu Kadet',
            satker: 'Resimen Korps Kadet Mahasiswa',
            jabatan: 'Wakil Komandan Batalyon Korps Tk 2'
        },
        {
            nama: 'Ayumas Qonita Sunni',
            pangkat: 'Sersan Mayor Satu Kadet',
            satker: 'Resimen Korps Kadet Mahasiswa',
            jabatan: 'Komandan Kompi Korps A/Tk 2'
        },
        {
            nama: 'Abditya Arghanie',
            pangkat: 'Sersan Mayor Satu Kadet',
            satker: 'Resimen Korps Kadet Mahasiswa',
            jabatan: 'Komandan Kompi Korps B/Tk 2'
        },
        {
            nama: 'Gary Ferdinand Wahyudi',
            pangkat: 'Sersan Mayor Satu Kadet',
            satker: 'Resimen Korps Kadet Mahasiswa',
            jabatan: 'Komandan Kompi Korps C/Tk 2'
        }]
    )
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];
    const data1 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 40, 20, 40, 23, 12, 50, 23, 12,],
                backgroundColor: '#C27914',
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
                    "#C2791499",
                    "#C27914"
                ],
                borderColor: [
                    "#C2791499",
                    "#C27914"
                ],
                borderWidth: 0
            }
        ],
    }

    React.useEffect(() => {
        var stringRecent = ""
        for (let index = 0; index < recent.length; index++) {
            stringRecent +=
                `<div class='row border-2 border-bottom'>
                    <p class='col-6 col-md-4 border-2 border-end py-2 m-0'>${recent[index].nama}</p>
                    <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${recent[index].pangkat}</p>
                    <p class='col-3 d-none d-md-block border-2 border-end py-2 m-0'>${recent[index].satker}</p>
                    <p class='col-6 col-md-3 border-2 border-end py-2 m-0'>${recent[index].jabatan}</p>
                </div>`
        }
        document.getElementById('recent').innerHTML = stringRecent
    }, [])

    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3 border-bottom border-4'>
                    Beranda
                </div>
                <div className='p-3'>
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
                </div>
                <div className='p-3'>
                    <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                        <h5>Riwayat Masukan Terbaru</h5>
                        <div className='px-2'>
                            <div className='row mt-3 border-2 border-bottom'>
                                <p className='col-6 col-md-4 border-2 border-end py-1 m-0'><strong>Nama</strong></p>
                                <p className='col-2 d-none d-md-block border-2 border-end py-1 m-0'><strong>Pangkat</strong></p>
                                <p className='col-3 d-none d-md-block border-2 border-end py-1 m-0'><strong>Satker</strong></p>
                                <p className='col-6 col-md-3 border-2 border-end py-1 m-0'><strong>Jabatan</strong></p>
                            </div>
                            <div id='recent'>
                                <div className='row border-2 border-bottom'>
                                    <p className='col-4 border-2 border-end py-2 m-0'>Ayumas Qonita Sunni</p>
                                    <p className='col-2 border-2 border-end py-2 m-0'>Sersan Mayor Satu Kadet</p>
                                    <p className='col-3 border-2 border-end py-2 m-0'>Resimen Korps Kadet Mahasiswa</p>
                                    <p className='col-3 border-2 border-end py-2 m-0'>Komandan Kompi A Yon 2    </p>
                                </div>
                                <div className='row'>
                                    <p className='col-4 border-2 border-end py-2 m-0'>Gary Ferdinand Wahyudi</p>
                                    <p className='col-2 border-2 border-end py-2 m-0'>Sersan Mayor Satu Kadet</p>
                                    <p className='col-3 border-2 border-end py-2 m-0'>Resimen Korps Kadet Mahasiswa</p>
                                    <p className='col-3 border-2 border-end py-2 m-0'>Komandan Kompi C Yon 2    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}