const axios = require("axios");

const chatBot = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "system",
           content: `
            You are an AI tourism assistant for MP Tourism.

            Rules:
            1. Answer ONLY tourism and travel related questions.
            2. Refuse unrelated queries politely.
            3. Keep answers under 30 to 60 words.
            4. Use short sentences.
            5. Be friendly and helpful.
            6. Avoid long explanations.
              `,
          },
          {
            role: "user",
            content: message,
          },
        ],
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply =
      response.data.choices[0].message.content;
    res.status(200).json({
      reply,
    });
  } catch (error) {

  console.log("CHATBOT ERROR");

  console.log(
    error.response?.data ||
    error.message ||
    error
  );

  res.status(500).json({
    message: "Server Error",
  });
}
};

module.exports = {
  chatBot,
};