import React from 'react'

import removeSvg from '../../assets/img/icons/remove.svg'

import './List.scss'

export const List = ({
  lessons,
  isRemovable,
  onClick,
  onRemove,
  onClickItem,
  isActive,
  // activeItem,
}) => {
  const removeList = (lesson) => {
    if (window.confirm('Ви дійсно бажаєте видалити цей список?')) {
      onRemove(lesson.title)
    }
  }

  return (
    <ul onClick={onClick} className="list">
      {lessons.map((lesson, index) => (
        <li
          key={index}
          className={`${isActive ? 'active' : ''}`}
          onClick={onClickItem ? () => onClickItem(lesson) : null}
        >
          <i>{lesson.icon}</i>
          <span>
            {lesson.name}
            {lesson.title}
            {lesson.tasks && ` (${lesson.tasks.length})`}
          </span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={() => removeList(lesson)}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
