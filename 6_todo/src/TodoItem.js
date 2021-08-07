import React, { Component } from 'react';
import './TodoItem.css';

/*
text: todo ����
checked: üũ�ڽ� ����
id: todo�� ���� ���̵�
onToggle: üũ�ڽ� Ű�� ���� �Լ�
onRemove: �������� ������Ű�� �Լ�
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
                    e.stopPropagation(); // onToggle �� ������� �ʵ��� ��
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