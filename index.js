const app = require('./app');

const port = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server run on ${port} port!`));
