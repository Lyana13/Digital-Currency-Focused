
import axios from 'axios'


class BitGoApi {
    baseUrl = "http://localhost:3005/api/v2";
    token = 'v2xaeaf965957b4be0b2ff4431b8c63bb42cb66ff38c0c8ccf85a17d5cc33b68406';

    async doGetRequest(url, callback) {
        try {
            const response = await axios({
                method: 'get',
                url: this.baseUrl + url,
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            console.log(url, '\nSuccess:', response);
            return callback(response.data)
            
        } catch (error) {
            console.error(url, '\nError:', error);
            throw(error)
        }
    }

    getWallets()  {
        return this.doGetRequest(`/wallets?expandBalance=true`, (data) => data.wallets);
    }

    getWalletByCoin(coin)  {
        return this.doGetRequest(`/${coin}/wallet`, (data) => data.wallets[0]);
    }

    getLastDepositAddress(coin, walletId) {
        return this.doGetRequest(`/${coin}/wallet/${walletId}/addresses`, (data) => data.addresses[0].address);
    }

    getDeposits(coin, walletId) {
        return this.doGetRequest(`/${coin}/wallet/${walletId}/transfer?type=receive`, (data) => data.transfers);
    }
}

const bitGoApi = new BitGoApi();
export default bitGoApi;
	