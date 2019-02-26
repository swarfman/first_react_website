import React from "react";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
				<a className="navbar-brand pl-5" href="#">
					Start Bootstrap
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="col-12 text-right">
						<div className="navbar-text">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Home{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link" href="#">
										About{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Services{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Contact{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
