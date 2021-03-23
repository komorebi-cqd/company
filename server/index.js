const express = require('express');
const app = express()

const api = require('./api');

app.use(api);


module.exports = app;

if (require.main === module) {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
      console.log(`API server listening on port ${port}`)
    })
}
  