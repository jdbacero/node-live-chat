const http = require('http')
const EventEmitter = require('events')

class User extends EventEmitter {
    constructor (name) {
        this.name = name
        super()
    }
}

const port = 8000


const server = http.createServer((request, response) => {
    response.end(`Server on port ${port} has started.`)
})

server.listen(port, 'localhost', () => {
    console.log(`Listening to requests on port ${port}`)
})