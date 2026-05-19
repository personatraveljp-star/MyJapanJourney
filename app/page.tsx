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
      rural: string;
      quiet: string;
      introTitle: string;
      introText: string;
      plans: string;
      choose: string;
      pricingText: string;
      process: string;
      how: string;
      step1: string;
      step2: string;
      step3: string;
      about: string;
      aboutTitle: string;
      aboutText1: string;
      aboutText2: string;
      checkout: string;
      paymentTitle: string;
      formTitle: string;
      formSubtitle: string;
      admin: string;
      finalTitle: string;
      finalText: string;
    }
  > = {
    EN: {
      languageName: "English",
      start: "Begin Your Journey",
      view: "View Plans",
      hero: "Personalized Japan travel plans crafted by a local.",
      discover:
        "Discover a quieter, deeper, and more authentic side of Japan.",
      login: "Login",
      dashboard: "Dashboard",
      contact: "Contact Me",
      begin: "Begin Your Journey",
      rural: "Rural Japan",
      quiet: "Quiet Landscapes of Japan",
      introTitle:
        "Every trip is personally crafted by someone who knows Japan.",
      introText:
        "Every itinerary is carefully designed based on your interests and travel style.",
      plans: "Travel Plans",
      choose: "Choose Your Journey",
      pricingText:
        "Pricing depends on trip length and personalization.",
      process: "Process",
      how: "How It Works",
      step1: "Complete Payment",
      step2: "Fill Out Travel Form",
      step3: "Receive Your Custom Plan",
      about: "About",
      aboutTitle: "Travel Japan through the eyes of a local.",
      aboutText1:
        "Discover a more authentic side of Japan beyond tourist spots.",
      aboutText2:
        "Every journey is thoughtfully designed for each traveler.",
      checkout: "Secure Checkout",
      paymentTitle: "Choose Your Plan",
      formTitle: "Travel Questionnaire",
      formSubtitle:
        "This form becomes available only after successful payment.",
      admin: "Private Admin Dashboard",
      finalTitle: "Begin Your Japan Journey",
      finalText:
        "Discover a more thoughtful and unforgettable way to travel Japan.",
    },

    JP: {
      languageName: "日本語",
      start: "旅を始める",
      view: "プランを見る",
      hero: "日本在住者が作る、あなただけの旅プラン。",
      discover:
        "静かで、より深く、本物の日本を体験してください。",
      login: "ログイン",
      dashboard: "管理画面",
      contact: "お問い合わせ",
      begin: "旅を始める",
      rural: "日本の地方",
      quiet: "静かな日本の風景",
      introTitle:
        "日本を知る人が、あなたの旅を一つ一つ丁寧に作ります。",
      introText:
        "旅行スタイルや興味に合わせて、完全オーダーメイドで作成します。",
      plans: "料金プラン",
      choose: "あなたの旅を選ぶ",
      pricingText:
        "料金は旅行日数やカスタマイズ内容によって変わります。",
      process: "流れ",
      how: "ご利用の流れ",
      step1: "決済を完了",
      step2: "旅行フォームを入力",
      step3: "オリジナル旅プラン受け取り",
      about: "概要",
      aboutTitle: "ローカルの視点で日本を旅する。",
      aboutText1:
        "観光地だけではない、本当の日本を体験してください。",
      aboutText2:
        "一人ひとりに合わせて丁寧に旅を設計します。",
      checkout: "安全な決済",
      paymentTitle: "プランを選択",
      formTitle: "旅行アンケート",
      formSubtitle:
        "このフォームは決済完了後に表示されます。",
      admin: "管理者ダッシュボード",
      finalTitle: "あなたの日本旅を始めよう",
      finalText:
        "もっと特別で忘れられない日本旅行を。",
    },

    FR: {
      languageName: "Français",
      start: "Commencer le voyage",
      view: "Voir les plans",
      hero: "Voyages personnalisés au Japon créés par un local.",
      discover:
        "Découvrez un Japon plus authentique et plus profond.",
      login: "Connexion",
      dashboard: "Tableau de bord",
      contact: "Contact",
      begin: "Commencer le voyage",
      rural: "Japon rural",
      quiet: "Paysages paisibles du Japon",
      introTitle:
        "Chaque voyage est créé personnellement par un expert du Japon.",
      introText:
        "Chaque itinéraire est conçu selon vos intérêts.",
      plans: "Plans de voyage",
      choose: "Choisissez votre voyage",
      pricingText:
        "Le prix dépend de la durée et de la personnalisation.",
      process: "Processus",
      how: "Comment ça marche",
      step1: "Effectuer le paiement",
      step2: "Remplir le formulaire",
      step3: "Recevoir votre plan",
      about: "À propos",
      aboutTitle: "Voyagez au Japon comme un local.",
      aboutText1:
        "Découvrez un Japon authentique loin des foules.",
      aboutText2:
        "Chaque voyage est soigneusement conçu.",
      checkout: "Paiement sécurisé",
      paymentTitle: "Choisissez votre plan",
      formTitle: "Questionnaire de voyage",
      formSubtitle:
        "Disponible après paiement.",
      admin: "Tableau de bord privé",
      finalTitle: "Commencez votre voyage au Japon",
      finalText:
        "Découvrez une façon plus mémorable de voyager.",
    },

    ES: {
      languageName: "Español",
      start: "Comienza tu viaje",
      view: "Ver planes",
      hero: "Viajes personalizados por Japón creados por un local.",
      discover:
        "Descubre un Japón más auténtico y profundo.",
      login: "Iniciar sesión",
      dashboard: "Panel",
      contact: "Contáctame",
      begin: "Comienza tu viaje",
      rural: "Japón rural",
      quiet: "Paisajes tranquilos de Japón",
      introTitle:
        "Cada viaje está diseñado personalmente por alguien que conoce Japón.",
      introText:
        "Cada itinerario se crea según tus intereses.",
      plans: "Planes de viaje",
      choose: "Elige tu viaje",
      pricingText:
        "El precio depende de la duración y personalización.",
      process: "Proceso",
      how: "Cómo funciona",
      step1: "Completa el pago",
      step2: "Completa el formulario",
      step3: "Recibe tu plan",
      about: "Acerca de",
      aboutTitle: "Viaja Japón como un local.",
      aboutText1:
        "Descubre el Japón auténtico.",
      aboutText2:
        "Cada viaje es diseñado cuidadosamente.",
      checkout: "Pago seguro",
      paymentTitle: "Elige tu plan",
      formTitle: "Formulario de viaje",
      formSubtitle:
        "Disponible después del pago.",
      admin: "Panel privado",
      finalTitle: "Comienza tu viaje a Japón",
      finalText:
        "Descubre una manera inolvidable de viajar.",
    },

    CN: {
      languageName: "中文",
      start: "开始旅程",
      view: "查看方案",
      hero: "由当地人打造的日本定制旅行。",
      discover:
        "探索更加真实、更深入的日本。",
      login: "登录",
      dashboard: "管理后台",
      contact: "联系我们",
      begin: "开始旅程",
      rural: "日本乡村",
      quiet: "宁静的日本风景",
      introTitle:
        "每一次旅行都由真正了解日本的人亲自设计。",
      introText:
        "根据您的兴趣和旅行风格量身打造。",
      plans: "旅行方案",
      choose: "选择您的旅程",
      pricingText:
        "价格根据旅行长度和定制内容而定。",
      process: "流程",
      how: "使用流程",
      step1: "完成付款",
      step2: "填写旅行问卷",
      step3: "收到专属方案",
      about: "关于",
      aboutTitle: "以当地人的视角旅行日本。",
      aboutText1:
        "发现真正的日本。",
      aboutText2:
        "每次旅程都经过精心设计。",
      checkout: "安全支付",
      paymentTitle: "选择方案",
      formTitle: "旅行问卷",
      formSubtitle:
        "付款成功后才能查看。",
      admin: "管理员后台",
      finalTitle: "开始您的日本之旅",
      finalText:
        "体验更特别、更难忘的日本旅行。",
    },

    KR: {
      languageName: "한국어",
      start: "여행 시작하기",
      view: "플랜 보기",
      hero: "현지인이 만드는 맞춤형 일본 여행.",
      discover:
        "더 깊고 진짜 일본을 경험하세요.",
      login: "로그인",
      dashboard: "대시보드",
      contact: "문의하기",
      begin: "여행 시작하기",
      rural: "일본 시골",
      quiet: "조용한 일본 풍경",
      introTitle:
        "일본을 잘 아는 사람이 직접 여행을 만듭니다.",
      introText:
        "관심사와 여행 스타일에 맞춰 제작합니다.",
      plans: "여행 플랜",
      choose: "여행 선택하기",
      pricingText:
        "가격은 여행 기간과 맞춤 정도에 따라 달라집니다.",
      process: "진행 과정",
      how: "이용 방법",
      step1: "결제 완료",
      step2: "여행 폼 작성",
      step3: "맞춤 여행 수령",
      about: "소개",
      aboutTitle: "현지인의 시선으로 일본 여행.",
      aboutText1:
        "진짜 일본을 발견하세요.",
      aboutText2:
        "모든 여행은 정성껏 설계됩니다.",
      checkout: "안전한 결제",
      paymentTitle: "플랜 선택",
      formTitle: "여행 설문",
      formSubtitle:
        "결제 완료 후 이용 가능합니다.",
      admin: "관리자 대시보드",
      finalTitle: "일본 여행을 시작하세요",
      finalText:
        "더 특별하고 잊지 못할 일본 여행.",
    },
  };

  const t = translations[language];

  const [loggedIn, setLoggedIn] = useState(false);
  const isAdmin = loggedIn;

  const [paymentComplete, setPaymentComplete] = useState(false);

  const [selectedClient, setSelectedClient] =
    useState<ClientRequest | null>(null);

  const requests: ClientRequest[] = [
    {
      name: "Michael Johnson",
      country: "USA",
      plan: "Premium",
      status: "Planning",
      payment: "Paid",
      days: "10 Days",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-zinc-900">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

          <h1 className="text-2xl font-light">
            My Japan Journey
          </h1>

          <div className="flex items-center gap-4">

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as Language)
              }
              className="bg-black/40 border border-white/20 rounded-full px-4 py-2"
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
              className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full"
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

          <h1 className="text-7xl md:text-8xl font-light mb-8">
            My Japan Journey
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-10">
            {t.hero}
            <br />
            {t.discover}
          </p>

          <div className="flex gap-4 flex-wrap">

            <button
              onClick={async () => {
                const response = await fetch("/api/checkout", {
                  method: "POST",
                });

                const data = await response.json();

                window.location.href = data.url;
              }}
              className="bg-[#a63c32] hover:bg-[#8c3229] transition px-8 py-4 rounded-full text-lg shadow-2xl"
            >
              {t.begin}
            </button>

            <button className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-full text-lg">
              {t.view}
            </button>

          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section className="px-6 py-24 bg-[#f3eee5]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              {t.rural}
            </p>

            <h2 className="text-5xl font-light">
              {t.quiet}
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[500px] object-cover shadow-xl"
            />

            <img
              src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[2rem] h-[500px] object-cover shadow-xl"
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

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
            {t.plans}
          </p>

          <h2 className="text-5xl font-light mb-10">
            {t.choose}
          </h2>

          <div className="bg-[#1c1c1c] text-white rounded-[2rem] p-12">

            <h3 className="text-5xl font-light mb-6">
              Starting from $50
            </h3>

            <p className="text-zinc-400 text-lg mb-10">
              {t.pricingText}
            </p>

            <button
              onClick={async () => {
                const response = await fetch("/api/checkout", {
                  method: "POST",
                });

                const data = await response.json();

                window.location.href = data.url;
              }}
              className="bg-[#a63c32] hover:bg-[#8c3229] px-10 py-5 rounded-full text-lg"
            >
              {t.begin}
            </button>

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
              {t.how}
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <div className="text-6xl text-[#a63c32] mb-6">
                01
              </div>

              <h3 className="text-2xl mb-4">
                {t.step1}
              </h3>
            </div>

            <div>
              <div className="text-6xl text-[#a63c32] mb-6">
                02
              </div>

              <h3 className="text-2xl mb-4">
                {t.step2}
              </h3>
            </div>

            <div>
              <div className="text-6xl text-[#a63c32] mb-6">
                03
              </div>

              <h3 className="text-2xl mb-4">
                {t.step3}
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="px-6 py-24 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[2rem] shadow-2xl h-[600px] object-cover"
          />

          <div>

            <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
              {t.about}
            </p>

            <h2 className="text-5xl font-light mb-8">
              {t.aboutTitle}
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
              {t.aboutText1}
            </p>

            <p className="text-zinc-600 text-lg leading-relaxed mb-10">
              {t.aboutText2}
            </p>

            <button className="bg-[#1c1c1c] text-white px-8 py-4 rounded-full">
              {t.contact}
            </button>

          </div>
        </div>
      </section>

      {/* PAYMENT */}

      <section className="px-6 py-24 bg-[#1c1c1c] text-white text-center">

        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.2em] text-sm text-[#d6b9b4] mb-4">
            {t.checkout}
          </p>

          <h2 className="text-6xl font-light mb-8">
            {t.paymentTitle}
          </h2>

          <button
            onClick={async () => {
              const response = await fetch("/api/checkout", {
                method: "POST",
              });

              const data = await response.json();

              window.location.href = data.url;
            }}
            className="bg-[#a63c32] hover:bg-[#8c3229] transition px-10 py-5 rounded-full text-xl shadow-2xl"
          >
            {t.begin}
          </button>

        </div>
      </section>

      {/* FORM AFTER PAYMENT */}

      {(paymentComplete || isAdmin) && (
        <section className="px-6 py-24 bg-white">

          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-5xl font-light mb-6">
                {t.formTitle}
              </h2>

              <p className="text-zinc-500">
                {t.formSubtitle}
              </p>

            </div>

            <form className="space-y-6">

              <input
                placeholder="Name"
                className="w-full border p-4 rounded-2xl"
              />

              <input
                placeholder="Email"
                className="w-full border p-4 rounded-2xl"
              />

              <input
                placeholder="Country"
                className="w-full border p-4 rounded-2xl"
              />

              <input
                placeholder="Travel Dates"
                className="w-full border p-4 rounded-2xl"
              />

              <input
                placeholder="Number of Travelers"
                className="w-full border p-4 rounded-2xl"
              />

              <input
                placeholder="Budget"
                className="w-full border p-4 rounded-2xl"
              />

              <textarea
                placeholder="Places You Want To Visit"
                className="w-full border p-4 rounded-2xl h-32"
              />

              <textarea
                placeholder="Interests"
                className="w-full border p-4 rounded-2xl h-32"
              />

              <textarea
                placeholder="Food Preferences"
                className="w-full border p-4 rounded-2xl h-32"
              />

              <textarea
                placeholder="Transportation Preferences"
                className="w-full border p-4 rounded-2xl h-32"
              />

              <textarea
                placeholder="Special Requests"
                className="w-full border p-4 rounded-2xl h-32"
              />

              <input
                placeholder="How many times have you visited Japan?"
                className="w-full border p-4 rounded-2xl"
              />

              <button className="bg-[#a63c32] text-white px-10 py-5 rounded-full">
                Submit
              </button>

            </form>
          </div>
        </section>
      )}

      {/* ADMIN */}

      {isAdmin && (
        <section className="px-6 py-24 bg-[#111] text-white">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-5xl font-light mb-12">
              {t.admin}
            </h2>

            {requests.map((request, index) => (
              <div
                key={index}
                onClick={() => setSelectedClient(request)}
                className="bg-white/5 p-6 rounded-2xl mb-6 cursor-pointer"
              >
                <div className="flex justify-between">
                  <div>{request.name}</div>
                  <div>{request.plan}</div>
                </div>
              </div>
            ))}

            {selectedClient && (
              <div className="bg-white/5 p-8 rounded-2xl mt-10">

                <p>Name: {selectedClient.name}</p>
                <p>Country: {selectedClient.country}</p>
                <p>Plan: {selectedClient.plan}</p>
                <p>Days: {selectedClient.days}</p>
                <p>Payment: {selectedClient.payment}</p>

              </div>
            )}

          </div>
        </section>
      )}

      {/* FINAL CTA */}

      <section className="px-6 py-28 bg-black text-white text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-6xl font-light mb-8">
            {t.finalTitle}
          </h2>

          <p className="text-zinc-400 text-xl mb-12">
            {t.finalText}
          </p>

          <button
            onClick={async () => {
              const response = await fetch("/api/checkout", {
                method: "POST",
              });

              const data = await response.json();

              window.location.href = data.url;
            }}
            className="bg-[#a63c32] hover:bg-[#8c3229] px-10 py-5 rounded-full text-xl"
          >
            {t.begin}
          </button>

        </div>
      </section>
    </div>
  );
}