const express = require("express");
const router = express.Router();

const {
  create, list, remove, getCurrentMonthTarget
} = require("../controllers/post");

router.post("/", create);
router.get("/", list);
router.get("/:month/:year", getCurrentMonthTarget);
router.delete("/:removeId", remove);


module.exports = router;