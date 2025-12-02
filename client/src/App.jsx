import "./App.css";
import { Navbar } from "./components/Navbar";
import grid from "./assets/grid.jpg";
import { Placeholder } from "./components/Placeholder";
import TestMoveable from "./components/TestMoveable";
function App() {
  return (
    // <div
    //   className="bg-[image:var(--bg-image)] bg-cover bg-center min-h-screen"
    //   style={{ "--bg-image": `url(${grid})` }}
    // >
    <div className="absolute inset-0 h-full w-full bg-yellow-50 bg-[radial-gradient(#28282866_1px,transparent_2px)] bg-size-[16px_16px]">
      <Navbar />
      <Placeholder />
      <TestMoveable />
    </div>
  );
}

export default App;
