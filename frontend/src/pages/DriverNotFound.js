import { useNavigate } from "react-router-dom";
import map1 from "../assets/images/map2.png"; // ✅ adjust path if needed
import driver from "../assets/images/driver.png"; // ✅ illustration image

export default function DriverNotFound() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/driversearching");
  };

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <span style={styles.menu}>☰</span>
            <span style={styles.headerTitle}>Driver-app</span>
          </div>

          {/* MAP IMAGE */}
          <div style={styles.map}>
            <img
              src={map1}
              alt="Map"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* CONTENT */}
          <div style={styles.content}>

            {/* IMAGE REPLACED */}
            <img src={driver} alt="Driver Illustration" style={styles.illustration} />

            <h2 style={styles.title}>Driver Not Found</h2>

            <p style={styles.subtitle}>
              Please try again in few minutes
            </p>

            <button style={styles.button} onClick={handleRetry}>
              Try Again
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}


// ✅ SAME STYLES (NO CHANGE)
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
  },

  header: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    position: "relative",
  },

  menu: {
    fontSize: "20px",
  },

  headerTitle: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: "600",
  },

  map: {
    width: "100%",
    height: "260px",
    backgroundColor: "#d9d9d9",
    overflow: "hidden",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },

  illustration: {
    width: "150px",
    height: "130px",
    borderRadius: "10px",
    marginBottom: "20px",
    objectFit: "cover",
  },

  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "25px",
  },

  button: {
    width: "80%",
    backgroundColor: "#F7931E",
    padding: "15px",
    borderRadius: "30px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
  },
};