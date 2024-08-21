import React, { useMemo, useState, useContext } from "react";
import TableHead from "./table/TableHead";
import RowData from "./table/RowData";
import Pegination from "./Pegination";
import { MyStore } from "../ContextApi/Store";

const CreateTable = ({ data }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { name } = useContext(MyStore);

  const handleSelect = (e) => {
    setPage(1);
    setPageSize(e.target.value);
  };
  const head = useMemo(() => {
    return Object.keys(data[0]);
  }, [data]);

  const lastPage = useMemo(() => {
    return Math.ceil(data.length / pageSize);
  }, [data, pageSize]);

  const parsingData = useMemo(() => {
    return data.slice(
      (page - 1) * pageSize,
      Math.min(pageSize * page, data.length)
    );
  }, [page, pageSize]);

  return (
    <div className="flex flex-col gap-8  mt-8 mb-8 pl-5 pr-5 md:pl-10 md:pr-10">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
          </svg>{" "}
          <p>{name}</p>
        </div>
        <div>
          Rows per page :{" "}
          <select onChange={handleSelect}>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div className="relative overflow-x-scroll shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {head && <TableHead head={head} />}
          </thead>
          <tbody>
            {parsingData?.map((e) => (
              <RowData body={Object.values(e)} key={e["Car Name"]} />
            ))}
          </tbody>
        </table>
      </div>
      <Pegination page={page} setPage={setPage} lastPage={lastPage} />
    </div>
  );
};

export default CreateTable;
