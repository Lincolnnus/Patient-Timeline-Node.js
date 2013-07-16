
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'GSOC Patient Timeline Viewer' });
};