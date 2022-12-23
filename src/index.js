import React from "react";
import ReactDOM from "react-dom/client";
import PlayerCard from "./components/PlayerCard";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<>
			<PlayerCard />
			<p>This is some dummy content</p>
		</>
	</React.StrictMode>
);
