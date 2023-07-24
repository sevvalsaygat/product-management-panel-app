type TablePropTypes = {};

const Table = ({}: TablePropTypes) => {
  return (
    <div className="flex justify-center">
      <table className="w-2/3 border">
        <thead className="text-xs text-gray-700 bg-gray-200 dark:text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-5">
              SIZE
            </th>
            <th scope="col" className="px-6 py-3">
              COLOR
            </th>
            <th scope="col" className="px-6 py-3">
              PRICE
            </th>
            <th scope="col" className="px-6 py-3">
              PHOTO
            </th>
            <th scope="col" className="px-6 py-3">
              DESCRIPTION
            </th>
            <th scope="col" className="px-6 py-3">
              QUANTITY
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
