import "./style.scss";
import { useState } from "react";
import emptyCardImage from "../../assets/images/empty-card.png";
import circleImage from "../../assets/images/position-base.png";
import addItemImage from "../../assets/icons/add-item.png";

const PlayerCard = () => {
	// using hooks to change image depending on if card is empty or contains player
	const [imgSrc, setImgSrc] = useState(emptyCardImage);

	return (
		<div className="card-container">
			<div className="player-card empty-card">
				<img src={imgSrc} className="player-img" />
				<img src={circleImage} className="position-img" />
				<img
					src={addItemImage}
					alt="Click to add a player to your team"
					className="add-item-img"
				/>
			</div>
		</div>
	);
};

export default PlayerCard;
