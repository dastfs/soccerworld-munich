import { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BookingContext } from "../contexts/ShowBookingContext";

type Props = {
  children: React.ReactNode;
};

const BookingButton = ({ children }: Props) => {
  const { visible, setVisible } = useContext(BookingContext);
  return (
    <button
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-primary-100"
      onClick={() => setVisible(!visible)}
    >
      {children}
    </button>
  );
};

export default BookingButton;
