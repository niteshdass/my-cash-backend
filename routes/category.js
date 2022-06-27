const express = require("express");
const router = express.Router();

const {
  create, list, remove, listById
} = require("../controllers/category");

router.post("/", create);
router.get("/", list);
router.get("/:userID", listById);
router.delete("/:removeId", remove);


module.exports = router;