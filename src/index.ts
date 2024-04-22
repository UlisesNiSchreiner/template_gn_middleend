import express, { Request, Response } from 'express';
import router from './controller/Router';
import { getConfigFile } from 'properties-manager-js';
import cors from 'cors';
import initMobileVersion from './graph/template/WebMobileVersion';
import initDesktopVersion from './graph/template/desktopVersion';
import initAndroidMobileVersion from './graph/template/AndroidMobileVersion';
const bodyParser = require('body-parser');

initMobileVersion()
initDesktopVersion()
initAndroidMobileVersion()

const app = express();
const port = getConfigFile().PORT || 3000;

app.use(express.json());
app.use(cors({
    "origin": "*"
}));
app.use(bodyParser.json());
app.use('/', router);

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
