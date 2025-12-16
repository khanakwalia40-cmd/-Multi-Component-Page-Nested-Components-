// src/MainPage.jsx
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function MainPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
