import http from "http";
import express from "express";
import * as socketIo from "socket.io";
import ejs from "ejs";

const app = express();
const server = http.Server(app).listen(3333);
const io = new socketIo.Server(server);
const clients = {};

app.use(express.static("./public"));
app.use("/vendor", express.static("./node_modules"));

app.set("views", "./public");
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.get("/", (req, res) => res.render("index.html"));
