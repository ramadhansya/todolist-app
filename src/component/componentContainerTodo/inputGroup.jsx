

// COMPONENT LIST TODO
const ListTodo = ()=>{
    return(
        <div className="list-item">
            <div className="check-list">
                    <input type="checkbox" name="" id="checkList" />
                    <label htmlFor="checkList" className="circle-list">
                        <img src="./assets/images/icon-check.svg" alt="" />
                    </label>
            </div>
            <div className="todo-desc">

            </div>
            <button className="delete-todo">

            </button>
        </div>
    )
}

// component input group

const InputGroup = ()=>{
    return(
        <>
        <section className="input-group">
           <div className="input-check">
               <div></div>
           </div>
           <input type="search" placeholder="Create a new Todo...." className="input-todo" />
        </section>
        <section className="todo-list-container">
           <ListTodo/>
        </section>
        </>
    )
}

export default InputGroup;