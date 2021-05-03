const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("mongodb");
const { default: validator } = require("validator");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    module.exports = client;
    const app = require("./app");
    app.listen(process.env.PORT);
  }
);
