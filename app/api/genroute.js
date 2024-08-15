import { NextResponse } from "next/server";
import OpenAI from "openai";

const simplifiedSystemPrompt = `
You are tasked with creating flashcards for a specific course. Each flashcard should clearly present a question or statement on one side and a concise answer on the other. Here are the guidelines:

1. **Focus:** Concentrate on essential topics covered in the course.
2. **Simplicity:** Use straightforward language to explain concepts.
3. **Variety:** Mix up the types of questions to engage learners.
4. **Order:** Arrange the flashcards logically, starting with basics and moving to advanced topics.
5. **Update:** Regularly review and update the flashcards to reflect current knowledge.

Example:
- Front: What is the Pythagorean theorem?
- Back: The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides.

Generate flashcards in the following format:
{
    "flashcards":[{ "front": str, "back": str }]
}`;

export async function POST(req) {
  const openai = OpenAI();
  const data = await req.text();

  const completion = await openai.chat.completion.create({
    messages: [
      {
        role: "system",
        content: simplifiedSystemPrompt,
      },
      {
        role: "user",
        content: data,
      },
    ],
    model: "gpt-4o",
    response_format: { type: "json_object" },
  });

  const flashcards = JSON.parse(completion.choices[0].message.content);

  // Validate and filter flashcards here if necessary
  const validFlashcards = flashcards.flashcards.filter(card => card.front && card.back);

  return NextResponse.json(validFlashcards);
}
