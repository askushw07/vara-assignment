import { useContext } from "react";
import "./App.css";
import CsvFileHandler from "./components/CsvFileHandler";
import { MyStore } from "./ContextApi/Store";
import CreateTable from "./components/CreateTable";
// import ShowSelected from "./components/ShowSelected";

function App() {
  const { error, data } = useContext(MyStore);
  return (
    <>
      <CsvFileHandler />
      {data && <CreateTable data={data} />}
      {/* <ShowSelected/> */}
    </>
  );
}

export default App;
