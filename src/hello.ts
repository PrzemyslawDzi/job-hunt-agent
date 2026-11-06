import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-haiku-5-5",
  max_tokens: 300,
  messages: [
    {
      role: "user",
      content:
        "Oceń w skali 0-100, czy ta oferta pasuje do juniora React z Rzeszowa: " +
        "'Junior Frontend Developer (React, TypeScript), praca zdalna, 6-8 tys. zł'. " +
        "Odpowiedz jednym zdaniem.",
    },
  ],
});

console.log(response.content);
console.log("Zużycie:", response.usage);