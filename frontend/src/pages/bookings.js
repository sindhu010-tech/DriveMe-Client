import { useNavigate } from "react-router-dom";
import human from "../assets/images/human.png"; // ✅ adjust path if needed

export default function Bookings() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <h1 style={styles.headerTitle}>Bookings</h1>
          </div>

          {/* TAB BAR */}
          <div style={styles.tabBar}>
            <span style={styles.tab} onClick={() => navigate("/active")}>
              Active
            </span>
            <span style={styles.tabActive}>Completed</span>
            <span style={styles.tab} onClick={() => navigate("/cancelled")}>
              Cancelled
            </span>
          </div>

          {/* COMPLETED BOOKINGS LIST */}
          <div style={styles.card}>
            <img src={human} alt="Driver" style={styles.avatar} />
            <h3 style={styles.name}>Jenny Wilson</h3>
            <p style={styles.location}>Location: Bangalore</p>
            <p style={styles.rating}>⭐ 5.0</p>
            <p style={styles.details}>📍 60Kms ⏱️ 40 mins 💰 Rs. 25/Km</p>
            <p style={styles.datetime}>Oct 18, 2023 | 08:00 AM</p>
            <p style={styles.address}>Pickup: 6391 Elgin St. Celina</p>
            <p style={styles.address}>Drop: 1901 Thornridge Cir. Sh..</p>
            <p style={styles.fare}>Total Fare: Rs. 1550</p>
          </div>

          <div style={styles.card}>
            <img src={human} alt="Driver" style={styles.avatar} />
            <h3 style={styles.name}>Adam Gurbsel</h3>
            <p style={styles.location}>Location: Bangalore</p>
            <p style={styles.rating}>⭐ 4.7</p>
            <p style={styles.details}>📍 13Kms ⏱️ 25 mins 💰 Rs. 20/Km</p>
            <p style={styles.datetime}>Oct 1, 2023 | 07:00 PM</p>
            <p style={styles.address}>Pickup: 6391 Elgin St. Celina</p>
            <p style={styles.address}>Drop: 1901 Thornridge Cir. Sh..</p>
            <p style={styles.fare}>Total Fare: Rs. 450</p>
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
  },

  container: {
    flex: 1,
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

  tabBar: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },

  tab: {
    fontSize: "14px",
    color: "#666",
    cursor: "pointer",
  },

  tabActive: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#F7931E",
    borderBottom: "2px solid #F7931E",
    paddingBottom: "4px",
  },

  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },

  name: {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "4px",
  },

  location: {
    fontSize: "13px",
    marginBottom: "4px",
  },

  rating: {
    fontSize: "13px",
    marginBottom: "4px",
  },

  details: {
    fontSize: "13px",
    marginBottom: "4px",
  },

  datetime: {
    fontSize: "13px",
    marginBottom: "4px",
  },

  address: {
    fontSize: "13px",
    marginBottom: "4px",
  },

  fare: {
    fontSize: "13px",
    fontWeight: "600",
    marginTop: "6px",
  },

  navbar: {
    width: "100%",
    height: "70px",
    backgroundColor: "#F7931E",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 0,
  },

  navItem: {
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
    flex: 1,
  },
};