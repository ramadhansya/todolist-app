
// import component nav todo
import NavTodo from './componentContainerTodo/navTodo'


// import component input todo
import InputGroup from './componentContainerTodo/inputGroup'

// component container todo

const ContainerTodo = ()=>{
    return (
        <section className="container-todo">
         {/* COMPONENT NAV TODO */}
         <NavTodo/>
         {/* component input group */}
         <InputGroup/>
        </section>
    )
}


export default ContainerTodo;