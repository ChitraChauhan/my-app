import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

/*class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}
class Header extends Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}
class Content extends Component {
  render() {
     return (
        <div>
           <h2>Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}*/

/*class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        header : "This is Header",
        content : "This is content"
      }
    }
    render() {
      return (
        <div>
          <Header headerProp =  {this.state.header}/>
          <Content contentProp = {this.state.content}/>
        </div>
      );
    } 
}

class Header extends Component {
   render() {
     return (
       <div>
        <h1>{this.props.headerProp}</h1>
       </div>
     );
   }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}*/

/*class App extends Component {
  render() {
    return (
    <h1>Hello {this.props.name}</h1>
    );
  }
}
App.defaultProps = {
  name: "world",
};*/

/*class App extends Component {
  render () {
    return (
      function tick() {
        const element = (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
          </div>
        );
        // highlight-next-line
        ReactDOM.render(element, document.getElementById('root'));
      }
 
    );
    setInterval(tick, 1000);
  }
}*/

/*class App extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
App.defaultProps = {
  name: "world",
};*/
let array = ["one", "two", "four"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "01",
          name: "aa",
          age: "20"
        },
        {
          id: "02",
          name: "bb",
          age: "21"
        },
        {
          id: "03",
          name: "cc",
          age: "22"
        }
      ]
    };
  }
  add(item, position) {
    var length = array.length;
    for (let i = length - 1; i >= position; i--) {
      array[length] = array[i];
      length--;
    }
    array[position] = item;
  }
  render() {
    array.splice(2, 0, "three");
    console.log("array", array);

    this.add("Brooks Brothers", 3); //to add it to the middle
    return array;
    // <div>
    //    <Header />
    //   <table>
    //     <tbody>
    //       {this.state.data.map((a,index) =>
    //         <Content key={index} data={a} />
    //       )}
    //     </tbody>
    //   </table>

    // </div>
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
export default App;
