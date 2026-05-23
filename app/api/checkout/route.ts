import Stripe from "stripe";

import { NextResponse } from "next/server";

const stripeSecretKey =
  process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error(
    "Missing STRIPE_SECRET_KEY"
  );
}

const stripe = new Stripe(
  stripeSecretKey
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { plan } = body;

    let amount = 5000;
    let planName = "Basic Plan";

    if (plan === "Standard") {
      amount = 7500;
      planName = "Standard Plan";
    }

    if (plan === "Premium") {
      amount = 10000;
      planName = "Premium Plan";
    }

    const session =
      await stripe.checkout.sessions.create({

        payment_method_types: ["card"],

        line_items: [
          {
            price_data: {
              currency: "usd",

              product_data: {
                name: planName,
              },

              unit_amount: amount,
            },

            quantity: 1,
          },
        ],

        mode: "payment",

        success_url:
          "http://localhost:3000/success",

        cancel_url:
          "http://localhost:3000/cancel",
      });

    return NextResponse.json({
      url: session.url,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Stripe Error" },
      { status: 500 }
    );
  }
}