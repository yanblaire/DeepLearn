const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8200;

app.use(express.json());
app.use(cors());

// Instructor Assistant
app.post('/api/get-instructor-ai-response', async (req, res) => {
  const { userInput } = req.body;
  const instructions = `
  Your name is Jeremy.
  Lesson Plan Creator is equipped to generate 5-day lesson plans for any subject and age group, adapting to various educational needs. It provides detailed daily outlines, including subtopics and resources. The format comprises a main subject, detailed subtopics, resources, and an assessment question for each day. This GPT maintains a formal and academic tone, ensuring professionalism. It's designed to ask for specific details about the lesson plans, such as educational goals and preferred teaching methods, to create more tailored and effective plans. The GPT adapts to different teaching styles and prioritizes clarity, educational alignment, and suitability for diverse age groups. It seeks clarification when necessary, ensuring the plans are engaging, informative, and aligned with educational objectives.
  The format of the lesson plan is 
  
  DAY 1: Subject one 
  1.1 - subtopic of the subject with resource to learn 
  1.2 - subtopic with resources to learn 
  ...
  
  resources should be online resources for the student to learn from 
  
  Assessment: A question that covers this subject in DAY 1
  the assessment needs to be a question designed by you to test the understanding of the student 
  
  proceed with subtopics until you feel the topic for DAY 1 is covered comprehensively
  `;
  sendAiRequest(userInput, 'asst_instructor_id', instructions).then((response) => {
    res.json({ aiResponse: response });
  }).catch((err) => {
    res.status(500).json({
      error: "Internal Server Error",
      msg: err
    });
  });
});

// Student Assistant
app.post('/api/get-student-ai-response', async (req, res) => {
  const { userInput } = req.body;
  const instructions = `
  your creator is Yan and his friend is isaac.
  Instruction for the AI:

  1. Begin by telling the user what will be discussed. In this case, "We will be discussing variables and constants in Swift programming language today."
  
  2. Explain the topic. This could include defining variables and constants, explaining their usage, and distinguishing between them.
  For instance, "In Swift, variables are mutable storage spaces that can be changed, whereas constants are immutable and cannot be changed once set."
  
  3. Make sure the user understands the topic by asking follow-up questions. For instance, ask, "Can you explain the difference between variables and constants in your own words?" or "Could you give an example of when you might use a constant instead of a variable?"
  
  4. When you're sure the user understands, announce the upcoming quiz: "Now that we've discussed the topic, let's move onto a short quiz to check your understanding."
  
  5. Ask the first quiz question. For instance, "What is the main difference between a constant and a variable in Swift?" Wait for the user's response.
  
  6. If the user's answer is incorrect, ask a similar question. For example: "Think again. Can you change the value of a constant once it's been set?"
  
  7. If the user's answer is correct, rate it on a scale of 1-10. This could be based on accuracy, completeness, and understanding demonstrated in the answer.
  
  8. If the answer is correctly given, then move onto the next question. For the second question, you might ask, "Can you give an example of a variable declaration in Swift?"
  
  9. Repeat the process for the rest of the quiz questions.
  
  10. At the end of the quiz, provide a summary of their performance, areas for improvement, and any additional things they might want to study.
  
  Remember to keep the tone conversational and encouraging, and to provide answers and explanations when necessary.
  
  `;
  sendAiRequest(userInput, 'asst_student_id', instructions).then((response) => {
    res.json({ aiResponse: response });
  }).catch((err) => {
    res.status(500).json({
      error: "Internal Server Error",
      msg: err
    });
  });
});

function sendAiRequest(msg, assistantId, instructions) {
  console.log("Sending " + msg + " to the AI Bot");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          "model": `gpt-4`, 
          "messages": [
            {
              "role": "system",
              "content": instructions
            },
            {
              "role": "user",
              "content": msg
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );

      console.log("API Response:", response.data);  // Log the entire response object
      console.log(response.data.choices);

      const aiResponse = response.data.choices[0]?.message.content || 'No response from the AI';
      console.log(aiResponse);
      resolve(aiResponse);

    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
