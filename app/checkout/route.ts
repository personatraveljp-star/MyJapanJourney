import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
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

      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
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