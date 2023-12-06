const { response } = require("express");

const postData = {
    nim: '1102019',
    nama: 'bung',
    gender: 'L',
    prodi: 'TI',
    alamat: 'sukaraja'
};

fetch('http://localhost:3000/mahasiswa', {  
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error', error));