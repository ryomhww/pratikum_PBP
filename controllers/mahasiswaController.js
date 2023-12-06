const express = require('express'); 
const router = express.Router();
const db = require('../models/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM  mahasiswa', (error, results) => {
        if (error) {
            console.error('error fetching mahasiwa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

router.get('/:nim', (req, res) => {
    const mahasiswaId = req.params.nim;
    db.query('SELECT * FROM  mahasiswa WHERE nim = ?', [mahasiswaId], (error, results) => {
        if (error) {
            console.error('error fetching mahasiwa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (results.legth === 0) {
            res.status(404).json({ message: 'Mahasiswa not found' });
        } else {
            res.json(results[0]);
        }
    });
});

router.put('/:nim', (req, res) => {
    const mahasiswaNim = req.params.nim;
    const { nama, gender, prodi, alamat } = req.body;

    db.query('UPDATE mahasiswa SET nama=?, gender=?, alamat=? WHERE nim=?', [nama, gender, alamat, mahasiswaNim], (error, results) => {
        if (error) {
            console.error('Error updating mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json("Updating mahasiswa successfully" );
        }
    });
});

router.post('/', (req, res) => {
    const { nim, nama, gender, prodi, alamat } = req.body;

    db.query('INSERT INTO mahasiswa (nim, nama, gender, prodi, alamat) VALUES (?, ?, ?, ?, ?)',
        [nim, nama, gender, prodi, alamat],
        (error, results) => {
            if (error) {
                console.error('Error inserting mahasiswa:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.json({ message: 'Inserting mahasiswa successfully', data: req.body });
            }
        });
});

router.delete('/:nim', (req, res) => {
    const mahasiswaNim = req.params.nim;

    db.query('DELETE FROM mahasiswa WHERE nim = ?', [mahasiswaNim], (error, results) => {
        if (error) {
            console.error('Error deleting mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            if (results.affectedRows > 0) {
                res.json({ message: 'Deleting mahasiswa successfully' });
            } else {
                res.status(404).json({ message: 'Mahasiswa not found' });
            }
        }
    });
});



module.exports = router;