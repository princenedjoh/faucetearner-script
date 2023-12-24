import axios from 'axios';

export const claim = async (userCookie : string) => {
    let data = {}
    
    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://faucetearner.org/api.php?act=faucet',
    headers: { 
        'authority': 'faucetearner.org', 
        'accept': 'application/json, text/javascript, */*; q=0.01', 
        'accept-language': 'en-US,en;q=0.9', 
        'content-type': 'application/json', 
        'cookie': `login=1; ${userCookie}`, 
        'origin': 'https://faucetearner.org', 
        'referer': 'https://faucetearner.org/faucet.php', 
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"', 
        'sec-ch-ua-mobile': '?1', 
        'sec-ch-ua-platform': '"Android"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-origin', 
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36', 
        'x-requested-with': 'XMLHttpRequest'
    },
    data : data
    };
    
    try {
        const claim = await axios.request(config)
        return claim.data
    } catch (error) {
        console.log(error);
    }
}
