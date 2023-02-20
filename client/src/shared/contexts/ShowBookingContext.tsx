import { createContext } from "react";

export const BookingContext = createContext({visible: false, setVisible: (value: boolean) =>{}})