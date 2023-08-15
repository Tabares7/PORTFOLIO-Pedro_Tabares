const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/getBotResponse", async (req, res) => {
  const userQuestion = req.body.question;
  // Aquí, llama a la API de OpenAI con tu clave API y obtén la respuesta
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const botResponse = await callOpenAI(userQuestion);
  res.json({ response: botResponse });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
