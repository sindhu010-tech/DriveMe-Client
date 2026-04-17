import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // 🔥 validation
    if (!password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // ✅ success
    alert("Password changed successfully");

    // 👉 go back to sign in
    navigate("/signin");
  };

  return (
    <div style={styles.page}>

      {/* REMOVE BLUE AUTOFILL */}
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

          <h1 style={styles.title}>New Password</h1>

          <p style={styles.subtitle}>
            Your new password should be different from
            previously used password
          </p>

          {/* PASSWORD */}
          <label style={styles.label}>Password</label>
          <div style={styles.passwordBox}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="••••••••••••••"
              style={styles.passwordInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              style={styles.eye}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "🙈" : "👁️"}
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <label style={styles.label}>Confirm Password</label>
          <div style={styles.passwordBox}>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••••••••"
              style={styles.passwordInput}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              style={styles.eye}
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "🙈" : "👁️"}
            </span>
          </div>

          {/* BUTTON */}
          <button
            type="button"
            style={styles.button}
            onClick={handleSubmit}
          >
            Create New Password
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
  },

  container: {
    padding: "24px",
    boxSizing: "border-box",
  },

  title: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "700",
    marginTop: "110px",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
    lineHeight: "20px",
    marginBottom: "40px",
  },

  label: {
    fontSize: "14px",
    marginBottom: "6px",
    display: "block",
    fontWeight: "500",
  },

  passwordBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e9e4e4",
    borderRadius: "10px",
    marginBottom: "20px",
    paddingRight: "10px",
  },

  passwordInput: {
    flex: 1,
    padding: "14px",
    border: "none",
    backgroundColor: "#e9e4e4",
    fontSize: "14px",
    outline: "none",
    borderRadius: "10px",
  },

  eye: {
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
    marginTop: "40px",
  },
};