import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Otp() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ SAFE PARAM READ
  const params = new URLSearchParams(location.search);
  const type = params.get("type") || "signup"; // 🔥 default signup

  const inputs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 3) {
      inputs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          <h1 style={styles.title}>Verify Code</h1>

          <p style={styles.subtitle}>
            Please enter the code sent to the email
          </p>

          <p style={styles.email}>example@gmail.com</p>

          <div style={styles.otpContainer}>
            {inputs.map((ref, i) => (
              <input
                key={i}
                ref={ref}
                maxLength="1"
                style={styles.otpBox}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>

          <p style={styles.smallText}>Didn’t receive OTP?</p>
          <p style={styles.resend}>Resend code</p>

          {/* ✅ FINAL FIXED BUTTON */}
          <button
            style={styles.button}
            onClick={() => {
              console.log("TYPE:", type); // debug

              if (type === "forgot") {
                navigate("/new-password"); // 🔐 forgot flow
              } else {
                navigate("/complete-profile"); // 🧑 signup flow
              }
            }}
          >
            Verify
          </button>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
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
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    width: "100%",
    padding: "20px",
    textAlign: "center",
  },

  title: {
    fontSize: "26px",
    fontWeight: "700",
    marginTop: "100px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
  },

  email: {
    fontSize: "14px",
    color: "#F7931E",
    marginBottom: "50px",
  },

  otpContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "35px",
  },

  otpBox: {
    width: "55px",
    height: "55px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#e9e4e4",
    textAlign: "center",
    fontSize: "22px",
    outline: "none",
  },

  smallText: {
    fontSize: "12px",
    color: "#777",
    marginBottom: "6px",
  },

  resend: {
    fontSize: "13px",
    textDecoration: "underline",
    marginBottom: "50px",
    cursor: "pointer",
  },

  button: {
    width: "260px",
    padding: "15px",
    backgroundColor: "#F7931E",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};