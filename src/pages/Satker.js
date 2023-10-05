import { Sidebar } from '../component/Sidebar';
import { ExportExcel } from '../component/excelexport';
import { ComponentToPrint } from '../component/ComponentToPrint';
import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';

export const Satker = () => {
    const navigate = useNavigate()
    const componentRef = useRef();
    const date = Date()
    const [dataDropdown, setDataDropdown] = React.useState({
        jabatan: '',
        korps: '',
        matra: '',
        pangkat: '',
        satker: { a: 'asd' }
    })
    const [ExcelExportData, setExcelExportData] = React.useState([
        {
            "First Nome": "Arul",
            "Last Nome": "prasath",
            "Employee code": "001",
            "Hobile No": "1234567890",
            "DO8": "01-01-1995",
            "Address": "Chemnai"
        }
    ])
    const [recent, setRecent] = React.useState(
        [{
            nrp: 123456,
            nama: 'Angelina Deva Adella Putri',
            pangkat: 'Sersan Mayor Satu Kadet',
            satker: 'Resimen Korps Kadet Mahasiswa',
            jabatan: 'Komandan Batalyon Korps Tk 2'
        }])

    React.useEffect(() => {
        document.getElementById('btn-beranda').classList.remove('sidebar-active')
        document.getElementById('btn-perubahan').classList.remove('sidebar-active')
        document.getElementById('btn-tambah').classList.remove('sidebar-active')
        document.getElementById('btn-cetak').classList.add('sidebar-active')
        document.getElementById('btn-index').classList.remove('sidebar-active')


        const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const satker_id = urlParams.get('id')
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/lapSatker`, {
            satker_id: satker_id,
        })
            .then(async function (response) {
                if (response.status == 200) {
                    setRecent(response.data)
                    console.log(response.data[0])
                    var stringLaporan = ''
                    var dataExcel = []
                    var halaman = 1
                    var jmlTunkin = 0
                    var jmlTunkinSlh = 0
                    var jmlTkhus = 0
                    var jmlTkhusSlh = 0
                    var jmlPen = 0
                    var jmlPenSlh = 0
                    var orgHalaman = 0
                    var pns = 0
                    var dpp = 'TNI'
                    var noUrut = 0
                    stringLaporan += `<div class='m-1'>
                                        <div class='row'>
                                            <div class='col-3 border-bottom text-center font-size'>
                                                <small>TENTARA NASIONAL INDONESIA</small><br />
                                                <small>MARKAS BESAR</small>
                                            </div>
                                        </div>
                                        <div class='row border-bottom py-1'>
                                            <div class='col-3 font-size'>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>UNIT ORGANISASI</td>
                                                            <td>&nbsp;: MABES TNI</td>
                                                        </tr>
                                                        <tr>
                                                            <td>KU KOTAMA</td>
                                                            <td>&nbsp;: ESELON BALAKPUS</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PAKU/NA</td>
                                                            <td>&nbsp;: KU TNI WIL. JKT-I</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SATKER</td>
                                                            <td>&nbsp;: ${response.data[0].satker_label.toLocaleUpperCase()}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SUB-SATKER</td>
                                                            <td>&nbsp;: ${response.data[0].satker_label.toLocaleUpperCase()}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class='col-6 py-3 text-center'>
                                                <h5 class='text-decoration-underline'>DAFTAR PEMBAYARAN TUNJANGAN KINERJA</h5>
                                                <span>BULAN ${month[new Date().getMonth()].toLocaleUpperCase()} 2023</span>
                                            </div>
                                            <div class='col-3 font-size'>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>BENTUK</td>
                                                            <td>&nbsp;: KU-107. TUNKER</td>
                                                        </tr>
                                                        <tr>
                                                            <td>STATUS DPP</td>
                                                            <td>&nbsp;: TNI</td>
                                                        </tr>
                                                        <tr>
                                                            <td>STATUS SIL</td>
                                                            <td>&nbsp;: AKTIF</td>
                                                        </tr>
                                                        <tr>
                                                            <td>HALAMAN</td>
                                                            <td>&nbsp;: ${halaman}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class='p-1 ps-2 w-100'>
                                            <div class='row font-size pb-1'>
                                                <div class='col-3 row'>
                                                    <div class='col-3 border-top border-bottom'>NO. URUT</div>
                                                    <div class='col-9 border-top border-bottom'>
                                                        <span>NAMA</span><br />
                                                        <span>PKT/GOL</span><br />
                                                        <span>NRP/NIP</span><br />
                                                        <span>TGL. LAHIR | STK/TGK</span><br />
                                                    </div>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <br />
                                                    <span>JAB/ESLN</span><br />
                                                    <span>TMT KGB</span><br />
                                                    <span>MKG</span><br />
                                                </div>
                                                <div class='col-3 row'>
                                                    <div class='col-9 border-top border-bottom'>
                                                        <span>JABATAN</span><br />
                                                        <span>(GRADE) TMT JAB</span><br />
                                                        <span>TJAB/MDS/T. UM</span><br />
                                                        <span>GAJI POKOK</span><br />
                                                    </div>
                                                    <div class='col-3 border-top border-bottom'>
                                                        <br />
                                                        <span>AGAMA</span><br />
                                                        <span>NO.ASABRI</span><br />
                                                        <span>MATRA</span><br />
                                                    </div>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>T. KINERJA</span><br />
                                                    <span>T. KHUSUS</span><br /><br />
                                                    <span>NO. NPWP</span><br />
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>PEN.BRUTO</span>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>POTONGAN PPH.21</span><br />
                                                    <span>TDK. HADIR</span>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>JML. YANG DIBAYARKAN</span>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>TANDA-TANGAN</span>
                                                </div>
                                            </div>
                                            <div class='border-bottom'>`
                    for (let index = 0; index < response.data.length; index++) {
                        var tunjangan_khusus = pph21_tunkin(response.data[index].kpkt_jumlah, response.data[index].grade_index, response.data[index].tunjab_jumlah, response.data[index].kawin_label, response.data[index].kawin_ptkp);
                        var pen_bruto_tunkin = tunjangan_khusus + response.data[index].grade_index;
                        console.log(tunjangan_khusus)
                        dataExcel.push({
                            "No. Urut": index + 1,
                            "Nrp/Nip": response.data[index].pers_nrp,
                            "Nama": response.data[index].pers_nama,
                            "Satker": response.data[index].satker_label,
                            "Jabatan": response.data[index].jab_label,
                            "Pkt/Gol": response.data[index].pangkat_label + " " + response.data[index].korps_kode,
                            "Tunjangan Kinerja": rupiah(response.data[index].grade_index).slice(0, rupiah(response.data[index].grade_index).length - 3),
                            "Tunjangan Khusus": rupiah(tunjangan_khusus).slice(0, rupiah(tunjangan_khusus).length - 3),
                            "Pendapatan Bruto": rupiah(pen_bruto_tunkin).slice(0, rupiah(pen_bruto_tunkin).length - 3),
                            "Tgl. Lahir": String(Number(response.data[index].pers_tl.slice(8, 10)) + 1) + '-' + response.data[index].pers_tl.slice(5, 7) + '-' + response.data[index].pers_tl.slice(0, 4)
                        })
                        if ((orgHalaman % 8 == 0 && orgHalaman != 0) || (response.data[index].pers_dpp == 2 && pns == 0)) {
                            stringLaporan += `</div>
                                            <div class='row font-size pb-1 mt-1 border-bottom'>
                                                <div class='col-3 row ps-5 border-top'>
                                                    JUMLAH PER HALAMAN ANGGOTA = ${orgHalaman}
                                                </div>
                                                <div class='col-1 border-top'>\</div>
                                                <div class='col-3 row border-top'>
                                                    <div class='col-2 border-top'></div>
                                                    <div class='col-1 border-top'></div>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTunkin).slice(0, rupiah(jmlTunkin).length - 3)}</span>
                                                    <span>${rupiah(jmlTkhus).slice(0, rupiah(jmlTkhus).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlPen).slice(0, rupiah(jmlPen).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTkhus).slice(0, rupiah(jmlTkhus).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTunkin).slice(0, rupiah(jmlTunkin).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'></div>
                                            </div>`
                            if (response.data[index].pers_dpp == 2 && pns == 0) {
                                dpp = 'PNS'
                                pns = 1
                                stringLaporan += `
                                            <div class='row font-size pb-1 mt-1 border-bottom'>
                                                <div class='col-3 row ps-5 border-top'>
                                                    JUMLAH SELURUHNYA ANGGOTA = ${noUrut}
                                                </div>
                                                <div class='col-1 border-top'></div>
                                                <div class='col-3 row border-top'>
                                                    <div class='col-2 border-top'></div>
                                                    <div class='col-1 border-top'></div>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTunkinSlh).slice(0, rupiah(jmlTunkinSlh).length - 3)}</span>
                                                    <span>${rupiah(jmlTkhusSlh).slice(0, rupiah(jmlTkhusSlh).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlPenSlh).slice(0, rupiah(jmlPenSlh).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTkhusSlh).slice(0, rupiah(jmlTkhusSlh).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTunkinSlh).slice(0, rupiah(jmlTunkinSlh).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'></div>
                                            </div>`
                                noUrut = 0
                                jmlTunkinSlh = 0
                                jmlTkhusSlh = 0
                                jmlPenSlh = 0
                            }

                            halaman += 1
                            stringLaporan += `
                                            <div class='pagebreak'></div>
                                        </div>
                                    </div>
                                    <div class='m-1'>
                                        <div class='row'>
                                            <div class='col-3 border-bottom text-center font-size'>
                                                <small>TENTARA NASIONAL INDONESIA</small><br />
                                                <small>MARKAS BESAR</small>
                                            </div>
                                        </div>
                                        <div class='row border-bottom py-1'>
                                            <div class='col-3 font-size'>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>UNIT ORGANISASI</td>
                                                            <td>&nbsp;: MABES TNI</td>
                                                        </tr>
                                                        <tr>
                                                            <td>KU KOTAMA</td>
                                                            <td>&nbsp;: ESELON BALAKPUS</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PAKU/NA</td>
                                                            <td>&nbsp;: KU TNI WIL. JKT-I</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SATKER</td>
                                                            <td>&nbsp;: ${response.data[0].satker_label.toLocaleUpperCase()}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SUB-SATKER</td>
                                                            <td>&nbsp;: ${response.data[0].satker_label.toLocaleUpperCase()}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class='col-6 py-3 text-center'>
                                                <h5 class='text-decoration-underline'>DAFTAR PEMBAYARAN TUNJANGAN KINERJA</h5>
                                                <span>BULAN ${month[new Date().getMonth()].toLocaleUpperCase()} 2023</span>
                                            </div>
                                            <div class='col-3 font-size'>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>BENTUK</td>
                                                            <td>&nbsp;: KU-107. TUNKER</td>
                                                        </tr>
                                                        <tr>
                                                            <td>STATUS DPP</td>
                                                            <td>&nbsp;: ${dpp}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>STATUS SIL</td>
                                                            <td>&nbsp;: AKTIF</td>
                                                        </tr>
                                                        <tr>
                                                            <td>HALAMAN</td>
                                                            <td>&nbsp;: ${halaman}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class='p-1 ps-2 w-100'>
                                            <div class='row font-size'>
                                                <div class='col-3 row'>
                                                    <div class='col-3 border-top border-bottom'>NO. URUT</div>
                                                    <div class='col-9 border-top border-bottom'>
                                                        <span>NAMA</span><br />
                                                        <span>PKT/GOL</span><br />
                                                        <span>NRP/NIP</span><br />
                                                        <span>TGL. LAHIR | STK/TGK</span><br />
                                                    </div>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <br />
                                                    <span>JAB/ESLN</span><br />
                                                    <span>TMT KGB</span><br />
                                                    <span>MKG</span><br />
                                                </div>
                                                <div class='col-3 row'>
                                                    <div class='col-9 border-top border-bottom'>
                                                        <span>JABATAN</span><br />
                                                        <span>(GRADE) TMT JAB</span><br />
                                                        <span>TJAB/MDS/T. UM</span><br />
                                                        <span>GAJI POKOK</span><br />
                                                    </div>
                                                    <div class='col-3 border-top border-bottom'>
                                                        <br />
                                                        <span>AGAMA</span><br />
                                                        <span>NO.ASABRI</span><br />
                                                        <span>MATRA</span><br />
                                                    </div>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>T. KINERJA</span><br />
                                                    <span>T. KHUSUS</span><br /><br />
                                                    <span>NO. NPWP</span><br />
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>PEN.BRUTO</span>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>POTONGAN PPH.21</span><br />
                                                    <span>TDK. HADIR</span>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>JML. YANG DIBAYARKAN</span>
                                                </div>
                                                <div class='col-1 border-top border-bottom'>
                                                    <span>TANDA-TANGAN</span>
                                                </div>
                                            </div>
                                            <div class='border-bottom pt-1'>`
                            jmlTunkin = 0
                            jmlTkhus = 0
                            jmlPen = 0
                            orgHalaman = 0
                        }
                        jmlTunkin += response.data[index].grade_index
                        jmlTunkinSlh += response.data[index].grade_index
                        jmlTkhus += tunjangan_khusus
                        jmlTkhusSlh += tunjangan_khusus
                        jmlPen += pen_bruto_tunkin
                        jmlPenSlh += pen_bruto_tunkin
                        orgHalaman += 1
                        noUrut += 1
                        stringLaporan += `  <div class='row font-size py-1 border-top'>
                                                <div class='col-3 row'>
                                                    <div class='col-3 text-center'>${noUrut}</div>
                                                    <div class='col-9'>
                                                        <span>${response.data[index].pers_nama}</span><br />
                                                        <span>${response.data[index].pangkat_label} ${response.data[index].korps_kode}</span><br />
                                                        <span>${response.data[index].pers_nrp}</span><br />
                                                        <span>${Number(response.data[index].pers_tl.slice(8, 10)) + 1}-${response.data[index].pers_tl.slice(5, 7)}-${response.data[index].pers_tl.slice(0, 4)} | ${response.data[index].kawin_label}</span><br />
                                                    </div>
                                                </div>
                                                <div class='col-1'>
                                                    <br />
                                                    <span>${response.data[index].jabes_label}</span><br />
                                                    <span>${Number(response.data[index].pers_tmt_kgb.slice(8, 10)) + 1}-${response.data[index].pers_tmt_kgb.slice(5, 7)}-${response.data[index].pers_tmt_kgb.slice(0, 4)}</span><br />
                                                    <span>${response.data[index].kmkg_label}${response.data[index].pers_mkg}</span><br />
                                                </div>
                                                <div class='col-3 row'>
                                                    <div class='col-9'>
                                                        <span>${response.data[index].jab_label}</span><br />
                                                        <span>(${response.data[index].pers_grade}) ${Number(response.data[index].pers_tmt_jab.slice(8, 10)) + 1}-${response.data[index].pers_tmt_jab.slice(5, 7)}-${response.data[index].pers_tmt_jab.slice(0, 4)}</span><br />
                                                        <span>${rupiah(response.data[index].tunjab_jumlah).slice(0, rupiah(response.data[index].tunjab_jumlah).length - 3)}</span><br />
                                                        <span>${rupiah(response.data[index].kpkt_jumlah).slice(0, rupiah(response.data[index].kpkt_jumlah).length - 3)}</span><br />
                                                    </div>
                                                    <div class='col-3'>
                                                        <br />
                                                        <span>${response.data[index].ag_label}</span><br />
                                                        <span></span><br />
                                                        <span>${response.data[index].matra_label}</span><br />
                                                    </div>
                                                </div>
                                                
                                                <div class='col-1'>
                                                    <span>${rupiah(response.data[index].grade_index).slice(0, rupiah(response.data[index].grade_index).length - 3)}</span><br />
                                                    <span>${rupiah(tunjangan_khusus).slice(0, rupiah(tunjangan_khusus).length - 3)}</span><br /><br />
                                                    <span></span><br />
                                                </div>
                                                <div class='col-1'>
                                                    <span>${rupiah(pen_bruto_tunkin).slice(0, rupiah(pen_bruto_tunkin).length - 3)}</span>
                                                </div>
                                                <div class='col-1'>
                                                    <span>${rupiah(tunjangan_khusus).slice(0, rupiah(tunjangan_khusus).length - 3)}</span><br />
                                                    <span>0</span>
                                                </div>
                                                <div class='col-1'>
                                                    <span>${rupiah(response.data[index].grade_index).slice(0, rupiah(response.data[index].grade_index).length - 3)}</span>
                                                </div>
                                                <div class='col-1'>
                                                    <br/><br/><span>${index + 1} &nbsp;. &nbsp;. &nbsp;. &nbsp;. &nbsp;. &nbsp;. &nbsp;.</span>
                                                </div>
                                            </div>`
                    }
                    stringLaporan += `</div>
                                            <div class='row font-size pb-1 mt-1 border-bottom'>
                                                <div class='col-3 row ps-5 border-top'>
                                                    JUMLAH PER HALAMAN ANGGOTA = ${orgHalaman}
                                                </div>
                                                <div class='col-1 border-top'></div>
                                                <div class='col-3 row border-top'>
                                                    <div class='col-2 border-top'></div>
                                                    <div class='col-1 border-top'></div>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTunkin).slice(0, rupiah(jmlTunkin).length - 3)}</span>
                                                    <span>${rupiah(jmlTkhus).slice(0, rupiah(jmlTkhus).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlPen).slice(0, rupiah(jmlPen).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTkhus).slice(0, rupiah(jmlTkhus).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTunkin).slice(0, rupiah(jmlTunkin).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'></div>
                                            </div>
                                            <div class='row font-size pb-1 mt-1 border-bottom'>
                                                <div class='col-3 row ps-5 border-top'>
                                                    JUMLAH SELURUHNYA ANGGOTA = ${noUrut}
                                                </div>
                                                <div class='col-1 border-top'></div>
                                                <div class='col-3 row border-top'>
                                                    <div class='col-2 border-top'></div>
                                                    <div class='col-1 border-top'></div>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTunkinSlh).slice(0, rupiah(jmlTunkinSlh).length - 3)}</span>
                                                    <span>${rupiah(jmlTkhusSlh).slice(0, rupiah(jmlTkhusSlh).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlPenSlh).slice(0, rupiah(jmlPenSlh).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTkhusSlh).slice(0, rupiah(jmlTkhusSlh).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'>
                                                    <span>${rupiah(jmlTunkinSlh).slice(0, rupiah(jmlTunkinSlh).length - 3)}</span>
                                                </div>
                                                <div class='col-1 border-top'></div>
                                            </div>
                                        </div>
                                    </div>`
                    document.getElementById('recent').innerHTML = stringLaporan
                    setExcelExportData(dataExcel)
                } else {
                    console.log('Tidak berhasil mengambil postingan')
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
                    Cetak
                </div>
                <div className='p-3 p-md-3'>
                    <div className='bg-putihdikit rounded-2 p-3 border border-3 row'>
                        <ExportExcel excelData={ExcelExportData} fileName={"Laporan Kumulatif Tunjangan Kinerja"} />
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