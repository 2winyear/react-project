import React from 'react';
import './Form.css'
import DatePicker from 'react-date-picker';

/*
value: input의 내용
onCreate: 버튼이 클릭될때 실행됨
onChange: 인풋내용이 변경될때 실행됨
onKeyPress: 인풋이 키를 입력될 때 실행됨. enter 눌렀을 때도 실행하려고.
*/
const Form = ({value, onChange, onCreate, onKeyPress, timer}) => {
    return (
        <div className="form">
            <input value={value} placeholder="to-do" onChange={onChange} onKeyPress={onKeyPress}/>
            <DatePicker value={timer} placeholder="deadline" onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                Add
            </div>
        </div>
    );
};

export default Form;