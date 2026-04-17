import { useNavigate } from "react-router-dom";
import carLogo from "../assets/images/car.png";
import map1 from "../assets/images/map1.png"; // ✅ adjust path if needed

export default function ConfirmLocation() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* HEADER */}
        <div style={styles.header}>
          <div style={styles.logoRow}>
            <img src={carLogo} alt="car" style={styles.logo} />
            <span style={styles.logoText}>DrivenBy</span>
          </div>
          <span style={styles.menu}>≡</span>
        </div>

        {/* MAP IMAGE */}
        <div style={styles.mapSection}>
          <img
            src={map1}
            alt="Map"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* SEARCH BOX */}
          <div style={styles.searchBox}>
            <div style={styles.dot}></div>
            <span style={styles.address}>
              6391 Elgin St. Celina, Delawas...
            </span>
            <span style={styles.close}>✕</span>
          </div>
        </div>

        {/* BUTTON */}
        <div style={styles.bottom}>
          <button
            style={styles.button}
            onClick={() => navigate("/scheduleride")}
          >
            Confirm Location
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
    backgroundColor: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
  },

  header: {
    height: "60px",
    backgroundColor: "#F7931E",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 15px",
  },

  logoRow: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    width: "28px",
    marginRight: "8px",
  },

  logoText: {
    fontWeight: "700",
    fontSize: "18px",
  },

  menu: {
    fontSize: "22px",
  },

  /* MAP */
  mapSection: {
    height: "580px",
    position: "relative",
  },

  mapPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mapText: {
    color: "#666",
    fontSize: "14px",
  },

  /* SEARCH BOX */
  searchBox: {
    position: "absolute",
    top: "15px",
    left: "15px",
    right: "15px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  dot: {
    width: "10px",
    height: "10px",
    backgroundColor: "#F7931E",
    borderRadius: "50%",
  },

  address: {
    flex: 1,
    fontSize: "14px",
  },

  close: {
    cursor: "pointer",
  },

  /* BUTTON */
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100px",
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    width: "80%",
    padding: "15px",
    backgroundColor: "#F7931E",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};