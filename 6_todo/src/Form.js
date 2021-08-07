import React from 'react';
import './Form.css'
import DatePicker from 'react-date-picker';

/*
value: input�� ����
onCreate: ��ư�� Ŭ���ɶ� �����
onChange: ��ǲ������ ����ɶ� �����
onKeyPress: ��ǲ�� Ű�� �Էµ� �� �����. enter ������ ���� �����Ϸ���.
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