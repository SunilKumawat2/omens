import React from 'react';

const Razor_Pay = ({ Price, onPaymentSuccess, buttonContent }) => {
    console.log("Price:", Price);

    // Load the Razorpay checkout script
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Handle payment when the button is clicked
    const handlePayment = async (e) => {
        e.preventDefault(); // Prevent default behavior
        console.log("Initiating Payment...");

        const res = await loadRazorpayScript();
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        const options = {
            // key: 'rzp_test_pPEb1wAu9J7WUF', // Replace with your Razorpay test key
            // key_secret: 'fQRKolZytD1rBPvNgIsPjAmK', // Replace with your Razorpay test key_secret
            key: 'rzp_test_RCB5r3LCcPBDmq', // Replace with your Razorpay test key
            amount: Price * 100, // Amount in paise (multiply by 100)
            currency: 'INR',
            description: 'Test Transaction',
            image: 'https://your-logo-url.com/logo.png',
            handler: function (response) {
                console.log('Payment Success:', response);
                // Call the success callback with transaction details
                onPaymentSuccess({
                    transaction_id: response.razorpay_payment_id,
                    payment_status: 'Success',
                });
            },
            prefill: {
                name: 'gr silver designs',
                email: 'grsilverdesigns@gmail.com',
                contact: '9876543210',
            },
            theme: {
                color: '#F37254',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <button
            type="button"
            onClick={handlePayment}
            className="gi-btn-2 w-full transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px]
                                                                 font-medium bg-[#9D2326] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
        >
            {buttonContent || "Make Payment"}
        </button>
    );
};

export default Razor_Pay;
