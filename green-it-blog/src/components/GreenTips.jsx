// GreenTips.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function GreenTips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      const snapshot = await getDocs(collection(db, "tips"));
      const tipList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTips(tipList);
    };
    fetchTips();
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Segoe UI", backgroundColor: "#f4f7f9" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#2f855a" }}>🌍 Green IT Blog</h1>
        <p style={{ fontSize: "1.2rem", color: "#4a5568" }}>
          Explore tips and stories about sustainable tech and eco-friendly practices.
        </p>
      </header>

      <section>
        {tips.length === 0 ? (
          <p style={{ textAlign: "center", color: "#718096" }}>Loading green insights...</p>
        ) : (
          tips.map(tip => (
            <article key={tip.id} style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "24px",
              marginBottom: "24px",
              boxShadow: "0 8px 12px rgba(0, 0, 0, 0.05)"
            }}>
              <h2 style={{ color: "#2d3748", fontSize: "1.5rem" }}>{tip.title}</h2>
              <p style={{ color: "#4a5568", fontSize: "1rem", marginTop: "10px" }}>{tip.content}</p>
            </article>
          ))
        )}
      </section>

      <footer style={{ marginTop: "60px", textAlign: "center", color: "#a0aec0", fontSize: "0.9rem" }}>
       <p style={{ fontSize: "1.2rem", color: "black" }}> Project of Cloud Computing by Mohanish,Shrusti,Mansi.</p>
        © {new Date().getFullYear()} Green IT Blog. Powered by Firebase.
      </footer>
    </div>
  );
}

export default GreenTips;