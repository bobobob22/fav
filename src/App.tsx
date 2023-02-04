import { Header } from "./components/Header/Header";
import { HomeContainer } from "./pages/Home.container";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeContainer />
    </div>
  );
};
