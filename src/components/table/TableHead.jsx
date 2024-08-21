// import React,{useState, useContext} from "react";
// import { MyStore } from "../../ContextApi/Store";

const TableHead = ({ head }) => {
  // const [isChecked, setIsChecked] = useState("");
  // const { cols, setSelectedCols } = useContext(MyStore);
  // const handleChange = (e) => {
  //   if (isChecked) {
  //     setSelectedCols([...cols,e])
  //   }
  //   else {
  //     const nr = cols.filter(col => e != col);
  //     setSelectedCols([...nr])
  //   }
  // }
  return (
    <tr>
      {head?.map((ele) => (
        <th scope="col" className="px-6 py-3" key={ele}>
          {ele}
          {/* <input type="checkbox" value={isChecked} onChange={() => { setIsChecked(s => !s); handleChange(ele)}}/> */}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;
