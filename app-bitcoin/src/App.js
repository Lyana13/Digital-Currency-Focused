import React from 'react';
import MainWallet from './MainWallet';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import WalletActivity from './WalletActivity';
import { Router, Route, Switch } from "react-router";



const App = () => {
  return (
    <>
    <div className="Main-wrap">
      <Switch>
        <Route exact path='/wallet' component={MainWallet} />
        <Route path='/wallet/:currency/deposit' component={Deposit} />
        <Route path='/wallet/:currency/withdraw' component={Withdraw} />
        <Route path='/wallet/activity' component={WalletActivity} />
      </Switch>
    </div>
   </>
  );
}

export default App;