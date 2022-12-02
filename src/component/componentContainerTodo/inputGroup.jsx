import {useState,useRef,useEffect} from 'react';

// COMPONENT LIST TODO
const ListTodo = ({todo,dataBtnId,changeModal})=>{
    return(
        <div className="list-item">
            <div className="check-list">
                    <button className="circle-list">
                        <img src="./assets/images/icon-check.svg" alt="" />
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

const ModalDelete =({dataIdModal,eventDelete})=>{
    return (
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog bg-transparent">
           <div className="modal-content modal-delete">
           <div className="modal-body text-center">
               apakah anda yakin ingin menghapusnya?
           </div>
           <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="button" className="btn btn-danger btn-hapus" data-idmodal={dataIdModal}  data-bs-dismiss="modal" onClick={eventDelete}>Delete</button>
           </div>
           </div>
       </div>
       </div>
    )
}

// COMPONENT SORTING TODO
const SortingTodo = ({todos})=>{
    return(
        <section className="sorting-todo">
            <p className="jumlah-todo"><span className="count">{todos}</span>{(todos<1) ? 'item' : 'items left'}</p>
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

// COMPONENT MODAL 



// component input group
const InputGroup = ()=>{

            // state for todo 
            const [todos,setTodo] = useState([])

            // state for value input
            const [valueTodo,setValueTodo] = useState('');

            // state untk data id todo
            const [id,setId] = useState(1)

            // state for modal id
            const [idModal,setIdModal] = useState(null)

            


            // event untuk ambil value input
            const inputValue = (e) =>{
                setValueTodo(e.target.value) 
            }

            // event untuk tambah todo
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
            setValueTodo('')
          }

        // event untuk memberikan data id ke data-idmodal
        const changeIdModal = (e)=>{
              setIdModal(e.target.dataset.id)
        }

        // event delete todo
        const deleteTodo = (e)=>{
            if(e.target.classList.contains('btn-hapus')){
                let filter = todos.filter(el => el.id != e.target.dataset.idmodal )
              setTodo(filter)
                return    
            }
            return
        }

        


    return(
        <>
        <section className="input-group">
           <input type="text" value={valueTodo} placeholder="Create a new Todo..." onChange={inputValue} className="input-todo" />
           <button className="input-check" onClick={addTodo}>
               <i className="fa-solid fa-plus"></i>
           </button>
        </section>
        <section className="todo-list-container">
        {
            (todos.length < 1) ? 
            <ListTodo  todo='you dont have any todo' dataBtnId="0"/>
            :
            todos.map(e =>{
                return <ListTodo key={e.id} todo={e.todo} dataBtnId={e.id} changeModal={changeIdModal}  />
            }) 
        }
        </section>
        <SortingTodo todos={todos.length}/>
        <ModalDelete dataIdModal={idModal} eventDelete={deleteTodo}/>
        </>
    )
}



export default InputGroup;