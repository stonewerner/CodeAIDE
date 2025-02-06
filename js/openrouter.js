const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPEN_ROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
let OPENAI_API_KEY = "";
let OPEN_ROUTER_API_KEY = "";

export function setApiKey(key) {
  OPEN_ROUTER_API_KEY = key;
}

export async function sendMessage(userMessage, codeContext) {
  if (!OPEN_ROUTER_API_KEY) {
    throw new Error("OpenRouter API key not configured");
  }

  const messages = [
    {
      role: "system",
      content:
        "You are a helpful programming assistant. You help users understand and improve their code.",
    },
    {
      role: "user",
      content: `Here is the code I'm working with:\n\`\`\`\n${codeContext}\n\`\`\`\n\nMy question: ${userMessage}`,
    },
  ];

  try {
    const response = await fetch(OPEN_ROUTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPEN_ROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: messages,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error.error?.message || "Failed to get response from OpenRouter"
      );
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    throw error;
  }
}
