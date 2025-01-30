

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="footer-container w-10/12 mx-auto">
                <div className="text-center pt-18 pb-6">
                <h1 className="text-4xl font-bold">Gadget Heaven</h1>
                <p className="color-02 font-semibold">Leading the way in cutting-edge technology and innovation.</p>
   
                </div>
                <hr className="border border-gray-200" />
                <div className="pb-16 pt-6 grid grid-cols-3">
                    <div className="text-center">
                    <h3 className="font-bold text-lg ">Services</h3>
                    <ul className="color-02">
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shopping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                    </div>
                    <div className="text-center">
                    <h3 className="font-bold text-lg ">Company</h3>
                    <ul className="color-02">
                        <li>Abous Us</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                    <div className="text-center">
                    <h3 className="font-bold text-lg ">Legal</h3>
                    <ul className="color-02">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;