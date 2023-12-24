import { login, loginTypes } from './src/login';
import { claim } from './src/claim';
import { details } from './src/static data/accountDetails';

const main = async (data : loginTypes) => {
    //login
    let email = data.email
    const loginData = await login(data)
    console.log(`[${email}] ${loginData?.data.message}`)
    const headers = loginData?.headers['set-cookie']
    const userCookie = headers && headers[1].split(';')[0]
    console.log(userCookie)

    //claim rewards
    const rewards = await claim(userCookie!)
    rewards.code === 2
        ? console.log(`[${email}] ${rewards.message}`)
        : console.log(`[${email}] ${rewards.message}`)
    
    console.log('')
}

const app = async () => {
    for(let info of details){
        await main(info)
    }
    // setInterval(function() {
    //     for(let info of details){
    //         main(info)
    //     }
    //     console.log("Interval executed");
    //   }, 600000);
}

app()