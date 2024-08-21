import { useContext } from "react";
import "./App.css";
import CsvFileHandler from "./components/CsvFileHandler";
import { MyStore } from "./ContextApi/Store";
import CreateTable from "./components/CreateTable";


function App() {
  const { error, data } = useContext(MyStore);
  return (
    <>
      <CsvFileHandler />
      {error && <p className="text-red-500 top-10 left-10">{error}</p>}
      {data && <CreateTable data={data} />}
    </>
  );
}

export default App;
