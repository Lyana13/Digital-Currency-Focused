import React, { useEffect, useState, useRef } from 'react';
import QRCode from "react-qr-code";
import Footer from './Footer';
import Header from './Header';
import bitGoApi from './Api'; 

const Deposit = (props) => {
	const [wallet, setWallet] = useState(null);
	const [address, setAdresess] = useState(null);
	const [deposits, setDeposits] = useState(null);
  	const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
  };

	const { currency } = props.match.params;

	useEffect(() => {
		async function fetchData() {
			const wallet = await bitGoApi.getWalletByCoin(currency);
			setWallet(wallet);
			console.log(wallet.id, "wallet");
			bitGoApi.getLastDepositAddress(wallet.coin, wallet.id).then((address) => {
				console.log(address, "address");
				setAdresess(address);
			});
			bitGoApi.getDeposits(wallet.coin, wallet.id).then((deposits) => {
				deposits = deposits.map((deposit) => {
					let date = new Date(deposit.date);
					date = date.toLocaleDateString();
					return {
						date: date,
						id: deposit.id,
						amount: deposit.value
					}
				})
				setDeposits(deposits);
				console.log("deposits", deposits)
			});
		}
		fetchData() 
	}, [currency]);

	
	console.log("props", props);

	let main;
	if (wallet && deposits && address)  {
		let transactions = deposits.map((deposit) =>(
			<div key={deposit.id} className="Deposits-item">
				<span>{deposit.date}</span>
				<span>{deposit.id}</span>
				<span>{deposit.amount}</span>
			</div>
		));

		main = (
			<>
			<div>
			<button className="Btn-balances-deposit">Deposit Bitcoin</button>
			<div style={{marginLeft: "60px"}} >
				<h1 className="Balance-deposit">{ wallet.coin } BALANCE</h1>
				<div className="Balance-block">{wallet.balance}</div>
				<div>
				</div>
				<h1 className="Text-address">Your deposit Address</h1>
					<div  className="Balance-block">
					<div  className="e">
					<input  className="Qr-Code-Input" ref={textAreaRef} value={address}  />
					</div>
					<div>
					{ document.queryCommandSupported('copy') &&
						<img onClick={copyToClipboard} src={"/img/copy.svg"} width={"20px"} alt="error" />
     				}
					 </div>
					 </div>
					<div className="RCode">
						<QRCode value={address} bgColor="#FFA33D" size='80'/>
					</div>
				<div>
			</div>
			</div>
		</div>

		<div>
			<button className="Btn-balances-rev">Recent BTC Deposits</button>
			<div>
				<div className="Recent-block">
					<div style={{ display:"flex", flexDirection: "column" }}>
						<div style={{ display: "flex", justifyContent: "space-between", paddingTop: "25px" }}>
							<span className="Recent-title">Date</span>
							
							<span className="Recent-title">Transactions ID</span>
						
							<span className="Recent-title">Amount</span>
							</div>
							<div>{transactions}</div>
						</div>
					<button className="Btn-all">View All Transactions...</button>
				</div>
			</div>
		</div>
		</>
		)
	  } else {
		main = <p style={{color: "#00A694", fontSize: "60px"}}>Loading...</p>;
	  }
	
  return (
    <>
      <Header title="Deposit BTC" />
      <div className="Grid-wraper">
      <div className="Deposit-wrap">
      	{main}
	</div>
		</div>
      <Footer />
   </>
  );
}

export default Deposit;
