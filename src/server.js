const express = require("express");
const path = require("path");
const { render404Page } = require("./controllers/errors");
const { rootDir } = require("./helpers/path");

const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(rootDir, "public")));

server.set("view engine", "ejs");
server.set("views", path.join(rootDir, "views"));

server.use("/admin", adminRoutes);
server.use("/", shopRoute);

// Catch all route
server.use(render404Page);

server.listen(3000);
