import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navv from './components/Nav'
const navmenu=[{
  title:'home'
},
{title:'services',dropdown:['for entrepreneur','for students','for hobbyists']

},
{title:'contact'

}

]
function App() {
  return (
    <div className="App">
<Navv navmenu={navmenu}/>
    </div>
  );
}

export default App;
