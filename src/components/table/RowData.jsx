import React from "react";

const RowData = ({ body }) => {
  
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
      
    </tr>
  );
};

export default RowData;
