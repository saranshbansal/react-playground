import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import '../../assets/css/app.css';


 export class Index extends Component {
   render() {
     return (
       <div className="App-container">
        {
          // write your code here
        }
       </div>
     );
   }
 }
export default DragDropContext(HTML5Backend)(Index);