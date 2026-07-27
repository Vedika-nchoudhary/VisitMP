const axios = require("axios");

const generateItinerary = async (req, res) => {

  try {

    const { startDestination, days, budget, travelers, interests } = req.body;

   const prompt = `
Create a multi-city travel itinerary in Madhya Pradesh.

Starting point: ${startDestination}
Trip duration: ${days} days
Budget: ${budget}
Travelers: ${travelers}
Interests: ${interests}

IMPORTANT INSTRUCTIONS:
- Day 1 city MUST BE EXACTLY: "${startDestination}"
- Do NOT skip the starting city under any condition
- Route MUST start with "${startDestination}"
- First entry in route array MUST be "${startDestination}"
- Do NOT assume popular tourist flows (like Indore → Pachmarhi) unless explicitly valid from start city
- If only 1 city is possible, keep itinerary single-city
- Include realistic travel flow between cities
- Add approximate timing for each activity
- Use Indian travel style timing (morning, afternoon, evening OR clock times)
- Include travel time between cities (approx hours)
- Keep timings realistic (no overcrowding)
If city is the starting point:
- travelTime MUST be null or empty string
- do NOT write "N/A" or "Starting point"

Return ONLY valid JSON:

{
  "tripName": "",
  "route": ["city1", "city2"],
  "days": [
    {
      "day": 1,
      "city": "",
      "travelTime": "",
      "schedule": [
        {
          "time": "9:00 AM - 12:00 PM",
          "activity": ""
        }
      ],
      "food": "",
      "hotel": "Suggest only real and known hotels (e.g. Taj Lakefront Bhopal, Radisson, Marriott, Lemon Tree). Do NOT invent fake hotel names."
    }
  ]
}
`;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "deepseek/deepseek-chat",

        messages: [
          {
            role: "user",
            content: prompt,
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

    let text =
      response.data.choices[0].message.content;

    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");

    const jsonData = JSON.parse(text);

    res.status(200).json(jsonData);

  } catch (error) {

    console.log(error.response?.data || error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  generateItinerary,
};