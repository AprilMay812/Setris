
module.exports = (req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);

  next();
}