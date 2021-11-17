import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { createTodo, readTodos } from "./functions";
function App() {
const [todos, setTodos] = useState([])
const [todo, setTodo] = useState({ title: '', content: '' });
useEffect(() => {
const fetchData = async () => {
const result = await readTodos();
console.log(result)
setTodos(result)
}
fetchData()
// console.log(readTodos())
}, [])
const onSubmitHandler = async (e) => {
e.preventDefault();
console.log('submit')
const result = await createTodo(todo);
console.log('createTodo result', result)
setTodos([...todos, todo])
}
return (
<div className="container">
<div className="row">
<pre>{JSON.stringify(todo)}</pre>
<form className="col s12" onSubmit={onSubmitHandler}>
<div className="row ">
<div className="input-field col s6">
<i className="material-icons prefix">title</i>
<input id="icon_prefix" type="text" className="validate" value={todo.title}
onChange={(e) => setTodo({ ...todo, title: e.target.value })}
/>
<label htmlFor="icon_prefix">Title</label>
</div>
<div className="input-field col s6">
<i className="material-icons prefix">description</i>
<input id="icon_telephone" type="tel" className="validate" value={todo.content}
onChange={(e) => setTodo({ ...todo, content: e.target.value })}
/>
<label htmlFor="icon_telephone">Content</label>
</div>
<div className="row right-align">
<button class="waves-effect waves-light btn ">submit</button>
</div>
</div>
</form>
<ul class="collection">
{!todos.length ? <Preloader /> : todos.map(todo => (
<li key={todo._id} class="collection-item "><h5>{todo.title}</h5>
<p>{todo.content}   <a href="#!"
class="secondary-content"><i class="material-icons">delete</i></a></p>
</li>
))}
</ul>
</div>
</div>
);
}
export default App;