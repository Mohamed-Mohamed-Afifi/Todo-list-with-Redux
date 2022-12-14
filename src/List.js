import './list.css';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap'
import { addTodo, modifyTodo } from './Redux/todoSlice'

const List = () => {
    const list = useSelector(state => state.list.data)
    console.log(list)
    // window.localStorage.setItem('list', list);

    const edt = useRef(null);
    let editToSave;

    // const dispatch = useDispatch();
    let [count, setCount] = useState(0)

    const changeStateOfBtn = (e) => {
        e.target.textContent = editToSave ? "Edit" : "save"
        console.log(e.target.textContent)
    }
    const changeStateOfInput = (e) => {
        if (!editToSave) {
            e.target.parentElement.childNodes[0].removeAttribute('readOnly')
        } else {
            e.target.parentElement.childNodes[0].setAttribute('readOnly', "")
        }
    }
    const changeStateOfItem = (e) => {
        e.target.classList.toggle("edit")
        editToSave = e.target.classList.contains('edit');

        changeStateOfBtn(e)

        changeStateOfInput(e)
        console.log(list)
    }
    const finishTodo = (e) => {
        e.target.parentElement.parentElement.childNodes[1].childNodes[1].classList.toggle('done')
        if (e.target.checked) {
            setCount(++count)
        } else {
            setCount(--count)

        }
    }
    return (
        <div>
            {
                list.map((el, ind) => (
                    <InputGroup key={ind} className="d-flex flex-row col-6 my-4">
                        <InputGroupText className='col-1 justify-content-center'>
                            <Input
                                addon
                                aria-label="Checkbox for following text input"
                                type="checkbox"
                                onChange={(e) => finishTodo(e)}
                            />

                        </InputGroupText>
                        <div className='inpt-grb d-flex flex-row col-11'>
                            <Input type="text" Value={el} ref={edt} id={ind} readOnly />
                            <div className=''></div>
                            <Button className='edit px-2 change' onClick={(e) => changeStateOfItem(e)} id={ind}>Edit</Button>

                            <Button className='remove p-2' onClick={(e) => e.target.parentElement.remove()} id={ind}>x</Button>
                        </div>
                    </InputGroup>

                ))
            }
            <div className='text-center'>
                <h1 className='list-of-done col-12'>{list.length !== 0 ? `complete ${count} of ${list.length}` : ""}</h1>
            </div>
        </div>
    )
}

export default List