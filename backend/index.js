const express = require('express')
const app = express();
const Port = 3000;

const router = require('/routes/index')

app.use("/api/v1", router);

app.listen(Port, () => {
    console.log('server started on ', Port);
})