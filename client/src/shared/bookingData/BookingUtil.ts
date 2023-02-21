import { Cell, CellsAndValues, TableUnitType } from "../types/types";
import { BookingContstants } from "../constants/constants";

export function createTable(bookingData: TableUnitType[]) {
  if (bookingData.length === 0) {
    return null;
  }

  const cells = Array(BookingContstants.courtNumber)
    .fill(null)
    .map(() =>
      Array((BookingContstants.timeEnd - BookingContstants.timeStart) / BookingContstants.step).fill(null)
    );

  const values = new Map();

  for (let i = 0; i < BookingContstants.courtNumber; i++) {
    let time = BookingContstants.timeStart;
    let bookingIndex = 0;

    for (let j = 0; j < cells[i].length; j++) {
      const cell: Cell = {
        courtName: bookingData[i].courtName,
        time: time,
        price: getPriceByTime(time),
      };

      cells[i][j] = cell;
      const slotsLength = bookingData[i].slots.length;
      const bookingSlot = bookingData[i].slots[bookingIndex];

      if (bookingSlot.time === time) {
        values.set(cell, bookingSlot);
        if (bookingIndex < slotsLength - 1) bookingIndex++;
      } else {
        values.set(cell, null);
      }

      time += BookingContstants.step;
    }
  }

  const cellsAndValues: CellsAndValues = {
    cells: cells,
    values: values,
  };

  return cellsAndValues;
}

function getPriceByTime(time: number) {
  let priceByTime = BookingContstants.price;
  if (time > 1800) priceByTime = 40;
  return priceByTime;
}
