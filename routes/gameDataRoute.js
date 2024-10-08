import express from "express";
const router = express.Router();
import * as usersController from "../controllers/usersController.js";

router.route("/ranking").get(usersController.getRanking);
router
  .route("/user/:id")
  .get(usersController.getUserData)
  .put(usersController.updateFavorite)
  .post(usersController.addToInventory);

export default router;
