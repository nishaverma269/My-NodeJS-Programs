var fs = require('fs')

var data = {
    name: 'Bob'
}


fs.writeFile('writeData.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
})