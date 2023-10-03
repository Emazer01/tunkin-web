import * as React from 'react';

export const ComponentToPrint = React.forwardRef((props, ref) => {
    React.useEffect(() => {
        
    },[])
    return (
        <div ref={ref} className='w-100 py-1' id='recent'>
            <div className='m-1'>
                <div className='row'>
                    <div className='col-3 border-bottom text-center font-size'>
                        <small>TENTARA NASIONAL INDONESIA</small><br />
                        <small>MARKAS BESAR</small>
                    </div>
                </div>
                <div className='row border-bottom py-1'>
                    <div className='col-3 font-size'>
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
                                    <td>&nbsp;: PUSINFOLAHTA TNI</td>
                                </tr>
                                <tr>
                                    <td>SUB-SATKER</td>
                                    <td>&nbsp;: PUSINFOLAHTA TNI</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-6 py-3 text-center'>
                        <h5 className='border-bottom'>DAFTAR PEMBAYARAN TUNJANGAN KINERJA</h5>
                        <span>BULAN SEPTEMBER 2023</span>
                    </div>
                    <div className='col-3 font-size'>
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
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='p-1 ps-2 w-100'>
                    <div className='row font-size'>
                        <div className='col-3 row'>
                            <div className='col-3 border-top border-bottom'>NO. URUT</div>
                            <div className='col-9 border-top border-bottom'>
                                <span>NAMA</span><br />
                                <span>PKT/GOL</span><br />
                                <span>NRP/NIP</span><br />
                                <span>TGL. LAHIR | STK/TGK</span><br />
                            </div>
                        </div>
                        <div className='col-1 border-top border-bottom'>
                            <br />
                            <span>JAB/ESLN</span><br />
                            <span>TMT KGB</span><br />
                            <span>MKG</span><br />
                        </div>
                        <div className='col-2 border-top border-bottom'>
                            <span>JABATAN</span><br />
                            <span>(GRADE) TMT JAB</span><br />
                            <span>TJAB/MDS/T. UM</span><br />
                            <span>GAJI POKOK</span><br />
                        </div>
                        <div className='col-1 border-top border-bottom'>
                            <br />
                            <span>AGAMA</span><br />
                            <span>NO.ASABRI</span><br />
                            <span>MATRA</span><br />
                        </div>
                        <div className='col-1 border-top border-bottom'>
                            <span>T. KINERJA</span><br />
                            <span>T. KHUSUS</span><br /><br />
                            <span>NO. NPWP</span><br />
                        </div>
                        <div className='col-1 border-top border-bottom'>
                            <span>PEN.BRUTO</span>
                        </div>
                        <div className='col-1 border-top border-bottom'>
                            <span>POTONGAN PPH.21</span><br />
                            <span>TDK. HADIR</span>
                        </div>
                        <div className='col-1 border-top border-bottom'>
                            <span>JML. YANG DIBAYARKAN</span>
                        </div>
                        <div className='col-1 border-top border-bottom'>
                            <span>TANDA-TANGAN</span>
                        </div>
                    </div>
                    <div className='border-bottom'>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                        <div className='row font-size py-1'>
                            <div className='col-3 row'>
                                <div className='col-3'>NO. URUT</div>
                                <div className='col-9'>
                                    <span>NAMA</span><br />
                                    <span>PKT/GOL</span><br />
                                    <span>NRP/NIP</span><br />
                                    <span>TGL. LAHIR | STK/TGK</span><br />
                                </div>
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>JAB/ESLN</span><br />
                                <span>TMT KGB</span><br />
                                <span>MKG</span><br />
                            </div>
                            <div className='col-2'>
                                <span>JABATAN</span><br />
                                <span>(GRADE) TMT JAB</span><br />
                                <span>TJAB/MDS/T. UM</span><br />
                                <span>GAJI POKOK</span><br />
                            </div>
                            <div className='col-1'>
                                <br />
                                <span>AGAMA</span><br />
                                <span>NO.ASABRI</span><br />
                                <span>MATRA</span><br />
                            </div>
                            <div className='col-1'>
                                <span>T. KINERJA</span><br />
                                <span>T. KHUSUS</span><br /><br />
                                <span>NO. NPWP</span><br />
                            </div>
                            <div className='col-1'>
                                <span>PEN.BRUTO</span>
                            </div>
                            <div className='col-1'>
                                <span>POTONGAN PPH.21</span><br />
                                <span>TDK. HADIR</span>
                            </div>
                            <div className='col-1'>
                                <span>JML. YANG DIBAYARKAN</span>
                            </div>
                            <div className='col-1'>
                                <span>TANDA-TANGAN</span>
                            </div>
                        </div>
                    </div>
                    <div className='pagebreak'></div>
                </div>
            </div>
        </div>
    );
});