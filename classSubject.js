// Declare variables with user information

const userInfo = {
  subjectTitle: "Data Structures and Algorithm",
  classSchedule: "Monday & Friday 8-9am, Tuesday & Thursday 11-12:30",
  classroom: "CorA",
  classInstructor: "Cliff Owen Pascua",
  studentName: "Mikhaella Nadonga"
};

// Function to print user information
function printUserInfo(info) {
  const sentence = `${info.studentName} is currently enrolled in ${info.subjectTitle} with a class schedule of ${info.classSchedule} at room ${info.classroom}. The instructor for the subject is ${info.classInstructor}.`;
  console.log(sentence);
}

// Call the function with user information
printUserInfo(userInfo);


