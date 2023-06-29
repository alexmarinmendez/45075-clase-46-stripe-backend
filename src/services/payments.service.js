import Stripe from 'stripe'
import { config } from 'dotenv'
config()

export default class PaymentService {
    constructor() {
        this.stripe = new Stripe(process.env.STRIPE_PK)
    }

    createPaymentIntent = async(data) => {
        const paymentIntent = this.stripe.paymentIntents.create(data)
        return paymentIntent
    }
}