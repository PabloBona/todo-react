import Header from './Header';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';

const TodoApp = () => (
  <div className="container">
    <Navbar />
    <Header />
    <TodosLogic />
  </div>
);

export default TodoApp;
