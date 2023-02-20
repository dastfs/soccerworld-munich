export interface BookingType {
  id: number;
  date: string;
  time: number;
  email: string;
}

export interface TableUnitType {
  courtName: string;
  slots: Array<BookingType>;
}

export interface Cell {
  courtName: string;
  price: number;
  time: number;
  booking?: number
};

