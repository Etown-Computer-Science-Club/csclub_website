import "./Resources.modules.css";

const Resources = () => {
	return (
		<div className="container">
			<h1>Resources</h1>
			<div className="resources">
				<div className="resource">
					<a href="https://refer.me" target="_blank" rel="noreferrer">
						<img
							src="https://s3.amazonaws.com/refer.me/site/logos/logo.png"
							alt="Refer Me"
						></img>
						<div>
							<h2>Refer Me</h2>
							<ul>
								<li>
									Find job referrals from employees working at top tech companies
								</li>
							</ul>
						</div>
					</a>
				</div>
				<div className="resource">
					<a href="https://leetcode.com" target="_blank" rel="noreferrer">
						<img
							src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/LeetCode_nav.4d940ca72.png"
							alt="LeetCode"
						></img>
						<div>
							<h2>LeetCode</h2>
							<ul>
								<li>Practice coding challenges</li>
								<li>Prepare for technical interviews</li>
							</ul>
						</div>
					</a>
				</div>
				<div className="resource">
					<a href="https://education.github.com/pack" target="_blank" rel="noreferrer">
						<img src="/GitHub-Mark.png" alt="GitHub Education Pack"></img>
						<div>
							<h2>GitHub Education Pack</h2>
							<ul>
								<li>Free access to premium developer tools and services</li>
								<li>Learn new skills with hands-on tutorials</li>
							</ul>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Resources;
