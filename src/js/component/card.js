import React from "react";

const Cards = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural
					lead-in to additional content. This content is a little bit
					longer.
				</p>
			</div>
			<div className="card-footer d-flex justify-content-center">
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
export default Cards;
