import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ToDoList from "./pages/ToDoList"; // ✅ Import To-Do List Page
import "./styles.css"; // Include your styles

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Default to Home page

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "todo": // ✅ Added To-Do List case
        return <ToDoList />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <a
            className="navbar-brand logo"
            onClick={() => setCurrentPage("home")}
          >
            LYCEUM
          </a>
          <ul className="nav-links">
            <li>
              <button onClick={() => setCurrentPage("home")}>🏠 Home</button>
            </li>
            <li>
              <button onClick={() => setCurrentPage("about")}>📖 About</button>
            </li>
            <li>
              <button onClick={() => setCurrentPage("contact")}>
                📞 Contact
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage("todo")}>
                ✅ To-Do List
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Render Page Based on State */}
      {renderPage()}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 LYCEUM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
