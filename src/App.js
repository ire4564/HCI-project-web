import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowVideo from './components/ShowVideo';

function App() {
  return (
    <div className="App">
     <ShowVideo url="http://vod.kmoocs.kr/vod/2020/08/12/ab0b11c7-e60d-453a-a334-10b90fca6791.mp4"/>
    </div>
  );
}

export default App;
