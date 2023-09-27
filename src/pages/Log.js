import { Sidebar } from '../component/Sidebar';
import * as React from 'react';
import axios from 'axios';

export const Log = () => {
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
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.add('sidebar-active')
        document.getElementById('btn-tambah').classList.remove('sidebar-active')
        document.getElementById('btn-cetak').classList.remove('sidebar-active')

        function dataPers() {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/dataLogAll`)
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response.data)
                        setRecent(response.data)
                        var stringRecent = ""
                        for (let index = 0; index < response.data.length; index++) {
                            var jam = Number(response.data[index].log_stamp.slice(11, 13)) + 7
                            if (jam >= 24) {
                                jam = jam - 24
                            }
                            const stringWaktu = response.data[index].tipe_label + ' pada ' + response.data[index].log_stamp.slice(8, 10) + ' ' + response.data[index].log_stamp.slice(5, 7) + ' ' + response.data[index].log_stamp.slice(0, 4) + ' ' + jam + response.data[index].log_stamp.slice(13, 20)
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

        dataPers()

    }, [])

    const changeFind = () => {
        var find = document.getElementById('find').value
        console.log(find)
        var stringRecent = ""
        for (let index = 0; index < recent.length; index++) {
            if (recent[index].pers_nama.toLowerCase().includes(find)) {
                var jam = Number(recent[index].log_stamp.slice(11, 13)) + 7
                if (jam >= 24) {
                    jam = jam - 24
                }
                const stringWaktu = recent[index].tipe_label + ' pada ' + recent[index].log_stamp.slice(8, 10) + ' ' + recent[index].log_stamp.slice(5, 7) + ' ' + recent[index].log_stamp.slice(0, 4) + ' ' + jam + recent[index].log_stamp.slice(13, 20)
                stringRecent +=
                    `<div class='row border-2 border-bottom'>
                        <p class='col-6 col-md-3 border-2 border-end py-2 m-0'>${recent[index].pers_nama}</p>
                        <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${recent[index].pangkat_label} ${recent[index].korps_kode}</p>
                        <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${recent[index].satker_label}</p>
                        <p class='col-2 d-none d-md-block border-2 border-end py-2 m-0'>${recent[index].jab_label}</p>
                        <p class='col-6 col-md-3 border-2 border-end py-2 m-0'>${stringWaktu}</p>
                    </div>`
            }

        }
        document.getElementById('recent').innerHTML = stringRecent

    }

    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3 border-bottom border-4'>
                    Riwayat Perubahan
                </div>
                <div className='p-3 p-md-5'>
                    <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                        <div class="input-group">
                            <span class="input-group-text">Cari Nama</span>
                            <input type="text" onChange={() => { changeFind() }} id='find' class="form-control bg-putihdikit" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
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