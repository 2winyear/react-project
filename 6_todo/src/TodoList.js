import React from 'react';
import './TodoList.css';
import './Form.css';

const TodoList = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                To-do list
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoList;