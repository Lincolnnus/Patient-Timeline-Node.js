
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('list',{
    title:'List',
    items:[1990,'shao','express','node.js']
 });
};
exports.show = function(req,res){
  res.send(req.params.uid);
}
