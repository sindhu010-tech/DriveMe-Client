import { useNavigate } from "react-router-dom";
import human from "../assets/images/human.png"; // ✅ adjust path if needed

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Driver-app</h1>
        </div>

        {/* PROFILE SECTION */}
        <div style={styles.profileSection}>
          <img src={human} alt="Profile" style={styles.avatar} />
          <h2 style={styles.name}>Amber Zestuchse</h2>
        </div>

        {/* MENU LIST */}
        <div style={styles.menuList}>
          <div style={styles.menuItem} onClick={() => navigate("/completeprofile")}>
            <span style={styles.menuIcon}>👤</span>
            <span style={styles.menuText}>Profile</span>
            <span style={styles.arrow}>›</span>
          </div>

          <div style={styles.menuItem} onClick={() => navigate("/notification")}>
            <span style={styles.menuIcon}>🔔</span>
            <span style={styles.menuText}>Notification</span>
            <span style={styles.arrow}>›</span>
          </div>

          <div style={styles.menuItem} onClick={() => navigate("/payment")}>
            <span style={styles.menuIcon}>💳</span>
            <span style={styles.menuText}>Payment Methods</span>
            <span style={styles.arrow}>›</span>
          </div>

          <div style={styles.menuItem} onClick={() => navigate("/prebooked")}>
            <span style={styles.menuIcon}>📅</span>
            <span style={styles.menuText}>Pre-Booked Rides</span>
            <span style={styles.arrow}>›</span>
          </div>

          <div style={styles.menuItem} onClick={() => navigate("/settings")}>
            <span style={styles.menuIcon}>⚙️</span>
            <span style={styles.menuText}>Settings</span>
            <span style={styles.arrow}>›</span>
          </div>

          <div style={styles.menuItem} onClick={() => navigate("/helpcenter")}>
            <span style={styles.menuIcon}>❓</span>
            <span style={styles.menuText}>Help Center</span>
            <span style={styles.arrow}>›</span>
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
    minHeight: "100vh",
    backgroundColor: "#e5e5e5",
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
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },

  header: {
    height: "60px",
    backgroundColor: "#F7931E",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#fff",
  },

  profileSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },

  name: {
    fontSize: "18px",
    fontWeight: "700",
  },

  menuList: {
    flex: 1,
    padding: "10px 20px",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "12px 15px",
    marginBottom: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },

  menuIcon: {
    fontSize: "18px",
    marginRight: "10px",
  },

  menuText: {
    flex: 1,
    fontSize: "14px",
    fontWeight: "600",
  },

  arrow: {
    fontSize: "18px",
    color: "#999",
  },

  navbar: {
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
    flex: 1,
  },
};