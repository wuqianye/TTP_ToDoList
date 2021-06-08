import './App.css';
import TaskContainer from './Components/TaskContainer'
import Timer from './Components/Timer'

function App() {
  const time = new Date();
  time.setMinutes(time.getMinutes() + 20); // 10 min
  return (
    <div className="container2">
      <TaskContainer />
      <Timer />
    </div>
  );
}

export default App;
