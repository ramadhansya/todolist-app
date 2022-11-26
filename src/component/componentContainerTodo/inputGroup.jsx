



// component input group

const InputGroup = ()=>{
    return(
        <>
        <section className="input-group">
           <div className="input-check">
               <div></div>
           </div>
           <input type="search" placeHolder="Create a new Todo...." className="input-todo" />
        </section>
        <section className="todo-list-container">
            
        </section>
        </>
    )
}

export default InputGroup;