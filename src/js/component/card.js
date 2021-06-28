import React from "react";
import { array } from "./constant";

const Cards = () => {
	return (
		<div className="card-deck w-auto">
			{array &&
				array.map(element => {
					return (
						<>
							<div key={element.title} className="card">
								<img
									className="card-img-top"
									src={element.image}
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">
										{element.title}
									</h5>
									<p className="card-text">
										{element.discription}
									</p>
								</div>
								<div className="card-footer d-flex justify-content-center bg-white">
									<a href="#" className="btn btn-primary">
										Find Out More!
									</a>
								</div>
							</div>

							<br />
						</>
					);
				})}
		</div>
	);
};
export default Cards;
