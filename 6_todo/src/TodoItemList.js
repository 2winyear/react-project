import React, { Component } from 'react';
import TodoItem from './TodoItem';

//todo 객체들이 들어있음. onToggle:체크박스. onRemove 삭제. timer 남은시간

/*
text: todo내용
checked: 체크박스 상태
id: todo의 고유 아읻
onToggle: 체크박스를 키고 끄는 함수
edit: 수정사항.
onRemove: 아이템 삭제
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