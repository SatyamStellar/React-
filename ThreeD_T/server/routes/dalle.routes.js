import express from 'express';
import * as dotenv from 'dotenv'
import OpenAIApi from 'openai';

dotenv.config();

const openai = new OpenAIApi({
    apiKey: process.env.OpenAI_API_KEY
})

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello dalle" })
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "worng" })
    }
})

export default router;
