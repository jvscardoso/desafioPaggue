import { ContextValorTotalProvider } from "./context/contextValorTotal";
import Router from "./routes/route";
import Topbar from "./scenes/global/Topbar";

function App() {

  return (
    <div className="app">
      <main className='content' style={{width:"100%"}}>
        <ContextValorTotalProvider>
          <Topbar />
          <Router />
        </ContextValorTotalProvider>
      </main>
    </div>
  );
}

export default App;
