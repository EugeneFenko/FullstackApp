module.exports.overview = function(req,res) {
  res.status(200).json({
    message: "Overview"
  })
}

module.exports.analytics = function(req,res) {
  res.status(200).json({
    message: "analytics"
  })
}