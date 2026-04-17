import { useNavigate } from "react-router-dom";
import carLogo from "../assets/images/car.png";
import map1 from "../assets/images/map3.png"; // ✅ adjust path if needed

export default function Home() {
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
          <div style={styles.menu}>≡</div>
        </div>

        {/* MAP AREA */}
        <div style={styles.mapSection}>
          <img
            src={map1}
            alt="Map"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* CURRENT LOCATION BOX */}
          <div style={styles.locationBox}>
            <div style={styles.dot}></div>
            <span style={styles.locationText}>Current Location</span>
          </div>
        </div>

        {/* BOTTOM PANEL */}
        <div style={styles.bottomPanel}>

          {/* CLICKABLE TOP ROW */}
          <div
            style={styles.topRow}
            onClick={() => navigate("/tripdetails")}
          >
            <h2 style={styles.title}>Where To?</h2>
            <span style={styles.manage}>Manage?</span>
          </div>

          {/* LOCATION CARDS */}
          <div style={styles.card}>
            <div style={styles.icon}>🕒</div>
            <div>
              <div style={styles.place}>ABCD MALL</div>
              <div style={styles.address}>
                14th cross road, IBM Colony,
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🕒</div>
            <div>
              <div style={styles.place}>XYZ METRO STATION</div>
              <div style={styles.address}>
                Opposite to Taj Hotel, Mumbai.
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM NAV */}
        <div style={styles.navbar}>
          <div style={styles.navItem} onClick={() => navigate("/home")}>
            <span>🏠</span>
            <p>Home</p>
          </div>
          <div style={styles.navItem} onClick={() => navigate("/wallet")}>
            <span>👛</span>
            <p>Wallet</p>
          </div>
          <div style={styles.navItem} onClick={() => navigate("/bookings")}>
            <span>📅</span>
            <p>Bookings</p>
          </div>
          <div style={styles.navItem} onClick={() => navigate("/profile")}>
            <span>👤</span>
            <p>Profile</p>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#111",
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
    boxShadow: "0 0 25px rgba(0,0,0,0.4)",
    position: "relative",
  },

  /* HEADER */
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
    width: "34px",
    marginRight: "8px",
  },

  logoText: {
    fontSize: "18px",
    fontWeight: "700",
  },

  menu: {
    fontSize: "22px",
    cursor: "pointer",
  },

  /* MAP */
  mapSection: {
    height: "330px",
    position: "relative",
  },

  mapPlaceholder: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ddd",
  },

  locationBox: {
    position: "absolute",
    top: "20px",
    left: "20px",
    right: "20px",
    backgroundColor: "#eee",
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

  locationText: {
    fontSize: "14px",
  },

  /* BOTTOM PANEL */
  bottomPanel: {
    position: "absolute",
    bottom: "70px",
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    padding: "20px",
    boxSizing: "border-box",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    cursor: "pointer",
  },

  title: {
    fontSize: "22px",
    fontWeight: "700",
  },

  manage: {
    color: "#F7931E",
    fontSize: "14px",
  },

  card: {
    backgroundColor: "#e6e6e6",
    borderRadius: "15px",
    padding: "15px",
    display: "flex",
    gap: "12px",
    marginBottom: "15px",
  },

  icon: {
    fontSize: "18px",
  },

  place: {
    fontWeight: "700",
    fontSize: "14px",
  },

  address: {
    fontSize: "13px",
    color: "#555",
  },

  /* NAVBAR */
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70px",
    backgroundColor: "#F7931E",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
  },
};