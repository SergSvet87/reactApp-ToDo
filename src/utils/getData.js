export const getData = () => {

  return fetch('https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json')
    .then((res) => res.json())
}