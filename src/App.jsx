// import React, { useState } from 'react';
import { useEffect, useState } from "react";
import InputEnter from "./components/InputEnter";
import Todo from "./components/Todo";
import Sort from "./components/Sort";
import TaskNotification from "./components/Notification";
import Notification from "./components/Notification";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  alert("мой телеграм: https://t.me/solmyr_k. Либо вотсап: +79158152958");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("myTasks"));

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
        active: true,
      },
    ]);
    console.log(tasks);

    localStorage.setItem(
      "myTasks",
      JSON.stringify([
        ...tasks,
        {
          title,
          description,
          dateTime,
          id: currentDate,
          active: true,
        },
      ]),
    );
  };

  const onDeleteTask = (id) => {
    const currentTask = tasks.filter((task) => task.id !== id);
    setTasks(currentTask);
    localStorage.setItem("myTasks", JSON.stringify(currentTask));
  };

  const onChangeTask = (id, text) => {
    const current = tasks;
    let currentIndex = 0;

    current.map((item, index) => {
      if (item.id === id) {
        currentIndex = index;
      }
    });

    current[currentIndex].dateTime = text.dateTime;
    current[currentIndex].description = text.description;
    current[currentIndex].title = text.title;

    setTasks(current);
    localStorage.setItem("myTasks", JSON.stringify(current));
  };

  const onChangeActive = (index) => {
    let currentIndex = 0;
    tasks.forEach((e, i) => {
      if (e.id == index) {
        currentIndex = i;
      }
    });

    const currentTask = tasks;
    currentTask[currentIndex].active = !currentTask[currentIndex].active;

    setTasks([...currentTask]);
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
            <Sort handleSelectChange={handleSelectChange} selectedValue={selectedValue} />
          </section>
          <section className="todo__body">
            {tasks.length === 0 ? (
              <h2>Задачи не найдены</h2>
            ) : (
              tasks
                .sort((a, b) => {
                  if (selectedValue === "date+") {
                    return Number(b.id) - Number(a.id);
                  } else {
                    return Number(a.id) - Number(b.id);
                  }
                })
                .map((task, id) => (
                  <Todo
                    index={task.id}
                    onChangeTask={onChangeTask}
                    onDeleteTask={onDeleteTask}
                    onChangeActive={onChangeActive}
                    key={id}
                    task={task}
                  />
                ))
            )}
          </section>
          <Notification tasks={tasks} />
        </main>
      </div>
    </div>
  );
};

export default App;
