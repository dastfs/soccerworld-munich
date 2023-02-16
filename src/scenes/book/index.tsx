import { BookingContext } from "@/shared/ShowBookingContext";
import { useContext } from "react";
import FootballBooking from "./football";

type Props = {};

const Booking = (props: Props) => {
  const bookingContext = useContext(BookingContext);
  return (
    <>
      {bookingContext.visible && (
        <div id="bookingModal" className="fixed top-1/2 left-1/2 
                                         -ml-[375px] -mt-[250px] bg-white z-20 w-[750px] h-[500px]">
            <FootballBooking />
        </div>
      )}
    </>
  );
};

export default Booking;
