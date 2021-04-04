import {useState} from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
    const[showAddTask, setShowAddTask] = useState(false)	

	const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doco',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },

        {
            id: 2,
            text: 'Dim',
            day: 'Feb 6th at 2:30pm',
            reminder: true,
        },

        {
            id: 3,
            text: 'Sun',
            day: 'Feb 7th at 2:30pm',
            reminder: false,
        }

    ])

  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
  }
  
  const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
            task.id === id ? { ...task, reminder: !task.reminder } : task
        ) 
      )
  }

  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }


  return (
    <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : ( 
            'No tasks to show'
        ) }


    </div>
  );
}

export default App;
