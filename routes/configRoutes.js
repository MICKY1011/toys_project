const indexR = require("./index")
const userR = require("./user")
const productR = require("./toys")

exports.routes = (app) => {
    app.use("/" , indexR);
    app.use("/users" , userR);
    app.use("/toys" , productR);
}