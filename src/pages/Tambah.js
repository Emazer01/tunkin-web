import { Sidebar } from '../component/Sidebar';
import * as React from 'react';

export const Tambah = () => {
    const date = Date()
    const pangkat = {
        '-': '',
        1: {
            '1A': 'Prajurit Dua',
            '1B': 'Prajurit Satu',
            '1C': 'Prajurit Kepala',
            '1D': 'Kopral Dua',
            '1E': 'Kopral Satu',
            '1F': 'Kopral Kepala',
            '2A': 'Sersan Dua',
            '2B': 'Sersan Satu',
            '2C': 'Sersan Kepala',
            '2D': 'Sersan Mayor',
            '2E': 'Pembantu Letnan Dua',
            '2F': 'Pembantu Letnan Satu',
            '3A': 'Letnan Dua',
            '3B': 'Letnan Satu',
            '3C': 'Kapten',
            '4A': 'Mayor',
            '4B': 'Letnan Kolonel',
            '4C': 'Kolonel',
            '4D': 'Brigadir Jenderal TNI',
            '4E': 'Mayor Jenderal TNI',
            '4F': 'Letnan Jenderal TNI',
            '4G': 'Jenderal TNI'
        },
        2: {
            '1A': 'Kelasi Dua',
            '1B': 'Kelasi Satu',
            '1C': 'Kelasi Kepala',
            '1D': 'Kopral Dua',
            '1E': 'Kopral Satu',
            '1F': 'Kopral Kepala',
            '2A': 'Sersan Dua',
            '2B': 'Sersan Satu',
            '2C': 'Sersan Kepala',
            '2D': 'Sersan Mayor',
            '2E': 'Pembantu Letnan Dua',
            '2F': 'Pembantu Letnan Satu',
            '3A': 'Letnan Dua',
            '3B': 'Letnan Satu',
            '3C': 'Kapten',
            '4A': 'Mayor',
            '4B': 'Letnan Kolonel',
            '4C': 'Kolonel',
            '4D': 'Laksamana Pertama TNI',
            '4E': 'Laksamana Muda TNI',
            '4F': 'Laksamana Madya TNI',
            '4G': 'Laksamana TNI'
        },
        3: {
            '1A': 'Prajurit Dua',
            '1B': 'Prajurit Satu',
            '1C': 'Prajurit Kepala',
            '1D': 'Kopral Dua',
            '1E': 'Kopral Satu',
            '1F': 'Kopral Kepala',
            '2A': 'Sersan Dua',
            '2B': 'Sersan Satu',
            '2C': 'Sersan Kepala',
            '2D': 'Sersan Mayor',
            '2E': 'Pembantu Letnan Dua',
            '2F': 'Pembantu Letnan Satu',
            '3A': 'Letnan Dua',
            '3B': 'Letnan Satu',
            '3C': 'Kapten',
            '4A': 'Mayor',
            '4B': 'Letnan Kolonel',
            '4C': 'Kolonel',
            '4D': 'Marsekal Pertama TNI',
            '4E': 'Marsekal Muda TNI',
            '4F': 'Marsekal Madya TNI',
            '4G': 'Marsekal TNI'
        }
    }

    React.useEffect(() => {
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.remove('sidebar-active')
        document.getElementById('btn-tambah').classList.add('sidebar-active')
    }, [])

    const changeMatra = () => {
        const matra = document.getElementById('matra').value
        var stringPangkat = ''
        Object.entries(pangkat[matra]).forEach(([key, value]) => {
            stringPangkat += `<option value='${key}'>${value}</option>`
        });
        document.getElementById('pangkat').innerHTML = stringPangkat
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
                        <h5>Profil Personel</h5>
                        <form className='font-poppins'>
                            <div className='py-3'>
                                <div className='row py-2'>
                                    <div class="col-12 col-md-4">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>NRP/NIP</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Matra/Pegawai</small></label>
                                        <select id='matra' onChange={() => { changeMatra() }} class="form-select border border-3" aria-label="Default select example">
                                            <option value="-"></option>
                                            <option value="1">TNI AD</option>
                                            <option value="2">TNI AL</option>
                                            <option value="3">TNI AU</option>
                                            <option value="0">PNS</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Pangkat/Golongan</small></label>
                                        <select id='pangkat' class="form-select border border-3" aria-label="Default select example">

                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Korps</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Kelompok DPP</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">

                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Satker/Subsatker</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Data Diri</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-8">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Nama Lengkap</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Status Kawin</small></label>
                                        <select class="form-select border border-3">
                                            <option value="TK/0">TK/0</option>
                                            <option value="TK/1">TK/1</option>
                                            <option value="TK/2">TK/2</option>
                                            <option value="TK/3">TK/3</option>
                                            <option value="TK/4">TK/4</option>
                                            <option value="K/0">K/0</option>
                                            <option value="K/1">K/1</option>
                                            <option value="K/2">K/2</option>
                                            <option value="K/3">K/3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Jenis Kelamin</small></label>
                                        <select class="form-select border border-3" aria-label="Default select example">
                                            <option value="L">Laki-Laki</option>
                                            <option value="P">Perempuan</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Tanggal Lahir</small></label>
                                        <input type="date" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Agama</small></label>
                                        <select class="form-select border border-3" aria-label="Default select example">
                                            <option value="Islam">Islam</option>
                                            <option value="Kristen">Kristen</option>
                                            <option value="Katholik">Katholik</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Buddha">Buddha</option>
                                            <option value="Konghucu">Konghucu</option>
                                        </select>
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Status Gaji</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Masa Kerja Gaji (MKG)</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>TMT Kenaikan Gaji Berkala (KGB)</small></label>
                                        <input type="date" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Status Jabatan</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Status Tunjangan Jabatan</small></label>
                                        <select class="form-select border border-3" aria-label="Default select example">
                                            <option value="Berhak">Berhak</option>
                                            <option value="Tidak Berhak">Tidak Berhak</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Jabatan</small></label>
                                        <input type="number" step='1' class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>TMT Jabatan</small></label>
                                        <input type="date" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Kinerja</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Grade Jabatan Kinerja</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <input class="form-check-input border border-3 p-2" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label p-1 ps-2" for="flexCheckDefault">
                                            Tunjangan Khusus Papua
                                        </label>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <input class="form-check-input border border-3 p-2" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label p-1 ps-2" for="flexCheckDefault">
                                            Tunjangan Khusus Terpencil
                                        </label>
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <input class="form-check-input border border-3 p-2" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label p-1 ps-2" for="flexCheckDefault">
                                            Tunjangan Khusus Terluar
                                        </label>
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Potongan</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Potongan Persekot/Uang Muka Gaji</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Potongan Ganti Rugi</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Potongan Sewa Rumah</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Kompensasi Sandi (jika ada)</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Status Kompensasi Sandi</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>Eselon Kompensasi Sandi</small></label>
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div class="col-12 col-md-4 py-1">
                                        <label for="exampleFormControlInput1" class="form-label mb-0 ps-1"><small>TMT Kompensasi Sandi</small></label>
                                        <input type="date" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <p className='p-1 pt-3 pb-0 text-decoration-underline'><strong>Jenis Rekening</strong></p>
                                <div className='row'>
                                    <div class="col-12 col-md-4 py-1">
                                        <input type="text" class="form-control border border-3" id="exampleFormControlInput1" placeholder="" />
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
                                <div className='row'>
                                    <div className='col-5'></div>
                                    <div className='col-12 col-md-7 row p-3'>
                                        <div className='col-12 col-md-4 p-2'>
                                            <button type="button" class="w-100 btn btn-danger">Batal</button>
                                        </div>
                                        <div className='col-12 col-md-4 p-2'>
                                            <button type="button" class="w-100 btn btn-warning text-white">Hapus Form</button>
                                        </div>
                                        <div className='col-12 col-md-4 p-2'>
                                            <button type="button" class="w-100 btn btn-success">Rekam</button>
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