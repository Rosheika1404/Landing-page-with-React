import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import { array } from "./data";
import Card from "./card";
import Footer from "./footer";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="text-center mt-5">
				{/* <div className="card-deck">
					{array &&
						array.map(array => (
							<Card
								key={array.title}
								title={array.image}
								discription={card.discription}
								goTo={array.goto}
								button={"Find Out More!"}
							/>
						))}
				</div> */}
			</div>
			<Footer />
		</>
	);
}
