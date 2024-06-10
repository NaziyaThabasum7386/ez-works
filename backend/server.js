const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8002;

// Define the path to the JSON file
const dataFilePath = path.join(__dirname, 'submittedEmails.json');

app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware to allow all origins

// Helper function to read data from the JSON file
const readDataFromFile = () => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
};

// Helper function to write data to the JSON file
const writeDataToFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// API endpoint to submit email
app.post('/api', (req, res) => {
  const { email } = req.body;

  // Check if the email ends with "@ez.works"
  if (email.endsWith("@ez.works")) {
    return res.status(422).json({ message: "Email ending with @ez.works is not allowed" });
  }

  // Generate a UUID for the email submission
  const id = uuid.v4();

  // Read the current data from the file
  const submittedEmails = readDataFromFile();

  // Store the submitted email along with its ID
  submittedEmails.push({ id, email });

  // Write the updated data back to the file
  writeDataToFile(submittedEmails);

  // Return the email ID in the response
  res.status(200).json({ message: "Form submitted successfully", id, email });
});

// API endpoint to get all submitted email IDs
app.get('/docs', (req, res) => {
  const submittedEmails = readDataFromFile();
  res.status(200).json(submittedEmails);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
