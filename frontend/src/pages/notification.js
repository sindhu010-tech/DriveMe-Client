import { useNavigate } from "react-router-dom";

export default function Notification() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Notification</h1>
        </div>

        {/* CONTENT */}
        <div style={styles.container}>

          {/* TODAY SECTION */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <span style={styles.sectionTitle}>TODAY</span>
              <span style={styles.markRead}>Mark all as read</span>
            </div>

            <div style={styles.card}>
              <span style={styles.icon}>📅</span>
              <div style={styles.textBlock}>
                <h3 style={styles.cardTitle}>Ride Booked Successfully</h3>
                <p style={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>

            <div style={styles.card}>
              <span style={styles.icon}>💰</span>
              <div style={styles.textBlock}>
                <h3 style={styles.cardTitle}>Payment Method Added</h3>
                <p style={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>

            <div style={styles.card}>
              <span style={styles.icon}>⭐</span>
              <div style={styles.textBlock}>
                <h3 style={styles.cardTitle}>Ride Review Request</h3>
                <p style={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>

          {/* YESTERDAY SECTION */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <span style={styles.sectionTitle}>YESTERDAY</span>
              <span style={styles.markRead}>Mark all as read</span>
            </div>

            <div style={styles.card}>
              <span style={styles.icon}>📅</span>
              <div style={styles.textBlock}>
                <h3 style={styles.cardTitle}>Ride Booked Successfully</h3>
                <p style={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>

            <div style={styles.card}>
              <span style={styles.icon}>💰</span>
              <div style={styles.textBlock}>
                <h3 style={styles.cardTitle}>Payment Method Added</h3>
                <p style={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>

            <div style={styles.card}>
              <span style={styles.icon}>⭐</span>
              <div style={styles.textBlock}>
                <h3 style={styles.cardTitle}>Ride Review Request</h3>
                <p style={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
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
    overflowY: "auto",
    padding: "15px",
    boxSizing: "border-box",
  },

  section: {
    marginBottom: "20px",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },

  sectionTitle: {
    fontSize: "14px",
    fontWeight: "700",
  },

  markRead: {
    fontSize: "12px",
    color: "#F7931E",
    cursor: "pointer",
  },

  card: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "12px",
    marginBottom: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  icon: {
    fontSize: "20px",
    marginRight: "12px",
  },

  textBlock: {
    flex: 1,
  },

  cardTitle: {
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "4px",
  },

  cardText: {
    fontSize: "12px",
    color: "#555",
    lineHeight: "1.4",
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