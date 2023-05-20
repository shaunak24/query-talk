import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(config);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send({ message: 'Welcome to QueryTalk' });
});

app.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    const openAiResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    console.log(openAiResponse);

    res.status(200).send({ data: openAiResponse });
  } catch (err) {
    console.error('Failed to fetch response from OpenAI:', err);
    res.status(500).send({ err });
  }
});

app.listen(8080, () =>
  console.log('Server is running on port 8080. http://localhost:8080/')
);
