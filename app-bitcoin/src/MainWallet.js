import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import bitGoApi from './Api'; 
import { Link } from 'react-router-dom'

const MainWallet = () => {

	useEffect(() => {
		bitGoApi.getWallets().then((res) =>
			console.log(res, "res")
		);
	}, []);




  return (
    <>
      <Header />
      <div className="Grid-wraper">
      	<div>
			<button className="Btn-balances">Balances</button>
		</div>

		<div style={{textAlign: "center"}}>
			<div >
				<div style={{display: "flex"}}>
					<div className="Btn-coins">
						<img src={"/img/6.png"} alt="error"/>
						<p>He873483979</p>
					</div>
					<button className="Btn-deposit"><Link to='/wallet/btc/deposit'>Deposit</Link></button>
					<button className="Btn-deposit"><Link to='/wallet/btc/withdraw'>Withdraw</Link></button>
				</div>
			</div>
			<button className="Btn-all">View All Transactions...</button>
		</div>
		</div>
      <Footer />
   </>
  );
}

export default MainWallet;
