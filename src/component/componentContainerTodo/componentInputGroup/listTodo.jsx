


// COMPONENT LIST TODO
const ListTodo = ({todo,dataBtnId,changeModal,eventCompleted})=>{
    return(
        <div className="list-item">
            <div className="check-list">
                    <button className="circle-list" >
                        <img src="./assets/images/icon-check.svg" className="" onClick={eventCompleted} alt="" />
                    </button>
            </div>
            <div className="todo-desc">
              <span className="todo-text">{todo}</span>
            </div>
            <button className="delete-todo" style={{display:(dataBtnId == 0) ? 'none' : 'initial'}} >
             <img src="./assets/images/icon-cross.svg"  data-bs-toggle="modal" data-id={dataBtnId} data-bs-target="#exampleModal"  className="imgDeleteTodo" alt="" onClick={changeModal} />
            </button>
        </div>
        
    )
}

export default ListTodo;