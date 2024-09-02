import './css/TodoItem.css';
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App.jsx";

const TodoItem = ({
    id,
    isDone,
    content,
    date,
  }) => {

  const { onUpdate, onDelete } = useContext(TodoDispatchContext)

  const onChangeCheckBox = () => {
    onUpdate(id)
  }
  const onClickDeleteBtn = () => {
    onDelete(id)
  }

  return (
    <div className='TodoItemWrap'>
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type='checkbox'
      />
      <div className='contents'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button
        onClick={onClickDeleteBtn}
      >삭제</button>
    </div>
  )
}

// export default memo(TodoItem, (prevPros, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O
//   if(prevPros.id !== nextProps.id) return false;
//   if(prevPros.isDone !== nextProps.isDone) return false;
//   if(prevPros.content !== nextProps.content) return false;
//   if(prevPros.date !== nextProps.date) return false;

//   return true;
// });
export default memo(TodoItem);