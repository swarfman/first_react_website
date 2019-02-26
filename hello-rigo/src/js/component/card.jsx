import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card-group col-3 mt-5">
			<div className="card">
				<img
					src="http://placehold.jp/500x325.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body text-center">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">{props.cardProperties}</p>
				</div>
				<div className="card-footer">
					<div className="text-center">
						<button type="button" className="btn btn-primary">
							Find Out More!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	cardProperties: PropTypes.string
};
