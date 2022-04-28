const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.send("1");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;