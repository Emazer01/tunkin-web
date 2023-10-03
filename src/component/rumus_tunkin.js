const tun_ulp = 1860000;
const tun_beras = 130356;
const index_gaji_pokok = [
  [
    2735300, 2777700, 2777700, 2865300, 2865300, 2955700, 2955700, 3048900, 3048900, 3145000, 3145000, 3244200, 3244200, 3346500, 3346500, 3452000, 3452000, 3560800, 3560800, 3673100, 3673100, 3788900, 3788900, 3908400, 3908400, 4031700,
    4031700, 4158600, 4158600, 4289900, 4289900, 4425200, 4425200,
  ],
  [
    2820800, 2820800, 2909800, 2909800, 3001500, 3001500, 3096200, 3096200, 3193800, 3193800, 3294500, 3294500, 3396400, 3396400, 3505600, 3505600, 3616100, 3616100, 3730100, 3730100, 3847700, 3847700, 3969100, 3969100, 4094200, 4094200,
    4223300, 4223300, 4356500, 4356500, 4493900, 4493900, 4635600,
  ],
  [
    2909100, 2909100, 3000800, 3000800, 3095400, 3095400, 3193000, 3193000, 3293700, 3293700, 3397600, 3397600, 3504700, 3504700, 3615200, 3615200, 3729200, 3729200, 3846800, 3846800, 3965100, 3965100, 4093200, 4093200, 4222300, 4222300,
    4355400, 4355400, 4492800, 4492800, 4634400, 4634400, 4780600,
  ],
];
const index_tunjab = [360000, 490000, 540000];
const index_tunkin = [1968000, 2089000, 2216000, 2350000, 2493000, 2702000, 2928000, 3319000, 3781000, 4551000, 5183000, 7271000, 8562000, 11670000, 14721000, 20695000, 29085000, 34902000, 37810500, 43627500];
const index_ptkp = [54000000, 58500000, 63000000, 67500000, 58500000, 63000000, 67500000, 72000000, 112500000, 117000000, 121500000, 126000000];

class Person {
  constructor(nama, pangkat, jabatan, mkg, stat_kawin, grade) {
    this.nama = nama;
    this.pangkat = pangkat;
    this.jabatan = jabatan;
    this.mkg = mkg;
    this.stat_kawin = stat_kawin;
    this.grade = grade;
  }
  gaji() {
    return index_gaji_pokok[this.pangkat][this.mkg];
  }
  tunkin() {
    return index_tunkin[this.grade];
  }
  tunjab() {
    return index_tunjab[this.jabatan];
  }
  ptkp() {
    return index_ptkp[this.stat_kawin];
  }
}

function gaji_no_tunkin(gaji_pokok, tun_istri, tun_anak, iuran_pensiun, tunjab) {
  gaji_bruto = gaji_pokok + tun_istri + tun_anak + tunjab + tun_beras + tun_ulp;
  gaji_netto = gaji_bruto - iuran_pensiun;
  return gaji_netto;
}

function gaji_tunkin(gaji_pokok, tunkin, tun_istri, tun_anak, iuran_pensiun, tunjab) {
  gaji_bruto = gaji_pokok + tun_istri + tun_anak + tunjab + tunkin + tun_beras + tun_ulp;
  gaji_netto = gaji_bruto - iuran_pensiun;
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

function pph21_tunkin(gaji_pokok, tunkin, tunjab, ptkp) {
  var tun_istri = 0.1 * gaji_pokok;
  var tun_anak = 0.04 * gaji_pokok;
  var iuran_pensiun = 0.0475 * gaji_pokok;

  var pph21tunkin = pph21(gaji_tunkin(gaji_pokok, tunkin, tun_istri, tun_anak, iuran_pensiun, tunjab), ptkp);
  var pph21notunkin = pph21(gaji_no_tunkin(gaji_pokok, tun_istri, tun_anak, iuran_pensiun, tunjab), ptkp);
  var pajak = pph21tunkin - pph21notunkin;

  console.log(`pph21 dengan tunkin = ${pph21tunkin}`);
  console.log(`pph21 tanpa tunkin = ${pph21notunkin}`);

  return pajak;
}

function tunkin(gaji_pokok, tunkin, tunjab, ptkp) {
  var tun_khusus = pph21_tunkin(gaji_pokok, tunkin, tunjab, ptkp);
  var tunkin_netto = tunkin;

  console.log(`PPh21 Tunkin = ${tun_khusus}`);
  console.log(`Anggaran Tunkin yang diajukan = ${tunkin_netto + tun_khusus}`);
  return tunkin_netto;
}

const pak_budi = new Person("Budi Susanto", 0, 0, 0, 0, 5);
var gaji_pokok_budi = pak_budi.gaji(); //letda
var tunkin_budi = pak_budi.tunkin(); //grade 6
var tunjab_budi = pak_budi.tunjab(); //eselon 5A
var ptkp_budi = pak_budi.ptkp(); //TK0

var dibayarkan = tunkin(gaji_pokok_budi, tunkin_budi, tunjab_budi, ptkp_budi);
console.log(`Tunkin dibayarkan ke Pak Budi = ${dibayarkan}`);
