/* eslint-disable no-console */
import express from 'express';
import compression from 'compression';

const app = express();
const portNumber = 3000;
const sourceDir = 'build';

app.use(compression());
app.use(express.static(sourceDir, {}));

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
