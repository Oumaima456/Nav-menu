import React from 'react'
import '../App.css'
function Nav(props) {
    return (
        <div>
           { 
           <ul className="titles">
         {  props.navmenu.map((el,i)=>
               <li className={`liste${i}`}>{el.title}
               <ul className='havedrop'>
               { el.dropdown?el.dropdown.map(ele=><li className='fropliste'>{ele}</li>):null
               }
               </ul>
               </li>
           
           )}
           </ul>
}
        </div>
 
    )
}

export default Nav

