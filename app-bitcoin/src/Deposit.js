import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import bitGoApi from './Api'; 

const Deposit = (props) => {

	const [wallet, setWallet] = useState(null);
	const { currency } = props.match.params;

	useEffect(() => {
		bitGoApi.getWalletByCoin(currency).then((wallet) =>{
			setWallet(wallet);
			console.log(wallet, "wa")
		});
	}, [currency]);

	
	console.log("props", props);

	let main;
	if (wallet) {
		main = (
			<>
			<div>
			<button className="Btn-balances">Deposit Bitcoin</button>
			<h1>{ wallet.coin } BALANCE</h1>
  			<div>{wallet.balance}</div>

			<p></p>
			<div>
			</div>
			<h1>Your deposit Address</h1>
			<div>
			</div>
		</div>

		<div>
			<button className="Btn-balances-rev">Recent BTC Deposits</button>
		</div>
		</>
		)
	  } else {
		main = <p>Loading...</p>;
	  }
	
  return (
    <>
      <Header />
      <div className="Grid[1]-wraper">
      <div className="Deposit-wrap">
      	{main}
	</div>
		<div style={{textAlign: "center"}}>
			
			<button className="Btn-all">View All Transactions...</button>
		</div>
		</div>
      <Footer />
   </>
  );
}

export default Deposit;
