import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    strings =["Abcd","Efgh","Ijkl","Mnop"];
    render() {

        return(
            <div id="main">
              <ol>
            {this.strings.map((item)=><li>{item}<li/>)};
            <ol/>
            </div>
        )
    }
}


export default App;
