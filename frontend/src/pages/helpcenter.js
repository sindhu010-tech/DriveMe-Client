import { useNavigate } from "react-router-dom";

export default function HelpCenter() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Help Center</h1>
        </div>

        {/* CONTENT */}
        <div style={styles.container}>

          {/* SEARCH BAR */}
          <div style={styles.searchBar}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search"
              style={styles.searchInput}
            />
          </div>

          {/* FAQ OPTION */}
          <div style={styles.menuItem} onClick={() => navigate("/faq")}>
            <span style={styles.menuIcon}>📖</span>
            <span style={styles.menuText}>FAQ</span>
            <span style={styles.arrow}>›</span>
          </div>

          {/* CONTACT US OPTION */}
          <div style={styles.menuItem} onClick={() => navigate("/contactus")}>
            <span style={styles.menuIcon}>☎️</span>
            <span style={styles.menuText}>Contact US</span>
            <span style={styles.arrow}>›</span>
          </div>

          {/* CUSTOMER SERVICE COLLAPSIBLE */}
          <div style={styles.menuItem} onClick={() => navigate("/customerservice")}>
            <span style={styles.menuIcon}>👩‍💼</span>
            <span style={styles.menuText}>Customer Service</span>
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

  container: {
    flex: 1,
    padding: "20px",
    boxSizing: "border-box",
  },

  searchBar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: "12px",
    padding: "10px",
    marginBottom: "20px",
  },

  searchIcon: {
    fontSize: "16px",
    marginRight: "8px",
  },

  searchInput: {
    flex: 1,
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: "14px",
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