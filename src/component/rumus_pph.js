const tun_ulp = 1860000;

function gaji_tunkin(gaji_pokok, tunkin, tun_pasangan, tun_anak, iuran_pensiun, tunjab, pot_bpjs, pot_tht, tun_beras) {
  gaji_bruto = gaji_pokok + tun_pasangan + tun_anak + tunjab + tun_beras + tun_ulp + tunkin;
  gaji_netto = gaji_bruto - iuran_pensiun - pot_bpjs - pot_tht;
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

var _gaji_pokok = 5407400;
var _tunkin = 14721000;
var _tunjab = 3250000;
var _stat_ptkp = "K0/1";
var _ptkp = 58500000;

var tunjangan_khusus = pph21_tunkin(_gaji_pokok, _tunkin, _tunjab, _stat_ptkp, _ptkp);
var pen_bruto_tunkin = tunjangan_khusus + _tunkin;

console.log(`Tunkin dibayarkan = ${_tunkin}`);
console.log(`Tunjangan Khusus = ${tunjangan_khusus}`);
console.log(`Penghasilan Bruto = ${pen_bruto_tunkin}`);
