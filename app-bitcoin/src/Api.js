
import axios from 'axios'

class BitGoApi {
    async getWallets()  {
        const url = 'http://localhost:3005/api/v2/wallets?expandBalance=true';
        const token = 'v2xaeaf965957b4be0b2ff4431b8c63bb42cb66ff38c0c8ccf85a17d5cc33b68406';
        try {
            const response = await axios({
                method: 'get',
                url: url,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Успех:', response);
            return response.data.wallets
            
        } catch (error) {
            console.error('Ошибка:', error);
            throw(error)
        }
    }

    async getWalletByCoin(coin)  {
        const url = `http://localhost:3005/api/v2/${coin}/wallet`;
        const token = 'v2xaeaf965957b4be0b2ff4431b8c63bb42cb66ff38c0c8ccf85a17d5cc33b68406';
        try {
            const response = await axios({
                method: 'get',
                url: url,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Успех:', response);
            return response.data.wallets[0]
            
        } catch (error) {
            console.error('Ошибка:', error);
            throw(error)
        }
    }
    
}

const bitGoApi = new BitGoApi();
export default bitGoApi;
	