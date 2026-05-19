import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is missing");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2026-04-22.dahlia",
});

export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "My Japan Journey Travel Plan",
            },
            unit_amount: 5000,
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: `${req.headers.get("origin")}/?paid=true`,
      cancel_url: `${req.headers.get("origin")}/?canceled=true`,
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