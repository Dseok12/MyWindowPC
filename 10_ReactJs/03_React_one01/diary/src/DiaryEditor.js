import React, { useState, useRef } from 'react';

export const DiaryEditor = () => {

  const authorInput = useRef()
  const contentInput = useRef()
  
  const [state, setState] = useState({
    author: "",
    content: "",
    emtion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log(state);
    if(state.author.length < 1){
      // alert("최소 한글자 이상은 입력하세요!");
      authorInput.current.focus()
      return;
    }
    if(state.content.length < 5){
      // alert("안녕하세요? 정도는 쓸 수 있잖아?");
      contentInput.current.focus()
      return;
    }
    alert("저장 성공!");
  }

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name='author'
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name='content'
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name='emtion'
          value={state.emtion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button
          onClick={handleSubmit}
        >오늘의 일기 저장하기</button>
      </div>
    </div>
  )
}
