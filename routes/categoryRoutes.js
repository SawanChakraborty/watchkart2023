import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js'

import {
    categoryController,
    createCategoryController,
    deleteCategorycontroller,
    singleCategoryController,
    updateCategoryController
} from '../controllers/categoryController.js'

const router = express.Router()

router.post("/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController)

//update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)

export default router

//getAll category
router.get('/get-category', categoryController)

//single category
router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategorycontroller)