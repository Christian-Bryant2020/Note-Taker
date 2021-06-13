const fs = require('fs');
const id = require('generate-unique-id');
const router = require('express').Router();

router.get("/notes", (req, res) => {
    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
});



module.exports = router;