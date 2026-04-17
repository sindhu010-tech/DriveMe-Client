import { useNavigate } from "react-router-dom";
import carLogo from "../assets/images/car.png";

export default function TripDetails() {
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

        {/* CONTENT */}
        <div style={styles.content}>

          {/* TITLE */}
          <h2 style={styles.title}>Trip Details</h2>

          {/* INPUT CARD */}
          <div style={styles.inputCard}>

            <div style={styles.inputRow}>
              <span style={styles.icon}>🔍</span>
              <input
                type="text"
                placeholder="Pick-Up"
                style={styles.input}
              />
            </div>

            <div style={styles.divider}></div>

            <div style={styles.inputRow}>
              <span style={styles.icon}>📍</span>
              <input
                type="text"
                placeholder="Destination"
                style={styles.input}
              />
            </div>

          </div>

          {/* CONTINUE BUTTON */}
          <div
            style={styles.savedBtn}
            onClick={() => navigate("/confirmlocation")}
          >
            <div style={styles.savedLeft}>
              <span style={styles.icon}>➡️</span>
              <span style={styles.savedText}>Continue</span>
            </div>
            <span style={styles.arrow}>→</span>
          </div>

          {/* RECENT LIST */}
          <div style={styles.listCard}>

            <div style={styles.listRow}>
              <span style={styles.icon}>🕒</span>
              <span style={styles.listText}>
                2118 Thorniridg Ciee, syracuse, C..
              </span>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.listRow}>
              <span style={styles.icon}>🕒</span>
              <span style={styles.listText}>
                4517 Washington Ave, Mancheste..
              </span>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.listRow}>
              <span style={styles.icon}>🕒</span>
              <span style={styles.listText}>
                2715 Ash Dr.San Jose, South Dan..
              </span>
            </div>

          </div>

        </div>

        {/* NAVBAR */}
        <div style={styles.navbar}>

          <div style={styles.navItem}>
            <span>🏠</span>
            <p>Home</p>
          </div>

          <div style={styles.navItem}>
            <span>👛</span>
            <p>Wallet</p>
          </div>

          <div style={styles.navItem}>
            <span>📅</span>
            <p>Bookings</p>
          </div>

          <div style={styles.navItem}>
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
    backgroundColor: "#ffffff",
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

  /* CONTENT */
  content: {
    padding: "20px",
  },

  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  /* INPUT CARD */
  inputCard: {
    backgroundColor: "#e6e6e6",
    borderRadius: "15px",
    padding: "15px",
    marginBottom: "20px",
  },

  inputRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "14px",
    width: "100%",
  },

  divider: {
    height: "1px",
    backgroundColor: "#ccc",
    margin: "10px 0",
  },

  icon: {
    fontSize: "16px",
  },

  /* CONTINUE BUTTON */
  savedBtn: {
    backgroundColor: "#F7931E",
    borderRadius: "25px",
    padding: "12px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    cursor: "pointer", // ✅ added
  },

  savedLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  savedText: {
    fontWeight: "600",
  },

  arrow: {
    fontSize: "18px",
  },

  /* LIST */
  listCard: {
    backgroundColor: "#e6e6e6",
    borderRadius: "15px",
    padding: "15px",
  },

  listRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 0",
  },

  listText: {
    fontSize: "13px",
    color: "#333",
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
  },
};