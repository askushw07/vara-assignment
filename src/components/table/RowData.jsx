import React,{useState, useContext, useEffect} from "react";
import { MyStore } from "../../ContextApi/Store";

const RowData = ({ body }) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const { rows, setSelectedRows }  = useContext(MyStore)
  // useEffect(() => {
  //   if (isChecked) {
  //     setSelectedRows([...rows, body[0]])
  //   }
  //   else {
  //     const nr = rows.filter(e => e != body[0]);
  //     setSelectedRows([...nr]);
  //   }
  
  // }, [isChecked])
  
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {body[0]}
      </th>
      {body.slice(1)?.map((e) => (
        <td className="px-6 py-4" key={e}>
          {e}
        </td>
      ))}
      {/* <td className="px-6 py-4 text-right">
        <input type="checkbox"
          value={isChecked}
          onChange={()=>setIsChecked(s=>!s)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        />
      </td> */}
    </tr>
  );
};

export default RowData;
