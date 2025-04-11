import bootstrap from "bootstrap"; //not sure why this is needed here?
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
      <div className="App text-center my-4">
        <h1>CS 330L</h1>
        <h2>Section - 011</h2>
        <p>WVU ID: 800427114</p>
        <p>Hi I am Kaushika Wijerathne</p>
          <Navbar />;
          <Card />;
      </div>

  );
}

export default App;
