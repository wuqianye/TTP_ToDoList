import './App.css';
import TaskContainer from './Components/TaskContainer'
import Timer2 from './Components/Timer2'
function App() {
  const time = new Date();
  time.setMinutes(time.getMinutes() + 20); // 10 min
  return (
    <div className="container2">
      <TaskContainer />
      <Timer2 />
    </div>
  );
}

export default App;
