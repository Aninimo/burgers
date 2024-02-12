import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe("sk_test_51OdLwdFQEddJXmZhloRt6vQVBhUBmaO2DracjnUgqH4dyHw1h6owpIBnF8j7GnNH48Lc9mJJhfcVXGkw3fHT4yIp00ER1GChBV", {
  apiVersion: "2023-10-16"
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { totalCost } = req.body 

      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [],
        line_items: [{
          price_data: {
            currency: "USD",
            product_data: {
              name: "Hamburgers",
              images: ["https://pngimg.com/uploads/burger_sandwich/small/burger_sandwich_PNG96728.png"],
            },
            unit_amount: totalCost * 100
          },
          adjustable_quantity: {
            enabled: false,
          },
          quantity: 1
        }],
        mode: "payment",
        success_url: `https://e1bb05fb-4132-44f9-82cd-cc90b796b105-00-1prk7ofkydmz6.riker.replit.dev/success`,
        cancel_url: `${req.headers.origin}/`
      });

      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({
        message: error instanceof Error ? error.message : null
      });
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed");
  }
}
