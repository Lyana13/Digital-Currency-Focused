import React from 'react';
import './App.css'

const Header = (props) => {
	console.log("Header props: ", props);
	return (
		<>
		<header>
			<div className="Header">
			<img style={{maxHeight: "100px"}} src={"/img/lamps.png"} alt="error"/>
				<div className="Wrap-header">
					<button className="Btn-header">Back to game</button>
					<div className="Wallet-block">
						<img src={"/img/wallet.png"} alt="error"/>
						<h1 className="Wallet-text">{props.title}</h1>
					</div>
				</div>
			</div>
		</header>
		</>
	)
}

export default Header;