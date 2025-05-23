// COMPONENT LIST TODO
const ListTodo = ({ todo, dataBtnId, changeModal, eventCompleted, openModalUpdate }) => {
    return (
        <div className="list-item">
            <div className="check-list">
                <button className="circle-list">
                    <img src="./assets/images/icon-check.svg" className="img-checking" onClick={eventCompleted} alt="" />
                </button>
            </div>
            <div className="todo-desc">
                <span className="todo-text">{todo}</span>
            </div>
            <div className="todo-actions">
                <button
                    className="btn btn-sm btn-warning me-1"
                    // data-bs-toggle="modal"
                    // data-bs-target="#modalUpdateItem"
                    onClick={() => openModalUpdate(dataBtnId)}
                    style={{ display: dataBtnId == 0 ? 'none' : 'inline-block' }}
                >
                    Edit
                </button>
                <button className="delete-todo" style={{ display: dataBtnId == 0 ? 'none' : 'initial' }}>
                    <img
                        src="./assets/images/icon-cross.svg"
                        // data-bs-toggle="modal"
                        data-id={dataBtnId}
                        // data-bs-target="#modalUpdate"
                        className="imgDeleteTodo"
                        alt=""
                        onClick={changeModal}
                    />
                </button>
            </div>
        </div>
    );
};

export default ListTodo;