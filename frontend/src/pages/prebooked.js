import { useNavigate } from "react-router-dom";
import human from "../assets/images/human.png"; // ✅ adjust path if needed

export default function PreBooked() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Pre-Booked Rides</h1>
        </div>

        {/* DATE SELECTOR */}
        <div style={styles.dateSelector}>
          {["M","T","W","T","F","S","S"].map((day, i) => {
            const date = 16 + i;
            const isSelected = date === 18;
            return (
              <div
                key={i}
                style={{
                  ...styles.dateItem,
                  backgroundColor: isSelected ? "#F7931E" : "transparent",
                  color: isSelected ? "#fff" : "#000",
                }}
              >
                <span style={styles.day}>{day}</span>
                <span style={styles.date}>{date}</span>
              </div>
            );
          })}
        </div>

        {/* RIDE CARD */}
        <div style={styles.card}>
          <img src={human} alt="Driver" style={styles.avatar} />
          <h3 style={styles.name}>Adam Gurbsel</h3>
          <p style={styles.location}>Location: Bangalore</p>
          <p style={styles.rating}>⭐ 4.7</p>
          <p style={styles.details}>📍 13Kms ⏱️ 25 mins 💰 Rs. 20/Km</p>
          <p style={styles.datetime}>Oct 1, 2023 | 07:00 PM</p>
          <p style={styles.address}>Pickup: 6391 Elgin St. Celina, Delawa..</p>
          <p style={styles.address}>Drop: 1901 Thornridge Cir. Sh..</p>
          <p style={styles.fare}>Total Fare: Rs. 450</p>
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

  dateSelector: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    marginBottom: "10px",
  },

  dateItem: {
    width: "40px",
    height: "60px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    cursor: "pointer",
  },

  day: {
    fontSize: "12px",
    marginBottom: "4px",
  },

  date: {
    fontSize: "14px",
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "15px",
    margin: "0 20px 15px 20px",
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
    marginTop: "auto",
  },

  navItem: {
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
    flex: 1,
  },
};