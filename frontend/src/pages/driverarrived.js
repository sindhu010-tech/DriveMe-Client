import { useNavigate } from "react-router-dom";
import map2 from "../assets/images/map3.png"; // ✅ adjust path if needed

export default function DriverArrived() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <h1 style={styles.headerTitle}>Driver Arrived</h1>
          </div>

          {/* MAP IMAGE */}
          <div style={styles.mapPlaceholder}>
            <img
              src={map2}
              alt="Map"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
            />
          </div>

          {/* DRIVER INFO CARD */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Driver arrived at destination</h2>
            <p style={styles.cardText}>
              6391 Eligin St, Celina, Delawander South Coast, Africa
            </p>
            <p style={styles.cardText}><b>OTP:</b> xxxx</p>
          </div>

          {/* OTP BUTTON AT BOTTOM */}
          <button
            style={styles.button}
            onClick={() => navigate("/activeride")}
          >
            Enter OTP
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
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: "20px",
    fontWeight: "700",
  },

  mapPlaceholder: {
    flex: 1,
    borderRadius: "10px",
    margin: "20px 0",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  cardText: {
    fontSize: "14px",
    marginBottom: "6px",
  },

  button: {
    width: "100%",
    backgroundColor: "#F7931E",
    color: "#000",
    padding: "15px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "auto", // pushes button down
    marginBottom: "20px",
    boxSizing: "border-box",
  },
};