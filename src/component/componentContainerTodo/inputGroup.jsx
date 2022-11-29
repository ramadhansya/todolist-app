

// COMPONENT LIST TODO
const ListTodo = ()=>{
    return(
        <div className="list-item">
            <div className="check-list">
                    <button className="circle-list">
                        <img src="./assets/images/icon-check.svg" alt="" />
                    </button>
            </div>
            <div className="todo-desc">
             <p className="text-todo">belajar react js Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem, facilis quos dolores aliquam atque voluptas nesciunt. Nesciunt, sint necessitatibus.</p>
            </div>
            <button className="delete-todo">
            <img src="./assets/images/icon-cross.svg" alt="" />
            </button>
        </div>
    )
}

// COMPONENT SORTING TODO
const SortingTodo = ()=>{
    return(
        <section className="sorting-todo">
            <p className="jumlah-todo"><span className="count">0</span>items left</p>
            <div className="sorting-item">
                <button className="sorting-all">all</button>
                <button className="sorting-active">active</button>
                <button className="sorting-completed">completed</button>
            </div>
            <p className="clear-todo">
                Clear Complited
            </p>
        </section>
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
           <ListTodo/>
           <ListTodo/>
        </section>
        <SortingTodo/>
        </>
    )
}

export default InputGroup;