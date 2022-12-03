import {useState,useRef} from 'react';

// import npm validator
import validator from 'validator'

// import component listTodo
import ListTodo from './componentInputGroup/listTodo';

// import component modalDelete
import ModalDelete from './componentInputGroup/modalDelete';

// import component sortingTodo
import SortingTodo from './componentInputGroup/sortingTodo';

// import component AlertUndefinedComponent
import AlertUndefinedComponent from './componentInputGroup/alertUndefined';







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

            // state untuk element audio
            const [notice,setNotice] = useState(new Audio('./assets/notice.mp3'))

            


            // event untuk ambil value input
            const inputValue = (e) =>{
                setValueTodo(e.target.value) 
            }

            // event untuk tambah todo
            const addTodo = (e)=>{
                e.preventDefault()
                if(validator.isEmpty(valueTodo,{ ignore_whitespace:true })){
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
              document.querySelector('.img-checking').removeEventListener('click',deleteTodo)
                return  
            }
            return
        }

        // event ceklis completed todo
        const completed = (e)=>{
            let [textTodo] = e.target.parentElement.parentElement.nextElementSibling.childNodes;
            
            e.target.parentElement.classList.toggle('circle-list-active')
            e.target.classList.toggle('img-circle-active')
            textTodo.classList.toggle('text-todo-active')
        }

        // event clear all todo
        const clearAllTodo = ()=>{
              let filterNothing = todos.filter(e => e.id === null);
            setTodo(filterNothing)
            }


    


    return(
        <>
        
        <form action="" onSubmit={addTodo}>
        <section className="input-group">
           <input type="text" value={valueTodo} placeholder="Create a new Todo..." onChange={inputValue} className="input-todo" />
           <button className="input-check" type="submit">
               <i className="fa-solid fa-plus"></i>
           </button>
        </section>
        </form>
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
        <SortingTodo todos={todos.length} alert={alertUndefined}/>
        {/* component modal delete */}
        <ModalDelete dataIdModal={idModal} eventDelete={deleteTodo} textModalBody='apakah anda yakin ingin menghapusnya?' idModal='modalDeleteItem'/>
        {/* componet alert input undifed */}
        <AlertUndefinedComponent refElement={alertUndefined}/>
        
        {/* modalDeleteAllTodo */}
        {/* component modal delete */}
        {(todos.length > 0) && <ModalDelete  eventDelete={clearAllTodo} textModalBody='apakah anda yakin ingin menghapus semua todo?' idModal='modalDeleteAll'/> }
        </>
    )
}



export default InputGroup;