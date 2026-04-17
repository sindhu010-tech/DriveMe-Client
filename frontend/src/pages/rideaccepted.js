import React from "react";
import { useNavigate } from "react-router-dom";

export default function RideAccepted() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* CARD */}
        <div style={styles.card}>

          {/* ICON */}
          <div style={styles.iconWrapper}>
            <div style={styles.circle}>
              <div style={styles.check}></div>
            </div>
          </div>

          {/* TEXT */}
          <h1 style={styles.title}>Congratulations !</h1>
          <h2 style={styles.subtitle}>Ride Accepted</h2>

          <p style={styles.desc}>
            Your Ride was Booked Successfully.
          </p>

          <p style={styles.subDesc}>
            Driver arriving soon... You can check your
            booking on the “Bookings”
          </p>

          {/* BUTTON */}
          <button
            style={styles.button}
            onClick={() => navigate("/driverarriving")}
          >
            Track Driver
          </button>

          <div
            style={styles.back}
            onClick={() => navigate(-1)}
          >
            Back
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#f5f5f5", // ✅ FIXED (no more black)
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },

 mobileFrame: {
  width: "360px",
  height: "640px",
  backgroundColor: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "30px",          // ✅ THIS gives curved screen
  overflow: "hidden",            // ✅ IMPORTANT (clips inside content)
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)", // ✅ optional realistic shadow
},

  card: {
    width: "300px",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    padding: "40px 20px 30px",
    textAlign: "center",
  },

  iconWrapper: {
    marginBottom: "20px",
  },

  circle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "3px solid #222",
    margin: "0 auto",
    position: "relative",
  },

  check: {
    position: "absolute",
    top: "18px",
    left: "22px",
    width: "20px",
    height: "35px",
    borderRight: "4px solid #222",
    borderBottom: "4px solid #222",
    transform: "rotate(45deg)",
  },

  title: {
    fontSize: "22px",
    fontWeight: "700",
    margin: "10px 0 5px",
  },

  subtitle: {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "15px",
  },

  desc: {
    fontSize: "14px",
    marginBottom: "10px",
  },

  subDesc: {
    fontSize: "13px",
    color: "#666",
    lineHeight: "18px",
    marginBottom: "30px",
  },

  button: {
    width: "220px",
    height: "45px",
    backgroundColor: "#ff9800",
    border: "none",
    borderRadius: "25px",
    color: "#000",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },

  back: {
    fontSize: "14px",
    color: "#000",
    cursor: "pointer",
  },
};