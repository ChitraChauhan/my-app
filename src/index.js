import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
  
//ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();

//ReactDOM.render(<App name="sara"/>, document.getElementById('root'));

/*const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));*/

/*ReactDOM.render(
    <h1>Hello, world!</h1>,
        document.getElementById('root')
);*/

/*function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);*/
  
/*const element = (
    <h1>
      Hello, {getGreeting(user)}!
    </h1>
);
ReactDOM.render(
    element,
    document.getElementById('root')
);  
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
function getGreeting(user) {
    if (user) {
       
        return <h1>Hello, {formatName(user)}!</h1>;
    }
        // return <h1>Hello, Stranger.</h1>;  
    
}
function formatName(user) {
    console.log('firstName', user);
    return user.firstName + ' ' + user.lastName;
}*/
  
/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  const element = <Welcome name="Sara" />;
  ReactDOM.render(element, document.getElementById('root'));*/

/*const element = <Welcome name="Sara" />;
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}*/

/*const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((a) => a * 2);
document.getElementById("root").innerHTML = doubled;*/

/*const numbers = [1,2,3,4];
const listItems = numbers.map(a => <li>{a}</li> );
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));*/

/*function ItemList(props) {
    const no = props.numbers;
    const list = no.map((a) => <li key={a.id}>{a}</li>);
    return (<ul>{list}</ul>);
}
const numbers = [1,2,3,4,5];
ReactDOM.render(<ItemList numbers={numbers}/>,document.getElementById("root"));*/   
 
/*function NumberList(props){
    return <li>{props.value}</li>
}
 
function ItemList(props) {
    const no = props.numbers;
    const list = no.map((a) => <NumberList key={a} value={a}/>);
    return (<ul>{list}</ul>);
}
const numbers = [1,2,3,4,5];
ReactDOM.render(<ItemList numbers={numbers}/>,document.getElementById("root"));*/

/*function Blog(props) {
    const a = (
        <ul>
            {props.posts.map(post => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const b = props.posts.map((post => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ));
    return (
        <div>
            {a}
            <hr />
            {b}
        </div>
    );
}

const posts = [
    {id : "1", title : "React", content : "welcome to React!!"},
    {id : "2", title : "Java", content : "welcome to Java!!"}
];

ReactDOM.render(<Blog posts={posts}/>,document.getElementById("root"));*/