import { createTable } from "@/shared/bookingData/BookingUtil";
import { CellsAndValues, TableUnitType } from "@/shared/types/types";
import { useEffect, useState } from "react";

const FootballBooking = () => {
  const [data, setData] = useState<TableUnitType[]>([]);
  let cellsAndValues: CellsAndValues | null = null;

  useEffect(() => {
    console.log("useEffect");
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.bookingData));
  }, []);


  if (data.length > 0) {
    cellsAndValues = createTable(data);
  }

  return (
    <div className="w-4/5 bg-white p-5">
      {data.length > 0 && cellsAndValues != null ? (
        <table className="mt-[25px] h-[20%] w-[80%] border-collapse ">
          <tbody>
            {cellsAndValues.cells.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  <td className="border">{row[0].courtName}</td>
                  {row.map((column, colIndex) => {
                    return (
                      <td className="border" key={colIndex}>
                        {cellsAndValues !=null && cellsAndValues.values.get(column) != null ? (
                          "booked"
                        ) : (
                          <button
                            onClick={() => {
                              console.log("click");
                            }}
                          >
                            {column.price}
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "...Loading"
      )}
    </div>
  );
};

export default FootballBooking;
