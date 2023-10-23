import { ContextProvider } from "./context/context";
import Router from "./routes/route";
import Topbar from "./scenes/global/Topbar";

function App() {

  return (
    <ContextProvider>
      <Topbar />
      <Router />
    </ContextProvider>
  );
}

export default App;
