// Importing packages
const express = require("express");
const upload = require("express-fileupload");

// Initialising express through app
const app = express()

const port = 10000;

// Middleware
app.use(upload())

// GET request for the index.html page
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// POST request to access the file submitted
app.post('/', (req, res) => {
    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        console.log(filename)
        
// Moving the file to uploads folder
        file.mv('./uploads/' + filename, function (err) {
            if (err) {
                res.send(err)
            }
            else {
                res.send("File Uploaded")
            }
        })
    }
})


app.listen(port, () => {
    console.log(`Server initiated succesfully at ${port}`);
  });