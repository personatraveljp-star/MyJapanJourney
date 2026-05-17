"use client";

import { useState } from "react";

type Language = "EN" | "JP" | "FR" | "ES" | "CN" | "KR";

type ClientRequest = {
  name: string;
  country: string;
  plan: string;
  status: string;
  payment: string;
  days: string;
};

export default function MyJapanJourneyLandingPage() {
  const [language, setLanguage] = useState<Language>("EN");
  const [loggedIn, setLoggedIn] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const isAdmin = loggedIn;

  const translations = {
    EN: {
      start: "Begin Your Journey",
      view: "View Plans",
      hero: "Personalized Japan travel plans crafted by a local.",
      discover:
        "Discover a quieter, deeper, and more authentic side of Japan.",
      login: "Login",
      dashboard: "Dashboard",
      contact: "Contact Me",
      begin: "Begin Your Journey",
      pricing: "Travel Plans",
      process: "Process",
      about: "About",
      payment: "Secure Checkout",
      questionnaire: "Traveler Questionnaire",
    },

    JP: {
      start: "旅を始める",
      view: "プランを見る",
      hero: "日本在住者が作る、あなただけの旅プラン。",
      discover:
        "静かで、深く、本物の日本を体験してください。",
      login: "ログイン",
      dashboard: "管理画面",
      contact: "お問い合わせ",
      begin: "旅を始める",
      pricing: "料金プラン",
      process: "ご利用の流れ",
      about: "サービスについて",
      payment: "安全なお支払い",
      questionnaire: "旅行アンケート",
    },

    FR: {
      start: "Commencez votre voyage",
      view: "Voir les plans",
      hero:
        "Des voyages personnalisés au Japon créés par un local.",
      discover:
        "Découvrez un Japon plus authentique et paisible.",
      login: "Connexion",
      dashboard: "Tableau de bord",
      contact: "Contact",
      begin: "Commencer",
      pricing: "Plans de voyage",
      process: "Processus",
      about: "À propos",
      payment: "Paiement sécurisé",
      questionnaire: "Questionnaire",
    },

    ES: {
      start: "Comienza tu viaje",
      view: "Ver planes",
      hero:
        "Viajes personalizados por Japón creados por un local.",
      discover:
        "Descubre un Japón más auténtico y tranquilo.",
      login: "Iniciar sesión",
      dashboard: "Panel",
      contact: "Contacto",
      begin: "Comenzar",
      pricing: "Planes",
      process: "Proceso",
      about: "Sobre nosotros",
      payment: "Pago seguro",
      questionnaire: "Cuestionario",
    },

    CN: {
      start: "开始你的旅程",
      view: "查看方案",
      hero:
        "由当地人打造的日本个性化旅行。",
      discover:
        "发现更安静、更真实的日本。",
      login: "登录",
      dashboard: "控制面板",
      contact: "联系我们",
      begin: "开始旅程",
      pricing: "旅行方案",
      process: "流程",
      about: "关于我们",
      payment: "安全支付",
      questionnaire: "旅行问卷",
    },

    KR: {
      start: "여행 시작하기",
      view: "플랜 보기",
      hero:
        "현지인이 만드는 맞춤형 일본 여행.",
      discover:
        "더 조용하고 진짜 일본을 경험해보세요.",
      login: "로그인",
      dashboard: "대시보드",
      contact: "문의하기",
      begin: "여행 시작",
      pricing: "여행 플랜",
      process: "이용 방법",
      about: "소개",
      payment: "안전한 결제",
      questionnaire: "여행 설문",
    },
  };

  const t = translations[language];

  const [selectedClient, setSelectedClient] =
    useState<ClientRequest | null>(null);

  const [notes, setNotes] = useState(
    "Focus on local culture and countryside experiences."
  );

  const requests: ClientRequest[] = [
    {
      name: "Michael Johnson",
      country: "USA",
      plan: "Premium",
      status: "Planning",
      payment: "Paid",
      days: "10 Days",
    },

    {
      name: "Emma Wilson",
      country: "UK",
      plan: "Standard",
      status: "Waiting",
      payment: "Paid",
      days: "5 Days",
    },
  ];

  const languages: Language[] = [
    "EN",
    "JP",
    "FR",
    "ES",
    "CN",
    "KR",
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-zinc-900">

      {/* NAVIGATION */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

          <h1 className="text-2xl tracking-wide font-light">
            My Japan Journey
          </h1>

          <div className="flex items-center gap-4">

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as Language)
              }
              className="bg-black/30 border border-white/20 rounded-full px-4 py-2 text-sm"
            >
              {languages.map((lang) => (
                <option
                  key={lang}
                  value={lang}
                  className="text-black"
                >
                  {lang}
                </option>
              ))}
            </select>

            <button
              onClick={() => setLoggedIn(!loggedIn)}
              className="bg-white/10 hover:bg-white/20 transition px-5 py-2 rounded-full text-sm"
            >
              {loggedIn ? t.dashboard : t.login}
            </button>

          </div>
        </div>
      </nav>

      {/* HERO */}

      <section
        className="relative min-h-screen flex items-center px-6 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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

              <button className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-full text-lg">
                {t.view}
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section className="px-6 py-24 bg-[#f3eee5]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              Rural Japan
            </p>

            <h2 className="text-5xl font-light">
              Quiet Landscapes of Japan
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[500px] object-cover shadow-xl"
            />

            <img
              src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[500px] object-cover shadow-xl md:mt-16"
            />

            <img
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[500px] object-cover shadow-xl"
            />

          </div>
        </div>
      </section>

      {/* PRICING */}

      <section className="px-6 py-24 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              {t.pricing}
            </p>

            <h2 className="text-5xl font-light">
              Choose Your Journey
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#1f1f1f] text-white rounded-[2rem] p-10">
              <p className="uppercase tracking-[0.2em] text-sm text-zinc-400 mb-4">
                Basic
              </p>

              <h3 className="text-5xl font-light mb-4">
                $50
              </h3>

              <p className="text-zinc-400 mb-8">
                1–3 Days
              </p>

              <button
                onClick={() => setPaymentCompleted(true)}
                className="w-full bg-white text-black py-4 rounded-full"
              >
                Continue
              </button>
            </div>

            <div className="bg-[#a63c32] text-white rounded-[2rem] p-10 scale-[1.03] shadow-2xl">

              <p className="uppercase tracking-[0.2em] text-sm text-red-100 mb-4">
                Most Popular
              </p>

              <h3 className="text-5xl font-light mb-4">
                $75
              </h3>

              <p className="text-red-100 mb-8">
                4–7 Days
              </p>

              <button
                onClick={() => setPaymentCompleted(true)}
                className="w-full bg-white text-black py-4 rounded-full"
              >
                Continue
              </button>

            </div>

            <div className="bg-[#1f1f1f] text-white rounded-[2rem] p-10">

              <p className="uppercase tracking-[0.2em] text-sm text-zinc-400 mb-4">
                Premium
              </p>

              <h3 className="text-5xl font-light mb-4">
                $100
              </h3>

              <p className="text-zinc-400 mb-8">
                8–12 Days
              </p>

              <button
                onClick={() => setPaymentCompleted(true)}
                className="w-full bg-white text-black py-4 rounded-full"
              >
                Continue
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="px-6 py-24 bg-[#efe9de]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              {t.process}
            </p>

            <h2 className="text-5xl font-light">
              How It Works
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <div className="text-6xl font-extralight mb-6 text-[#a63c32]">
                01
              </div>

              <h3 className="text-2xl mb-4">
                Choose Your Plan
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                Select the travel planning package that best
                matches your trip length and travel style.
              </p>
            </div>

            <div>
              <div className="text-6xl font-extralight mb-6 text-[#a63c32]">
                02
              </div>

              <h3 className="text-2xl mb-4">
                Complete Your Questionnaire
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                After payment, unlock the personalized travel
                questionnaire and tell us about your ideal Japan trip.
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
                Your personalized Japan travel plan is carefully
                created and delivered based on your preferences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="px-6 py-24 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[2rem] shadow-2xl object-cover h-[600px] w-full"
          />

          <div>

            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              {t.about}
            </p>

            <h2 className="text-5xl font-light leading-tight mb-8">
              Travel Japan
              <br />
              through the eyes of a local.
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              My goal is to help travelers discover a more
              authentic side of Japan beyond crowded tourist spots.
            </p>

            <button className="bg-[#1c1c1c] text-white px-8 py-4 rounded-full">
              {t.contact}
            </button>

          </div>
        </div>
      </section>

      {/* PAYMENT */}

      <section className="px-6 py-24 bg-[#1c1c1c] text-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#d9b8b2] mb-4">
            {t.payment}
          </p>

          <h2 className="text-5xl font-light mb-8">
            Unlock Your Personalized Travel Form
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-12">
            Complete payment to access the detailed traveler questionnaire.
          </p>

          <button
            onClick={() => setPaymentCompleted(true)}
            className="bg-[#a63c32] hover:bg-[#8c3229] transition px-10 py-5 rounded-full text-xl"
          >
            Continue To Payment
          </button>

        </div>
      </section>

      {/* QUESTIONNAIRE LOCKED */}

      {!paymentCompleted && (
        <section className="px-6 py-24 bg-[#f8f6f1]">

          <div className="max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              {t.questionnaire}
            </p>

            <h2 className="text-5xl font-light mb-8">
              Available After Payment
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed">
              After completing payment, you will unlock your private travel questionnaire.
            </p>

          </div>
        </section>
      )}

      {/* QUESTIONNAIRE */}

      {paymentCompleted && (
        <section className="px-6 py-24 bg-[#f8f6f1]">

          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-16">

              <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
                {t.questionnaire}
              </p>

              <h2 className="text-5xl font-light">
                Personalized Travel Form
              </h2>

            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-xl space-y-6">

              <input
                placeholder="Full Name"
                className="w-full border border-zinc-300 rounded-2xl p-4"
              />

              <input
                placeholder="Email Address"
                className="w-full border border-zinc-300 rounded-2xl p-4"
              />

              <input
                placeholder="Country"
                className="w-full border border-zinc-300 rounded-2xl p-4"
              />

              <input
                placeholder="Travel Dates"
                className="w-full border border-zinc-300 rounded-2xl p-4"
              />

              <input
                placeholder="Number of Travelers"
                className="w-full border border-zinc-300 rounded-2xl p-4"
              />

              <input
                placeholder="Budget"
                className="w-full border border-zinc-300 rounded-2xl p-4"
              />

              <textarea
                placeholder="Places You Want To Visit"
                className="w-full border border-zinc-300 rounded-2xl p-4 h-32"
              />

              <textarea
                placeholder="Your Interests"
                className="w-full border border-zinc-300 rounded-2xl p-4 h-32"
              />

              <textarea
                placeholder="Food Preferences"
                className="w-full border border-zinc-300 rounded-2xl p-4 h-32"
              />

              <textarea
                placeholder="Preferred Transportation"
                className="w-full border border-zinc-300 rounded-2xl p-4 h-32"
              />

              <textarea
                placeholder="Special Requests"
                className="w-full border border-zinc-300 rounded-2xl p-4 h-32"
              />

              <input
                placeholder="How many times have you visited Japan?"
                className="w-full border border-zinc-300 rounded-2xl p-4"
              />

              <button className="w-full bg-[#a63c32] hover:bg-[#8c3229] transition text-white py-5 rounded-full text-lg">
                Submit Questionnaire
              </button>

            </div>
          </div>
        </section>
      )}

      {/* ADMIN */}

      {isAdmin && (
        <section className="px-6 py-24 bg-white">

          <div className="max-w-6xl mx-auto">

            <div className="flex items-center justify-between mb-12">

              <div>

                <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
                  Private Admin Dashboard
                </p>

                <h2 className="text-5xl font-light">
                  Manage Travelers
                </h2>

              </div>

            </div>

            <div className="bg-[#1f1f1f] rounded-[2rem] p-8 text-white">

              {requests.map((request, index) => (

                <div
                  key={index}
                  className="border-b border-white/10 py-6 cursor-pointer"
                  onClick={() => setSelectedClient(request)}
                >

                  <div className="flex justify-between">

                    <div>
                      <p className="text-xl">
                        {request.name}
                      </p>

                      <p className="text-zinc-400">
                        {request.country}
                      </p>
                    </div>

                    <div>
                      {request.plan}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {selectedClient && (
              <div className="mt-10 bg-[#262626] rounded-[2rem] p-8 text-white">

                <h3 className="text-3xl font-light mb-6">
                  Traveler Details
                </h3>

                <div className="space-y-4">

                  <p>Name: {selectedClient.name}</p>
                  <p>Country: {selectedClient.country}</p>
                  <p>Plan: {selectedClient.plan}</p>
                  <p>Trip Length: {selectedClient.days}</p>
                  <p>Payment: {selectedClient.payment}</p>

                </div>

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full mt-8 h-48 bg-[#1f1f1f] border border-white/10 rounded-2xl p-5"
                />

              </div>
            )}

          </div>
        </section>
      )}

      {/* FINAL CTA */}

      <section className="px-6 py-28 bg-[#1c1c1c] text-white text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            Begin Your
            <br />
            Japan Journey
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mb-12">
            Discover a more personal and unforgettable way to travel Japan.
          </p>

          <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-10 py-5 rounded-full text-xl">
            {t.begin}
          </button>

        </div>
      </section>
    </div>
  );
}