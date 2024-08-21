import React, { createContext, useState } from "react";

export const MyStore = createContext(null);

const Store = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [name, setName] = useState();

  const throwError = (err) => {
    setError(err);
  };
  const parseData = (d) => {
    setData(d);
  };
  const setFileName = (nam) => {
    setName(nam);
  };
  return (
    <MyStore.Provider
      value={{
        error,
        throwError,
        data,
        parseData,
        name,
        setFileName,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default Store;
