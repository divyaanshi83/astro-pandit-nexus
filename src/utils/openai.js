// src/utils/openai.js
export async function callOpenAI(messages) {
  const response = await fetch("/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: messages
    })
  });
  return response.json();
}
