import ConsultPanel from "./components/ConsultPanel";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ItemsContainer } from "./components/ItemsContainer";
import { ConsultContextProvider } from "./context/ConsultContext";

function App() {
  return (
    <>
      <ConsultContextProvider>
        <Header />
        <ItemsContainer />
        <ConsultPanel />
        <Footer />
      </ConsultContextProvider>
    </>
  );
}

export default App;
