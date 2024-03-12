const express = require('express')

const x = "1";

const app = express()

app.get('/', (req, res) => {
    res.send('hello')
    process.exit(1)

})

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})

const obj = {
    hello: function () {
        console.log('hello');
    }
}