const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const fileController = require("./fileController");

const app = express();
const apiRouter = require('./routes/api');

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/api', apiRouter);
// respond with main app
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));


/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;



// app.post()

//create a port, give a number
