import React, { useContext, } from "react";
import { MyStore } from "../ContextApi/Store";
import Papa from "papaparse";

const CsvFileHandler = () => {
  const { throwError, parseData, setFileName } = useContext(MyStore);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "text/csv") {
      setFileName("");
      throwError("Please upload a valid CSV file.");
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        if (result.data.length === 0) {
          setFileName("");
          throwError("Empty CSV file.");
        } else {
          throwError(null);
          parseData(result.data);
          setFileName(file.name);
        }
      },
      error: (err) => throwError("Error while parsing CSV file."),
    });
  };
  return (
    <div className="flex  bg-slate-100 p-8 gap-20 md:justify-between">
      <h1 className="text-xl">CSV Parser</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} className="" />
    </div>
  );
};

export default CsvFileHandler;
