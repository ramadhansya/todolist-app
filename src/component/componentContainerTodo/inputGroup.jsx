import { useState, useRef, useEffect } from 'react';
import validator from 'validator';

// import komponen
import ListTodo from './componentInputGroup/listTodo';
import ModalDelete from './componentInputGroup/modalDelete';
import SortingTodo from './componentInputGroup/sortingTodo';
import AlertUndefinedComponent from './componentInputGroup/alertUndefined';
import ModalUpdate from './componentInputGroup/modalUpdate';

const InputGroup = () => {
  const [todos, setTodo] = useState([]);
  const [valueTodo, setValueTodo] = useState('');
  const [id, setId] = useState(1);
  const [idModal, setIdModal] = useState(null);
  const alertUndefined = useRef(null);
  const [notice, setNotice] = useState(new Audio('./assets/notice.mp3'));

  // state untuk modal update
  const [dataUpdate, setDataUpdate] = useState({});

  const inputValue = (e) => {
    setValueTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (validator.isEmpty(valueTodo, { ignore_whitespace: true })) {
      notice.play();
      setTimeout(() => {
        alertUndefined.current.classList.replace('hide', 'show');
        alertUndefined.current.classList.remove('showing');
      }, 500);
      return;
    }
    alertUndefined.current.classList.add('showing');
    setTimeout(() => {
      alertUndefined.current.classList.remove('showing');
      alertUndefined.current.classList.replace('show', 'hide');
    }, 150);

    let newTodo = {
      id: id,
      todo: valueTodo,
    };

    setId((oldId) => oldId + 1);
    setTodo([...todos, newTodo]);
    setValueTodo('');
  };

  const changeIdModal = (e) => {
    setIdModal(e.target.dataset.id);
    alertUndefined.current.classList.replace('show', 'hide');
  };

  const deleteTodo = (e) => {
    if (e.target.classList.contains('btn-hapus')) {
      let filter = todos.filter((el) => el.id != e.target.dataset.idmodal);
      setTodo(filter);
      document.querySelector('.img-checking').removeEventListener('click', deleteTodo);
      return;
    }
    return;
  };

  const completed = (e) => {
    let [textTodo] = e.target.parentElement.parentElement.nextElementSibling.childNodes;
    e.target.parentElement.classList.toggle('circle-list-active');
    e.target.classList.toggle('img-circle-active');
    textTodo.classList.toggle('text-todo-active');
  };

  const clearAllTodo = () => {
    let filterNothing = todos.filter((e) => e.id === null);
    setTodo(filterNothing);
  };

  // modal update: buka modal
  const openModalUpdate = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setDataUpdate(todo);
    }
  };

  // modal update: simpan perubahan
  const submitUpdate = (updatedData) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedData.id ? updatedData : todo))
    );
  };  
  {todos.map((e) => (
  <div key={e.id}>
    <ListTodo
      todo={e.todo}
      dataBtnId={e.id}
      changeModal={changeIdModal}
      eventCompleted={completed}
      openModalUpdate={openModalUpdate}
    />
  </div>
))}


  return (
    <>
      <form onSubmit={addTodo}>
        <section className="input-group">
          <input
            type="text"
            value={valueTodo}
            placeholder="Create a new Todo..."
            onChange={inputValue}
            className="input-todo"
          />
          <button className="input-check" type="submit">
            <i className="fa-solid fa-plus"></i>
          </button>
        </section>
      </form>

      <section className="todo-list-container">
        {todos.length < 1 ? (
          <ListTodo todo="you don't have any todo" dataBtnId="0" />
        ) : (
          todos.map((e) => (
            <div key={e.id}>
              <ListTodo
                todo={e.todo}
                dataBtnId={e.id}
                changeModal={changeIdModal}
                eventCompleted={completed}
              />
            </div>
          ))
        )}
      </section>

      {/* component sorting todo */}
      <SortingTodo todos={todos.length} alert={alertUndefined} />

      {/* component modal delete */}
      <ModalDelete
        dataIdModal={idModal}
        eventDelete={deleteTodo}
        textModalBody="Apakah Anda yakin ingin menghapusnya?"
        idModal="modalDeleteItem"
      />

      {/* component modal delete all */}
      {todos.length > 0 && (
        <ModalDelete
          eventDelete={clearAllTodo}
          textModalBody="Apakah Anda yakin ingin menghapus semua todo?"
          idModal="modalDeleteAll"
        />
      )}

      {/* component modal update */}
      <ModalUpdate
        idModal="modalUpdateItem"
        data={dataUpdate}
        fields={[{ name: 'todo', label: 'Update Todo' }]}
        onSubmit={submitUpdate}
      />

      {/* component alert undefined */}
      <AlertUndefinedComponent refElement={alertUndefined} />
    </>
  );
};

export default InputGroup;
