const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

const dataStorage = ["Do Excercise", "Have Breakfast"];

// const fs = require("fs");

// fs.appendFileSync("logs.txt", "Server started");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.route('/api/tasks')
    .get((req, res) => {

        res.json(dataStorage);
    })
    .post((req, res) => {
        // Write operation
        if (req.body.task && req.body.task.trim() !== '') {
            dataStorage.push(req.body.task.trim());
            res.status(201).json({ success: true });
        } else {
            res.status(400).json({ error: "Empty payloads rejected" });
        }
    });


    app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(` Single-endpoint worker listening on port ${PORT}`);
});




// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.json({
//         status: "Success",
//         message: "Node.js application is running successfully inside Docker!",
//         timestamp: new Date()
//     });
// });

// app.get('/health', (req, res) => {
//     res.status(200).send('OK');
// });

// app.listen(PORT, () => {
//     console.log(`Application is listening on port ${PORT}`);
// });
