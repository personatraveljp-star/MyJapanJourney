"use client";

import { useState } from "react";

type Language = "EN" | "JP" | "FR" | "ES" | "CN" | "KR";

export default function MyJapanJourneyPage() {
  const [language, setLanguage] = useState<Language>("EN");

  const translations = {
    EN: {
      title: "My Japan Journey",
      hero: "Personalized Japan travel plans crafted by a local.",
      discover:
        "Discover a quieter, deeper, and more authentic side of Japan.",
      start: "Begin Your Journey",
      formTitle: "Travel Questionnaire",
      formDesc:
        "After payment, travelers complete this personalized form.",
      name: "Full Name",
      email: "Email Address",
      country: "Country",
      dates: "Travel Dates",
      people: "Number of Travelers",
      budget: "Budget",
      places: "Places You Want To Visit",
      interests: "Interests",
      food: "Food Preferences",
      transport: "Preferred Transportation",
      requests: "Special Requests",
      japan: "How many times have you visited Japan?",
      submit: "Submit Form",
      admin: "Developer Preview",
      payment: "Form unlocks after payment",
    },

    JP: {
      title: "My Japan Journey",
      hero: "日本在住者が作る、あなただけの旅プラン。",
      discover:
        "静かで、より深く、本物の日本を体験してください。",
      start: "旅を始める",
      formTitle: "旅行アンケート",
      formDesc:
        "決済後に旅行者が入力するパーソナルフォームです。",
      name: "名前",
      email: "メールアドレス",
      country: "国",
      dates: "旅行日程",
      people: "人数",
      budget: "予算",
      places: "行きたい場所",
      interests: "興味・体験したいこと",
      food: "食の好み",
      transport: "希望する移動手段",
      requests: "特別リクエスト",
      japan: "日本は何回目ですか？",
      submit: "フォーム送信",
      admin: "開発者プレビュー",
      payment: "フォームは決済後に表示されます",
    },

    FR: {
      title: "My Japan Journey",
      hero: "Voyages personnalisés au Japon créés par un local.",
      discover:
        "Découvrez un Japon plus calme et authentique.",
      start: "Commencer",
      formTitle: "Questionnaire de voyage",
      formDesc:
        "Ce formulaire apparaît après le paiement.",
      name: "Nom",
      email: "Adresse e-mail",
      country: "Pays",
      dates: "Dates du voyage",
      people: "Nombre de voyageurs",
      budget: "Budget",
      places: "Lieux à visiter",
      interests: "Centres d’intérêt",
      food: "Préférences alimentaires",
      transport: "Transport préféré",
      requests: "Demandes spéciales",
      japan: "Combien de fois avez-vous visité le Japon ?",
      submit: "Envoyer",
      admin: "Aperçu développeur",
      payment: "Le formulaire apparaît après paiement",
    },

    ES: {
      title: "My Japan Journey",
      hero: "Viajes personalizados por Japón creados por un local.",
      discover:
        "Descubre un Japón más auténtico y tranquilo.",
      start: "Comenzar",
      formTitle: "Cuestionario de viaje",
      formDesc:
        "Este formulario aparece después del pago.",
      name: "Nombre",
      email: "Correo electrónico",
      country: "País",
      dates: "Fechas del viaje",
      people: "Número de viajeros",
      budget: "Presupuesto",
      places: "Lugares que quieres visitar",
      interests: "Intereses",
      food: "Preferencias de comida",
      transport: "Transporte preferido",
      requests: "Solicitudes especiales",
      japan: "¿Cuántas veces has visitado Japón?",
      submit: "Enviar",
      admin: "Vista desarrollador",
      payment: "El formulario aparece después del pago",
    },

    CN: {
      title: "My Japan Journey",
      hero: "由当地人打造的日本个性化旅行。",
      discover:
        "探索更安静、更真实的日本。",
      start: "开始旅程",
      formTitle: "旅行问卷",
      formDesc:
        "付款后旅客填写此表单。",
      name: "姓名",
      email: "电子邮箱",
      country: "国家",
      dates: "旅行日期",
      people: "人数",
      budget: "预算",
      places: "想去的地方",
      interests: "兴趣",
      food: "饮食偏好",
      transport: "交通方式",
      requests: "特殊要求",
      japan: "这是第几次来日本？",
      submit: "提交",
      admin: "开发者预览",
      payment: "付款后才能看到表单",
    },

    KR: {
      title: "My Japan Journey",
      hero: "현지인이 만드는 맞춤형 일본 여행.",
      discover:
        "더 조용하고 진짜 일본을 경험하세요.",
      start: "여행 시작",
      formTitle: "여행 설문",
      formDesc:
        "결제 후 여행자가 작성하는 폼입니다.",
      name: "이름",
      email: "이메일",
      country: "국가",
      dates: "여행 일정",
      people: "인원 수",
      budget: "예산",
      places: "가고 싶은 장소",
      interests: "관심사",
      food: "음식 취향",
      transport: "이동 수단",
      requests: "특별 요청",
      japan: "일본은 몇 번째 방문인가요?",
      submit: "제출",
      admin: "개발자 미리보기",
      payment: "결제 후 폼이 표시됩니다",
    },
  };

  const t = translations[language];

  const languages: Language[] = ["EN", "JP", "FR", "ES", "CN", "KR"];

  const [isDeveloperMode] = useState(true);

  return (
    <main className="min-h-screen bg-[#f8f6f1] text-zinc-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-white text-2xl font-light">
            {t.title}
          </h1>

          {/* NEW LANGUAGE SELECT */}
          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as Language)
              }
              className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="text-black">
                  {lang}
                </option>
              ))}
            </select>

            <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-5 py-2 rounded-full text-white">
              {t.start}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl text-white">
          <p className="uppercase tracking-[0.3em] text-sm mb-6">
            Personalized Japan Travel
          </p>

          <h1 className="text-6xl md:text-8xl font-light mb-8">
            My Japan Journey
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed mb-10 text-zinc-200">
            {t.hero}
            <br />
            {t.discover}
          </p>

          <button className="bg-[#a63c32] hover:bg-[#8c3229] transition px-10 py-5 rounded-full text-xl shadow-2xl">
            {t.start}
          </button>
        </div>
      </section>

      {/* PAYMENT LOCK */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1c1c1c] text-white rounded-[2rem] p-10 shadow-2xl text-center">
            <p className="uppercase tracking-[0.2em] text-sm text-zinc-400 mb-4">
              Secure Access
            </p>

            <h2 className="text-4xl font-light mb-6">
              {t.payment}
            </h2>

            <p className="text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              Travelers complete their custom travel questionnaire
              only after successful Stripe payment.
            </p>
          </div>
        </div>
      </section>

      {/* DEVELOPER PREVIEW */}
      {isDeveloperMode && (
        <section className="px-6 py-24 bg-[#efe9de]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <p className="uppercase tracking-[0.2em] text-sm text-[#a63c32] mb-4">
                {t.admin}
              </p>

              <h2 className="text-5xl font-light mb-6">
                {t.formTitle}
              </h2>

              <p className="text-zinc-600 text-lg">
                {t.formDesc}
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-xl space-y-8">
              <div>
                <label className="block mb-2 font-medium">
                  {t.name}
                </label>

                <input
                  type="text"
                  placeholder={t.name}
                  className="w-full border border-zinc-300 rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.email}
                </label>

                <input
                  type="email"
                  placeholder={t.email}
                  className="w-full border border-zinc-300 rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.country}
                </label>

                <input
                  type="text"
                  placeholder={t.country}
                  className="w-full border border-zinc-300 rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.dates}
                </label>

                <input
                  type="text"
                  placeholder="2026/07/10 - 2026/07/20"
                  className="w-full border border-zinc-300 rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.people}
                </label>

                <input
                  type="number"
                  placeholder="2"
                  className="w-full border border-zinc-300 rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.budget}
                </label>

                <input
                  type="text"
                  placeholder="$2000"
                  className="w-full border border-zinc-300 rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.places}
                </label>

                <textarea
                  placeholder="Tokyo, Kyoto, countryside..."
                  className="w-full border border-zinc-300 rounded-xl p-4 h-32"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.interests}
                </label>

                <textarea
                  placeholder="Nature, culture, local food..."
                  className="w-full border border-zinc-300 rounded-xl p-4 h-32"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.food}
                </label>

                <textarea
                  placeholder="Sushi, ramen, wagyu..."
                  className="w-full border border-zinc-300 rounded-xl p-4 h-32"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.transport}
                </label>

                <select className="w-full border border-zinc-300 rounded-xl p-4">
                  <option>Train</option>
                  <option>Car</option>
                  <option>Bus</option>
                  <option>Mixed</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.japan}
                </label>

                <select className="w-full border border-zinc-300 rounded-xl p-4">
                  <option>First Time</option>
                  <option>2-3 Times</option>
                  <option>Many Times</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  {t.requests}
                </label>

                <textarea
                  placeholder="Anything special you'd like..."
                  className="w-full border border-zinc-300 rounded-xl p-4 h-40"
                />
              </div>

              <button className="w-full bg-[#a63c32] hover:bg-[#8c3229] transition text-white py-5 rounded-full text-lg shadow-xl">
                {t.submit}
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}