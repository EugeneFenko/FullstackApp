module.exports.getAll = (req, res) => {
  res.status(200).json({
    message: 'Login from control',
  });
};

module.exports.create = (req, res) => {
  res.status(200).json({
    message: 'Register from control',
  });
};
