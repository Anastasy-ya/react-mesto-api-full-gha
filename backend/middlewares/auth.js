/* eslint-disable no-console */
// const jsonWebToken = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

const JsonWebTokenError = require('../errors/JsonWebTokenError');

const { NODE_ENV, JWT_SECRET } = process.env; //

const auth = (req, _, next) => {
  // const { authorization } = req.headers;
  // // применяется если данные при регистрации переданы в заголовке, а у нас они в body.
  // if (!authorization || !authorization.startsWith('Bearer')) {
  //   throw new JsonWebTokenError('Unauthorized!');
  // }

  console.log('req, поступающий в ф-ю создания токена', req.cookies.jwt);
  const token = req.cookies.jwt;
  let payload;

  try {
    console.log(token, 'token');
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    console.log(err, 'ошибка неудачной авторизации');
    next(new JsonWebTokenError('Unauthorized!')); //!
  }
  req.user = payload;
  console.log(req.user, 'req.user');
  next();
};

module.exports = auth;
