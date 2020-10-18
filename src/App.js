import React from 'react';
import './App.css';
import Home from './Home';
import RecordTable from './RecordTable'
import {Card} from 'antd'

function App() {
  return (
    <div >
      <Card>  
            <Home/><br/>
      <RecordTable/>
      </Card>

    </div>
  );
}

export default App;
