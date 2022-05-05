import { Button } from "antd"

export const Payment = () => {

    return <>
        <div className="checkout_heading">
            <div><h2>Checkout</h2></div>
            <div className="order_total">Order total</div>
        </div>
        <p style={{ border: "1px solid red", width: "15%" }}>Select payment method</p>
        <div className="main_div">

            <div className="left_div">

                <div className="payment_method1" style={{ display: "flex", marginLeft: '20px' }}>
                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                    <p style={{ fontSize: "19px" }}>Enter Payment method</p>
                    <img src="https://img.shop.com/Image/local/images/cc/amex.jpg" alt="" />
                    <img src="https://img.shop.com/Image/local/images/cc/discover.jpg" alt="" />
                    <img src="https://img.shop.com/Image/local/images/cc/mastercard.png" alt="" />
                    <img src="https://img.shop.com/Image/local/images/cc/visa.jpg" alt="" />
                </div>
                <hr />
                <div className="payment_method2" style={{ marginLeft: "20px" }}>
                    <input type="radio" style={{ width: "20px", height: "20px" }} />
                    <img src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg" alt="" />
                </div>
                <hr />
                <div className="payment_method3" style={{ marginLeft: "30px" }}>
                    <img src="https://img.shop.com/Image/local/images/cc/SezzlePaymentBtn_Small-purple.svg" alt="" style={{ width: "250px" }} />
                </div>
                <hr />
                <div className="payment_method4" style={{ marginLeft: "30px" }}>
                    <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="" style={{ width: "250px" }} />
                </div>
                <hr />
                <div className="payment_method5" style={{ marginLeft: "30px" }}>
                    <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit_MD_BNPOT_1x.png" alt="" style={{ width: "250px" }} />
                </div>
                <hr />
                <div className="payment_method6">
                    <img src="https://src.mastercard.com/assets/img/btn/src_chk_btn_147x034px.svg?locale=en_us&paymentmethod=master,visa,discover,amex&checkoutid=a4a6w4v6h7cg0iaijxn0j1iaoelnus5936" alt="" style={{ width: "250px", marginLeft: "30px" }} />
                </div>
            </div>
            <div className="right_div">
                <h1 style={{ color: "grey" }}>Order Summary</h1>
                <hr></hr>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>Items order:</p>
                        <p>23</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>Tax Total:</p>
                        <p>23</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>Shipping</p>
                        <p>FREE</p>
                    </div>
                    <hr />
                    <div className="order">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h3>Order Total:</h3>
                            <p> 56</p>
                        </div>
                        <div style={{display: "flex"}}>
                            {/* <div> */}
                            <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="" style={{ width: "20px" }} />
                            {/* </div> */}
                            
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <p>Cashback earned on this order:</p>
                                <p >$56</p>
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className="text_alerts" style={{ backgroundColor: "grey" }}>
                        <div style={{ display: "flex" }}>
                            <input type="checkbox" style={{ width: "30px", height: "30px" }} />
                            <label style={{ fontSize: "20px" }}>Get text alerts for this order</label>
                        </div>

                        <p>Mobile number</p>
                        <input style={{ width: "96%" }} type="number" placeholder="Please enter your 10 digit phone number i.e (999 999 9999)" />
                        <p>Message and data rates can be apply</p>
                    </div>
                    <hr />
                    <div style={{ justifyContent: "space-between", display: "flex" }}>
                        <a href="" style={{ textDecoration: "underline", color: "black" }}>Shipping</a>
                        <Button className="place_order" style={{ width: "40%", height: "40px" }}>Place Order</Button>
                    </div>

                    <hr />

                    <div style={{ backgroundColor: "lightblue", height: "60px" }}>
                        <p>Let us know how we are doing
                            <a style={{ color: "black", textDecoration: "underline" }}>Send Feedback</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="shippin_address" style={{ display: "flex" }}>

            <div>
                <p>Shipping address</p>
                <h3>Mayur wagh</h3>
                <p>london street</p>
                <p>london, TX, United States, 8978</p>
                <p>Phone: 64468456</p>
                <a href="">Change</a>
            </div>
            <div className="coupon_card">
                <div>
                    <p>Coupon</p>
                    <input type="text" placeholder="Coupon code" />
                    <Button className="apply_button">Apply</Button>
                </div>
                <div >
                    <p>Gift Card</p>
                    <input type="number" placeholder="Gift card number" />
                    <p>PIN:</p>
                    <input type="number" placeholder="PIN" />
                    <Button>Apply</Button>
                </div>
            </div>
        </div>
    </>
}