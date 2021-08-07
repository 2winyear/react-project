import React, { Component } from 'react';
import TodoItem from './TodoItem';

//todo ��ü���� �������. onToggle:üũ�ڽ�. onRemove ����. timer �����ð�

/*
text: todo����
checked: üũ�ڽ� ����
id: todo�� ���� �Ɵ�
onToggle: üũ�ڽ��� Ű�� ���� �Լ�
edit: ��������.
onRemove: ������ ����
*/
class TodoItemList extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            ({id, text, checked, timer}) => (
                <TodoItem
                    id = {id}
                    text = {text}
                    checked = {checked}
                    timer = {timer}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;