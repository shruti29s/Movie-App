import React from "react";
import styles from "./Navbar.module.css";

class Navbar extends React.Component{
    render(){
        return (
            <>
            <div className={styles.nav}>
                <div className={styles.title}>
                    Movie-App
                </div>
                <div className={styles.cartIconContainer}>
                    <img className={styles.cartIcon} alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"></img>
                    <span className={styles.cartCount} color="yellow" show={false}>3</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;