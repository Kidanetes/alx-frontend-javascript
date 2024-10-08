export default function getListStudents(ArrayOfObjects, city, newGrades) {
  let listOfStudents = [];
  if (Array.isArray(ArrayOfObjects) === false) {
    return listOfStudents;
  }
  listOfStudents = ArrayOfObjects.filter((item) => item.location === city);
  listOfStudents.map((item) => {
    const item1 = item;
    for (const student of newGrades) {
      if (item1.id === student.studentId) {
        item1.grade = student.grade;
      } else {
        item1.grade = 'N/A';
      }
    }
    return item1;
  });
  return listOfStudents;
}
