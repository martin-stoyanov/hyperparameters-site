const express = require('express')
const nextjs = require('next')
const compression = require('compression')
    
const dev = process.env.NODE_ENV !== 'production'
const app = nextjs({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
  if (!dev) {
    server.use(compression({ threshold: 0 }));
  }
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})