import { Sidebar } from '../component/Sidebar';
import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Tambah = () => {
    const navigate = useNavigate()
    const date = Date()
    const [dataDropdown, setDataDropdown] = React.useState({
        jabatan: '',
        korps: '',
        matra: '',
        pangkat: '',
        satker: { a: 'asd' }
    })


    React.useEffect(() => {
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.remove('sidebar-active')
        document.getElementById('btn-tambah').classList.add('sidebar-active')
        document.getElementById('btn-cetak').classList.remove('sidebar-active')
        document.getElementById('btn-index').classList.remove('sidebar-active')

        function dataDropdown() {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/dataDropdown`)
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response.data.jabatan)
                        setDataDropdown(response.data)
                        //satker
                        var stringSatker = ''
                        stringSatker += `<option value=''></option>`
                        Object.entries(response.data.satker).forEach(([key, value]) => {
                            stringSatker += `<option value='${value.satker_id}'>${value.satker_label}</option>`
                        });
                        document.getElementById('satker').innerHTML = stringSatker

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

        dataDropdown()



    }, [])


    const changeMatra = () => {
        const matra = document.getElementById('matra').value
        var stringKorps = ''
        stringKorps += `<option value=''></option>`
        Object.entries(dataDropdown.korps).forEach(([key, value]) => {
            if (value.korps_matra == matra) {
                stringKorps += `<option value='${value.korps_id}'>${value.korps_label}</option>`
            }

        });
        document.getElementById('korps').innerHTML = stringKorps
    }

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

    const handleSubmit = async (event) => {
        document.getElementById('submitData-loading').classList.remove('d-none')
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const nrp = data.get('nrp')
        const nama = data.get('nama')
        const gender = data.get('gender')
        const matra = data.get('matra')
        const pangkat = data.get('pangkat')
        const korps = data.get('korps')
        var jabatan = data.get('jabatan')
        const satker = data.get('satker')
        const dpp = data.get('dpp')
        const kawin = data.get('kawin')
        const agama = data.get('agama')
        const tl = data.get('tl')
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
        console.log(tmt_sandi)
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

        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/tambah`, {
            nrp,
            nama,
            gender,
            matra,
            pangkat,
            korps,
            jabatan,
            satker,
            dpp,
            kawin,
            agama,
            tl,
            mkg,
            tmt_kgb,
            stat_tunjab,
            tmt_jab,
            grade,
            persekot,
            gantirugi,
            sewarumah,
            stat_sandi,
            eselon_sandi,
            tmt_sandi,
            rek
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
                    Tambah
                </div>
                <div className='p-3 p-md-5'>
                    <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                        <h5>Profil Personel Baru</h5>
                        <form onSubmit={handleSubmit} className='font-poppins' id='formTambah' name='formTambah'>
                            <div className='py-3'>
                                <div className='row py-2'>
                                    <div class="col-12 col-md-4">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>NRP/NIP</small></label>
                                        <input type="text" class="form-control border border-3" id="nrp" name='nrp' placeholder="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Matra/Pegawai</small></label>
                                        <select id='matra' name='matra' onChange={() => { changeMatra() }} class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">TNI AD</option>
                                            <option value="2">TNI AL</option>
                                            <option value="3">TNI AU</option>
                                            <option value="0">PNS</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Korps</small></label>
                                        <select id='korps' name='korps' onChange={() => { changeKorps() }} class="form-select border border-3" aria-label="Default select example">

                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Pangkat/Golongan</small></label>
                                        <select id='pangkat' name='pangkat' class="form-select border border-3" aria-label="Default select example">

                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Kelompok DPP</small></label>
                                        <select id='dpp' name='dpp' class="form-select border border-3" aria-label="Default select example">
                                            <option value="1">TNI</option>
                                            <option value="2">PNS</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">

                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Satker/Subsatker</small></label>
                                        <select id='satker' name='satker' onChange={() => { changeSatker() }} class="form-select border border-3" aria-label="Default select example">

                                        </select>
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Data Diri</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-8">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Nama Lengkap</small></label>
                                        <input type="text" class="form-control border border-3" id="nama" name='nama' placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Status Kawin</small></label>
                                        <select id='kawin' name='kawin' class="form-select border border-3">
                                            <option value=""></option>
                                            <option value="1">T0/0</option>
                                            <option value="2">T0/1</option>
                                            <option value="3">T0/2</option>
                                            <option value="5">K0/1</option>
                                            <option value="6">K1/2</option>
                                            <option value="7">K2/3</option>
                                            <option value="9">K/1/0</option>
                                            <option value="10">K/1/1</option>
                                            <option value="11">K/1/2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Jenis Kelamin</small></label>
                                        <select id='gender' name='gender' class="form-select border border-3" aria-label="Default select example">
                                            <option value="Pria">Pria</option>
                                            <option value="Wanita">Wanita</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Tanggal Lahir</small></label>
                                        <input type="date" class="form-control border border-3" id="tl" name='tl' placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Agama</small></label>
                                        <select id='agama' name='agama' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">Islam</option>
                                            <option value="2">Kristen</option>
                                            <option value="3">Katholik</option>
                                            <option value="4">Hindu</option>
                                            <option value="5">Buddha</option>
                                            <option value="6">Konghucu</option>
                                        </select>
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Status Gaji</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Masa Kerja Gaji (MKG)</small></label>
                                        <input type="number" step='1' class="form-control border border-3" id="mkg" name='mkg' placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>TMT Kenaikan Gaji Berkala (KGB)</small></label>
                                        <input type="date" class="form-control border border-3" id="tmt_kgb" name='tmt_kgb' placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Status Jabatan</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Status Tunjangan Jabatan</small></label>
                                        <select id='stat_tunjab' name='stat_tunjab' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">Berhak</option>
                                            <option value="0">Tidak Berhak</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Jabatan</small></label>
                                        <select id='jabatan' name='jabatan' class="form-select border border-3" aria-label="Default select example">

                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>TMT Jabatan</small></label>
                                        <input type="date" class="form-control border border-3" id="tmt_jab" name='tmt_jab' placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Kinerja</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Grade Jabatan Kinerja</small></label>
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
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Potongan</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Potongan Persekot/Uang Muka Gaji</small></label>
                                        <input type="number" class="form-control border border-3" id="persekot" name='persekot' placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Potongan Ganti Rugi</small></label>
                                        <input type="number" class="form-control border border-3" id="gantirugi" name='gantirugi' placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Potongan Sewa Rumah</small></label>
                                        <input type="number" class="form-control border border-3" id="sewarumah" name='sewarumah' placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Kompensasi Sandi (jika ada)</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Status Kompensasi Sandi</small></label>
                                        <select id='stat_sandi' name='stat_sandi' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">Berhak</option>
                                            <option value="0">Tidak Berhak</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Eselon Kompensasi Sandi</small></label>
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
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>TMT Kompensasi Sandi</small></label>
                                        <input type="date" class="form-control border border-3" id="tmt_sandi" name='tmt_sandi' placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Jenis Rekening</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <select id='rek' name='rek' class="form-select border border-3" aria-label="Default select example">
                                            <option value=""></option>
                                            <option value="1">BNI</option>
                                            <option value="2">BRI</option>
                                        </select>
                                    </div>

                                </div>
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
                                        <div className='col-12 col-md-4 p-2'>
                                            <a type="button" href='/' class="w-100 btn btn-danger">Batal</a>
                                        </div>
                                        <div className='col-12 col-md-4 p-2'>
                                            <button type="button" onClick={() => { document.getElementById('formTambah').reset() }} class="w-100 btn btn-warning text-white">Hapus Form</button>
                                        </div>
                                        <div className='col-12 col-md-4 p-2'>
                                            <button type="submit" class="w-100 btn btn-success">Rekam</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}