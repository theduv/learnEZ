import { Route } from "wouter";
import { Home } from "./pages/Home";
import { Header } from "./components/layout/Header";
import "./App.css";

function App() {
  return (
    <div className="bg-orange-200 min-h-screen font-sans">
      <Header />
      <div className="p-12 h-full flex-1">
        <Route path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
