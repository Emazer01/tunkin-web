import { Sidebar } from '../component/Sidebar';
import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const View = () => {
    const navigate = useNavigate()
    const date = Date()
    const [dataDropdown, setDataDropdown] = React.useState({
        jabatan: '',
        korps: '',
        matra: '',
        pangkat: '',
        satker: { a: 'asd' }
    })
    const [dataPers, setDataPers] = React.useState({
        nrp: '', nama: '', gender: '', matra: '', pangkat: '', korps: '', jabatan: '', satker: '', dpp: '',
        kawin: '', agama: '', pers_tl: '           ', mkg: '', tmt_kgb: '', stat_tunjab: '', tmt_jab: '',
        grade: '', persekot: '', gantirugi: '', sewarumah: '', stat_sandi: '', eselon_sandi: '', tmt_sandi: '', rek: ''
    })

    React.useEffect(() => {
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.add('sidebar-active')
        document.getElementById('btn-tambah').classList.remove('sidebar-active')
        document.getElementById('btn-cetak').classList.remove('sidebar-active')
        document.getElementById('btn-index').classList.remove('sidebar-active')

        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const pers_id = urlParams.get('id')
        console.log(pers_id);
        async function ambildatapers(pers_id) {
            await axios.get(`${process.env.REACT_APP_BACKEND_URL}/dataDropdown`)
                .then(async function (response) {
                    if (response.status == 200) {
                        await setDataDropdown(response.data)
                        //satker
                        var stringSatker = ''
                        stringSatker += `<option value=''></option>`
                        Object.entries(response.data.satker).forEach(([key, value]) => {
                            stringSatker += `<option value='${value.satker_id}'>${value.satker_label}</option>`
                        });
                        document.getElementById('satker').innerHTML = stringSatker
                        var stringPangkat = ''
                        Object.entries(response.data.pangkat).forEach(([key, value]) => {
                            stringPangkat += `<option value='${value.pangkat_id}'>${value.pangkat_label}</option>`
                        });
                        document.getElementById('pangkat').innerHTML = stringPangkat
                        var stringJabatan = ''
                        stringJabatan += `<option value=''></option>`
                        Object.entries(response.data.jabatan).forEach(([key, value]) => {
                            stringJabatan += `<option value='${value.jab_id}'>${value.jab_label}</option>`
                        });
                        document.getElementById('jabatan').innerHTML = stringJabatan
                    } else {
                        console.log('Tidak berhasil mengambil postingan')
                        return
                    }
                })
                .catch(async function (error) {
                    console.log(error)
                    return
                });

            sleep(500)

            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/view`, {
                pers_id: pers_id,
            })
                .then(async function (response) {
                    if (response.status == 200) {
                        const detail_pers = response.data['0']
                        setDataPers(detail_pers)
                        console.log(detail_pers)
                        document.title = 'Pusinfolahta TNI | Tunjangan Kinerja | ' + detail_pers.pers_nama
                        document.getElementById('kawin').value = detail_pers.pers_kawin
                        document.getElementById('mkg').value = detail_pers.pers_mkg
                        document.getElementById('tmt_kgb').value = detail_pers.pers_tmt_kgb.slice(0, 10)
                        document.getElementById('stat_tunjab').value = detail_pers.pers_stat_tunjab
                        if (detail_pers.pers_tmt_jab == null) {
                            document.getElementById("tmt_jab").value = detail_pers.pers_tmt_jab;
                        } else {
                            document.getElementById("tmt_jab").value = detail_pers.pers_tmt_jab.slice(0, 10);
                        }
                        document.getElementById('grade').value = detail_pers.pers_grade
                        document.getElementById('dpp').value = detail_pers.pers_dpp
                        document.getElementById('persekot').value = detail_pers.pers_persekot
                        document.getElementById('gantirugi').value = detail_pers.pers_gantirugi
                        document.getElementById('sewarumah').value = detail_pers.pers_sewarumah
                        document.getElementById('stat_sandi').value = detail_pers.pers_stat_sandi
                        document.getElementById('eselon_sandi').value = detail_pers.pers_eselon_sandi
                        document.getElementById('tmt_sandi').value = detail_pers.pers_tmt_sandi
                        document.getElementById('rek').value = detail_pers.pers_rek
                        document.getElementById('satker').value = detail_pers.pers_satker
                        console.log(dataDropdown.pangkat)
                        document.getElementById('pangkat').value = detail_pers.pers_pangkat
                        document.getElementById('jabatan').value = detail_pers.pers_jabatan

                    } else {
                        console.log('Tidak berhasil mengambil data personel')
                        return
                    }
                })
                .catch(async function (error) {
                    console.log(error)
                    return
                });
        }

        ambildatapers(pers_id)

    }, [])

    const changeSatker = () => {
        const satker = document.getElementById('satker').value
        var stringJabatan = ''
        stringJabatan += `<option value=''></option>`
        Object.entries(dataDropdown.jabatan).forEach(([key, value]) => {
            if (value.jab_satker == satker) {
                stringJabatan += `<option value='${value.jab_id}'>${value.jab_label}</option>`
            }

        });
        document.getElementById('jabatan').innerHTML = stringJabatan
    }

    const changeKorps = () => {
        const matra = document.getElementById('matra').value
        const korps = document.getElementById('korps').value
        var stringPangkat = ''
        Object.entries(dataDropdown.pangkat).forEach(([key, value]) => {
            if (korps > 85) {
                if (value.pangkat_korps == korps) {
                    stringPangkat += `<option value='${value.pangkat_id}'>${value.pangkat_label}</option>`
                }
            } else {
                if (value.pangkat_matra == matra && value.pangkat_korps == null) {
                    stringPangkat += `<option value='${value.pangkat_id}'>${value.pangkat_label}</option>`
                }
            }

        });
        document.getElementById('pangkat').innerHTML = stringPangkat
    }

    const resetForm = () => {
        document.getElementById('kawin').value = dataPers.pers_kawin
        document.getElementById('mkg').value = dataPers.pers_mkg
        document.getElementById('tmt_kgb').value = dataPers.pers_tmt_kgb.slice(0, 10)
        document.getElementById('stat_tunjab').value = dataPers.pers_stat_tunjab
        document.getElementById('tmt_jab').value = dataPers.pers_tmt_jab.slice(0, 10)
        document.getElementById('grade').value = dataPers.pers_grade
        document.getElementById('persekot').value = dataPers.pers_persekot
        document.getElementById('gantirugi').value = dataPers.pers_gantirugi
        document.getElementById('sewarumah').value = dataPers.pers_sewarumah
        document.getElementById('stat_sandi').value = dataPers.pers_stat_sandi
        document.getElementById('eselon_sandi').value = dataPers.pers_eselon_sandi
        document.getElementById('tmt_sandi').value = dataPers.pers_tmt_sandi
        document.getElementById('rek').value = dataPers.pers_rek
        document.getElementById('satker').value = dataPers.pers_satker
        document.getElementById('pangkat').value = dataPers.pers_pangkat
        document.getElementById('jabatan').value = dataPers.pers_jabatan
    }

    const handleSubmit = async (event) => {
        document.getElementById('submitData-loading').classList.remove('d-none')
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const id = dataPers.pers_id
        const pangkat = data.get('pangkat')
        var jabatan = data.get('jabatan')
        const satker = data.get('satker')
        const dpp = data.get('dpp')
        const kawin = data.get('kawin')
        const mkg = data.get('mkg')
        const tmt_kgb = data.get('tmt_kgb')
        const stat_tunjab = data.get('stat_tunjab')
        var tmt_jab = data.get('tmt_jab')
        const grade = data.get('grade')
        const persekot = data.get('persekot')
        const gantirugi = data.get('gantirugi')
        const sewarumah = data.get('sewarumah')
        const stat_sandi = data.get('stat_sandi')
        var eselon_sandi = data.get('eselon_sandi')
        var tmt_sandi = data.get('tmt_sandi')
        const rek = data.get('rek')

        if (jabatan == "") {
            jabatan = null
        }
        if (tmt_jab == "") {
            tmt_jab = null
        }
        if (tmt_sandi == "") {
            tmt_sandi = null
        }
        if (eselon_sandi == "") {
            eselon_sandi = null
        }

        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/update`, {
            id, pangkat, jabatan, satker, dpp,
            kawin, mkg, tmt_kgb, stat_tunjab, tmt_jab,
            grade, persekot,
            gantirugi, sewarumah, stat_sandi, eselon_sandi, tmt_sandi, rek
        })
            .then(async function (response) {
                if (response.status == 200) {
                    document.getElementById('submitData-loading').classList.add('d-none')
                    console.log("Logged In")
                    document.getElementById('submitData-success').classList.remove('d-none');
                    await sleep(2000);
                    document.getElementById('submitData-success').classList.add('d-none')
                    //document.getElementById("submitChanges").classList.add('disabled')
                    navigate('../')
                } else {
                    document.getElementById('submitData-loading').classList.add('d-none')
                    document.getElementById('submitData-danger').classList.remove('d-none');
                    await sleep(2000);
                    document.getElementById('submitData-danger').classList.add('d-none')
                    //document.getElementById("submitChanges").classList.add('disabled')

                }
            })
            .catch(async function (error) {
                document.getElementById('submitData-loading').classList.add('d-none')
                document.getElementById('submitData-danger').classList.remove('d-none');
                await sleep(2000);
                document.getElementById('submitData-danger').classList.add('d-none')
                //document.getElementById("submitChanges").classList.add('disabled')
            });

    }

    const handleHapus = async () => {
        const pers_id = dataPers.pers_id
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/hapus`, {
            pers_id: pers_id
        })
            .then(async function (response) {
                if (response.status == 200) {
                    console.log("Data Delete Success")
                    navigate('../')
                } else {
                    console.log("Data Delete Failed")

                }
            })
            .catch(async function (error) {
                document.getElementById('submitData-loading').classList.add('d-none')
                document.getElementById('submitData-danger').classList.remove('d-none');
                await sleep(2000);
                document.getElementById('submitData-danger').classList.add('d-none')
                //document.getElementById("submitChanges").classList.add('disabled')
            });
    }

    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3 border-bottom border-4'>
                    Data Personel
                </div>
                <div className='p-3 p-md-5'>
                    <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                        <h5>Profil Personel</h5>
                        <form onSubmit={handleSubmit} className='font-poppins' id='formTambah' name='formTambah'>
                            <table className='mt-4 w-100'>
                                <tr className='row my-1'>
                                    <th className='col-4'>NRP/NIP</th>
                                    <td className='col-8'>: {dataPers.pers_nrp}</td>
                                </tr>
                                <tr className='row my-1'>
                                    <th className='col-4'>Nama</th>
                                    <td className='col-8'>: {dataPers.pers_nama}</td>
                                </tr>
                                <tr className='row my-1'>
                                    <th className='col-4'>Jenis Kelamin</th>
                                    <td className='col-8'>: {dataPers.pers_gender}</td>
                                </tr>
                                <tr className='row my-1'>
                                    <th className='col-4'>Tanggal Lahir</th>
                                    <td className='col-8'>: {dataPers.pers_tl.slice(8, 10) + ' ' + dataPers.pers_tl.slice(5, 7) + ' ' + dataPers.pers_tl.slice(0, 4)}</td>
                                </tr>
                                <tr className='row my-1'>
                                    <th className='col-4'>Agama</th>
                                    <td className='col-8'>: {dataPers.ag_label}</td>
                                </tr>
                                <tr className='row my-1'>
                                    <th className='col-4'>Matra</th>
                                    <td className='col-8'>: {dataPers.matra_label}</td>
                                </tr>
                                <tr className='row my-1'>
                                    <th className='col-4'>Korps</th>
                                    <td className='col-8'>: {dataPers.korps_label}</td>
                                </tr>
                                <tr>
                                    <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Perubahan Data Diri</strong></p>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Pangkat/Golongan</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='pangkat' name='pangkat' class="form-select border border-3" aria-label="Default select example">

                                        </select>
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Satker/Subsatker</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='satker' name='satker' class="form-select border border-3" aria-label="Default select example">

                                        </select>
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Kelompok DPP</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='dpp' name='dpp' class="form-select border border-3" aria-label="Default select example">
                                            <option value="1">TNI</option>
                                            <option value="2">PNS</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Status Kawin</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='kawin' name='kawin' class="form-select border border-3">
                                            <option value=""></option>
                                            <option value="1">TK/0</option>
                                            <option value="2">TK/1</option>
                                            <option value="3">TK/2</option>
                                            <option value="4">TK/3</option>
                                            <option value="5">K/0</option>
                                            <option value="6">K/1</option>
                                            <option value="7">K/2</option>
                                            <option value="8">K/3</option>
                                            <option value="9">K/1/0</option>
                                            <option value="10">K/1/1</option>
                                            <option value="11">K/1/2</option>
                                            <option value="12">K/1/3</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Perubahan Status Gaji</strong></p>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Masa Kerja Gaji (MKG)</td>
                                    <td className='col-12 col-md-8'>
                                        <input type="number" step='1' class="form-control border border-3" id="mkg" name='mkg' placeholder="" />
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>TMT Kenaikan Gaji Berkala (KGB)</td>
                                    <td className='col-12 col-md-8'>
                                        <input type="date" class="form-control border border-3" id="tmt_kgb" name='tmt_kgb' placeholder="" />
                                    </td>
                                </tr>
                                <tr>
                                    <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Perubahan Status Jabatan</strong></p>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Status Tunjangan Jabatan</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='stat_tunjab' name='stat_tunjab' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">Berhak</option>
                                            <option value="0">Tidak Berhak</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Jabatan</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='jabatan' name='jabatan' class="form-select border border-3" aria-label="Default select example">

                                        </select>
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>TMT Jabatan</td>
                                    <td className='col-12 col-md-8'>
                                        <input type="date" class="form-control border border-3" id="tmt_jab" name='tmt_jab' placeholder="" />
                                    </td>
                                </tr>
                                <tr>
                                    <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Perubahan Grade Kinerja</strong></p>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Grade Jabatan Kinerja</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='grade' name='grade' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Potongan</strong></p>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Persekot</td>
                                    <td className='col-12 col-md-8'>
                                        <input type="number" class="form-control border border-3" id="persekot" name='persekot' placeholder="" />
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Ganti Rugi</td>
                                    <td className='col-12 col-md-8'>
                                        <input type="number" class="form-control border border-3" id="gantirugi" name='gantirugi' placeholder="" />
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Sewa Rumah</td>
                                    <td className='col-12 col-md-8'>
                                        <input type="number" class="form-control border border-3" id="sewarumah" name='sewarumah' placeholder="" />
                                    </td>
                                </tr>
                                <tr>
                                    <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Kompensasi Sandi (jika ada)</strong></p>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Status Kompensasi Sandi</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='stat_sandi' name='stat_sandi' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">Berhak</option>
                                            <option value="0">Tidak Berhak</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>Eselon Kompensasi Sandi</td>
                                    <td className='col-12 col-md-8'>
                                        <select id='eselon_sandi' name='eselon_sandi' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">Pengamanan Persandian Tingkat I</option>
                                            <option value="2">Pengamanan Persandian Tingkat II</option>
                                            <option value="3">Pengamanan Persandian Tingkat III</option>
                                            <option value="4">Pengamanan Persandian Tingkat IV</option>
                                            <option value="5">Pengamanan Persandian Tingkat V</option>
                                            <option value="6">Pengamanan Persandian Tingkat VI</option>
                                            <option value="7">Pengamanan Persandian Tingkat VII</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className='row my-1'>
                                    <td className='col-12 col-md-4'>TMT Kompensasi Sandi</td>
                                    <td className='col-12 col-md-8'>
                                        <input type="date" class="form-control border border-3" id="tmt_sandi" name='tmt_sandi' placeholder="" />
                                    </td>
                                </tr>
                                <tr className='row my-1 mt-4'>
                                    <th className='col-12 col-md-4'>Jenis Rekening</th>
                                    <td className='col-12 col-md-8'>
                                        <select id='rek' name='rek' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">BNI</option>
                                            <option value="2">BRI</option>
                                        </select>
                                    </td>
                                </tr>
                                <div className='row'>
                                    <div className='d-none d-md-block col-md-4'></div>
                                    <div className='d-none d-md-block col-md-4'></div>
                                    <div class="col-12 col-md-4 py-1">
                                        <p className='p-1 pt-3 pb-0 text-end text-decoration-underline'><strong>Tanggal Proses</strong></p>
                                        <p className='p-1 pb-0 text-end'><strong>{date.slice(0, 15)}</strong></p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div class="alert alert-success d-flex align-items-center d-none" role="alert" id='submitData-success'>
                                        <i class="bi bi-check-circle-fill flex-shrink-0 me-2" role="img" aria-label="Danger:"></i>
                                        <div>
                                            <strong>Berhasil Submit</strong>&nbsp; Data personel berhasil direkam
                                        </div>
                                    </div>
                                    <div class="alert alert-danger d-flex align-items-center d-none" role="alert" id='submitData-danger'>
                                        <i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" role="img" aria-label="Danger:"></i>
                                        <div>
                                            <strong>Gagal Submit!</strong>&nbsp; Periksa kembali data yang dimasukkan
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 p-3 row'>
                                        <div className='text-end d-none'>
                                            <div class="spinner-border text-dark" role="status" id="submitData-loading">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-7 row p-3'>
                                        <div className="col-12 col-md-4 p-2">
                                            <button type="button" class="w-100 btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Hapus Personel
                                            </button>
                                        </div>
                                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" role="dialog">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="staticBackdropLabel">
                                                            Hapus Personel
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">Yakin menghapus personel ini?</div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                                            Batal
                                                        </button>
                                                        <button type="button" onClick={handleHapus} class="btn btn-danger" data-bs-dismiss="modal">
                                                            Hapus
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4 p-2'>
                                            <button type="button" onClick={() => { resetForm() }} class="w-100 btn btn-warning text-white">Reset Form</button>
                                        </div>
                                        <div className='col-12 col-md-4 p-2'>
                                            <button type="submit" class="w-100 btn btn-success">Rekam</button>
                                        </div>
                                    </div>
                                </div>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}