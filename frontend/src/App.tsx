import GlobalStyle from "./styles/GlobalStyle";
import AppRoutes from "./routes/AppRoutes";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <AppRoutes />
    </>
  );
}

export default App;
