import { Button } from 'antd'
import { Typography } from 'antd';
const { Title } = Typography;
export const Singin = () => {

    return <>
        <div className="main_div">
            <div className="signin_div">
                <Title level={1}>Sing in</Title>
                
                <form >
                    <p className='address'>Enter address:</p>
                    <input type="email" placeholder="yourname@example.com" className='email' />
                    <p className='pass_p'>Password:</p>
                    <input type="password" placeholder="Please enter your password" className='password' />
                    <p className='forgotpass'>Forgot your password?</p>
                    <Button className= "singin_button" type="primary">Sing in</Button>
                </form>
            </div>
            <div className="signup_div">
                <p className='heading_donthaveacc'>Don't have an account?</p>
                <p className='paragraph'>With a SHOP.COM account, you can enjoy the following benefits:
                    up to 50% <span><img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="" style={{ width: "15px" }} /></span>Cashback on eligible purchases, redeem discount coupons,
                    order status and history,
                    saved payment options and addresses, exclusive emails and more.
                </p>
                <Button className='createButton'>Create your new account</Button>

            </div>
        </div>

    </>
}