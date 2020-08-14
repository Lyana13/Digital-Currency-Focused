import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const WalletActivity = () => {
    return (
        <>
        <Header/>
        <div className="Grid-wraper">
            <div className="Deposit-wrap">
                <div>
                    <button className="Btn-balances">Selected currency</button>
                        <div style={{display: "flex"}}>
                            <div style={{display: "flex"}}>
                                <img src={"/img/6.png"} alt="error"/>
                                <h1>BITCOIN</h1>
                            </div>
                            <select/>
                        </div>
                    <div>
                        BLOCK
                    </div>
                </div>
                <div>
                    <button className="Btn-balances-rev">Filter currency</button>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <button className="Btn-all">View All Transactions...</button>
            </div>
		</div>
        <Footer/>
        </>
    );
}

export default WalletActivity;