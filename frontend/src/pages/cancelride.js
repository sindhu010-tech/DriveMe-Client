import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CancelRide() {
  const [selected, setSelected] = useState("Schedule Change");
  const navigate = useNavigate();

  const reasons = [
    "Schedule Change",
    "Book Another Driver",
    "Found a better Alternative",
    "Driver is taking too long",
    "My reason is not listed",
    "Other",
  ];

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          <h2 style={styles.title}>Cancel Driver Booking</h2>

          <p style={styles.subtitle}>
            Please select the reason for cancellations:
          </p>

          {/* RADIO LIST */}
          <div style={styles.radioGroup}>
            {reasons.map((reason, index) => (
              <label key={index} style={styles.radioItem}>
                <input
                  type="radio"
                  name="reason"
                  checked={selected === reason}
                  onChange={() => setSelected(reason)}
                  style={styles.radio}
                />
                {reason}
              </label>
            ))}
          </div>

          {/* DIVIDER */}
          <div style={styles.divider}></div>

          {/* OTHER INPUT */}
          <p style={styles.otherLabel}>Other:</p>

          <textarea
            placeholder="Enter your Reason"
            style={styles.textarea}
          />

          {/* BUTTON */}
          <button
            style={styles.cancelBtn}
            onClick={() => navigate("/cancelsucces")}
          >
            Cancel Ride
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
    padding: "20px",
    overflow: "hidden",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  title: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "700",
    marginTop: "20px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#777",
    marginTop: "10px",
    marginBottom: "20px",
  },

  radioGroup: {
    marginLeft: "10px",
  },

  radioItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "14px",
    fontSize: "15px",
    gap: "10px",
  },

  radio: {
    accentColor: "#f7931e",
    transform: "scale(1.2)",
  },

  divider: {
    height: "1px",
    backgroundColor: "#ddd",
    margin: "20px 0",
  },

  otherLabel: {
    fontSize: "15px",
    marginBottom: "8px",
  },

  textarea: {
    height: "110px",
    borderRadius: "14px",
    border: "1px solid #ccc",
    padding: "12px",
    fontSize: "14px",
    resize: "none",
    outline: "none",
  },

  cancelBtn: {
    marginTop: "auto",
    alignSelf: "center",
    backgroundColor: "#f7931e",
    border: "none",
    padding: "14px 40px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
  },
};