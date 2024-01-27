const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GENAI_KEY } = require("./constants");

// Access your API key as an environment variable (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(GENAI_KEY);

// ...

// ...
