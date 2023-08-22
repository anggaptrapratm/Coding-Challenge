// Menyimpan data massa dan tinggi Udin dan Nanang ke dalam sebuah variabel

// catatan : massa dalam bentuk kg dan tinggi dalam bentuk meter

// Data 1

// Berat dan tinggi Udin
const beratUdin1 = 78;
const tinggiUdin1 = 1.69;

// Berat dan tinggi Nanang
const beratNanang1 = 92;
const tinggiNanang1 = 1.95;

// Data 2

// Berat dan tinggi Udin
const beratUdin2 = 95;
const tinggiUdin2 = 1.88;

// Berat dan Tinggi Nanang
const beratNanang2 = 85;
const tinggiNanang2 = 1.76;

// Hitung BMI Udin dan Nanang

// Data 1
const bmiUdin1 = beratUdin1 / (tinggiUdin1 ** 2);
const bmiNanang1 = beratNanang1 / (tinggiNanang1 ** 2);

// Data 2
const bmiUdin2 = beratUdin2 / (tinggiUdin2 ** 2);
const bmiNanang2 = beratNanang2 / (tinggiNanang2 ** 2);

// Membandingkan BMI menggukan Boolean
const udinLebihTinggi1 = bmiUdin1 > bmiNanang1;
const udinLebihTinggi2 = bmiUdin2 > bmiNanang2;

// Tampilkan hasil di konsol
console.log(`Data 1: BMI Udin (${bmiUdin1.toFixed(1)}) ${udinLebihTinggi1 ? 'lebih tinggi' : 'lebih rendah'} dari Nanang (${bmiNanang1.toFixed(1)})`);
console.log(`Data 2: BMI Udin (${bmiUdin2.toFixed(1)}) ${udinLebihTinggi2 ? 'lebih tinggi' : 'lebih rendah'} dari Nanang (${bmiNanang2.toFixed(1)})`);

