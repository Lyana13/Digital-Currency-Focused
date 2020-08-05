import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import bitGoApi from './Api'; 
import { Link } from 'react-router-dom'

const MainWallet = () => {

	const [wallets, setWallets] = useState(null); 

	useEffect(() => {
		bitGoApi.getWallets().then((wallets) =>{
			setWallets(wallets);
			console.log(wallets, "wa")
		});
	}, []);

	let main;
	if (wallets) {
		main = wallets.map((wallet) => (
			<div key={wallet.id} style={{display: "flex"}}>
				<div className="Btn-coins">
					<img src={"/img/6.png"} alt="error"/>
					<p>{wallet.balance + wallet.coin}</p>
				</div>
				<button className="Btn-deposit"><Link to={`/wallet/${wallet.coin}/deposit`}>Deposit</Link></button>
				<button className="Btn-deposit"><Link to={`/wallet/${wallet.coin}/withdraw`}>Withdraw</Link></button>
			</div>
		))
	  } else {
		main = <p>Loading...</p>;
	  }

  return (

    <>
      <Header />
      <div className="Grid-wraper">
      	<div>
			<button className="Btn-balances">Balances</button>
		</div>
		<div style={{textAlign: "center"}}>
			<div >
				{ main }
			</div>
				
			<button className="Btn-all">View All Transactions...</button>
		</div>
		</div>
      <Footer />
   </>
  );
}

export default MainWallet;
