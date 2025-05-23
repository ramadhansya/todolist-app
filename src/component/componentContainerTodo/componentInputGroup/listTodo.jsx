const ListTodo = ({ todo, dataBtnId, changeModal, eventCompleted, openUpdateModal }) => {
  return (
    <div className="list-item">
      <div className="check-list">
        <button className="circle-list">
          <img
            src="./assets/images/icon-check.svg"
            className="img-checking"
            onClick={eventCompleted}
            alt=""
          />
        </button>
      </div>
      <div className="todo-desc">
        <span className="todo-text">{todo}</span>
      </div>

      {/* Tombol hapus */}
      <button
        className="delete-todo"
        style={{ display: dataBtnId == 0 ? 'none' : 'initial' }}
      >
        <img
          src="./assets/images/icon-cross.svg"
          data-bs-toggle="modal"
          data-id={dataBtnId}
          data-bs-target="#modalDeleteItem"
          className="imgDeleteTodo"
          alt=""
          onClick={changeModal}
        />
      </button>

      {/* Tombol update */}
      {dataBtnId != 0 && (
        <button
          className="edit-todo btn btn-warning ms-2"
          data-bs-toggle="modal"
          data-bs-target="#modalUpdateItem"
          onClick={() => openUpdateModal(dataBtnId)}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default ListTodo;
