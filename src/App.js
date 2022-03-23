import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className='container'>
          <div className='box'>
            <div className='calc'>
              <input className='display' type='text' value='1' />
              <div  className='buttons'>
                <span>%</span>
                <span>CE</span>
                <span>C</span>
                <span>'/-'</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>X</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>./.</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>-</span>
                <span>.</span>
                <span>0</span>
                <span className='equal'>=</span>
              </div>
            </div>
          </div>
      </div>
  );
}

export default App;
