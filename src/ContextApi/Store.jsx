import React, { createContext, useState } from "react";

export const MyStore = createContext(null);

const Store = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState({});

  const throwError = (err) => {
    setError(err);
  };
  const parseData = (d) => {
    setData(d);
  };
  const setFileName = (nam) => {
    setName(nam);
  };
  // const setSelectedRows = ([...r]) => {setRows([...r])};
  // const setSelectedCols = ([...c]) => {setCols([...c])};
  return (
    <MyStore.Provider
      value={{
        error,
        throwError,
        data,
        parseData,
        name,
        setFileName,
        // rows,
        // cols,
        // setSelectedCols,
        // setSelectedRows,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default Store;
