import type { Stripe } from '@stripe/stripe-js'
import { loadStripe } from '@stripe/stripe-js'

let stripePromise: Stripe

const getStripe = async () => {
  if (!stripePromise) {
    // @ts-ignore
    stripePromise = new loadStripe('pk_test_51OdLwdFQEddJXmZhLwW7DDFhSDLxZ6vKohvpwbHf5gq8cSzXHqmx7LpTw6Upd3OiNKBpUTsU7iMcqhtakohjpsFy004Lb3GbmP')
  }

  return stripePromise
}

export default getStripe;
