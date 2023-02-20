import { BookingType, TableUnitType } from "./types";

import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 3001;

app.get("/api", (req:Request, res:Response) => {
  res.json({ bookingData: bookingList });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

//TEST DATA
const booking1: BookingType = {
  id: 1,
  date: "160223",
  time: 1500,
  email: "das@email.com",
};

const booking2: BookingType = {
  id: 2,
  date: "160223",
  time: 1600,
  email: "das@email.com",
};

const booking3: BookingType = {
  id: 3,
  date: "160223",
  time: 1700,
  email: "das@email.com",
};

const bootableUnit1: TableUnitType = {
  courtName: "court-1",
  slots: [booking1, booking2, booking3],
}; //sorted by time

const bootableUnit2: TableUnitType = {
  courtName: "court-2",
  slots: [booking1, booking2, booking3],
};

const bootableUnit3: TableUnitType = {
  courtName: "court-3",
  slots: [booking1, booking2, booking3],
};

export const bookingList = [bootableUnit1, bootableUnit2, bootableUnit3];

