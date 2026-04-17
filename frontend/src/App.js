import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./pages/splash";
import Welcome from "./pages/welcome";
import Signup from "./pages/signup";
import Otp from "./pages/otp";
import SignIn from "./pages/signin";
import NewPassword from "./pages/newpassword";

import LocationPermission from "./pages/locationpermission";
import CompleteProfile from "./pages/completeprofile";
import NotificationPermission from "./pages/notificationpermission";

import Home from "./pages/home";
import TripDetails from "./pages/tripdetails";
import ConfirmLocation from "./pages/confirmlocation";
import ScheduleRide from "./pages/scheduleride";

import PassengerDetail from "./pages/passengerdetail";
import Payment from "./pages/payment";
import CardDetail from "./pages/carddetail";
import DriverSearching from "./pages/driversearching";

import DriverFound from "./pages/DriverFound";
import DriverNotFound from "./pages/DriverNotFound";

import RideAccepted from "./pages/rideaccepted";
import DriverArriving from "./pages/driverarriving";
import CancelRide from "./pages/cancelride";
import CancelSucces from "./pages/cancelsucces";

import ActiveRide from "./pages/activeride";
import DriverArrived from "./pages/driverarrived";
import RateDriver from "./pages/ratedriver";

import Bookings from "./pages/bookings";

// ✅ PROFILE RELATED PAGES
import Profile from "./pages/profile";
import Notification from "./pages/notification";
import PreBooked from "./pages/prebooked";
import Settings from "./pages/settings";
import HelpCenter from "./pages/helpcenter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Splash />} />

        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Otp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/new-password" element={<NewPassword />} />

        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/location-permission" element={<LocationPermission />} />
        <Route path="/notification-permission" element={<NotificationPermission />} />

        <Route path="/home" element={<Home />} />
        <Route path="/tripdetails" element={<TripDetails />} />
        <Route path="/confirmlocation" element={<ConfirmLocation />} />
        <Route path="/scheduleride" element={<ScheduleRide />} />
        <Route path="/passengerdetail" element={<PassengerDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/carddetail" element={<CardDetail />} />

        <Route path="/driversearching" element={<DriverSearching />} />

        <Route path="/driverfound" element={<DriverFound />} />
        <Route path="/drivernotfound" element={<DriverNotFound />} />

        <Route path="/rideaccepted" element={<RideAccepted />} />
        <Route path="/cancelride" element={<CancelRide />} />
        <Route path="/cancelsucces" element={<CancelSucces />} />
        <Route path="/driverarriving" element={<DriverArriving />} />

        {/* ✅ NEW ROUTES */}
        <Route path="/activeride" element={<ActiveRide />} />
        <Route path="/driverarrived" element={<DriverArrived />} />
        <Route path="/ratedriver" element={<RateDriver />} />

        {/* ✅ BOOKINGS ROUTES */}
        <Route path="/bookings" element={<Bookings />} />

        {/* ✅ PROFILE ROUTES */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/completeprofile" element={<CompleteProfile />} /> {/* Profile button in Profile.js */}
        <Route path="/notification" element={<Notification />} />
        <Route path="/prebooked" element={<PreBooked />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/helpcenter" element={<HelpCenter />} />

        <Route path="*" element={<Splash />} />

      </Routes>
    </BrowserRouter>
  );
}