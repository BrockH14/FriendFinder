var tableData = require("../data/answerData");

module.exports = function(app) {

app.get("/api/answers", function(req, res) {
    res.json(tableData);
});
app.post("/api/answers", function(req, res) {
      tableData.push(req.body);
      res.json(true);
});
app.post("/api/clear", function(req, res) {
    tableData.length = 0;
    res.json({ ok: true });
  });
};
