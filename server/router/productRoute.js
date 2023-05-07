import { Router } from "express";
const router = Router();
import{ getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getAdminProducts,getProductReviews,deleteReview} from '../controllers/productController.js'
import { isAuthenticatedUser,authorizeRoles } from "../middlewares/auth2.js";
router.route('/products').get(getAllProducts );

// router.route('/product/new').get( verifyAdmin, createProduct ) // only admin
router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin", "owner"), getAdminProducts); //pending

router.route('/admin/products/new')
    .post(isAuthenticatedUser , authorizeRoles("admin", "owner"), createProduct ) 

router.route('/admin/products/:id')
    .put( isAuthenticatedUser ,authorizeRoles("admin", "owner"), updateProduct)
    .delete(isAuthenticatedUser ,authorizeRoles("admin", "owner"), deleteProduct )

router.route('/products/:id').get( getProductDetails ) 

router.route("/review").put(isAuthenticatedUser, createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);
export default router;