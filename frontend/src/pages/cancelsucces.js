import React from "react";
import { useNavigate } from "react-router-dom";

export default function CancelSucces() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* CENTER CARD */}
        <div style={styles.card}>

          {/* ICON */}
          <div style={styles.icon}>
            ✕
          </div>

          {/* TEXT */}
          <h2 style={styles.title}>
            Booking Cancelled Successfully!
          </h2>

          <p style={styles.desc}>
            Your Booking with Jenny Wilson has been cancelled successfully.
          </p>

          {/* BUTTON */}
          <button
            style={styles.button}
            onClick={() => navigate("/driverarrived")}
          >
            Got it
          </button>

        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f5f5f5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mobileFrame: {
    width: "360px",
    height: "720px",
    backgroundColor: "#ffffff",
    borderRadius: "28px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "300px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "30px 20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },

  icon: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "4px solid #f7931e",
    color: "#f7931e",
    fontSize: "36px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px",
  },

  title: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  desc: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "25px",
    lineHeight: "20px",
  },

  button: {
    backgroundColor: "#f7931e",
    border: "none",
    padding: "14px 40px",
    borderRadius: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
  },
};