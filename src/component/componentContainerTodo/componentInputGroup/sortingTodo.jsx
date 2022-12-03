
// COMPONENT SORTING TODO
const SortingTodo = ({todos,alert})=>{
    return(
        <section className="sorting-todo">
            <p className="jumlah-todo"><span className="count">{todos}</span>{(todos<1) ? 'item' : 'items left'}</p>
        
            {
                (todos > 0) && <p className="clear-todo"   data-bs-toggle="modal" data-bs-target="#modalDeleteAll" onClick={()=>{
                    alert.current.classList.replace('show','hide')
                  }} >
                      Clear 
                  </p>
            }
        </section>
    )
}

export default SortingTodo;