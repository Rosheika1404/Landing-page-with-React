import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./card";
import Footer from "./footer";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<div className="container-fluid mt-4 mx-auto px-5">
				<Jumbotron />
				<div className="container">
					<div className="row">
						<Cards />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
