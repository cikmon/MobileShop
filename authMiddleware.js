const jwt = require("jsonwebtoken");
const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";
module.exports = function (req, res, next) {
  console.log("kjnkjnjk");
  if (req.url == "/login" && req.method == "POST") {
    console.log("111");
    if (req.body != null && req.body.name == USERNAME
      && req.body.password == PASSWORD) {
      console.log("2222");
      let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
      res.json({ success: true, token: token });
    } else {
      console.log("3333");
      res.json({ success: false });
    }
    console.log("444");
    res.end();
    return;
  } else if ((req.url.startsWith("/products") && req.method != "GET")
    || (req.url.startsWith("/orders") && req.method != "POST")) {
    console.log("666");
    let token = req.headers["authorization"];
    if (token != null && token.startsWith("Bearer<")) {
      console.log("777");
      token = token.substring(7, token.length - 1);
      try {jwt.verify(token, APP_SECRET);
        next();
        return;
      } catch (err) {}
    }
    console.log("888");
    res.statusCode = 401;
    res.end();
    return;
  }
  console.log("999");
  next();
}
