import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const Withdraw = () => {

    return (
        <>
        <Header title="Withdrow page"/>
        <div className="Grid-wraper">
        <h1 className="Balance-withdrow">BTC BALANCE</h1>
        <div className="Deposit-wrap">
            <div>
                <button className="Btn-Withdraw">Withdraw Bitcoin</button>
                <div style={{display: "flex", marginLeft: '12%'}}>
                    <div style={{display: "flex", flexDirection: "column", margin: "0 auto"}}>
                        <h1 className="Title-withdrow">Destination</h1>
                        <input className="Input-withdrow" type="text" placeholder="Enter Bitcoin Address Here" />
                        <h1 className="Title-withdrow">Sending Amount</h1>
                        <input className="Input-withdrow"  type="text" placeholder="Enter Bitcoin Address Here" />
                        <button className="Btn-send">Send</button>
                    </div>
                </div>
            </div>

            <div>
                <button className="Btn-Withdraw-rev">Recent BTC <br/>Outgoing Transactions</button>
				<div className="Recent-block">
					<div style={{ display:"flex", flexDirection: "column" }}>
						<div style={{ display: "flex", justifyContent: "space-between", paddingTop: "25px" }}>
							<span className="Recent-title">Date</span>
							<span className="Recent-title">Transactions ID</span>
							<span className="Recent-title">Amount</span>
							</div>
							<div>transactions</div>
					</div>
					<button className="Btn-all">View All Transactions...</button>
				</div>
            </div>
         </div>
		</div>
        <Footer/>
        </>
    );
}

export default Withdraw;