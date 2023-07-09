import express from "express";
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  paymentVerication,
} from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Buy Subscription

router.route("/subscribe").get(isAuthenticated, buySubscription);

//verify Pyment and save refernce in DB
router.route("/paymentverification").post(isAuthenticated, paymentVerication);

//Get Razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
