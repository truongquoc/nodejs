var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req,res) {
//   res.send("hello");
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});
router.get('/home',function(req,res,next) {
  return next();
  res.render('index',{title: 'NGOTRUONGQUOC'});
})

router.get('/contact',(req,res,next) => {
  res.render('contact');
} );
router.get('/blog',(req,res,next) => {
  res.render('clean-blog/index.ejs');
});
router.get('/blog/about',(req,res,next) => {
  res.render('clean-blog/about.ejs');
})
router.get('/blog/contact',(req,res,next) => {
  res.render('clean-blog/contact.ejs');
});
router.get('/blog/post',(req,res,next) => {
  res.render('clean-blog/post.ejs');
})
module.exports = router;
