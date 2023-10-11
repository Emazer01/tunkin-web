const tun_ulp = 1860000;
const sandi_jumlah = 350000;

function gaji_tunkin(gaji_pokok, tunkin, jumlah_tunjangan, jumlah_potongan) {
  gaji_bruto = gaji_pokok + tunkin + jumlah_tunjangan;
  gaji_netto = gaji_bruto - jumlah_potongan;
  return gaji_netto;
}

function pph21(gaji_netto, ptkp) {
  var netto_setahun = 12 * gaji_netto;
  var pkp = netto_setahun - ptkp;
  console.log("pkp ", pkp);

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

function pph21_tunkin(gaji_pokok, tunkin, tunjab, stat_ptkp, ptkp, stat_sandi, kode_pangkat) {
  //TUNJANGAN BERAS
  var jumlah_beras = 0;
  jumlah_beras += parseInt(stat_ptkp.slice(-3, -2));
  var tun_beras = (jumlah_beras * 10 + 18) * 7242;

  //TUNJANGAN PASANGAN DAN ANAK
  if (stat_ptkp.startsWith("T")) {
    var tun_pasangan = 0;
  } else if (stat_ptkp.startsWith("K")) {
    var tun_pasangan = 0.1 * gaji_pokok;
    jumlah_beras += 1;
  }
  var tun_anak = parseInt(stat_ptkp.slice(-3, -2)) * 0.02 * gaji_pokok;

  //TUNJANGAN SANDI
  var tun_sandi = 0;
  if (stat_sandi == "1") {
    tun_sandi = sandi_jumlah;
  }

  //POTONGAN
  var iuran_pensiun = 0.0475 * gaji_pokok;
  var pot_bpjs = 0.02 * gaji_pokok;
  var pot_tht = 0.037 * gaji_pokok;

  //JUMLAH
  var jumlah_tunjangan = tun_pasangan + tun_anak + tunjab + tun_beras + tun_ulp + tun_sandi;
  var jumlah_potongan = iuran_pensiun + pot_bpjs + pot_tht;

  var pajak = 0;
  if (kode_pangkat < 31 || (kode_pangkat < 71 && kode_pangkat >= 51)) {
    return pajak;
  } else {
    var pph21tunkin = pph21(gaji_tunkin(gaji_pokok, tunkin, jumlah_tunjangan, jumlah_potongan), ptkp);
    var pph21notunkin = pph21(gaji_tunkin(gaji_pokok, 0, jumlah_tunjangan, jumlah_potongan), ptkp);
    pajak = pph21tunkin - pph21notunkin;
    return pajak;
  }
}

function tunkin(gaji_pokok, tunkin, tunjab, stat_ptkp, ptkp, stat_sandi, kode_pangkat) {
  var tun_khusus = pph21_tunkin(gaji_pokok, tunkin, tunjab, stat_ptkp, ptkp, stat_sandi, kode_pangkat);
  var tunkin_netto = tunkin;

  console.log(`PPh21 Tunkin = ${tun_khusus}`);
  console.log(`Anggaran Tunkin yang diajukan = ${tunkin_netto + tun_khusus}`);
  return tunkin_netto;
}

var _gaji_pokok = 5407400;
var _tunkin = 14721000;
var _tunjab = 3250000;
var _stat_ptkp = "K0/1";
var _ptkp = 58500000;
var _stat_sandi = "1";
var kode_pangkat = 94;

var dibayarkan = tunkin(_gaji_pokok, _tunkin, _tunjab, _stat_ptkp, _ptkp, _stat_sandi, kode_pangkat);
console.log(`Tunkin dibayarkan = ${dibayarkan}`);
