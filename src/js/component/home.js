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
			<div className="text-center mt-5 mb-5 row justify-content-center">
				{array.map(array => (
					<Card
						key={array.title}
						title={array.title}
						image={array.image}
						discription={array.discription}
						goTo={array.goto}
						button={"Find Out More!"}
					/>
				))}
			</div>
			<Footer />
		</>
	);
}
