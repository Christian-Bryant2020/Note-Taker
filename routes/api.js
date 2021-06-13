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

router.post("/notes", (req, res) => {
    const newNote = req.body;

    newNote.id = id(),
    console.log(newNote);

    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;

        let savedNotes = JSON.parse(data);
        console.log(savedNotes);
        savedNotes.push(newNote);
        fs.writeFile(`${__dirname}/../db/db.json`, JSON.stringify(savedNotes), (err, data) => {
            if (err) throw err;
            console.log("Saved note");
            res.json(newNote);
        })
    })
})

module.exports = router;