import React from "react";
import { TrafficLight } from "./traffic";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<TrafficLight/>
		</div>
	);
};

export default Home;
