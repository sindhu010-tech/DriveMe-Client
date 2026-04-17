import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={styles.page}>

      {/* AUTOFILL FIX */}
      <style>
        {`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #e9e4e4 inset !important;
          -webkit-text-fill-color: #000 !important;
        }
        `}
      </style>

      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          <h1 style={styles.title}>Create Account</h1>

          <p style={styles.subtitle}>
            Fill your information below or register
            with your social account
          </p>

          <label style={styles.label}>Name</label>
          <input type="text" placeholder="Enter your name" style={styles.input} />

          <label style={styles.label}>Email</label>
          <input type="email" placeholder="example@gmail.com" style={styles.input} />

          <label style={styles.label}>Password</label>
          <div style={styles.passwordBox}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              style={styles.passwordInput}
            />
            <span style={styles.eye} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <label style={styles.label}>Mobile Number</label>
          <input type="text" placeholder="+91xxxxxxxxxx" style={styles.input} />

          <label style={styles.checkboxRow}>
            <input type="checkbox" defaultChecked style={styles.checkbox} />
            <span style={styles.checkboxText}>
              Agree with Terms & conditions
            </span>
          </label>

          {/* ✅ FIXED BUTTON */}
          <button
            style={styles.button}
            type="button"
            onClick={() => navigate("/verify?type=signup")}
          >
            Sign Up
          </button>

          <div style={styles.dividerRow}>
            <div style={styles.line}></div>
            <span style={styles.or}>or sign up with</span>
            <div style={styles.line}></div>
          </div>

          <button style={styles.googleBtn}>
            <span style={styles.googleIcon}>G</span>
            Sign in with Google
          </button>

          {/* ✅ FIXED FOOTER */}
          <p style={styles.footer}>
            Already have an account?{" "}
            <span
              style={styles.link}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh", // ✅ FIX
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
    boxSizing: "border-box",
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    overflow: "hidden",
  },

  container: {
    padding: "20px",
    boxSizing: "border-box",
  },

  title: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
    marginBottom: "25px",
    lineHeight: "20px",
  },

  label: {
    fontSize: "14px",
    marginBottom: "6px",
    display: "block",
    fontWeight: "500",
  },

  input: {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    backgroundColor: "#e9e4e4",
    marginBottom: "16px",
    fontSize: "14px",
    boxSizing: "border-box",
  },

  passwordBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e9e4e4",
    borderRadius: "10px",
    marginBottom: "16px",
    paddingRight: "10px",
  },

  passwordInput: {
    flex: 1,
    padding: "13px",
    border: "none",
    outline: "none",
    backgroundColor: "#e9e4e4",
    fontSize: "14px",
  },

  eye: {
    cursor: "pointer",
  },

  checkboxRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "22px",
  },

  checkbox: {
    marginRight: "8px",
  },

  checkboxText: {
    fontSize: "13px",
  },

  button: {
    width: "100%",
    backgroundColor: "#F7931E",
    padding: "15px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "22px",
  },

  dividerRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },

  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#ccc",
  },

  or: {
    margin: "0 10px",
    fontSize: "12px",
    color: "#777",
  },

  googleBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "30px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
    cursor: "pointer",
  },

  googleIcon: {
    fontWeight: "bold",
    color: "#DB4437",
    fontSize: "16px",
  },

  footer: {
    textAlign: "center",
    fontSize: "13px",
  },

  link: {
    fontWeight: "600",
    cursor: "pointer",
  },
};