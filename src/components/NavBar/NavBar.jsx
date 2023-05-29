// NavBar.jsx
import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<h1 className={styles.navTitle}>CS Club</h1>
			<ul className={styles.navLinks}>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About Us</a>
				</li>
				<li>
					<a href="/resources">Resources</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
