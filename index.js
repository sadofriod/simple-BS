const app = require('express')();
const fs = require('fs');
app.get('/', (_, res) => {
  res.send(fs.readFileSync('./index.html', 'utf8'));
})

app.get('/api', (_, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(8080, () => {
  console.log('Server is running at port 8080');
})