export default function getListStudents(ArrayOfObjects) {
  let total = 0;
  if (Array.isArray(ArrayOfObjects) === false) {
    return total;
  }
  total = ArrayOfObjects.reduce((tot, item) => tot + item.id, 0);
  return total;
}
