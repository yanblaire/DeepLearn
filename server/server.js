const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8200;

app.use(express.json());
app.use(cors());  // Use the cors middleware

// MongoDB connection
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// LessonPlan schema
const subtopicSchema = new mongoose.Schema({
  name: String,
  resources: [String],
});

const daySchema = new mongoose.Schema({
  dayNumber: Number,
  subjectName: String,
  subtopics: [subtopicSchema],
  assessment: String,
});

const lessonPlanSchema = new mongoose.Schema({
  subjectName: String, // Added subjectName
  days: [daySchema],
});

// LessonPlan model
const LessonPlan = mongoose.model('LessonPlan', lessonPlanSchema);

// Function to extract lesson plan data from the AI response string
function extractLessonPlanData(aiResponse) {
  const daysData = [];
  const lines = aiResponse.split('\n');

  let currentDay = null;

  for (const line of lines) {
    if (line.startsWith('DAY')) {
      if (currentDay !== null) {
        daysData.push(currentDay);
      }
      const [dayNumber, subjectName] = line.match(/\d+:(.+)/);
      currentDay = { dayNumber: parseInt(dayNumber), subjectName: subjectName.trim(), subtopics: [] };
    } else if (line.startsWith('Assessment:')) {
      currentDay.assessment = line.split('Assessment:')[1].trim();
    } else if (line.trim() !== '') {
      const [subtopic, resource] = line.split('(Resource:');
      const subtopicName = subtopic.trim();
      const resourceLink = resource ? resource.split(')')[0].trim() : '';
      currentDay.subtopics.push({ name: subtopicName, resources: [resourceLink] });
    }
  }

  if (currentDay !== null) {
    daysData.push(currentDay);
  }

  return daysData;
}


const courseSchema = new mongoose.Schema({
  subjectName: String,
});

const Course = mongoose.model('Course', courseSchema);

// Sample data
const initialCourses = [
  { subjectName: 'Swift' },
  { subjectName: 'JavaScript' },
  // Add more courses as needed
];

// Initialize courses in the database
Course.insertMany(initialCourses)
  .then(docs => {
    console.log('Courses initialized:', docs);
  })
  .catch(err => {
    console.error('Error initializing courses:', err);
  });

// Route to fetch courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (error) {
    console.error('Error fetching courses from MongoDB:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      msg: error,
    });
  }
});

// Instructor Assistant
app.post('/api/get-instructor-ai-response', async (req, res) => {
  const { userInput } = req.body;
  const instructions = `
  Lesson Plan Creator is equipped to generate 5-day lesson plans for any subject and age group, adapting to various educational needs. It provides detailed daily outlines, including subtopics and resources. The format comprises a main subject, detailed subtopics, resources, and an assessment question for each day. This GPT maintains a formal and academic tone, ensuring professionalism. It's designed to ask for specific details about the lesson plans, such as educational goals and preferred teaching methods, to create more tailored and effective plans. The GPT adapts to different teaching styles and prioritizes clarity, educational alignment, and suitability for diverse age groups. It seeks clarification when necessary, ensuring the plans are engaging, informative, and aligned with educational objectives.
  The format of the lesson plan is 
  
  DAY 1: {subjectName} 
  1.1 - subtopic of {subjectName} with resource to learn 
  1.2 - subtopic with resources to learn
  ...
  
  Resources should be online resources for the student to learn from.
  
  Assessment: A question that covers {subjectName} in DAY 1
  the assessment needs to be a question designed by you to test the understanding of the student 
  
  proceed with subtopics until you feel the topic for DAY 1 is covered comprehensively
  `;

  sendAiRequest(userInput, 'asst_instructor_id', instructions).then(async (response) => {
    res.json({ aiResponse: response });

    // Check if the AI response contains lesson plan information
    if (response.includes('DAY 1:') || response.includes('DAY 2:') || response.includes('DAY 3:') || response.includes('DAY 4:') || response.includes('DAY 5:')) {
      // Extract lesson plan data
      const lessonPlanData = extractLessonPlanData(response);

      // Insert lesson plan data into MongoDB
      try {
        const lessonPlanDocument = new LessonPlan({
          subjectName: subjectName, // Set the subject name here
          days: lessonPlanData,
        });

        await lessonPlanDocument.save();
        console.log('Lesson plan data saved to MongoDB');
      } catch (error) {
        console.error('Error saving lesson plan data to MongoDB:', error);
      }
    }
  }).catch((err) => {
    res.status(500).json({
      error: 'Internal Server Error',
      msg: err,
    });
  });
});

// Retrieving Data
// Add a new route to fetch lesson plan data
app.get('/api/get-lesson-plan-data', async (req, res) => {
  try {
    const lessonPlanData = await LessonPlan.find();
    console.log('Lesson Plan Data:', lessonPlanData); // Log the data to the console
    res.json({ lessonPlanData });
  } catch (error) {
    console.error('Error fetching lesson plan data from MongoDB:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      msg: error,
    });
  }
});

// Add a new route to fetch lesson details by ID
app.get('/api/lesson-details/:lessonPlanId', async (req, res) => {
  const { lessonPlanId } = req.params;

  try {
    const lessonDetails = await LessonPlan.findById(lessonPlanId);
    res.json({ lessonDetails });
  } catch (error) {
    console.error('Error fetching lesson details from MongoDB:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      msg: error,
    });
  }
});


// Student Assistant
app.post('/api/get-student-ai-response', async (req, res) => {
  const { userInput } = req.body;
  const instructions = `
  DAY 1: Introduction to Swift
1.1 - Overview of Swift programming language
Resource: [Swift.org - The Swift Programming Language](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html)
1.2 - Basic syntax and data types
Resource: [Basic syntax and data types from Swift.org](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html)

Assessment: What are two fundamental data types in Swift and how are they used? Provide an example of each.

after the user gives a response from the assessment, rat it from 1 - 10
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
