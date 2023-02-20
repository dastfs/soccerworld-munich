export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

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

export interface CellsAndValues{
  cells: Cell[][];
  values: Map<Cell, string>;
}
