import { Cell, CellsAndValues, TableUnitType } from "../types/types";
import { TestData } from "./constants";

export function createTable (data: TableUnitType[]) {

  const cells = Array(TestData.courtNumber)
    .fill(null)
    .map(() =>
      Array((TestData.timeEnd - TestData.timeStart) / TestData.step).fill(null)
    );

  const bookingList = data;
  const values = new Map();

  for (let i = 0; i < TestData.courtNumber; i++) {
    let time = TestData.timeStart;
    let bookingIndex = 0;

    for (let j = 0; j < cells[i].length; j++) {
      const cell: Cell = {
        courtName: bookingList[i].courtName,
        time: time,
        price: getPriceByTime(time),
      };

      cells[i][j] = cell;
      const slotsLength = bookingList[i].slots.length;
      const bookingSlot = bookingList[i].slots[bookingIndex];

      if (bookingSlot.time === time) {
        values.set(cell, bookingSlot);
        if (bookingIndex < slotsLength - 1) bookingIndex++;
      } else {
        values.set(cell, null);
      }

      time += TestData.step;
    }
  }
  
  const cellsAndValues: CellsAndValues = {
    cells: cells,
    values: values
  }

  return cellsAndValues;
}

function getPriceByTime(time: number) {
  let priceByTime = TestData.price;
  if (time > 1800) priceByTime = 40;
  return priceByTime;
}
