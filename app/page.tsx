"use client";

import { useEffect, useState } from "react";

type Language = "EN" | "JP" | "FR" | "ES" | "CN" | "KR";

export default function MyJapanJourneyLandingPage() {
  const [language, setLanguage] = useState<Language>("EN");
  const [loggedIn, setLoggedIn] = useState(false);
  const [paid, setPaid] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState("basic");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    dates: "",
    travelers: "",
    budget: "",
    places: "",
    interests: "",
    food: "",
    transportation: "",
    requests: "",
    japanVisit: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("paid") === "true") {
      setPaid(true);
    }
  }, []);

  const translations = {
    EN: {
      hero: "Your Personalized Japan Journey",

      discover:
        "Custom travel planning designed around your interests, style, and schedule.",

      gallery: "Travel Inspiration",

      plansTitle: "Choose Your Journey",

      basic: "Basic",
      standard: "Standard",
      premium: "Premium",

      basicDesc: "Perfect for trips up to 3 days",
      standardDesc: "Ideal for 4–8 day journeys",
      premiumDesc: "Best for 9–13 day adventures",

      selectPlan: "Select Plan",

      how: "How It Works",

      about: "About",

      aboutText:
        "We create personalized Japan travel plans tailored to your interests and travel style.",

      payment: "Proceed to Payment",

      questionnaire: "Travel Questionnaire",

      name: "Name",
      email: "Email",
      country: "Country",
      dates: "Travel Dates",
      travelers: "Number of Travelers",
      budget: "Budget",
      places: "Places You Want to Visit",
      interests: "Interests",
      food: "Food Preferences",
      transportation: "Transportation Preferences",
      requests: "Special Requests",
      japanVisit: "How many times have you visited Japan?",

      submit: "Submit",
    },

    JP: {
      hero: "あなた専用の日本旅行",

      discover:
        "あなたの興味や旅行スタイルに合わせた完全パーソナライズ旅行プラン。",

      gallery: "旅行ギャラリー",

      plansTitle: "プランを選択",

      basic: "Basic",
      standard: "Standard",
      premium: "Premium",

      basicDesc: "3日以内の旅行向け",
      standardDesc: "4〜8日間の旅行向け",
      premiumDesc: "9〜13日間の旅行向け",

      selectPlan: "このプランを選択",

      how: "ご利用の流れ",

      about: "About",

      aboutText:
        "あなたの旅行スタイルに合わせた日本旅行プランを作成します。",

      payment: "決済へ進む",

      questionnaire: "旅行アンケート",

      name: "名前",
      email: "メール",
      country: "国",
      dates: "旅行日程",
      travelers: "人数",
      budget: "予算",
      places: "行きたい場所",
      interests: "興味",
      food: "食の好み",
      transportation: "交通手段",
      requests: "特別リクエスト",
      japanVisit: "日本は何回目ですか？",

      submit: "送信",
    },

    FR: {
      hero: "Votre voyage personnalisé au Japon",

      discover:
        "Des itinéraires personnalisés adaptés à vos intérêts et votre style de voyage.",

      gallery: "Galerie de voyage",

      plansTitle: "Choisissez votre voyage",

      basic: "Basic",
      standard: "Standard",
      premium: "Premium",

      basicDesc: "Parfait pour les voyages jusqu'à 3 jours",
      standardDesc: "Idéal pour les voyages de 4 à 8 jours",
      premiumDesc: "Parfait pour les voyages de 9 à 13 jours",

      selectPlan: "Choisir ce plan",

      how: "Comment ça marche",

      about: "À propos",

      aboutText:
        "Nous créons des plans de voyage personnalisés pour le Japon.",

      payment: "Procéder au paiement",

      questionnaire: "Questionnaire de voyage",

      name: "Nom",
      email: "Email",
      country: "Pays",
      dates: "Dates de voyage",
      travelers: "Nombre de voyageurs",
      budget: "Budget",
      places: "Lieux à visiter",
      interests: "Centres d'intérêt",
      food: "Préférences alimentaires",
      transportation: "Préférences de transport",
      requests: "Demandes spéciales",
      japanVisit: "Combien de fois avez-vous visité le Japon ?",

      submit: "Envoyer",
    },

    ES: {
      hero: "Tu viaje personalizado por Japón",

      discover:
        "Planes de viaje personalizados según tus intereses y estilo.",

      gallery: "Galería de viajes",

      plansTitle: "Elige tu viaje",

      basic: "Basic",
      standard: "Standard",
      premium: "Premium",

      basicDesc: "Perfecto para viajes de hasta 3 días",
      standardDesc: "Ideal para viajes de 4 a 8 días",
      premiumDesc: "Perfecto para viajes de 9 a 13 días",

      selectPlan: "Seleccionar plan",

      how: "Cómo funciona",

      about: "Acerca de",

      aboutText:
        "Creamos itinerarios personalizados para viajar por Japón.",

      payment: "Proceder al pago",

      questionnaire: "Cuestionario de viaje",

      name: "Nombre",
      email: "Correo electrónico",
      country: "País",
      dates: "Fechas del viaje",
      travelers: "Número de viajeros",
      budget: "Presupuesto",
      places: "Lugares que quieres visitar",
      interests: "Intereses",
      food: "Preferencias gastronómicas",
      transportation: "Preferencias de transporte",
      requests: "Solicitudes especiales",
      japanVisit: "¿Cuántas veces has visitado Japón?",

      submit: "Enviar",
    },

    CN: {
      hero: "您的专属日本之旅",

      discover: "根据您的兴趣和旅行风格定制旅行计划。",

      gallery: "旅行画廊",

      plansTitle: "选择您的计划",

      basic: "Basic",
      standard: "Standard",
      premium: "Premium",

      basicDesc: "适合3天以内旅行",
      standardDesc: "适合4至8天旅行",
      premiumDesc: "适合9至13天旅行",

      selectPlan: "选择此方案",

      how: "使用流程",

      about: "关于我们",

      aboutText: "我们为您打造个性化日本旅行计划。",

      payment: "前往付款",

      questionnaire: "旅行问卷",

      name: "姓名",
      email: "邮箱",
      country: "国家",
      dates: "旅行日期",
      travelers: "人数",
      budget: "预算",
      places: "想去的地方",
      interests: "兴趣",
      food: "饮食偏好",
      transportation: "交通方式",
      requests: "特殊要求",
      japanVisit: "这是您第几次来日本？",

      submit: "提交",
    },

    KR: {
      hero: "당신만의 일본 여행",

      discover:
        "당신의 취향과 여행 스타일에 맞춘 맞춤형 일본 여행.",

      gallery: "여행 갤러리",

      plansTitle: "플랜 선택",

      basic: "Basic",
      standard: "Standard",
      premium: "Premium",

      basicDesc: "3일 이하 여행에 적합",
      standardDesc: "4~8일 여행에 적합",
      premiumDesc: "9~13일 여행에 적합",

      selectPlan: "플랜 선택",

      how: "이용 방법",

      about: "소개",

      aboutText:
        "당신의 여행 스타일에 맞는 일본 여행 플랜을 제작합니다.",

      payment: "결제 진행",

      questionnaire: "여행 설문",

      name: "이름",
      email: "이메일",
      country: "국가",
      dates: "여행 일정",
      travelers: "인원수",
      budget: "예산",
      places: "가고 싶은 장소",
      interests: "관심사",
      food: "음식 취향",
      transportation: "교통수단",
      requests: "특별 요청",
      japanVisit: "일본 방문은 몇 번째인가요?",

      submit: "제출",
    },
  };

  const t = translations[language];

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        amount:
          selectedPlan === "basic"
            ? 5000
            : selectedPlan === "standard"
            ? 7500
            : 10000,
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">

      {/* LANGUAGE SELECTOR */}
      <div className="fixed top-4 right-4 z-50">
        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value as Language)
          }
          className="bg-white border border-black rounded-xl px-4 py-2 shadow-lg"
        >
          <option value="EN">English</option>
          <option value="JP">日本語</option>
          <option value="FR">Français</option>
          <option value="ES">Español</option>
          <option value="CN">中文</option>
          <option value="KR">한국어</option>
        </select>
      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-neutral-100">
        <h1 className="text-6xl font-bold mb-8 max-w-5xl">
          {t.hero}
        </h1>

        <p className="text-xl max-w-3xl text-gray-600">
          {t.discover}
        </p>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t.gallery}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1549693578-d683be217e58"
            className="rounded-3xl h-80 object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1528360983277-13d401cdc186"
            className="rounded-3xl h-80 object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1492571350019-22de08371fd3"
            className="rounded-3xl h-80 object-cover w-full"
          />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t.plansTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* BASIC */}
          <div className="border rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">
              {t.basic}
            </h3>

            <p className="text-gray-600 mb-6">
              {t.basicDesc}
            </p>

            <div className="text-5xl font-bold mb-8">
              $50
            </div>

            <div className="space-y-4">

              <button
                onClick={() => setSelectedPlan("basic")}
                className={`w-full py-4 rounded-xl font-semibold transition ${
                  selectedPlan === "basic"
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {t.selectPlan}
              </button>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:opacity-90 transition"
              >
                {t.payment}
              </button>

            </div>
          </div>

          {/* STANDARD */}
          <div className="border-4 border-black rounded-3xl p-8 shadow-2xl scale-105">
            <h3 className="text-3xl font-bold mb-4">
              {t.standard}
            </h3>

            <p className="text-gray-600 mb-6">
              {t.standardDesc}
            </p>

            <div className="text-5xl font-bold mb-8">
              $75
            </div>

            <div className="space-y-4">

              <button
                onClick={() => setSelectedPlan("standard")}
                className={`w-full py-4 rounded-xl font-semibold transition ${
                  selectedPlan === "standard"
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {t.selectPlan}
              </button>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:opacity-90 transition"
              >
                {t.payment}
              </button>

            </div>
          </div>

          {/* PREMIUM */}
          <div className="border rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">
              {t.premium}
            </h3>

            <p className="text-gray-600 mb-6">
              {t.premiumDesc}
            </p>

            <div className="text-5xl font-bold mb-8">
              $100
            </div>

            <div className="space-y-4">

              <button
                onClick={() => setSelectedPlan("premium")}
                className={`w-full py-4 rounded-xl font-semibold transition ${
                  selectedPlan === "premium"
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {t.selectPlan}
              </button>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:opacity-90 transition"
              >
                {t.payment}
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-neutral-100">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t.how}
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

          {/* STEP 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="text-5xl font-bold mb-6">
              1
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Choose Your Plan
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Select the travel plan that matches the length of your Japan trip.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="text-5xl font-bold mb-6">
              2
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Complete Payment
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Securely pay online using Stripe checkout.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="text-5xl font-bold mb-6">
              3
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Fill Out Your Questionnaire
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Tell us your travel style, interests, schedule, and preferences.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg md:col-span-3">
            <div className="text-5xl font-bold mb-6">
              4
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Receive Your Personalized Japan Journey
            </h3>

            <p className="text-gray-600 leading-relaxed">
              We create a fully personalized Japan itinerary tailored to your travel goals.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}