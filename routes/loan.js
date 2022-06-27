const express = require("express");
const router = express.Router();

const {
  create, list, remove, listById
} = require("../controllers/loan");

router.post("/", create);
router.get("/", list);
router.get("/:userId", listById);
router.delete("/:removeId", remove);


module.exports = router;