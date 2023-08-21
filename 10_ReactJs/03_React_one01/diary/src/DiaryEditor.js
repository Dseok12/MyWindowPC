import React, { useState } from 'react';

export const DiaryEditor = () => {
  
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
    alert("성공!");
  }

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          name='author'
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
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
