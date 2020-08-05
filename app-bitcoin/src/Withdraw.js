import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const Withdraw = () => {

    return (
        <>
        <Header/>
        <div className="Grid-wraper">
        <div className="Deposit-wrap">
            <div>
                <button className="Btn-balances">Withdraw Bitcoin</button>
                <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h1>Destination</h1>
                    <input />

                    <h1>Sending Amount</h1>
                    <input />

                    <button className="Btn-balances-rev">Send</button>
                    </div>
                </div>
            </div>

            <div>
                <button className="Btn-balances-rev">Recent BTC Outgoing Transactions</button>
                <div>
                    BLSL
                </div>
            </div>
         </div>
		</div>
        <Footer/>
        </>
    );
}

export default Withdraw;