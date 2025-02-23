var express = require('express');
var router = express.Router();
var micromark = require('micromark').micromark
var gfm = require('micromark-extension-gfm').gfm
var gfmHtml = require('micromark-extension-gfm').gfmHtml

// POSTを受ける
router.post('/', function(req, res, next) {
  fileContent = req.files.file.data.toString('utf8'); // ファイルの内容
  res.render('upload', { content: micromark(fileContent,{
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()]
  }) });
});

module.exports = router;
