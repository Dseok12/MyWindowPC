import { Route, Routes /*RouterProvider, createBrowserRouter, Outlet*/ } from 'react-router-dom';
import './reset.scss';
import './common.scss';
import Header from './components/Header';
import Home from './pages/Home';
import TodoInput from './pages/TodoInput';
import TodoList from './pages/TodoList';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todoinput' element={<TodoInput/>}/>
        <Route path='/todolist' element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
