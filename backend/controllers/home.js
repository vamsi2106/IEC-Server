const path = require("path");

const Notice = require('../models/notice.models.js');


const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};


const postNotice = async (req, res) => {
  try {
    const { notice } = req.body;
    const newNotice = await Notice.create({ name: notice });
    res.status(200).json({ message: "Notice posted successfully", notice: newNotice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while posting the notice" });
  }
};

const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find({});
    res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching notices" });
  }
};

module.exports = {
  getHome: home,
  postNotice: postNotice,
  getNotices: getNotices
};