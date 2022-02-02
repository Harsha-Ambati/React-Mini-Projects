import "./styles.css";
import Folder from "./components/Folder";
import datas from "./data/folder";
export default function App() {
  return (
    <div className="App">
<Folder datas={datas}/>
    </div>
  );
}
