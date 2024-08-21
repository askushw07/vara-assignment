
const TableHead = ({ head }) => {
 
  return (
    <tr>
      {head?.map((ele) => (
        <th scope="col" className="px-6 py-3" key={ele}>
          {ele}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;
