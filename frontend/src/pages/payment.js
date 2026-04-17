import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("cash");

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* TITLE */}
        <h2 style={styles.title}>Payment Methods</h2>

        {/* CASH */}
        <div style={styles.section}>
          <p style={styles.label}>Cash:</p>

          <div style={styles.optionBox} onClick={() => setSelected("cash")}>
            <span style={styles.icon}>💵</span>
            <span style={styles.text}>Cash</span>

            <div style={selected === "cash" ? styles.radioActive : styles.radio}></div>
          </div>
        </div>

        {/* WALLET */}
        <div style={styles.section}>
          <p style={styles.label}>Wallet:</p>

          <div style={styles.optionBox} onClick={() => setSelected("wallet")}>
            <span style={styles.icon}>👛</span>
            <span style={styles.text}>Wallet</span>

            <div style={selected === "wallet" ? styles.radioActive : styles.radio}></div>
          </div>
        </div>

        {/* CARD */}
        <div style={styles.section}>
          <p style={styles.label}>Credit & Debit Card:</p>

          <div
            style={styles.optionBox}
            onClick={() => navigate("/carddetail")}
          >
            <span style={styles.icon}>💳</span>
            <span style={styles.text}>Add Card</span>
          </div>
        </div>

        {/* UPI */}
        <div style={styles.section}>
          <p style={styles.label}>NetBanking/UPI:</p>

          <div style={styles.optionBox}>
            <span style={styles.icon}>▶▶</span>
            <span style={styles.text}>Add UPI ID</span>
          </div>
        </div>

        {/* MORE OPTIONS */}
        <div style={styles.section}>
          <p style={styles.label}>More Payments Option:</p>

          <div style={styles.optionBox} onClick={() => setSelected("paypal")}>
            <span style={styles.text}>PayPal</span>
            <div style={selected === "paypal" ? styles.radioActive : styles.radio}></div>
          </div>

          <div style={styles.optionBox} onClick={() => setSelected("apple")}>
            <span style={styles.text}>Apple Pay</span>
            <div style={selected === "apple" ? styles.radioActive : styles.radio}></div>
          </div>

          <div style={styles.optionBox} onClick={() => setSelected("google")}>
            <span style={styles.text}>Google Pay</span>
            <div style={selected === "google" ? styles.radioActive : styles.radio}></div>
          </div>
        </div>

        {/* CONFIRM BUTTON */}
        <div style={styles.bottom}>
          <button
            style={styles.button}
            onClick={() => navigate("/driversearching")}
          >
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mobileFrame: {
    width: "360px",
    height: "720px",
    backgroundColor: "#f2f2f2",
    borderRadius: "20px",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
  },

  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  section: {
    marginBottom: "15px",
  },

  label: {
    fontSize: "14px",
    marginBottom: "8px",
    color: "#333",
  },

  optionBox: {
    backgroundColor: "#fff",
    padding: "14px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    cursor: "pointer",
  },

  icon: {
    marginRight: "10px",
  },

  text: {
    flex: 1,
    fontSize: "14px",
  },

  radio: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    border: "2px solid #ccc",
  },

  radioActive: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#F7931E",
  },

  bottom: {
    position: "absolute",
    bottom: "20px",
    width: "90%",
    left: "5%",
  },

  button: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#F7931E",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};