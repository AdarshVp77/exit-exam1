// import React from "react";
// import "../navbar.css";

// const Navbar = () => {
//   return (
//     <div>
//       {/* Navbar Start */}
//       <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-2">
//         <a
//           href="/"
//           className="navbar-brand d-flex align-items-center px-4 px-lg-5"
//         >
//           <h2 className="m-0 text-primary">
//             <img
//               style={{ height: "40px", width: "40px" }}
//               className="img-fluid me-4"
//               src="img/icon.png"
//               alt="logo-img"
//             />
//             ToDo App
//           </h2>
//         </a>
//         <button
//           type="button"
//           className="navbar-toggler me-4"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarCollapse"
//         >
//           <span className="navbar-toggler-icon" />
//         </button><div className="collapse navbar-collapse" id="navbarCollapse">
//           <div className="navbar-nav ms-5 p-4 p-lg-0">
//             <a href="/" className="nav-item nav-link fs-5 me-4">
//               Home
//             </a>
//             <a href="/about" className="nav-item nav-link">
//               About
//             </a>
//           </div>
//         </div>
//       </nav>
//       {/* Navbar End */}
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "../navbar.css";

const Navbar = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log("Language changed to:", event.target.value);
  };

  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-2">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <img
              style={{ height: "40px", width: "40px" }}
              className="img-fluid me-4"
              src="img/icon.png"
              alt="logo-img"
            />
            ToDo App
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-5 p-4 p-lg-0">
            <a href="/" className="nav-item nav-link fs-5 me-4">
              Home
            </a>
            <a href="/" className="nav-item nav-link">
              About
            </a>
          </div>
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <select
            className="form-select ms-3"
            value={language}
            onChange={handleLanguageChange}
            style={{ width: "auto" }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
          </select>
          <div className="dropdown ms-3">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              &#x22EE; 
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">Action</a>
              <a className="dropdown-item" href="/">Another action</a>
              <a className="dropdown-item" href="/">Something else here</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
};

export default Navbar;
