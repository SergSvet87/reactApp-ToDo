import React from 'react'

import removeSvg from '../../assets/img/icons/remove.svg'

import './List.scss'

export const List = ({
  items,
  isRemovable,
  onClick,
  removeList,
  onClickItem,
  activeItem,
}) => {

  return (
    <ul onClick={onClick} className="list">
      {items?.lessons.map((lesson, index) => (
        
        <li
          key={index}
          className={`${activeItem ? 'active' : ''}`}
          onClick={onClickItem => onClickItem(index)}
        >
          <span>
            {lesson.name}
            {lesson.tasks && ` (${lesson.tasks.length})`}
          </span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={removeList}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
