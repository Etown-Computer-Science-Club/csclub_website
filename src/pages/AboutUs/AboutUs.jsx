import styles from "./AboutUs.module.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>About Us</h1>
			<div className={styles.card}>
				<p>
					We are a club dedicated to computer science. We aim to provide an engaging,
					supportive environment where students can enhance their knowledge and skills in
					various aspects of computer science. We plan to attend hackathons, host
					workshops, and complete projects.
				</p>
			</div>
			<h1 className={styles.title}>2023-24 Officers</h1>
			<div className={styles.card}>
				<table className={styles.officers}>
					<tr>
						<th>Position</th>
						<th>Name</th>
					</tr>
					<tr>
						<td>President</td>
						<td>Ethan Lajeunesse</td>
					</tr>
					<tr>
						<td>Vice President</td>
						<td>Michael Kennedy</td>
					</tr>
					<tr>
						<td>Treasurer</td>
						<td>Danielle Strausburger</td>
					</tr>
					<tr>
						<td>Secretary</td>
						<td>Giovanni Raso</td>
					</tr>
					<tr>
						<td>Webmaster</td>
						<td>Alexander Fox</td>
					</tr>
				</table>
			</div>
			<h1 className={styles.title}>Contact Us</h1>
			<div className={styles.card}>
				<p className={styles.email}>
					Email: <a href="mailto:csclub@etown.edu">csclub@etown.edu</a>
				</p>
				<div className={styles.socialLinks}>
					<a href="https://www.facebook.com/yourclub">
						<FaFacebook size={30} />
					</a>
					<a href="https://www.twitter.com/yourclub">
						<FaTwitter size={30} />
					</a>
					<a href="https://www.linkedin.com/yourclub">
						<FaLinkedin size={30} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
