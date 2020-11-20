const express = require('express');
const app = express();

const PORT = 4000;
/**
 * get ==> reading data from the db or file system
 * post ==> creates a new data in db or file system
 * put ==> modify the existing data in DB
 * delete ==> deleting the resource in  DB
 */

app.get("/", (req, res) => {
    res.send('Hi how you are you!!!')
});

app.get("/:name", (req, res) => {
    
    const { params } = req
    console.log('req----', params)
    res.send(`my name is ${params.name}-----`)
});



app.listen(PORT, () => console.log(`server is running on ${PORT}`));