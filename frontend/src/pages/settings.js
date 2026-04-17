import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Settings</h1>
        </div>

        {/* MENU LIST */}
        <div style={styles.menuList}>
          <div style={styles.menuItem} onClick={() => navigate("/notification-settings")}>
            <span style={styles.menuIcon}>🔔</span>
            <span style={styles.menuText}>Notification Settings</span>
            <span style={styles.arrow}>›</span>
          </div>

          <div style={styles.menuItem} onClick={() => navigate("/password-manager")}>
            <span style={styles.menuIcon}>🔑</span>
            <span style={styles.menuText}>Password Manager</span>
            <span style={styles.arrow}>›</span>
          </div>

          <div style={styles.menuItem} onClick={() => navigate("/delete-account")}>
            <span style={styles.menuIcon}>🗑️</span>
            <span style={styles.menuText}>Delete Account</span>
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

  menuList: {
    flex: 1,
    padding: "20px",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "15px",
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
    marginTop: "auto",
  },

  navItem: {
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
    flex: 1,
  },
};