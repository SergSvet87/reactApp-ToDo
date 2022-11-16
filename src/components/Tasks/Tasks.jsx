import React from 'react'

import editSvg from '../../assets/img/icons/edit.svg'

import './Tasks.scss'

export const Tasks = (list) => {
  return (
    <div className="todo__tasks tasks">
      {list && (
        <>
          <h2 className="tasks__title">
            {list.title}
            <img src={editSvg} alt="Edit Icon" />
          </h2>

          <div className="tasks__items items">
            {list?.list.map((task, index) => (
              <div className="items__task task" key={index}>
                <div className="task__checkbox">
                  <input id="check" type="checkbox" />
                  <label htmlFor="check">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                        stroke="#b4b4b4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>

                <div className="task__description">
                  <p className="task__type">{task.type}</p>
                  <p className="task__key">{task.keyPoints}</p>
                  <p className="task__link">{task.links}</p>

                  {/* {task && (
                    <ul className="task__subtitle">
                      {task.keyPoints.map((item, index) => (
                        <li className="task__keypoints" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {task && (
                    <ul className="task__links">
                      {task.links.map((item, index) => (
                        <li className="task__link" key={index}>
                          <a href={item}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  )} */}

                  <div className="task__published">
                    <input id="published" type="checkbox" checked />
                    <label htmlFor="published">Published</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
