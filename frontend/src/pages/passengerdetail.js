import { useNavigate } from "react-router-dom";

export default function PassengerDetail() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.mobileFrame}>

        {/* TITLE */}
        <div style={styles.header}>
          <h2 style={styles.title}>Passenger Details</h2>
          <p style={styles.subtitle}>Fill Passenger Details</p>
        </div>

        {/* ADD PASSENGER */}
        <div style={styles.addBar}>
          <span>Add Passengers:</span>
          <span style={styles.plus}>＋</span>
        </div>

        {/* PASSENGER LIST */}
        <div style={styles.container}>

          {/* EMPTY CARD */}
          <div style={styles.card}>
            <div style={styles.row}>
              <span>Full Name:</span>
              <span style={styles.line}></span>
              <span>Age:</span>
              <span style={styles.smallLine}></span>
            </div>

            <div style={styles.radioRow}>
              <div style={styles.radio}></div>
              <span>Male</span>

              <div style={styles.radio}></div>
              <span>Female</span>
            </div>
          </div>

          {/* JOHN */}
          <div style={styles.card}>
            <div style={styles.row}>
              <span>Full Name:</span>
              <span style={styles.text}>John Doe</span>
              <span>Age:</span>
              <span style={styles.text}>32</span>
            </div>

            <div style={styles.radioRow}>
              <div style={styles.radioActive}></div>
              <span>Male</span>

              <div style={styles.radio}></div>
              <span>Female</span>
            </div>
          </div>

          {/* ANNA */}
          <div style={styles.card}>
            <div style={styles.row}>
              <span>Full Name:</span>
              <span style={styles.text}>Anna Doe</span>
              <span>Age:</span>
              <span style={styles.text}>28</span>
            </div>

            <div style={styles.radioRow}>
              <div style={styles.radio}></div>
              <span>Male</span>

              <div style={styles.radioActive}></div>
              <span>Female</span>
            </div>
          </div>

          {/* MARK */}
          <div style={styles.card}>
            <div style={styles.row}>
              <span>Full Name:</span>
              <span style={styles.text}>Mark Doe</span>
              <span>Age:</span>
              <span style={styles.text}>05</span>
            </div>

            <div style={styles.radioRow}>
              <div style={styles.radioActive}></div>
              <span>Male</span>

              <div style={styles.radio}></div>
              <span>Female</span>
            </div>
          </div>

          {/* BELNA */}
          <div style={styles.card}>
            <div style={styles.row}>
              <span>Full Name:</span>
              <span style={styles.text}>Belna Doe</span>
              <span>Age:</span>
              <span style={styles.text}>65</span>
            </div>

            <div style={styles.radioRow}>
              <div style={styles.radio}></div>
              <span>Male</span>

              <div style={styles.radioActive}></div>
              <span>Female</span>
            </div>
          </div>

        </div>

        {/* CONFIRM BUTTON */}
        <div style={styles.bottom}>
          <button
            style={styles.button}
            onClick={() => navigate("/payment")}
          >
            Confirm Details
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
    backgroundColor: "#f2f2f2",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
  },

  header: {
    textAlign: "center",
    marginTop: "20px",
  },

  title: {
    fontSize: "22px",
    fontWeight: "700",
  },

  subtitle: {
    fontSize: "13px",
    color: "#666",
  },

  addBar: {
    margin: "15px",
    backgroundColor: "#F7931E",
    padding: "12px",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "600",
  },

  plus: {
    fontSize: "18px",
  },

  container: {
    padding: "0 15px",
    height: "440px",
    overflowY: "auto",
  },

  card: {
    backgroundColor: "#e6e6e6",
    borderRadius: "15px",
    padding: "15px",
    marginBottom: "15px",
  },

  row: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
    fontSize: "14px",
  },

  line: {
    borderBottom: "1px solid #000",
    width: "80px",
  },

  smallLine: {
    borderBottom: "1px solid #000",
    width: "30px",
  },

  text: {
    borderBottom: "1px solid #000",
    paddingBottom: "2px",
  },

  radioRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  radio: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    border: "2px solid #aaa",
  },

  radioActive: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    backgroundColor: "#F7931E",
  },

  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },

  button: {
    width: "80%",
    padding: "15px",
    backgroundColor: "#F7931E",
    border: "none",
    borderRadius: "30px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
  },
};