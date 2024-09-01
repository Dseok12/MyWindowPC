import './css/base/App.css';
import './css/base/reset.css';
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Node.js 서버로부터 메시지 가져오기
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='AppWrap'>
      <div className='AppInner'>
        <Header />
      </div>
    </div>
  )
}

export default App
