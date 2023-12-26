// eslint-disable-next-line react/prop-types
const InputEnter = ({
  onHandlerTitle,
  setCurrentTitle,
  currentTitle,
  currentDescription,
  setCurrentDescription,
  dateTime,
  setDateTime,
}) => {
  const handleDateTimeChange = (e) => {
    // преобразуем значение в формат, поддерживаемый компонентом datetime-local
    const selectedDateTime = new Date(e.target.value).toLocaleString('sv');
    setDateTime(selectedDateTime);
  };
  return (
    <div className="InputEnter">
      <input
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
        className="InputEnter__input"
        type="text"
        placeholder="Название"
      />
      <input
        value={dateTime}
        onChange={handleDateTimeChange}
        className="InputEnter__input"
        type="datetime-local"
        name=""
        id=""
      />
      <input
        value={currentDescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
        className="InputEnter__input InputEnter__input_big"
        type="text"
        placeholder="Описание"
      />

      <button
        onClick={() => onHandlerTitle(currentTitle, currentDescription, dateTime)}
        className="InputEnter__add">
        Добавить
      </button>
    </div>
  );
};

export default InputEnter;
