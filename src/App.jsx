import Player from "./components/Player.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="easy" targetTime={1} />
        <Timer title="easy" targetTime={5} />
        <Timer title="easy" targetTime={10} />
        <Timer title="easy" targetTime={15} />

      </div>
    </>
  );
}

export default App;
