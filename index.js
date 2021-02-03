const http = require('http')
const EventEmitter = require('events')
const fs = require('fs')

class User extends EventEmitter {
    constructor () {
        super()
    }
}

const port = 8000

const user = new User()

const templateBody = fs.readFileSync(`${__dirname}/templates/template-body.html`, 'utf-8')

const server = http.createServer((request, response) => {
    const path = request.url
    if (path == "/") {
        response.writeHead(200, {'content-type' : 'text/html'})
        console.log(user)
    }
})

server.listen(port, 'localhost', () => {
    console.log(`Listening to requests on port ${port}`)
})