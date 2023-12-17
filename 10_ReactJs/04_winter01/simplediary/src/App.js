import './App.css';
import './Reset.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dumList = [
  {
    id: 1,
    author: "정원석",
    content: "gkdlwql1",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "정원석1",
    content: "gkdlwql32",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "정원석2",
    content: "gkdlwql3",
    emotion: 2,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dumList} />
    </div>
  );
}

export default App;
