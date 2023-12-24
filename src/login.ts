import axios from 'axios';

export type loginTypes = {
    email : string,
    password : string
}
export const login = async (data : loginTypes) => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://faucetearner.org/api.php?act=login',
      headers: { 
        'authority': 'faucetearner.org', 
        'accept': 'application/json, text/javascript, */*; q=0.01', 
        'accept-language': 'en-US,en;q=0.9', 
        'content-type': 'application/json', 
        'cookie': '', 
        'origin': 'https://faucetearner.org', 
        'referer': 'https://faucetearner.org/login.php', 
      },
      data : data
    };
    
    try {
        const login = await axios.request(config)
        return login
    } catch (error) {
        console.log(error);
    }
    
}