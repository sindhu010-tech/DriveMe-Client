import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={styles.page}>

      {/* 🔥 FIX AUTOFILL BLUE */}
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

          {/* TITLE */}
          <h1 style={styles.title}>Sign In</h1>

          <p style={styles.subtitle}>
            Hi Welcome Back! you’ve been missed
          </p>

          {/* EMAIL */}
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            style={styles.input}
          />

          {/* PASSWORD */}
          <label style={styles.label}>Password</label>
          <div style={styles.passwordBox}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••••"
              style={styles.passwordInput}
            />
            <span
              style={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* FORGOT PASSWORD */}
          <div style={styles.forgotRow}>
            <span
              style={styles.forgot}
              onClick={() => navigate("/verify?type=forgot")}
            >
              Forgot Password?
            </span>
          </div>

          {/* BUTTON */}
          <button
            type="button"
            style={styles.button}
            onClick={() => navigate("/home")}
          >
            Sign In
          </button>

          {/* DIVIDER */}
          <div style={styles.dividerRow}>
            <div style={styles.line}></div>
            <span style={styles.or}>or sign up with</span>
            <div style={styles.line}></div>
          </div>

          {/* GOOGLE */}
          <button style={styles.googleBtn}>
            <span style={styles.googleIcon}>G</span>
            Sign in with Google
          </button>

          {/* FOOTER */}
          <p style={styles.footer}>
            Don’t have an account?{" "}
            <span
              style={styles.link}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>

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
  },

  container: {
    padding: "24px",
    boxSizing: "border-box",
  },

  title: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "700",
    marginTop: "90px",
    marginBottom: "8px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
    marginBottom: "40px",
  },

  label: {
    fontSize: "14px",
    marginBottom: "6px",
    display: "block",
    fontWeight: "500",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#e9e4e4",
    marginBottom: "18px",
    fontSize: "14px",
    boxSizing: "border-box",
    outline: "none",
  },

  passwordBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e9e4e4",
    borderRadius: "10px",
    marginBottom: "8px",
    paddingRight: "10px",
  },

  passwordInput: {
    flex: 1,
    padding: "14px",
    border: "none",
    backgroundColor: "#e9e4e4",
    fontSize: "14px",
    outline: "none",
  },

  eye: {
    cursor: "pointer",
  },

  forgotRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "30px",
  },

  forgot: {
    fontSize: "12px",
    textDecoration: "underline",
    cursor: "pointer",
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
    marginBottom: "25px",
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
    marginBottom: "25px",
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