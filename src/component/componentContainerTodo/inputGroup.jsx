import {useState,useRef,useEffect} from 'react';

// COMPONENT LIST TODO
const ListTodo = ({todo,dataBtnId,eventDelete})=>{
    return(
        <div className="list-item">
            <div className="check-list">
                    <button className="circle-list">
                        <img src="./assets/images/icon-check.svg" alt="" />
                    </button>
            </div>
            <div className="todo-desc">
             <p className="text-todo">{todo}</p>
            </div>
            <button className="delete-todo" >
            <img src="./assets/images/icon-cross.svg" data-id={dataBtnId}  onClick={eventDelete} className="imgDeleteTodo" alt="" />
            </button>
        </div>
    )
}

// COMPONENT SORTING TODO
const SortingTodo = ({todos})=>{




    return(
        <section className="sorting-todo">
            <p className="jumlah-todo"><span className="count">{todos}</span>items left</p>
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

            // state for todo 
            const [todos,setTodo] = useState([])

            // state for value input
            const [valueTodo,setValueTodo] = useState('');

            const [id,setId] = useState(1)

            // event untuk ambil value input
            const inputValue = (e) =>{
                setValueTodo(e.target.value) 
                
            }

            const addTodo = ()=>{
                if(valueTodo === ''){
                    alert('todo tidak boleh kosong')
                    return 
                }
                // set object
                let newTodo = {
                id:id,
                todo:valueTodo
            }
            setId((oldId) => oldId+=1)
            setTodo([...todos,newTodo])
        }

        // event delete todo
        const deleteTodo = (e)=>{
            let filter = todos.filter(el => el.id != e.target.dataset.id )
            
           setTodo(filter)
        }

        useEffect(()=>{
            console.log(todos)
        },[todos])

    return(
        <>
        <section className="input-group">
           <input type="text" placeholder="Create a new Todo..." onChange={inputValue} className="input-todo" />
           <button className="input-check" onClick={addTodo}>
               <i className="fa-solid fa-plus"></i>
           </button>
        </section>
        <section className="todo-list-container">
        {
            (todos.length < 1) ? 
            <ListTodo todo='you dont have any todo' dataBtnId="0"/>
            :
            todos.map(e =>{
                return <ListTodo key={e.id} todo={e.todo} dataBtnId={e.id} eventDelete={deleteTodo}/>
            }) 
        }
        </section>
        <SortingTodo todos={todos.length}/>
        </>
    )
}



export default InputGroup;