// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8200;

app.use(express.json());
app.use(cors());

app.post('/api/get-ai-response', async (req, res) => {
    console.log("Called")
    const { userInput } = req.body;
    sendAiRequest(userInput).then((respo) => {
        res.json({aiResponse: respo})
    })
    .catch((err)=> {
        res.status(500).json({
            error: "Internal Server Error",
            msg: err
        })
    });
});

function sendAiRequest(msg) {
    console.log("Sending " + msg + " to the AI Bot");
    return new Promise(async (resolve, reject) => {
      try {
        const assistantId = 'asst_ubvUUWqKRRMSJCtNUNdtcnhA';  // assistant ID
  
        const instructions = `
          Lesson Plan Creator is equipped to generate 5-day lesson plans for any subject and age group, adapting to various educational needs. It provides detailed daily outlines, including subtopics and resources. The format comprises a main subject, detailed subtopics, resources, and an assessment question for each day. This GPT maintains a formal and academic tone, ensuring professionalism. It's designed to ask for specific details about the lesson plans, such as educational goals and preferred teaching methods, to create more tailored and effective plans. The GPT adapts to different teaching styles and prioritizes clarity, educational alignment, and suitability for diverse age groups. It seeks clarification when necessary, ensuring the plans are engaging, informative, and aligned with educational objectives.
  
          The format of the lesson plan is 
  
          DAY 1: Subject one 
          1.1 - subtopic of the subject with resource to learn 
          1.2 - subtopic with resources to learn 
          ...
  
          Resources should be online resources for the student to learn from 
  
          Assessment: A question that covers this subject in DAY 1
          The assessment needs to be a question designed by you to test the understanding of the student 
  
          Proceed with subtopics until you feel the topic for DAY 1 is covered comprehensively
        `;
  
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            "model": `gpt-4`,  // Use the assistant ID here
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
