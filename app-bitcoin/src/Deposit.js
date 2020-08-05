import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Deposit = () => {
  return (
    <>
      <Header />
      <div className="Grid-wraper">
      <div className="Deposit-wrap">
      	<div>
			<button className="Btn-balances">Deposit Bitcoin</button>
			<h1>BTC BALANCE</h1>
			<div>
			</div>
			<h1>Your deposit Address</h1>
			<div>
			</div>
		</div>

		<div>
			<button className="Btn-balances-rev">Recent BTC Deposits</button>
		</div>
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
