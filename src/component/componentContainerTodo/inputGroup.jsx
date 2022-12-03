import {useState,useRef,useEffect} from 'react';

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

// COMPONENT MODEL DELETE
const ModalDelete =({dataIdModal,eventDelete})=>{
    return (
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog bg-transparent">
           <div className="modal-content modal-delete">
           <div className="modal-body text-center ">
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
            {/* <div className="sorting-item">
                <button className="sorting-all">all</button>
                <button className="sorting-active">active</button>
                <button className="sorting-completed">completed</button>
            </div> */}
            <p className="clear-todo">
                Clear Complited
            </p>
        </section>
    )
}

const AlertUndefinedComponent = ({refElement})=>{
    
    return (
        <>
        <div className="toast-container position-fixed top-0 end-0 p-3 ">
        
        <div className="toast  fade   text-bg-danger hide " ref={refElement} role="alert" aria-live="assertive" aria-atomic="true">
  <div className="d-flex">
    <div className="toast-body fs-6">
    todo tidak boleh kosong
    </div>
    <button type="button" className="btn-close me-2 m-auto navbar-dark" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
        </div>
        </>
    )
}




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

            // useRef untuk compone AlertUndefinedTodo
            const alertUndefined = useRef(null)

            // useRef untuk element audio
            const [notice,setNotice] = useState(new Audio('./assets/notice.mp3'))

            


            // event untuk ambil value input
            const inputValue = (e) =>{
                setValueTodo(e.target.value) 
            }

            // event untuk tambah todo
            const addTodo = ()=>{
                if(valueTodo === ''){
                    notice.play()
                    setTimeout(() => {
                        alertUndefined.current.classList.replace('hide','show')
                    alertUndefined.current.classList.remove('showing')
                    }, 450);
                    return 
                }
                alertUndefined.current.classList.add('showing')
                setTimeout(() => {
                    alertUndefined.current.classList.remove('showing')
                alertUndefined.current.classList.replace('show','hide')
                }, 150);
                
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
              alertUndefined.current.classList.replace('show','hide')
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

        // event completed tood
        const completed = (e)=>{
            let [textTodo] = e.target.parentElement.parentElement.nextElementSibling.childNodes;
            console.log(textTodo)
            console.log(e.target.parentElement)
            console.log(e.target)
            e.target.parentElement.classList.toggle('circle-list-active')
            e.target.classList.toggle('img-circle-active')
            textTodo.classList.toggle('text-todo-active')
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
                return <ListTodo key={e.id} todo={e.todo} dataBtnId={e.id} changeModal={changeIdModal} eventCompleted={completed}  />
            }) 
        }
        </section>
        {/* component sorting todo */}
        <SortingTodo todos={todos.length}/>
        {/* component modal delete */}
        <ModalDelete dataIdModal={idModal} eventDelete={deleteTodo}/>
        {/* componet alert input undifed */}
        <AlertUndefinedComponent refElement={alertUndefined}/>
        
        </>
    )
}



export default InputGroup;