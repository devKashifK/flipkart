import "./App.css";
import Header from "./component/header";
import ProductWrapper from "./component/productWrapper";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="w-full px-10 pb-10 ">
        <ProductWrapper />
      </div>
    </div>
  );
}

export default App;
