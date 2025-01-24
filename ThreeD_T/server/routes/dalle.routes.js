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
        const response = await openai.createImage(
            {
                prompt: prompt,
                n: 1,
                size: '1024x1024',
                responnse_format: 'b64_json'
            }
        );

        const img = response.data.data[0].b64_json;

        res.status(200).json({ photo: img })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'wrong in / route' })
    }
})
export default router;
