import { Route } from "wouter";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Auth0Provider } from "@auth0/auth0-react";
import { Learn } from "./pages/Learn";
import { Community } from "./pages/Community";
import { MyDecks } from "./pages/My-Decks";
import { AuthProvider } from "./hooks/useAuth";
import { EditDeck } from "./pages/EditDeck";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@mdxeditor/editor/style.css";
import "./App.css";

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthProvider>
        <div className="min-h-screen font-sans h-screen flex">
          <Navbar />
          <div className="p-12 h-full flex-1 bg-offblack flex-grow">
            <Route path="/" component={Home} />
            <Route path="/learn" component={Learn} />
            <Route path="/community" component={Community} />
            <Route path="/my-decks" component={MyDecks} />
            <Route path="/edit/deck/:id" component={EditDeck} />
            <ToastContainer theme="dark" />
          </div>
        </div>
      </AuthProvider>
    </Auth0Provider>
  );
}

export default App;
