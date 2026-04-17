import { useNavigate } from "react-router-dom";

export default function LocationPermission() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* ICON PLACEHOLDER */}
          <div style={styles.iconWrapper}>
            <div style={styles.outerCircle}>
              <div style={styles.innerCircle}>
                📍
              </div>
            </div>
          </div>

          {/* TITLE */}
          <h1 style={styles.title}>Enable Location Access</h1>

          {/* SUBTEXT */}
          <p style={styles.subtitle}>
            To ensure a seamless and efficient experience,
            allow us access to your location
          </p>

          {/* BUTTON */}
          <button
            style={styles.button}
            onClick={() => navigate("/notification-permission")}
          >
            Allow Location Access
          </button>

          {/* MAYBE LATER */}
          <p
            style={styles.later}
            onClick={() => navigate("/notification-permission")}
          >
            Maybe Later
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
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  },

  /* ICON */
  iconWrapper: {
    marginBottom: "30px",
  },

  outerCircle: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#e6e6e6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  innerCircle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "#F7931E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    color: "#fff",
  },

  /* TEXT */
  title: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "20px",
    marginBottom: "50px",
    maxWidth: "260px",
  },

  /* BUTTON */
  button: {
    width: "260px",
    padding: "15px",
    backgroundColor: "#F7931E",
    border: "none",
    borderRadius: "30px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "15px",
  },

  /* LATER */
  later: {
    fontSize: "14px",
    color: "#F7931E",
    cursor: "pointer",
  },
};