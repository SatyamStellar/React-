import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY,
});

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "Hello dalle" });
});

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "Prompt is required" });
        }

        // Use the updated method for generating images
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const img = response.data[0].b64_json;

        res.status(200).json({ photo: img });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Error generating image', error: error.message });
    }
});

export default router;

