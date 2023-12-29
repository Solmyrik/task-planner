import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Todo = ({ task, onDeleteTask, index, onChangeTask, onChangeActive }) => {
  const [activeInput, setActiveInput] = useState(true);
  const [currentInput, setCurrentInput] = useState({
    title: task.title,
    description: task.description,
    dateTime: task.dateTime,
  });

  const onChangeInput = () => {
    if (activeInput === true) {
      setActiveInput(false);
    } else {
      onChangeTask(index, currentInput);
      setActiveInput(true);
    }
  };

  return (
    <div
      className={
        task.active === true ? 'todo__item' : ['todo__item', 'todo__item_notactive'].join(' ')
      }>
      <div className="todo__top">
        <div className="todo__label" onClick={() => onChangeActive(index)}>
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8ab780"
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            />
          </svg>
        </div>
        {activeInput ? (
          <div className="todo__content todo__name">{task.title}</div>
        ) : (
          <div className="todo__content">
            <input
              className="todo__changeinput"
              onChange={(e) =>
                setCurrentInput({
                  ...currentInput, // сохраняем предыдущее состояние объекта
                  title: e.target.value, // обновляем поле title
                })
              }
              value={currentInput.title}
              type="text"
            />
          </div>
        )}
        <div className="todo__icons">
          <div onClick={onChangeInput} className="todo__change">
            <svg width={30} height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"
                fill="#8ab780"
              />
            </svg>
          </div>
          <div onClick={() => onDeleteTask(index)} className="todo__delete">
            <svg width={30} height={30} version="1.1" viewBox="0 0 24 24">
              <g id="info" />
              <g id="icons">
                <g id="delete">
                  <path
                    fill="#8ab780"
                    d="M18.9,8H5.1c-0.6,0-1.1,0.5-1,1.1l1.6,13.1c0.1,1,1,1.7,2,1.7h8.5c1,0,1.9-0.7,2-1.7l1.6-13.1C19.9,8.5,19.5,8,18.9,8z"
                  />
                  <path
                    fill="#8ab780"
                    d="M20,2h-5l0,0c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2l0,0H4C2.9,2,2,2.9,2,4v1c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V4    C22,2.9,21.1,2,20,2z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="todo__bottom">
        {activeInput ? (
          <div className="todo__content">{task.description}</div>
        ) : (
          <input
            className="todo__changeinput"
            onChange={(e) =>
              setCurrentInput({
                ...currentInput, // сохраняем предыдущее состояние объекта
                description: e.target.value, // обновляем поле description
              })
            }
            value={currentInput.description}
            type="text"
          />
        )}
        {activeInput ? (
          <div className="todo__content todo__date">{task.dateTime}</div>
        ) : (
          <input
            className="todo__changeinput"
            onChange={(e) =>
              setCurrentInput({
                ...currentInput, // сохраняем предыдущее состояние объекта
                dateTime: e.target.value, // обновляем поле description
              })
            }
            value={currentInput.dateTime}
            type="datetime-local"
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
