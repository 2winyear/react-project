import React, { Component } from 'react';
import './TodoItem.css';

/*
text: todo 내용
checked: 체크박스 상태
id: todo의 고유 아이디
onToggle: 체크박스 키고 끄는 함수
onRemove: 아이템을 삭제시키는 함수
*/
class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove, timer, onEdit, toggle} = this.props;
        console.log(id);
        
        return(
        <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)}
                }>&times;
            </div>
        <button onClick={this.handletogglechange}> edit{console.log('edit___')} </button>
            <div className="deadline">{timer}</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
            checked && (<div className="check-mark"> done </div>)           
        }
        </div>
        );
    }
}

export default TodoItem;