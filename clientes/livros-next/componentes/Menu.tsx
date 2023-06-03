import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Menu.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
 

interface MenuProps {
  name?: string;
}

export const Menu: React.FC<MenuProps> = ({ name = "" }) => {
  let cssCatalogo = "";
  let cssNovo = "";

  const [show, setShow] = useState(false);

  if (name === "catalogo") {
    cssCatalogo = "active";
  } else {
    cssNovo = "active";
  }

  return (
   //<FontAwesomeIcon icon={faBookOpenReader} />
   //<span>Logo</span>
   <>
       
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <span><FontAwesomeIcon icon={faBookOpenReader} /></span> 
          </a>
          <button
            onClick={() => setShow(!show)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${show ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={styles.linkNoUnderline} href="/">
                  <span className={`nav-link ${cssCatalogo}`}>Catalogo</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={styles.linkNoUnderline} href="/LivroDados">
                  <span className={`nav-link ${cssNovo}`}>Novo</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
