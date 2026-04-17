import { useNavigate } from "react-router-dom";

export default function NotificationPermission() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* ICON */}
          <div style={styles.iconWrapper}>
            <div style={styles.iconCircle}>
              🔔
            </div>
          </div>

          {/* TITLE */}
          <h1 style={styles.title}>
            Enable Notification Access
          </h1>

          {/* SUBTEXT */}
          <p style={styles.subtitle}>
            Enable notifications to receive real-time updates on your ride status, driver arrival.
          </p>

          {/* BUTTONS */}
          <div style={styles.buttonContainer}>

            <button
              style={styles.primaryButton}
              onClick={() => navigate("/home")}
            >
              Allow Notifications
            </button>

            <button
              style={styles.secondaryButton}
              onClick={() => navigate("/home")}
            >
              Maybe Later
            </button>

          </div>

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
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    overflow: "hidden",
  },

  container: {
    height: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxSizing: "border-box",
  },

  iconWrapper: {
    marginBottom: "25px",
  },

  iconCircle: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#fde6d2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    color: "#F7931E", // 🔥 orange bell
  },

  title: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  subtitle: {
    fontSize: "13px",
    color: "#666",
    lineHeight: "18px",
    padding: "0 10px",
    marginBottom: "40px",
  },

  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  primaryButton: {
    width: "100%",
    backgroundColor: "#F7931E",
    padding: "15px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  secondaryButton: {
    width: "100%",
    backgroundColor: "#fff",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
  },
};