import React from 'react'

import { useFetch } from './utils/useFetch'
import { List } from './components/List/List'
import { Tasks } from './components/Tasks/Tasks'
import allTasksSvg from './assets/img/icons/list.svg'

import './App.scss'

const URL =
  'https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json'

function App() {
  const data = useFetch(URL)
  // localStorage.setItem('lessons', JSON.stringify(data)
  const [page, setPage] = React.useState()
  const [lessons, setLessons] = React.useState()
  const [activeItem, setActiveItem] = React.useState(false)

  React.useEffect(() => {
    if (data) {
      setPage(data[0])
      setLessons(data[0])
    }
  }, [data])

  // const onEditListTitle = (id, title) => {
  //   const newList = lessons.map((item) => {
  //     if (item.id === id) {
  //       item.name = title
  //     }
  //     return item
  //   })
  //   setLessons(newList)
  // }

  const onClickItem = (index, name) => {
    const newList = lessons.map((item) => {
      if (item.index === index) {
        item.name = name
      }
      return item
    })
    setLessons(newList)
  }

  return (
    <div>
      <h1>{page?.title}</h1>
      <main className="todo">
        <aside className="todo__sidebar sidebar">
          <h3 className="sidebar__title">
            <img
              src={allTasksSvg}
              alt="All tasks Icon"
              width={28}
              height={28}
            />
            All tasks
          </h3>
          {lessons ? (
            <List
              items={lessons}
              onClickItem={onClickItem}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              isRemovable
            />
          ) : (
            'Loading...'
          )}
        </aside>
        {lessons && (
            <Tasks
              // key={key}
              list={lessons?.lessons}
              // activeItem={activeItem}
            />
          )}
      </main>
    </div>
  )
}

export default App
