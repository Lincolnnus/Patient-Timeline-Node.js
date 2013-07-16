
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('list',{
    title:'List',
    items:[1990,'shao','express','node.js']
 });
};