// import UseEffect from "./component/UseEffect";
import useLocalStorage from "./component/useLocalStorage";

const App = () => {
  const [val, setVal] = useLocalStorage("name", "gand");

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
