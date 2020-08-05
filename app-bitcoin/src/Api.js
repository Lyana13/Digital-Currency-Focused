
import axios from 'axios'

class BitGoApi {
    async getWallets()  {
        const url = 'https://www.bitgo.com/api/v2/wallets?expandBalance=true';
        const token = 'v2x7e3c91ef05d6283e27d6284daa16a7dcb02bd132fad5552de33158f23055a34b';
        try {
            const response = await axios({
                method: 'get',
                url: url,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Успех:', response);
            return response
            
        } catch (error) {
            console.error('Ошибка:', error);
            throw(error)
        }
    }
}

const bitGoApi = new BitGoApi();
export default bitGoApi;
	