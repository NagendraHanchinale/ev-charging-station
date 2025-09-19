import axios from 'axios';

export const initiatePayment = async (order) => {
    try {
        const response = await axios.post('http://10.101.230.244:5000/beckn/init', { order });
        console.log('Payment Terms Received:', response.data.paymentTerms);
        // Simulate showing payment UI and "collecting" payment
        const dummyPaymentProof = {
            status: "PAID",
            transactionId: "TXN123456789"
        };
        console.log('Dummy Payment Proof:', dummyPaymentProof);
        // Here you’d normally call confirm
    } catch (error) {
        console.error('Error initiating payment:', error);
    }
};
