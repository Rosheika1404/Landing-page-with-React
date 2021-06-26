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
        <div className="text-center mt-5">
            <Jumbotron />
            <Cards />
        </div>
        <Footer />
        </>
	);
}
