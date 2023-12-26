// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import InputEnter from './components/InputEnter';
import Todo from './components/Todo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('myTasks'));

    if (localTasks) {
      setTasks(localTasks);
    }
  }, []);

  const onHandlerTitle = (title, description, dateTime) => {
    console.log(title, description, dateTime);
    if (title.trim().length < 1 || description.trim().length < 1) {
      return;
    }

    const currentDate = new Date().getTime();

    setTasks([
      ...tasks,
      {
        title,
        description,
        dateTime,
        id: currentDate,
      },
    ]);
    console.log(tasks);

    localStorage.setItem(
      'myTasks',
      JSON.stringify([
        ...tasks,
        {
          title,
          description,
          dateTime,
          id: currentDate,
        },
      ]),
    );
  };

  const onDeleteTask = (id) => {
    const currentTask = tasks.filter((task, index) => index !== id);
    setTasks(currentTask);
    localStorage.setItem('myTasks', JSON.stringify(currentTask));
  };

  const onChangeTask = (id, text) => {
    const current = tasks;
    current[id] = text;
    setTasks([...current]);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  };

  return (
    <div className="app">
      <div className="wrapper">
        <main className="todo">
          <h1>
            Task<span> Planner</span>
          </h1>
          <section className="todo__header">
            <InputEnter
              currentTitle={currentTitle}
              onHandlerTitle={onHandlerTitle}
              setCurrentTitle={setCurrentTitle}
              currentDescription={currentDescription}
              dateTime={dateTime}
              setDateTime={setDateTime}
              setCurrentDescription={setCurrentDescription}
            />
          </section>
          <section className="todo__body">
            {tasks.length === 0 ? (
              <h2>Задачи не найдены</h2>
            ) : (
              tasks.map((task, id) => (
                <Todo
                  index={id}
                  onChangeTask={onChangeTask}
                  onDeleteTask={onDeleteTask}
                  key={id}
                  task={task}
                />
              ))
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
