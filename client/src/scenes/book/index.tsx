import { BookingContext } from "@/shared/contexts/ShowBookingContext";
import { useContext } from "react";
import FootballBooking from "./football";

const Booking = () => {
  const bookingContext = useContext(BookingContext);
  return (
    <>
      {bookingContext.visible && (
        <div id="bookingModal" className="fixed top-1/2 left-1/2 
                                         -ml-[425px] -mt-[250px] bg-white z-20 w-[850px] h-[500px]">
            <FootballBooking />
        </div>
      )}
    </>
  );
};

export default Booking;
