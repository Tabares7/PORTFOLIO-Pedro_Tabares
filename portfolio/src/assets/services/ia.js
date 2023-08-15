const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function getResponse(question) {
  const response = await openai.complete({
    prompt: question,
    maxTokens: 150,
  });
  return response.data.choices[0].text.trim();
}

document.getElementById("sendButton").addEventListener("click", async () => {
  const userQuestion = document.getElementById("userInput").value;
  const botResponse = await getResponse(userQuestion);
  displayMessage(botResponse); // Función que muestra el mensaje en la interfaz
});
