import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    let decodeData;
    if (token) {
      decodeData = jwt.verify(token, 'test');
      req.useId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);
      req.useId = decodeData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
export default auth;
