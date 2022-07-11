const express = require("express");
const router = express.Router();

const {
  create, list, remove, getCurrentMonthTarget, getCurrentMonthTargetByUser
} = require("../controllers/post");

router.post("/", create);
router.get("/", list);
router.get("/:user_id", getCurrentMonthTarget);
router.get("/:user_id/:month/:year", getCurrentMonthTargetByUser);
router.delete("/:removeId", remove);


module.exports = router;