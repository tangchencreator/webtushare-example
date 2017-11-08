var express = require('express');
var request = require('request');
var router = express.Router();
var api = "http://localhost:4000/tushareapi/realtimeboxoffice";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('demo/index', { title: 'webtushare', subtitle: 'tushare的接口实现' });
});

router.get('/realtime', function(req, res, next){
    request(api, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body)
          res.render('demo/list', {movices: JSON.parse(body)});
        }
    })
   
});

module.exports = router;
