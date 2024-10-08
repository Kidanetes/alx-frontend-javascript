export default function getListStudentIds(ArrayOfObjects) {
  let listOfStudentsId = [];
  if (Array.isArray(ArrayOfObjects) === false) {
    return listOfStudentsId;
  }
  listOfStudentsId = ArrayOfObjects.map((item) => item.id);
  return listOfStudentsId;
}
