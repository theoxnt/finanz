import { RouterProvider } from "react-router-dom";
import { ModeToggle } from './components/ui/mode-toggle'
import router from "./routes";

function App() {
  return (
    <div>
      <div className="fixed top-2 right-2">
      <ModeToggle />
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;