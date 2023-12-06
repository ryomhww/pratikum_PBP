const { response } = require("express");

const mahasiswaNim ='1102020';
const updateData = {
    nama: 'ryo',
    gender: 'L',
    prodi: 'TE',
    alamat: 'Jl. Cibolang Kaler'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));