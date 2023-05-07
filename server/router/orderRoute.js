import { Router } from "express";
import { isAuthenticatedUser,authorizeRoles } from "../middlewares/auth2.js";
import {
    newOrder,
    getSingleOrder,
    myOrders, 
    getAllOrders,
    updateOrder,
    deleteOrder,
  } from "../controllers/orderController.js";
const router = Router();

router.route("/new").post( isAuthenticatedUser, newOrder);
router.route("/orders/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/myorders").get(isAuthenticatedUser, myOrders);

router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("owner"), getAllOrders);

router.route("/admin/order/:id")
    .put(isAuthenticatedUser, authorizeRoles("owner"), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles("owner"), deleteOrder);
export default router
/**




 */
