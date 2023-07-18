import './App.css';
import IceCreamView from '../Components/iceCreamView';
import { UserView } from '../Components/userView';
import CakeView from '../Components/cakeView';

function App() {


  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
