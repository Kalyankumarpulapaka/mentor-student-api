# Mentor and Student Assignment API
This project implements an API for managing mentors and students using Node.js, Express, and MongoDB. It allows you to create mentors, students, assign students to mentors, change mentors for students, and retrieve information about mentors and their assigned students.  

## Prerequisites  
- Node.js installed on your local machine  
- MongoDB database set up (can be local or hosted)
- 
## Getting Started  
1. **Clone the repository:** `git clone <repository_URL>`  
2. **Install dependencies:** `cd mentor-student-api` then `npm install`  
3. **Set up environment variables:** Create a `.env` file in the root directory and add your MongoDB connection URI: `mongodb+srv://kalyankumarpulapaka:Kalyan8985@cluster0.nupa5fa.mongodb.net/Newtask`  
4. **Start the server:** `node servar.js`  
5. The server should now be running locally. You can use tools like Postman to test the APIs.


## API Endpoints  
- **POST `/api/mentors`**: Create a new mentor.  
- **POST `/api/students`**: Create a new student.  
- **POST `/api/mentors/:mentorId/students`**: Assign students to a mentor.  
- **PUT `/api/students/:studentId/mentor`**: Change the mentor for a student.  
- **GET `/api/mentors/:mentorId/students`**: Get all students assigned to a mentor.  
- **GET `/api/students/:studentId/previous-mentors`**: Get previously assigned mentors for a student.
-  
## Contributing  
Contributions are welcome! Please fork the repository and create a pull request for any improvements or new features.  
ils.
