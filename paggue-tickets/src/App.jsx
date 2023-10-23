import { ContextProvider } from "./context/context";
import Router from "./routes/route";
import Topbar from "./scenes/global/Topbar";

function App() {

  return (
    <div className="app">
      <ContextProvider>
        <main className='content' style={{ width: "100%" }}>
          <Topbar />
          <Router />
        </main>
      </ContextProvider>
    </div>
  );
}

export default App;
