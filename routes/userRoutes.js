const express = require("express");
const {
  createUser,
  getUsers,
  editUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
