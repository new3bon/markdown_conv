var express = require('express');
var router = express.Router();
var markdown = require('markdown').markdown

// POSTを受ける
router.post('/', function(req, res, next) {
  fileContent = req.files.file.data.toString('utf8'); // ファイルの内容
  res.render('upload', { content: markdown.toHTML(fileContent) });
});

module.exports = router;
