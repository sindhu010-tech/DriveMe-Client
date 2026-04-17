import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardDetail() {
  const navigate = useNavigate();
  const [save, setSave] = useState(true);

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <span style={styles.back} onClick={() => navigate(-1)}>←</span>
          </div>

          {/* TITLE */}
          <h2 style={styles.title}>Add Card</h2>

          {/* CARD UI */}
          <div style={styles.card}>
            <div style={styles.visa}>VISA</div>

            <div style={styles.cardNumber}>
              4716 9627 1635 8047
            </div>

            <div style={styles.cardBottom}>
              <div>
                <p style={styles.smallLabel}>Card holder name</p>
                <p style={styles.smallValue}>Esther Howard</p>
              </div>

              <div>
                <p style={styles.smallLabel}>Expiry date</p>
                <p style={styles.smallValue}>02/30</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div style={{ flex: 1 }}>

            <p style={styles.label}>Card Holder Name:</p>
            <input style={styles.input} defaultValue="Esther Howard" />

            <p style={styles.label}>Card Number:</p>
            <input style={styles.input} placeholder="xxxx xxxx xxxx xxxx" />

            <div style={styles.row}>
              <div style={{ width: "48%" }}>
                <p style={styles.label}>Expiry Date:</p>
                <input style={styles.input} placeholder="mm/yy" />
              </div>

              <div style={{ width: "48%" }}>
                <p style={styles.label}>CVV:</p>
                <input style={styles.input} placeholder="000" type="password" />
              </div>
            </div>

            {/* CHECKBOX */}
            <div style={styles.checkbox}>
              <input
                type="checkbox"
                checked={save}
                onChange={() => setSave(!save)}
              />
              <span style={{ marginLeft: 8 }}>Save Card</span>
            </div>

          </div>

          {/* BUTTON */}
          <button
            style={styles.button}
            onClick={() => navigate("/driversearching")}   // ✅ FIXED
          >
            Add Card
          </button>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#e5e5e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mobileFrame: {
    width: "360px",
    height: "720px",
    backgroundColor: "#f2f2f2",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
  },

  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    boxSizing: "border-box",
  },

  header: {
    height: "50px",
    display: "flex",
    alignItems: "center",
  },

  back: {
    fontSize: "22px",
    cursor: "pointer",
  },

  title: {
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "10px",
  },

  card: {
    background: "#F7931E",
    borderRadius: "16px",
    padding: "20px",
    height: "170px",
    color: "white",
    position: "relative",
    marginBottom: "15px",
  },

  visa: {
    position: "absolute",
    right: "20px",
    top: "15px",
    fontWeight: "bold",
  },

  cardNumber: {
    marginTop: "50px",
    fontSize: "18px",
    letterSpacing: "2px",
  },

  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
  },

  smallLabel: {
    fontSize: "10px",
    margin: 0,
  },

  smallValue: {
    fontSize: "13px",
    margin: 0,
  },

  label: {
    fontSize: "14px",
    marginBottom: "5px",
    marginTop: "8px",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#e9e4e4",
    marginBottom: "12px",
    outline: "none",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
  },

  checkbox: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },

  button: {
    width: "100%",
    backgroundColor: "#F7931E",
    padding: "15px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
  },
};