module.exports.getAll = function(req,res) {
  res.status(200).json({
    message: "Login from control"
  })
}

module.exports.create = function(req,res) {
  res.status(200).json({
    message: "Register from control"
  })
}
