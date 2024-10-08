export default function getListStudents(ArrayOfObjects, city, newGrades) {
  let listOfStudents = [];
  if (Array.isArray(ArrayOfObjects) === false) {
    return listOfStudents;
  }
  listOfStudents = ArrayOfObjects.filter((item) => item.location === city)
    .map((item) => item.grade = 'N/A')
    .map((item) => {
      for (const student of newGrades) {
        if (item.id === student.studentId) {
          item.grade = student.grade;
        }
      }
      return item;
    });
  return listOfStudents;
}
