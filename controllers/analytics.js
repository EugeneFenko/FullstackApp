module.exports.overview = function (req, res) {
  res.status(200).json({
    overview: {
      stats: req.body.stats,
    },
  });
};

module.exports.analytics = function (req, res) {
  res.status(200).json({
    message: 'analytics',
  });
};
