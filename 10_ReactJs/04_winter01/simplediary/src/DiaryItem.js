import React, { useRef, useState } from 'react'

const DiaryItem = ({ onEdit, onRemove, author, content, emotion, created_date, id }) => {

  const [isEdit, setisEdit] = useState(false);
  const toggleIsEdit = () => setisEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef()


  const handelRemove = () => {
    if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)){
      onRemove(id)
    }
  };

  const handleQuitEdit = () => {
    setisEdit(false)
    setLocalContent(content)
  }

  const handleEdit = () => {
    if(localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if(window.confirm(`${author}의 ${id}번째 일기를 수정하시겠습니까?`)){
      onEdit(id, localContent);
      toggleIsEdit();
    }

  }

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>작성자 : {author} | 감정점수: {emotion}</span><br/>
        <span className='date'>{new Date(created_date).toLocaleDateString()}</span>
      </div>
      <div className='content'>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => {setLocalContent(e.target.value)}}
            />
          </>
          ) : (
          <>
            {content}
          </>
        )}
      </div>
      <div>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정 취소</button>
            <button onClick={handleEdit}>수정 완료</button>
          </>
        ):(
          <>
            <button onClick={handelRemove}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button>
          </>
        )}
        
      </div>
    </div>
  )
}

export default DiaryItem