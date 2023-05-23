import express from 'express';
import 'dotenv/config';
import db from '../src/config/database/db';
import helmet from 'helmet';
import session from 'express-session';
import passport from 'passport';
import morgan from 'morgan';
import router from './config/routes/index.routes';

db.openConn();

const app = express();

app.use(helmet());
app.use(
  session({
    secret: 'withoutsecret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ limit: '50mb' }));
app.use(router);
app.use(morgan('tiny'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  return console.log(
    '🚀 \x1b[41m\x1b[37m',
    `SERVIDOR FUNCIONANDO NA PORTA ${port}`,
    '\x1b[0m'
  );
});
