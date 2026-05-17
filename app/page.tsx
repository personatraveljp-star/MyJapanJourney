"use client";

import { useState } from 'react';

export default function MyJapanJourneyLandingPage() {
  const [language, setLanguage] = useState('EN');

  const translations = {
    EN: {
      start: 'Start Your Journey',
      view: 'View Plans',
      hero: 'Personalized Japan travel plans crafted by a local.',
      discover: 'Discover a quieter, deeper, and more authentic side of Japan.',
      login: 'Login',
      dashboard: 'Dashboard',
      contact: 'Contact Me',
      begin: 'Begin Your Journey',
    },
    JP: {
      start: '旅を始める',
      view: 'プランを見る',
      hero: '日本在住者が作る、あなただけの旅プラン。',
      discover: 'もっと静かで、深く、本物の日本を発見しましょう。',
      login: 'ログイン',
      dashboard: 'ダッシュボード',
      contact: 'お問い合わせ',
      begin: '旅を始める',
    },
    FR: {
      start: 'Commencez votre voyage',
      view: 'Voir les plans',
      hero: 'Des voyages personnalisés au Japon créés par un local.',
      discover: 'Découvrez un Japon plus authentique et plus profond.',
      login: 'Connexion',
      dashboard: 'Tableau de bord',
      contact: 'Contactez-moi',
      begin: 'Commencer',
    },
    ES: {
      start: 'Comienza tu viaje',
      view: 'Ver planes',
      hero: 'Viajes personalizados por Japón creados por un local.',
      discover: 'Descubre un Japón más auténtico y profundo.',
      login: 'Iniciar sesión',
      dashboard: 'Panel',
      contact: 'Contáctame',
      begin: 'Comenzar',
    },
    CN: {
      start: '开始你的旅程',
      view: '查看方案',
      hero: '由当地人打造的日本个性化旅行。',
      discover: '探索更安静、更深入、更真实的日本。',
      login: '登录',
      dashboard: '控制面板',
      contact: '联系我们',
      begin: '开始旅程',
    },
    KR: {
      start: '여행 시작하기',
      view: '플랜 보기',
      hero: '현지인이 만드는 맞춤형 일본 여행.',
      discover: '더 깊고 진짜 일본을 발견해보세요.',
      login: '로그인',
      dashboard: '대시보드',
      contact: '문의하기',
      begin: '여행 시작',
    },
  };

  const t = translations[language];
  const [loggedIn, setLoggedIn] = useState(false);
  const isAdmin = loggedIn;

  const [selectedClient, setSelectedClient] = useState(null);
  const [notes, setNotes] = useState('Focus on countryside ryokan and local food experiences.');

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
    <div className="min-h-screen bg-[#f8f6f1] text-zinc-900" style={{
      backgroundImage:
        'radial-gradient(circle at top, rgba(166,60,50,0.04), transparent 30%)',
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <div>
            <h1 className="text-2xl tracking-wide font-light">My Japan Journey</h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const langs = ['EN', 'JP', 'FR', 'ES', 'CN', 'KR'];
                const currentIndex = langs.indexOf(language);
                const nextIndex = (currentIndex + 1) % langs.length;
                setLanguage(langs[nextIndex]);
              }}
              className="border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition"
            >
              {language}
            </button>

            <button
              onClick={() => setLoggedIn(!loggedIn)}
              className="bg-white/10 hover:bg-white/20 transition px-5 py-2 rounded-full text-sm"
            >
              {loggedIn ? t.dashboard : t.login}
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
          filter: 'saturate(0.9)',
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
              {t.hero}
              <br />
              {t.discover}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-8 py-4 rounded-full text-lg shadow-2xl">
                {t.start}
              </button>

              <button className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-full text-lg backdrop-blur-sm">
                {t.view}
              </button>
            </div>
          </div>
        </div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-3.png')] opacity-20"></div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-24 bg-[#f3eee5] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              Rural Japan
            </p>

            <h2 className="text-5xl font-light mb-6">
              Quiet Landscapes of Japan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[500px] object-cover shadow-xl hover:scale-[1.02] transition duration-500"
            />

            <img
              src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[500px] object-cover shadow-xl hover:scale-[1.02] transition duration-500 md:mt-16"
            />

            <img
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[500px] object-cover shadow-xl hover:scale-[1.02] transition duration-500"
            />
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
            My Japan Journey is a personalized travel planning service for international visitors.
            Instead of AI-generated templates, each itinerary is carefully designed based on your interests,
            travel style, and the kind of Japan you truly want to experience.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              Travel Plans
            </p>

            <h2 className="text-5xl font-light mb-6">
              Choose Your Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#1c1c1c] text-white rounded-[2rem] p-12 shadow-2xl">
              <p className="uppercase tracking-[0.2em] text-sm text-zinc-400 mb-6">
                Personalized Planning
              </p>

              <h3 className="text-5xl font-light mb-6">
                Every journey is uniquely crafted.
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Instead of fixed travel packages, each itinerary is carefully designed based on your interests, travel style, pace, and the side of Japan you want to experience.
              </p>

              <div className="text-4xl font-light mb-3">Starting from $50</div>
              <p className="text-zinc-500 mb-10">
                Pricing depends on trip length and personalization.
              </p>

              <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-10 py-5 rounded-full text-lg shadow-xl">
                {t.begin}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24 bg-[#efe9de]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              Process
            </p>

            <h2 className="text-5xl font-light">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-6xl font-extralight mb-6 text-[#a63c32]">01</div>
              <h3 className="text-2xl mb-4">Begin Your Journey</h3>
              <p className="text-zinc-600 leading-relaxed">
                Start your personalized Japan travel experience with a secure payment to begin the planning process.
              </p>
            </div>

            <div>
              <div className="text-6xl font-extralight mb-6 text-[#a63c32]">02</div>
              <h3 className="text-2xl mb-4">Complete Your Travel Form</h3>
              <p className="text-zinc-600 leading-relaxed">
                After payment, you will receive access to a detailed personalized travel request form where you can share your interests, destinations, travel style, and preferences.
              </p>
            </div>

            <div>
              <div className="text-6xl font-extralight mb-6 text-[#a63c32]">03</div>
              <h3 className="text-2xl mb-4">Receive Your Custom Journey</h3>
              <p className="text-zinc-600 leading-relaxed">
                I personally create and deliver your custom Japan itinerary based on your interests and travel style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] shadow-2xl object-cover h-[600px] w-full"
              alt="Japan"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              About
            </p>

            <h2 className="text-5xl font-light leading-tight mb-8">
              Travel Japan
              <br />
              through the eyes of a local.
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              My goal is to help travelers discover a more authentic side of Japan — beyond crowded tourist spots and generic travel guides.
            </p>

            <p className="text-zinc-600 text-lg leading-relaxed mb-10">
              From quiet countryside landscapes and local restaurants to hidden neighborhoods and peaceful cultural experiences, every journey is thoughtfully designed for each traveler.
            </p>

            <button className="bg-[#1c1c1c] text-white px-8 py-4 rounded-full hover:opacity-90 transition">
              {t.contact}
            </button>
          </div>
        </div>
      </section>

      {/* Payment Preview */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              Secure Checkout
            </p>

            <h2 className="text-5xl font-light mb-6">
              Begin Your Journey
            </h2>
          </div>

          <div className="bg-[#1c1c1c] text-white rounded-[2rem] p-10 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#a63c32] transition">
                <p className="uppercase tracking-[0.2em] text-sm text-zinc-400 mb-4">
                  Basic
                </p>
                <h3 className="text-4xl font-light mb-2">$50</h3>
                <p className="text-zinc-400 mb-6">1–3 Days</p>
                <button className="w-full bg-white text-black py-3 rounded-full hover:opacity-90 transition">
                  Continue
                </button>
              </div>

              <div className="bg-[#a63c32] rounded-2xl p-6 shadow-2xl scale-[1.03]">
                <p className="uppercase tracking-[0.2em] text-sm text-red-100 mb-4">
                  Standard
                </p>
                <h3 className="text-4xl font-light mb-2">$75</h3>
                <p className="text-red-100 mb-6">4–7 Days</p>
                <button className="w-full bg-white text-black py-3 rounded-full hover:opacity-90 transition">
                  Continue
                </button>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#a63c32] transition">
                <p className="uppercase tracking-[0.2em] text-sm text-zinc-400 mb-4">
                  Premium
                </p>
                <h3 className="text-4xl font-light mb-2">$100</h3>
                <p className="text-zinc-400 mb-6">8–12 Days</p>
                <button className="w-full bg-white text-black py-3 rounded-full hover:opacity-90 transition">
                  Continue
                </button>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-zinc-400 leading-relaxed text-lg">
              Choose your preferred plan and complete payment first. After payment, you will receive access to a detailed travel request form where you can share your interests, destinations, travel style, food preferences, and the kind of Japan you want to experience.
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard - Private */}
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
                </div>
              ))}
            </div>

            {/* Admin Detail Panel */}
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-[#262626] rounded-[2rem] p-8 border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-light">Client Details</h3>
                  <span className="bg-[#a63c32] px-4 py-2 rounded-full text-sm">
                    Private
                  </span>
                </div>

                {selectedClient ? (
                  <div className="space-y-5 text-zinc-300">
                    <div>
                      <p className="text-zinc-500 text-sm mb-1">Name</p>
                      <p className="text-lg">{selectedClient.name}</p>
                    </div>

                    <div>
                      <p className="text-zinc-500 text-sm mb-1">Country</p>
                      <p className="text-lg">{selectedClient.country}</p>
                    </div>

                    <div>
                      <p className="text-zinc-500 text-sm mb-1">Plan</p>
                      <p className="text-lg">{selectedClient.plan}</p>
                    </div>

                    <div>
                      <p className="text-zinc-500 text-sm mb-1">Trip Length</p>
                      <p className="text-lg">{selectedClient.days}</p>
                    </div>

                    <div>
                      <p className="text-zinc-500 text-sm mb-1">Payment Status</p>
                      <p className="text-lg text-green-400">{selectedClient.payment}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-zinc-500">
                    Select a traveler to view details.
                  </div>
                )}
              </div>

              <div className="bg-[#262626] rounded-[2rem] p-8 border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-light">Planner Notes</h3>

                  <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-5 py-2 rounded-full text-sm">
                    Save Notes
                  </button>
                </div>

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full h-[250px] bg-[#1f1f1f] border border-white/10 rounded-2xl p-5 text-zinc-300 resize-none focus:outline-none"
                  placeholder="Private planning notes..."
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
            Discover a more personal, thoughtful, and unforgettable way to travel Japan.
          </p>

          <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-10 py-5 rounded-full text-xl shadow-2xl">
            {t.start}
          </button>
        </div>
      </section>
    </div>
  );
}
