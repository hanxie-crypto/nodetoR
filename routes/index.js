var express = require('express');
var rio = require('rio');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var options = {
        host: '127.0.0.1',
        prot: 6311,
        filename: "E:\\commonproj\\nodetoR\\demo.R",
        entrypoint: "main",
        data:[6000,6000],
        callback: function(err, val) {
            if (!err) {
                console.log("Return" + val);
                return res.redirect(val);
            } else {
                console.log(err);
                console.log('失败');
                return res.send({
                    'success': false
                })
            }
        }
    }
    rio.enableDebug(true);
    rio.e(options);
});

module.exports = router;