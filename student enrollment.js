
let dsa = [];
let pl = [];
let networks = [];

function enroll(subject, name) {
  subject.push(name);
  console.log(`Student ${name} enrolled in ${getSubjectName(subject)}.`);
}

function unenroll(subject) {
  console.log(`Currently enrolled students in ${getSubjectName(subject)}: ${subject.join(', ')}`);
  let nameToUnenroll = prompt("Enter the name of the student to unenroll:");
  let index = subject.indexOf(nameToUnenroll);
  if (index !== -1) {
    subject.splice(index, 1);
    console.log(`Student ${nameToUnenroll} unenrolled from ${getSubjectName(subject)}.`);
  } else {
    console.log(`Student ${nameToUnenroll} not found in ${getSubjectName(subject)}.`);
  }
}

function getSubjectName(subject) {
  if (subject === dsa) return "DSA";
  if (subject === pl) return "PL";
  if (subject === networks) return "Networks";
}

while (true) {
  let subjectName = prompt("Select a subject (DSA, PL, Networks):");
  let subject;
  switch (subjectName) {
    case "DSA":
      subject = dsa;
      break;
    case "PL":
      subject = pl;
      break;
    case "Networks":
      subject = networks;
      break;
    default:
      console.log("Invalid subject selection.");
      continue;
  }
  
  let operation = prompt("Select an operation (Enroll, Unenroll, Select Another Subject, Exit):");
  switch (operation) {
    case "Enroll":
      let name = prompt("Enter the name of the student:");
      enroll(subject, name);
      break;
    case "Unenroll":
      unenroll(subject);
      break;
    case "Select Another Subject":
      continue;
    case "Exit":
      console.log("Enrolled Students:");
      console.log(`DSA: ${dsa.join(', ')}`);
      console.log(`PL: ${pl.join(', ')}`);
      console.log(`Networks: ${networks.join(', ')}`);
      break;
    default:
      console.log("Invalid operation selection.");
  }
}

