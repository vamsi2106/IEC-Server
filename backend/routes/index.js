
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");

const Notice = require('../models/notice.models.js')



let routes = app => {
  router.get("/", homeController.getHome);

  router.post("/upload", uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);

  router.post("/post_notice", homeController.postNotice);
  router.get("/notices", homeController.getNotices);

  return app.use("/", router);
};

module.exports = routes;