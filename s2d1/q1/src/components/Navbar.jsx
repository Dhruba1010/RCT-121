import React from 'react';
import { Link } from "react-router-dom";
import styles from "./ChakraUI.module.css"

function Navbar() {
  return (
    <div className={styles.navbarM}>
        <div className={styles.navbar}>
            <div>
                <button>
                    <Link to="/">Home</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="/1st">1st Set</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="/2nd">2nd Set</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="/3rd">3rd Set</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar