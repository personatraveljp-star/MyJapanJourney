"use client";

import { useState } from "react";

type Language = "EN" | "JP" | "FR" | "ES" | "CN" | "KR";

type RequestType = {
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

  // 開発者確認用
  const [developerPreview, setDeveloperPreview] = useState(true);

  // 決済完了後に表示
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const [selectedClient, setSelectedClient] =
    useState<RequestType | null>(null);

  const [notes, setNotes] = useState(
    "Focus on local culture and hidden areas."
  );

  const translations: Record<
    Language,
    {
      languageName: string;
      start: string;
      view: string;
      hero: string;
      discover: string;
      login: string;
      dashboard: string;
      contact: string;
      begin: string;
      chooseLanguage: string;
      paymentTitle: string;
      paymentDesc: string;
      formTitle: string;
      formDesc: string;
      name: string;
      country: string;
      travelStyle: string;
      interests: string;
      food: string;
      anime: string;
      nature: string;
      submit: string;
      completePayment: string;
      planning: string;
    }
  > = {
    EN: {
      languageName: "English",
      start: "Start Your Journey",
      view: "View Plans",
      hero:
        "Personalized Japan travel plans crafted by a local.",
      discover:
        "Discover a quieter, deeper, and more authentic side of Japan.",
      login: "Login",
      dashboard: "Dashboard",
      contact: "Contact Me",
      begin: "Begin Your Journey",
      chooseLanguage: "Language",
      paymentTitle: "Secure Checkout",
      paymentDesc:
        "Complete payment to unlock your personalized planning form.",
      formTitle: "Travel Planning Form",
      formDesc:
        "Tell us about your dream Japan experience.",
      name: "Your Name",
      country: "Country",
      travelStyle: "Travel Style",
      interests: "Interests",
      food: "Food & Local Cuisine",
      anime: "Anime / Pop Culture",
      nature: "Nature & Countryside",
      submit: "Submit Request",
      completePayment: "Complete Payment",
      planning: "Personalized Planning",
    },

    JP: {
      languageName: "日本語",
      start: "旅を始める",
      view: "プランを見る",
      hero:
        "日本在住者が作る、あなただけの旅プラン。",
      discover:
        "より静かで、本物の日本を体験してください。",
      login: "ログイン",
      dashboard: "ダッシュボード",
      contact: "お問い合わせ",
      begin: "旅を始める",
      chooseLanguage: "言語",
      paymentTitle: "安全な決済",
      paymentDesc:
        "決済完了後、旅行プランフォームが開放されます。",
      formTitle: "旅行プランフォーム",
      formDesc:
        "あなたの理想の日本旅行について教えてください。",
      name: "お名前",
      country: "国",
      travelStyle: "旅行スタイル",
      interests: "興味・関心",
      food: "食・ローカル体験",
      anime: "アニメ・ポップカルチャー",
      nature: "自然・田舎",
      submit: "送信する",
      completePayment: "決済を完了する",
      planning: "パーソナルプランニング",
    },

    FR: {
      languageName: "Français",
      start: "Commencer le voyage",
      view: "Voir les plans",
      hero:
        "Des voyages personnalisés au Japon créés par un local.",
      discover:
        "Découvrez un Japon plus authentique et paisible.",
      login: "Connexion",
      dashboard: "Tableau de bord",
      contact: "Contact",
      begin: "Commencer",
      chooseLanguage: "Langue",
      paymentTitle: "Paiement sécurisé",
      paymentDesc:
        "Complétez le paiement pour débloquer le formulaire.",
      formTitle: "Formulaire de voyage",
      formDesc:
        "Parlez-nous du Japon que vous rêvez de découvrir.",
      name: "Nom",
      country: "Pays",
      travelStyle: "Style de voyage",
      interests: "Centres d’intérêt",
      food: "Cuisine locale",
      anime: "Anime / Culture pop",
      nature: "Nature & campagne",
      submit: "Envoyer",
      completePayment: "Payer",
      planning: "Planification personnalisée",
    },

    ES: {
      languageName: "Español",
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
      chooseLanguage: "Idioma",
      paymentTitle: "Pago seguro",
      paymentDesc:
        "Completa el pago para desbloquear el formulario.",
      formTitle: "Formulario de viaje",
      formDesc:
        "Cuéntanos tu experiencia ideal en Japón.",
      name: "Nombre",
      country: "País",
      travelStyle: "Estilo de viaje",
      interests: "Intereses",
      food: "Comida local",
      anime: "Anime / Cultura pop",
      nature: "Naturaleza",
      submit: "Enviar",
      completePayment: "Completar pago",
      planning: "Planificación personalizada",
    },

    CN: {
      languageName: "中文",
      start: "开始旅程",
      view: "查看方案",
      hero:
        "由当地人打造的日本个性化旅行。",
      discover:
        "探索更安静、更真实的日本。",
      login: "登录",
      dashboard: "控制台",
      contact: "联系我们",
      begin: "开始旅程",
      chooseLanguage: "语言",
      paymentTitle: "安全支付",
      paymentDesc:
        "完成付款后即可查看旅行问卷。",
      formTitle: "旅行问卷",
      formDesc:
        "告诉我们你理想中的日本旅行。",
      name: "姓名",
      country: "国家",
      travelStyle: "旅行风格",
      interests: "兴趣",
      food: "美食体验",
      anime: "动漫 / 流行文化",
      nature: "自然与乡村",
      submit: "提交",
      completePayment: "完成支付",
      planning: "个性化规划",
    },

    KR: {
      languageName: "한국어",
      start: "여행 시작하기",
      view: "플랜 보기",
      hero:
        "현지인이 만드는 맞춤형 일본 여행.",
      discover:
        "더 조용하고 진짜 일본을 경험하세요.",
      login: "로그인",
      dashboard: "대시보드",
      contact: "문의하기",
      begin: "여행 시작",
      chooseLanguage: "언어",
      paymentTitle: "안전한 결제",
      paymentDesc:
        "결제를 완료하면 여행 설문이 열립니다.",
      formTitle: "여행 설문",
      formDesc:
        "당신이 원하는 일본 여행을 알려주세요.",
      name: "이름",
      country: "국가",
      travelStyle: "여행 스타일",
      interests: "관심사",
      food: "음식 & 로컬 경험",
      anime: "애니메이션 / 팝컬처",
      nature: "자연 & 시골",
      submit: "제출하기",
      completePayment: "결제 완료",
      planning: "맞춤 여행 플래닝",
    },
  };

  const t = translations[language];

  const requests: RequestType[] = [
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

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-zinc-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

          <h1 className="text-2xl font-light tracking-wide">
            My Japan Journey
          </h1>

          <div className="flex items-center gap-4">

            {/* LANGUAGE SELECT */}
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as Language)
              }
              className="bg-black/30 border border-white/20 px-4 py-2 rounded-full text-sm"
            >
              <option value="EN">🇺🇸 English</option>
              <option value="JP">🇯🇵 日本語</option>
              <option value="FR">🇫🇷 Français</option>
              <option value="ES">🇪🇸 Español</option>
              <option value="CN">🇨🇳 中文</option>
              <option value="KR">🇰🇷 한국어</option>
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
        className="relative min-h-screen flex items-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto text-white">
          <p className="uppercase tracking-[0.3em] text-sm mb-6">
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
            <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-8 py-4 rounded-full text-lg">
              {t.start}
            </button>

            <button className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-full text-lg">
              {t.view}
            </button>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
            {t.paymentTitle}
          </p>

          <h2 className="text-5xl font-light mb-6">
            {t.planning}
          </h2>

          <p className="text-zinc-600 text-lg mb-10">
            {t.paymentDesc}
          </p>

          {!paymentCompleted ? (
            <button
              onClick={() => setPaymentCompleted(true)}
              className="bg-[#a63c32] hover:bg-[#8c3229] text-white px-10 py-5 rounded-full text-lg"
            >
              {t.completePayment}
            </button>
          ) : (
            <div className="bg-green-100 text-green-700 px-6 py-4 rounded-2xl inline-block">
              Payment Completed ✓
            </div>
          )}
        </div>
      </section>

      {/* FORM */}
      {(paymentCompleted || developerPreview) && (
        <section className="px-6 py-24 bg-[#f3eee5]">
          <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl">

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-2">
                  {t.formTitle}
                </p>

                <h2 className="text-4xl font-light">
                  {t.formDesc}
                </h2>
              </div>

              {developerPreview && (
                <div className="bg-black text-white px-4 py-2 rounded-full text-xs">
                  Developer Preview
                </div>
              )}
            </div>

            <div className="space-y-6">

              <input
                type="text"
                placeholder={t.name}
                className="w-full border border-zinc-300 rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                placeholder={t.country}
                className="w-full border border-zinc-300 rounded-2xl px-5 py-4"
              />

              <textarea
                placeholder={t.travelStyle}
                className="w-full border border-zinc-300 rounded-2xl px-5 py-4 h-32"
              />

              <textarea
                placeholder={t.interests}
                className="w-full border border-zinc-300 rounded-2xl px-5 py-4 h-32"
              />

              <div className="space-y-4">

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  {t.food}
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  {t.anime}
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />
                  {t.nature}
                </label>
              </div>

              <button className="w-full bg-[#a63c32] hover:bg-[#8c3229] text-white py-5 rounded-2xl text-lg transition">
                {t.submit}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ADMIN */}
      {loggedIn && (
        <section className="px-6 py-24 bg-[#1c1c1c] text-white">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-5xl font-light mb-12">
              Admin Dashboard
            </h2>

            <div className="bg-[#262626] rounded-[2rem] p-8">

              {requests.map((request, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedClient(request)}
                  className="grid grid-cols-5 gap-4 border-b border-white/10 py-5 cursor-pointer hover:bg-white/5 rounded-xl px-4"
                >
                  <div>{request.name}</div>
                  <div>{request.country}</div>
                  <div>{request.plan}</div>
                  <div>{request.status}</div>
                  <div>{request.payment}</div>
                </div>
              ))}
            </div>

            {selectedClient && (
              <div className="mt-10 bg-[#262626] rounded-[2rem] p-8">
                <h3 className="text-3xl font-light mb-6">
                  Client Details
                </h3>

                <div className="space-y-4 text-zinc-300">
                  <p>Name: {selectedClient.name}</p>
                  <p>Country: {selectedClient.country}</p>
                  <p>Plan: {selectedClient.plan}</p>
                  <p>Trip Length: {selectedClient.days}</p>
                  <p>Payment: {selectedClient.payment}</p>
                </div>

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full mt-8 h-40 bg-[#1c1c1c] border border-white/10 rounded-2xl p-5"
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