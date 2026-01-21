import { Router} from "express";
import {test} from "../controllers/handleTest.js"

const router = Router();

// making HTTP request
router.get('/test',test);


export default router;

