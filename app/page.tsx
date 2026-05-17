'use client';

import { useState } from 'react';

export default function MyJapanJourneyLandingPage() {
  const [language, setLanguage] = useState('EN');
  const [loggedIn, setLoggedIn] = useState(false);
  const isAdmin = loggedIn;

  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [notes, setNotes] = useState(
    'Focus on countryside ryokan and local food experiences.'
  );

  const requests = [
    {
      name: 'Michael Johnson',
      country: 'USA',
      plan: 'Premium',
      status: 'Planning',
      payment: 'Paid',
      days: '10 Days',
    },
    {
      name: 'Emma Wilson',
      country: 'UK',
      plan: 'Standard',
      status: 'Waiting',
      payment: 'Paid',
      days: '5 Days',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <h1 className="text-2xl tracking-wide font-light">
            My Japan Journey
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'EN' ? 'JP' : 'EN')}
              className="border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition"
            >
              {language}
            </button>

            <button
              onClick={() => setLoggedIn(!loggedIn)}
              className="bg-white/10 hover:bg-white/20 transition px-5 py-2 rounded-full text-sm"
            >
              {loggedIn ? 'Dashboard' : 'Login'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center px-6 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-[0.3em] text-sm mb-6 text-zinc-200">
              Personalized Japan Travel
            </p>

            <h1 className="text-6xl md:text-8xl font-light leading-tight mb-8">
              My Japan
              <br />
              Journey
            </h1>

            <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed mb-10 max-w-2xl">
              Personalized Japan travel plans crafted by a local.
              Discover a quieter, deeper, and more authentic side of Japan.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-8 py-4 rounded-full text-lg shadow-2xl">
                Start Your Journey
              </button>

              <button className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-full text-lg backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-24 bg-[#f8f6f1]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
            Not Another AI Travel Planner
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
            Every trip is personally crafted
            <br />
            by someone who knows Japan.
          </h2>

          <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            My Japan Journey is a personalized travel planning service for
            international visitors. Every itinerary is carefully designed based
            on your interests, travel style, and the kind of Japan you truly
            want to experience.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 bg-[#efe9de]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              Process
            </p>

            <h2 className="text-5xl font-light">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-6xl font-extralight mb-6 text-[#a63c32]">
                01
              </div>

              <h3 className="text-2xl mb-4">Secure Payment</h3>

              <p className="text-zinc-600 leading-relaxed">
                Begin your personalized Japan travel experience with a secure
                payment to start the planning process.
              </p>
            </div>

            <div>
              <div className="text-6xl font-extralight mb-6 text-[#a63c32]">
                02
              </div>

              <h3 className="text-2xl mb-4">
                Complete Your Travel Form
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                After payment, you receive access to a personalized travel
                request form where you can share your interests, destinations,
                travel style, and preferences.
              </p>
            </div>

            <div>
              <div className="text-6xl font-extralight mb-6 text-[#a63c32]">
                03
              </div>

              <h3 className="text-2xl mb-4">
                Receive Your Custom Journey
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                Your itinerary is personally crafted and delivered based on your
                interests and travel style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin */}
      {isAdmin && (
        <section className="px-6 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
                  Private Admin Dashboard
                </p>

                <h2 className="text-5xl font-light">
                  Manage Everything
                </h2>
              </div>

              <div className="bg-[#1c1c1c] text-white px-5 py-3 rounded-full text-sm">
                Only Visible To You
              </div>
            </div>

            <div className="bg-[#1f1f1f] rounded-[2rem] p-8 text-white shadow-2xl overflow-hidden">
              <div className="grid grid-cols-5 gap-4 text-zinc-400 border-b border-white/10 pb-4 mb-6 text-sm uppercase tracking-wide">
                <div>Client</div>
                <div>Country</div>
                <div>Plan</div>
                <div>Status</div>
                <div>Payment</div>
              </div>

              {requests.map((request, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-4 items-center py-5 border-b border-white/5 hover:bg-white/5 px-4 rounded-xl transition cursor-pointer"
                  onClick={() => setSelectedClient(request)}
                >
                  <div>{request.name}</div>
                  <div className="text-zinc-400">{request.country}</div>
                  <div>{request.plan}</div>

                  <div>
                    <span className="bg-[#a63c32] px-4 py-2 rounded-full text-sm">
                      {request.status}
                    </span>
                  </div>

                  <div>{request.payment}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-[#262626] rounded-[2rem] p-8 text-white">
                <h3 className="text-2xl font-light mb-6">
                  Client Details
                </h3>

                {selectedClient ? (
                  <div className="space-y-4">
                    <div>Name: {selectedClient.name}</div>
                    <div>Country: {selectedClient.country}</div>
                    <div>Plan: {selectedClient.plan}</div>
                    <div>Trip Length: {selectedClient.days}</div>
                  </div>
                ) : (
                  <div className="text-zinc-400">
                    Select a traveler.
                  </div>
                )}
              </div>

              <div className="bg-[#262626] rounded-[2rem] p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-light">
                    Planner Notes
                  </h3>

                  <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-5 py-2 rounded-full text-sm">
                    Save Notes
                  </button>
                </div>

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full h-[250px] bg-[#1f1f1f] border border-white/10 rounded-2xl p-5 text-zinc-300 resize-none focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="px-6 py-28 bg-[#1c1c1c] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            Begin Your
            <br />
            Japan Journey
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Discover a more personal and unforgettable way to travel Japan.
          </p>

          <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-10 py-5 rounded-full text-xl shadow-2xl">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}