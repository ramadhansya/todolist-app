import React, { useState } from 'react';
import ListTodo from './listTodo';
import ModalUpdate from './modalUpdate';

const ParentComponent = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React' },
    { id: 2, text: 'Bikin aplikasi' },
  ]);

  const [selectedTodo, setSelectedTodo] = useState({});

  const openModalUpdate = (id) => {
    const todo = todos.find(t => t.id === id);
    setSelectedTodo(todo || {});

    // gunakan id modal yang sesuai dengan ModalUpdate
    const modalEl = document.getElementById('modalUpdate');
    const modal = new window.bootstrap.Modal(modalEl);
    modal.show();
  };

  const handleUpdateSubmit = (updatedData) => {
    console.log("Data diterima di parent:", updatedData);
    setTodos(prev =>
      prev.map(todo => (todo.id === updatedData.id ? updatedData : todo))
    );

    // Tutup modal + hapus backdrop
    const modalEl = document.getElementById('modalUpdate');
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    if (modal) {
      modal.hide();

      // Hapus backdrop jika masih ada
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach(bd => bd.remove());
    }
  };



  return (
    <>
      {todos.map(todo => (
        <ListTodo
          key={todo.id}
          todo={todo.text}
          dataBtnId={todo.id}
          openModalUpdate={openModalUpdate}
        />
      ))}

      <ModalUpdate
        idModal="modalUpdate"
        data={selectedTodo}
        fields={[{ name: 'text', label: 'Update Todo' }]}
        onSubmit={handleUpdateSubmit}
        modalTitle="Update Todo"
      />
    </>
  );
};

export default ParentComponent;
