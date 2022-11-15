import React from 'react'

import editSvg from '../../assets/img/icons/edit.svg'

import './Tasks.scss'

export const Tasks = () => {
  return (
    <div className="todo__tasks tasks">
      <h2 className="tasks__title">
        FrontEnd
        <img src={editSvg} alt="Edit Icon" />
      </h2>

      <div className="tasks__item">
        <label className="checkbox">
          <input type="checkbox" />
        </label>
      </div>
    </div>
  )
}
