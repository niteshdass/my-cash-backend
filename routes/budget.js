const express = require("express");
const router = express.Router();

const {
  create, list, update, like, remove, budgetById, currentMonth, listById
} = require("../controllers/budget");

router.post("/create", create);
// router.put("/update", update);
// router.put("/like", like);
router.get("/", list);
router.get("/:userId", listById);
router.get("/:userId/:field/:value", budgetById);
router.get("/month/:userID/:month/:year", currentMonth);
router.delete("/:removeId", remove);

module.exports = router;