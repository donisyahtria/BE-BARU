import express from "express";

const router = express.Router();

router.get("/gettest", (req, res) => {
    res.status(200).json({message: "Ini Test"})
})

export default router