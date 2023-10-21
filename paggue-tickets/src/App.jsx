import Router from "./routes/route";
import Topbar from "./scenes/global/Topbar";

function App() {

  return (
    <div className="app">
      <main className='content'>
        <Topbar />
        <Router />
      </main>
    </div>
  );
}

export default App;
