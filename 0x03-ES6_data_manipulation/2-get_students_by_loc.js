export default function getListStudents(ArrayOfObjects, city) {
  let listOfStudentsId = [];
  if (Array.isArray(ArrayOfObjects) === false) {
    return listOfStudentsId;
  }
  listOfStudentsId = ArrayOfObjects.filter((item) => item.location === city);
  return listOfStudentsId;
}
