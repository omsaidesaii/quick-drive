const jwt = require ('jsonwebtoken');

function auth (req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status (401)
      .json ({message: 'Access denied. No token provided.'});
  }

  try {
    const decoded = jwt.verify (token, process.env.JWT_SECRET);
    req.user = decoded;
    return next ();
  } catch (err) {
    return res.status (400).json ({message: 'Invalid token.'});
  }
}

module.exports = auth;