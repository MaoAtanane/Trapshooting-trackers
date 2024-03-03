import Router from "@/router";
import GlobalContextProvider from "@/globalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Router />
      </GlobalContextProvider>
    </>
  );
}

export default App;
