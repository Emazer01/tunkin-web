import { Sidebar } from '../component/Sidebar';
import { ComponentToPrint } from '../component/ComponentToPrint';
import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';

export const Personel = () => {
    const navigate = useNavigate()
    const componentRef = useRef();
    const date = Date()
    const pagestyle = `{ size: 2.5in 4in }`;
    const [recent, setRecent] = React.useState(
        [{
            nrp: 123456,
            nama: 'Angelina Deva Adella Putri',
            pangkat: 'Sersan Mayor Satu Kadet',
            satker: 'Resimen Korps Kadet Mahasiswa',
            jabatan: 'Komandan Batalyon Korps Tk 2'
        }]
    )
    const [dataPers, setDataPers] = React.useState({
        nrp: '',
        nama: '',
        gender: '',
        matra: '',
        pangkat: '',
        korps: '',
        jabatan: '',
        satker: '',
        dpp: '',
        kawin: '',
        agama: '',
        pers_tl: '           ',
        mkg: '',
        tmt_kgb: '',
        stat_tunjab: '',
        tmt_jab: '',
        grade: '',
        tk_papua: '',
        tk_terluar: '',
        tk_terpencil: '',
        persekot: '',
        gantirugi: '',
        sewarumah: '',
        stat_sandi: '',
        eselon_sandi: '',
        tmt_sandi: '',
        rek: ''
    })
    React.useEffect(() => {
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.remove('sidebar-active')
        document.getElementById('btn-tambah').classList.remove('sidebar-active')
        document.getElementById('btn-cetak').classList.add('sidebar-active')
        document.getElementById('btn-index').classList.remove('sidebar-active')

        const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const pers_id = urlParams.get('id')
        console.log(pers_id)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/view`, {
            pers_id: pers_id,
        })
            .then(async function (response) {
                if (response.status == 200) {
                    const detail_pers = response.data['0']
                    setDataPers(detail_pers)
                    console.log(detail_pers.pers_tmt_jab)
                    document.title = 'Pusinfolahta TNI | Tunjangan Kinerja | ' + detail_pers.pers_nama
                    var tunjangan_khusus = pph21_tunkin(detail_pers.kpkt_jumlah, detail_pers.grade_index, detail_pers.tunjab_jumlah, detail_pers.kawin_label, detail_pers.kawin_ptkp);
                    var pen_bruto_tunkin = tunjangan_khusus + detail_pers.grade_index;
                    var stringLaporan = `
                    <div class='w-100 px-4 py-1' id='lapPers'>
                        <div class='row text-center'>
                            <div class='col-3 border border-dark fw-semibold'>${detail_pers.satker_label.toUpperCase()}</div>
                            <div class='col-6 border border-dark fs-4 fw-bold py-2 px-3'>LAPORAN TUNJANGAN KINERJA</div>
                            <div class='col-3 border border-dark'></div>
                        </div>
                        <div class='row border border-dark fs-5 fw-semibold'>
                            <br />
                        </div>
                        <div class='row border border-dark fw-semibold px-1'>
                            IDENTITAS PERSONEL
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Nama</div>
                            <div class='col-9 border border-dark'>${detail_pers.pers_nama}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>NRP</div>
                            <div class='col-9 border border-dark'>${detail_pers.pers_nrp}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Tanggal Lahir</div>
                            <div class='col-9 border border-dark'>${Number(detail_pers.pers_tl.slice(8, 10)) + 1}-${detail_pers.pers_tl.slice(5, 7)}-${detail_pers.pers_tl.slice(0, 4)}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Agama</div>
                            <div class='col-9 border border-dark'>${detail_pers.ag_label}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Status Kawin</div>
                            <div class='col-9 border border-dark'>${detail_pers.kawin_label}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Golongan/Pangkat</div>
                            <div class='col-9 border border-dark'>${detail_pers.pangkat_label} ${detail_pers.korps_kode}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Masa Kerja Gaji</div>
                            <div class='col-9 border border-dark'>${detail_pers.kmkg_label}${detail_pers.pers_mkg}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Satker</div>
                            <div class='col-9 border border-dark'>${detail_pers.satker_label} (${detail_pers.satker_kode})</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Jabatan / Eselon</div>
                            <div class='col-9 border border-dark'>${detail_pers.jab_label} / ${detail_pers.jabes_label}</div>
                        </div>
                        <div class='row border border-dark fs-5 fw-semibold'>
                            <br />
                        </div>
                        <div class='row border border-dark fw-semibold px-1'>
                            PENGHASILAN
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Gaji Pokok</div>
                            <div class='col-9 border border-dark'>${rupiah(detail_pers.kpkt_jumlah).slice(0, rupiah(detail_pers.kpkt_jumlah).length - 3)}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>TJAB/MDS/T.UM</div>
                            <div class='col-9 border border-dark'>${rupiah(detail_pers.tunjab_jumlah).slice(0, rupiah(detail_pers.tunjab_jumlah).length - 3)}</div>
                        </div>
                        <div class='row border border-dark fs-5 fw-semibold'>
                            <br />
                        </div>
                        <div class='row border border-dark fw-semibold px-1'>
                            TUNJANGAN KINERJA
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Tunjangan Kinerja (Grade ${detail_pers.pers_grade})</div>
                            <div class='col-9 border border-dark'>${rupiah(detail_pers.grade_index).slice(0, rupiah(detail_pers.grade_index).length - 3)}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Tunjangan Khusus</div>
                            <div class='col-9 border border-dark'>${rupiah(tunjangan_khusus).slice(0, rupiah(tunjangan_khusus).length - 3)}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark fw-semibold'>Pendapatan Bruto Tunkin</div>
                            <div class='col-9 border border-dark'>${rupiah(pen_bruto_tunkin).slice(0, rupiah(pen_bruto_tunkin).length - 3)}</div>
                        </div>
                        <div class='row border border-dark fs-5 fw-semibold'>
                            <br />
                        </div>
                        <div class='row border border-dark fw-semibold px-1'>
                            POTONGAN
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>PPh Pasal 21</div>
                            <div class='col-9 border border-dark'>${rupiah(tunjangan_khusus).slice(0, rupiah(tunjangan_khusus).length - 3)}</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark'>Tidak Hadir</div>
                            <div class='col-9 border border-dark'>Rp 0</div>
                        </div>
                        <div class='row'>
                            <div class='col-3 border border-dark fw-semibold'>Jumlah Potongan</div>
                            <div class='col-9 border border-dark'>${rupiah(tunjangan_khusus).slice(0, rupiah(tunjangan_khusus).length - 3)}</div>
                        </div>
                        <div class='row border border-dark fs-5 fw-semibold'>
                            <br />
                        </div>
                        <div class='row border border-dark fw-semibold px-1'>
                            <span class='text-center fs-5'>JUMLAH YANG DIBAYARKAN</span>
                        </div>
                        <div class='row border border-dark fw-semibold px-1'>
                            <span class='text-center fs-5'>${rupiah(pen_bruto_tunkin-tunjangan_khusus).slice(0, rupiah(pen_bruto_tunkin-tunjangan_khusus).length - 3)}</span>
                        </div>
                    </div>`
                    document.getElementById('recent').innerHTML = stringLaporan

                } else {
                    console.log('Tidak berhasil mengambil data personel')
                    return
                }
            })
            .catch(async function (error) {
                console.log(error)
                return
            });


    }, [])

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    const tun_ulp = 1860000;

    function gaji_tunkin(gaji_pokok, tunkin, tun_pasangan, tun_anak, iuran_pensiun, tunjab, pot_bpjs, pot_tht, tun_beras) {
        var gaji_bruto = gaji_pokok + tun_pasangan + tun_anak + tunjab + tun_beras + tun_ulp + tunkin;
        var gaji_netto = gaji_bruto - iuran_pensiun - pot_bpjs - pot_tht;
        return gaji_netto;
    }

    function pph21(gaji_netto, ptkp) {
        var netto_setahun = 12 * gaji_netto;
        var pkp = netto_setahun - ptkp;

        if (pkp == 0) {
            return 0;
        } else if (pkp <= 60000000) {
            return (0.05 * pkp) / 12;
        } else if (60000000 < pkp <= 250000000) {
            return (0.15 * pkp) / 12;
        } else if (250000000 < pkp <= 500000000) {
            return (0.25 * pkp) / 12;
        } else if (500000000 < pkp <= 5000000000) {
            return (0.3 * pkp) / 12;
        } else if (pkp > 5000000000) {
            return (0.35 * pkp) / 12;
        }
    }

    function pph21_tunkin(gaji_pokok, tunkin, tunjab, stat_ptkp, ptkp) {
        var jumlah_beras = 0;
        if (stat_ptkp.startsWith("T")) {
            var tun_pasangan = 0;
        } else if (stat_ptkp.startsWith("K")) {
            var tun_pasangan = 0.1 * gaji_pokok;
            jumlah_beras += 1;
        }

        var tun_anak = parseInt(stat_ptkp.slice(-3, -2)) * 0.02 * gaji_pokok;
        jumlah_beras += parseInt(stat_ptkp.slice(-3, -2));
        var tun_beras = (jumlah_beras * 10 + 18) * 7242;

        var iuran_pensiun = 0.0475 * gaji_pokok;
        var pot_bpjs = 0.02 * gaji_pokok;
        var pot_tht = 0.037 * gaji_pokok;

        var pph21tunkin = pph21(gaji_tunkin(gaji_pokok, tunkin, tun_pasangan, tun_anak, iuran_pensiun, tunjab, pot_bpjs, pot_tht, tun_beras), ptkp);
        var pph21notunkin = pph21(gaji_tunkin(gaji_pokok, 0, tun_pasangan, tun_anak, iuran_pensiun, tunjab, pot_bpjs, pot_tht, tun_beras), ptkp);
        var pajak = pph21tunkin - pph21notunkin;

        return pajak;
    }

    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3 border-bottom border-4'>
                    Cetak
                </div>
                <div className='p-3 p-md-5'>
                    <div className='bg-putihdikit rounded-2 p-3 border border-3'>
                        <ReactToPrint
                            trigger={() =>
                                <div className='col-12 col-md-4 sticky-top p-3 bg-putihdikit'>
                                    <button className='btn btn-success w-100'>
                                        <i class="bi bi-filetype-pdf"></i>
                                        &nbsp;Cetak / Simpan PDF
                                    </button>
                                </div>
                            }
                            content={() => componentRef.current}
                        />
                        <ComponentToPrint ref={componentRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}