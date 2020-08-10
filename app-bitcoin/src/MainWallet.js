import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import bitGoApi from './Api'; 
import { Link } from 'react-router-dom'

const MainWallet = () => {

	const [wallets, setWallets] = useState(null); 
	
	function getCoinImg(coin){
		switch(coin) {
			case 'tbtc', 'btc' :
			return "coin_1.png"

			case 'value2':
			return "coin_2.png"

			case 'value2':
			return "coin_3.png"

			case 'value1':
			return "coin_4.png"
		  
			case 'value2':
			return "coin_5.png"

			default:
			return "coin_1.png"
		  }
	}

	useEffect(() => {
		bitGoApi.getWallets().then((wallets) =>{
			setWallets(wallets);
			console.log(wallets, "wa")
		});
	}, []);

	let main;
	if (wallets) {
		main = wallets.map((wallet) => (
			<div key={wallet.id} style={{display: "flex", justifyContent: "center"}}>
				<div style={{flexDirection: "column"}}>
					<div className="Btn-coins">
						<img style={{width: "66px"}} src={"/img/" + getCoinImg(wallet.coin)} alt="error"/>
						<p>{wallet.balance + wallet.coin}</p>
					</div>
				</div>
				<button className="Btn-deposit"><Link to={`/wallet/${wallet.coin}/deposit`}>Deposit</Link></button>
				<button className="Btn-deposit"><Link to={`/wallet/${wallet.coin}/withdraw`}>Withdraw</Link></button>
			</div>
		))
	  } else {
		main = <p style={{color: "#00A694", fontSize: "60px"}}>Loading...</p>;
	  }

  return (

    <>
      <Header title="Main Wallet" />
      <div className="Grid-wraper">
      	<div>
			<button className="Btn-balances">Balances</button>
		</div>
		<div style={{textAlign: "center"}}>
			<div >
				{ main }
			</div>
				
			<button className="Btn-all"><Link to={`/wallet/activity`}>View All Transactions...</Link></button>
		</div>
		</div>
      <Footer />
   </>
  );
}

export default MainWallet;
