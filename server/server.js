// server/server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require("cors")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8200;

app.use(express.json());
app.use(cors())

// sendAiRequest("Hello AI!")

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
    })
    
    // res.json({ aiResponse });

    // res.status(500).json({ error: 'Internal Server Error' });

});

function sendAiRequest(msg) {
    console.log("Sending " + msg + " to the AI Bot")
    return new Promise(async (resolve, reject) =>  {

    
    try {
        
    
        // Make a request to the OpenAI API
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": msg
                }
            ]
            
        },
        //   {
        //     messages: [
        //         {
        //             "role": "user",
        //             "content": "hello!"
        //         }
        //     ],
        //     // prompt: userInput,
        //     // max_tokens: 100, // You can adjust this parameter based on your needs
        //   },
    
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
          }
        );
        console.log(response.data.choices)
    
        const aiResponse = response.data.choices[0]?.message.content || 'No response from the AI';
        console.log(aiResponse)
        resolve(aiResponse)
    
      } catch (error) {
        console.error(error);
        reject(error)
      }
    })
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
