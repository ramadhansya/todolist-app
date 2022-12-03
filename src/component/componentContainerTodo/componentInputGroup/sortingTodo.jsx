
// COMPONENT SORTING TODO
const SortingTodo = ({todos,eventClear})=>{
    return(
        <section className="sorting-todo">
            <p className="jumlah-todo"><span className="count">{todos}</span>{(todos<1) ? 'item' : 'items left'}</p>
        
            <p className="clear-todo" onClick={eventClear}>
                Clear 
            </p>
        </section>
    )
}

export default SortingTodo;