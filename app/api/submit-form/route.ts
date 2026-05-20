import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      name,
      email,
      country,
      dates,
      travelers,
      budget,
      places,
      interests,
      food,
      transportation,
      requests,
      japanVisit,
      plan,
    } = body;

    const { error } = await supabase
      .from("travel_forms")
      .insert([
        {
          name,
          email,
          country,
          dates,
          travelers,
          budget,
          places,
          interests,
          food,
          transportation,
          requests,
          japan_visit: japanVisit,
          plan,
        },
      ]);

    if (error) {

      console.log(error);

      return NextResponse.json(
        { error: "Database Error" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",

      to: email,

      subject: "My Japan Journey",

      html: `
        <h1>Thank you for your purchase.</h1>

        <p>Your questionnaire has been received.</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}