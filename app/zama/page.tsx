import React from 'react';
import type { Metadata } from 'next';
import { Noto_Serif_JP } from 'next/font/google';
import {
  Phone, MessageCircle, MapPin, Clock, HeartHandshake,
  CheckCircle2, BadgeJapaneseYen, ClipboardList, Truck,
  HelpCircle, Building2, AlertTriangle, ThumbsUp,
  Gift, CheckSquare, ArrowRight, ArrowDown, Timer, Star, ShieldCheck, Camera,
  XCircle, CheckCircle, MessageSquareQuote, Info, ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '座間市の不用品回収・粗大ごみ処分｜大和市福田の地元業者が代表直接対応',
  description: '大和市福田から座間市へ即日対応。不用品回収・粗大ゴミ処分を代表が直接対応。下請けなし、見積もり無料、追加料金なし。',
  formatDetection: { telephone: false },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "まごころ整理センター",
    "image": "https://www.magokoro-yamato.com/logo.webp",
    "description": "大和市福田の地元業者。代表・粟野が直接対応する不用品回収・遺品整理サービス。下請けなし、見積もり無料、追加料金なし。",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "大和市",
      "addressRegion": "神奈川県",
      "postalCode": "242-0024",
      "streetAddress": "福田５丁目4-11"
    },
    "telephone": "0120-437-599",
    "priceRange": "¥14,800~",
    "areaServed": ["座間市", "大和市"]
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] font-sans pb-[100px] md:pb-24 text-[#2B2B2B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 上部帯 */}
      <div className="bg-[#2F7D3F] text-white text-[12px] sm:text-[13px] md:text-sm font-bold py-1.5 px-2 text-center flex flex-wrap justify-center items-center gap-x-1.5 gap-y-0.5 md:gap-x-4 md:gap-y-0 shadow-sm z-50 relative leading-snug">
        <span className="shrink-0">座間市対応</span><span className="opacity-50 shrink-0">|</span>
        <span className="shrink-0">見積無料</span><span className="opacity-50 shrink-0">|</span>
        <span className="shrink-0">年中無休</span><span className="opacity-50 shrink-0">|</span>
        <span className="shrink-0">女性スタッフ同行可</span>
      </div>

      {/* ヘッダー */}
      <header className="bg-white py-1 md:py-1.5 px-3 md:px-6 sticky top-0 z-40 shadow-sm border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-[12px] md:text-xs font-black text-[#B93838] border-2 border-[#B93838] bg-[#FFF1E6] px-1.5 py-0.5 rounded shadow-sm">大和市福田の地元企業</div>
          <Image src="/logo.webp" alt="まごころ整理センター" width={480} height={122} className="h-6 md:h-10 w-auto object-contain mt-1 origin-left scale-140" />
        </div>
        <div className="text-[12px] md:text-sm bg-green-50 text-green-700 border border-green-600 px-2.5 py-0.5 md:py-1 rounded-full font-bold shadow-sm flex items-center gap-1">
          <Timer className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
          24時間受付
        </div>
      </header>

      {/* ファーストビュー */}
      <section className="relative pb-10 md:pb-16 pt-8 md:pt-12 flex items-center flex-col justify-center overflow-hidden bg-[#FAF8F3]">

        <div className="relative z-10 max-w-4xl mx-auto px-3 w-full text-center flex flex-col items-center">

          {/* サブコピーバッジ */}
          <a href="tel:0120437599" className="mb-4 inline-block bg-[#FFF1E6] text-[#B93838] font-bold text-[13px] sm:text-[16px] md:text-[20px] px-4 sm:px-5 py-2 rounded-full border-t border-b border-[#B93838]/30 shadow-sm text-center leading-snug cursor-pointer active:scale-[0.98] transition-transform touch-manipulation">
            <span className="block sm:inline">大和市福田の地元企業だからできる！</span><span className="block sm:inline">座間市もすぐお伺い！追加料金なし！</span>
          </a>

          {/* メインH1 */}
          <h1 className="w-full px-1 mb-3 text-center">
            <span className={`block text-[#2B2B2B] text-[clamp(1.5rem,6vw,2.75rem)] md:text-5xl font-bold leading-[1.3] tracking-[-0.02em] ${notoSerifJP.className}`}>
              座間市の不用品回収・<br className="md:hidden" />粗大ごみ処分
            </span>
          </h1>
          <h2 className={`text-[#2B2B2B] text-[15px] sm:text-lg md:text-2xl font-medium leading-relaxed mb-6 md:mb-8 px-2 ${notoSerifJP.className}`}>
            ご家族で困った「重いもの・大きなもの」、丁寧に運び出します
          </h2>

          {/* 料金エリア */}
          <div className="w-[95%] max-w-xl mx-auto mb-4 flex flex-col sm:flex-row items-stretch justify-center gap-3 md:gap-4">
            {/* 軽トラパック（主） */}
            <a href="tel:0120437599" className="flex-1 bg-white rounded-xl border border-[#E8DFD0] p-4 md:p-6 shadow-md text-center flex flex-col justify-center cursor-pointer active:scale-[0.98] hover:shadow-lg transition-all touch-manipulation">
              <p className="text-[#666666] text-[12px] md:text-sm font-bold mb-1">軽トラパック</p>
              <p className="text-[#2B2B2B] text-[36px] sm:text-[38px] md:text-[42px] font-bold tracking-tight whitespace-nowrap">
                14,800<span className="text-[15px] md:text-lg font-bold">円〜</span>
              </p>
              <p className="text-[#666666] text-[12px] md:text-xs font-medium mt-0.5">（税込）</p>
              <p className="text-[#666666] text-[12px] md:text-sm font-medium mt-2">お部屋まるごと、まとめてお片付け</p>
            </a>
            {/* 単品回収バッジ（副） */}
            <a href="tel:0120437599" className="sm:w-[40%] bg-[#FF8C42] text-white rounded-xl px-3 py-3 md:px-4 md:py-3 text-center shadow-md flex flex-col justify-center cursor-pointer active:scale-[0.98] hover:shadow-lg transition-all touch-manipulation">
              <p className="font-bold text-[13px] md:text-base leading-snug whitespace-nowrap">冷蔵庫1点から喜んでお伺い！</p>
              <p className="font-bold text-[16px] md:text-lg mt-0.5 whitespace-nowrap">単品回収 3,000円〜</p>
              <p className="text-[12px] md:text-xs mt-1 opacity-90 font-medium">テレビ・洗濯機・自転車など<br/>お気軽にご相談ください</p>
            </a>
          </div>

          {/* 安心3要素 */}
          <div className="w-[95%] max-w-xl mx-auto mb-8 bg-white rounded-xl border border-[#E8E0D4] p-4 md:p-6 shadow-sm">
            <ul className="space-y-3 md:space-y-4 text-[#2B2B2B] font-bold text-[16px] md:text-[20px] text-left">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="text-[#2F7D3F] w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5" />
                <span className="leading-snug">分別・袋詰めは一切不要！そのままの状態でOK</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="text-[#2F7D3F] w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5" />
                <span className="leading-snug">重い家具・家電も、スタッフがお部屋から運び出します</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="text-[#2F7D3F] w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5" />
                <span className="leading-snug">女性スタッフ同行可・代表が直接お伺いします</span>
              </li>
            </ul>
          </div>

          {/* 代表ミニプロフィール */}
          <div className="w-[95%] max-w-xl mx-auto mb-6 flex items-center gap-3 bg-white rounded-xl border border-[#E8E0D4] px-4 py-3 shadow-sm">
            <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden rounded-full border-2 border-[#2F7D3F]">
              <Image src="/IMG_1828.webp" alt="代表 粟野匠音" fill sizes="64px" className="object-cover" />
            </div>
            <div className="text-left">
              <p className="text-[12px] md:text-xs text-[#666666] font-bold">代表</p>
              <p className="text-[16px] md:text-lg font-extrabold text-[#2B2B2B] tracking-wide">粟野 匠音</p>
              <p className="text-[12px] md:text-sm text-[#B93838] font-bold leading-snug">私が直接お電話に出ます</p>
            </div>
          </div>

          {/* 電話CTA */}
          <div className="w-full max-w-xl flex flex-col gap-2 md:gap-3">
            <p className="text-center text-[#2B2B2B] text-[14px] md:text-base font-bold">📞 まずはお電話ください</p>
            <a href="tel:0120437599" className="w-full min-h-[60px] bg-[#B93838] text-white rounded-xl py-4 md:py-5 shadow-lg flex items-center justify-center gap-3 border border-[#9C2F2F] touch-manipulation">
              <Phone className="w-7 h-7 md:w-9 md:h-9 shrink-0" aria-hidden />
              <span className="text-left leading-tight">
                <span className="block text-[12px] md:text-sm font-bold opacity-90 mb-0.5">通話無料・年中無休・受付中</span>
                <span className="block text-[28px] sm:text-[32px] md:text-[40px] font-black tracking-tight leading-none">0120-437-599</span>
              </span>
            </a>
            <p className="text-[#666666] text-[12px] md:text-sm font-medium text-center mt-1">
              スマホ操作が苦手でも、お電話一本で完結します
            </p>
          </div>

        </div>
      </section>

      {/* 対応エリアと実績 */}
      <section className="py-8 md:py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-[20px] md:text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
              座間市全域、<span className="font-extrabold">丁寧にお伺い</span>します
           </h2>

           <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-6 mb-6">
             <div className="flex items-center justify-center gap-2 text-red-600 font-bold mb-3">
               <MapPin className="w-5 h-5 md:w-6 md:h-6" />
               <span className="text-[15px] md:text-xl">座間市の主な対応エリア</span>
             </div>
             <p className="text-gray-700 font-medium text-[13px] md:text-base leading-relaxed text-balance">
               座間駅周辺・相武台前・小松原・入谷・栗原<br className="hidden md:block"/>
               相模が丘・ひばりが丘・緑ケ丘・広野台・立野台 など
             </p>
           </div>

           <div className="flex justify-center">
              <div className="bg-white border-2 border-green-500 rounded-lg py-3 px-6 shadow-sm flex items-center justify-center gap-3">
                 <ClipboardList className="w-8 h-8 text-green-600" />
                 <div className="text-left">
                   <div className="text-[12px] md:text-sm text-gray-500 font-bold">座間市での対応件数</div>
                   <div className="text-[18px] md:text-2xl font-black text-gray-900">年間<span className="text-red-600 text-[24px] md:text-3xl mx-1">300</span>件</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 悩み共感 */}
      <section className="py-10 md:py-16 px-4 bg-slate-800 text-white relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1.5 shadow-lg border border-gray-200 z-10">
          <ArrowDown className="w-5 h-5 text-green-600 animate-bounce" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 pt-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <p className="text-yellow-300 font-bold text-[12px] md:text-base mb-2 text-center md:text-left">座間市で不用品回収・粗大ゴミ処分をお考えの方へ</p>
            <h2 className="text-[20px] md:text-3xl font-extrabold mb-5 text-yellow-400 text-center md:text-left leading-tight">
              座間市での不用品処分で<br className="md:hidden"/>こんなお悩みありませんか？
            </h2>
            <ul className="space-y-3.5 md:space-y-5 text-[14px] md:text-lg font-medium bg-slate-700/50 p-4 md:p-0 rounded-xl md:bg-transparent">
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug"><strong className="text-yellow-200">座間市の粗大ごみ収集</strong>は予約がいっぱいで、数週間も待てない…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">他市から来る業者の見積もりを見たら、<strong className="text-yellow-200">出張費が高すぎて</strong>驚いた…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">ベッドやタンスなど、<strong className="text-yellow-200">自分たちだけでは</strong>家の外まで運び出せない…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">業者を家に呼ぶのは<strong className="text-yellow-200">どんな人が来るか不安</strong>で怖い…</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <Image
              src="/IMG_2153.png"
              alt="片付けの悩み"
              width={1477}
              height={1108}
              className="w-full h-44 md:h-72 object-cover rounded-xl md:rounded-2xl shadow-xl border-2 md:border-4 border-slate-600"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-16 text-center max-w-4xl mx-auto w-full">
          <p className="text-xl md:text-3xl font-black mb-2 text-white opacity-80">↓↓↓</p>
          <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-4 px-3 md:py-6 md:px-8 rounded-xl border border-slate-600 shadow-xl w-[98%] mx-auto">
            <p className="text-[17px] md:text-3xl font-extrabold text-white leading-snug">
              分別から運び出しまで、<br className="md:hidden" />
              地元企業が<span className="bg-green-700 text-white px-2.5 py-0.5 md:py-1 rounded-md mx-1 inline-block mt-1.5 md:mt-0 text-[20px] md:text-4xl shadow-md border border-green-600 transform scale-105">丁寧に、誠実に対応</span> します
            </p>
            <p className="text-[12px] md:text-sm text-gray-300 mt-3 md:mt-6 font-medium text-balance">※分別から運び出しまで全て当店スタッフが行います。お客様は指を差すだけでOKです。</p>
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-12 md:py-20 px-4 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-red-600 font-extrabold text-[12px] md:text-lg bg-white py-2 px-4 rounded-full shadow-sm border border-red-200 inline-block mb-3">
              ★座間市での相見積もり大歓迎！買取相殺でさらに激安に★
            </p>
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4 leading-tight">
              座間市の不用品回収<br/><span className="whitespace-nowrap">料金プラン</span><br className="md:hidden"/><span className="text-red-600 border-b-2 border-red-300">追加料金は一切いただきません。</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 mb-10">
            {/* 軽トラパック */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-green-500 flex flex-col relative">
              <div className="bg-gray-700 text-white text-center py-2.5 font-bold text-xs md:text-sm tracking-widest">ちょっとしたお片付け</div>
              <div className="p-5 md:p-8 text-center flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">軽トラ積み放題</h3>
                <div className="mt-3 mb-1 flex flex-col items-center gap-2">
                  <span className="text-red-600 text-3xl md:text-5xl font-black">14,800<span className="text-base md:text-2xl font-bold">円〜</span></span>
                  <span className="text-gray-500 text-xs md:text-sm font-medium">（税込）</span>
                </div>
                <p className="text-[12px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：1R 〜 1K</p>
                <ul className="text-xs md:text-base text-gray-600 text-left space-y-2 font-medium">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 押し入れ〜1部屋程度の不用品に</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 単身のお引越し・片付けに</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-[3px] border-green-500 relative flex flex-col z-10 transform md:scale-105">
              <div className="bg-gradient-to-b from-green-500 to-green-600 text-white text-center py-3 md:py-4 font-bold text-sm md:text-lg tracking-widest">ごっそりお片付け</div>
              <div className="p-5 md:p-8 text-center flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">1.5t平積みパック</h3>
                <div className="text-3xl md:text-5xl font-extrabold text-red-600 mb-1 mt-3 drop-shadow-sm">29,800<span className="text-base font-bold text-gray-900 ml-0.5">円〜</span></div>
                <p className="text-[12px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：1DK 〜 1LDK</p>
                <ul className="text-xs md:text-base text-gray-600 text-left space-y-2 font-medium">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 大型家具・家電が複数ある場合に</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 2名分の荷物・遺品整理に</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 flex flex-col relative">
              <div className="bg-gray-700 text-white text-center py-2.5 font-bold text-xs md:text-sm tracking-widest">家まるごと・ゴミ屋敷</div>
              <div className="p-5 md:p-8 text-center flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">2tトラックパック</h3>
                <div className="text-3xl md:text-5xl font-extrabold text-red-600 mb-1 mt-3 drop-shadow-sm">49,800<span className="text-base font-bold text-gray-900 ml-0.5">円〜</span></div>
                <p className="text-[12px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：2LDK 〜 3LDK</p>
                <ul className="text-xs md:text-base text-gray-600 text-left space-y-2 font-medium">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 一軒家まるごとの遺品整理に</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 大量の不用品・ゴミ屋敷対応に</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-xl p-5 md:p-8 shadow-md relative mt-8">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white font-bold px-4 py-1 rounded-full text-[12px] md:text-sm shadow-sm whitespace-nowrap">
              安心のコミコミ価格！
            </div>

            <div className="mt-3">
              <p className="font-extrabold text-gray-900 mb-3 text-[14px] md:text-lg">当店の料金は、<span className="text-red-600 border-b-2 border-red-200">以下の作業がすべて無料（込み）</span>です！</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2 text-[12px] md:text-sm text-green-800 font-bold mb-3">
                <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>作業費</span>
                <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>出張費（座間市内）</span>
                <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>車両費</span>
                <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>スタッフ費</span>
                <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>簡易清掃</span>
              </div>
              <p className="text-[12px] md:text-xs text-gray-600 font-medium bg-gray-50 p-2 rounded border border-gray-200">※階段料金・エアコン取外しなども、事前の見積もり金額にすべて含めてご提示し、後からの追加費用は絶対にいただきません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 遺品整理サービス専用セクション */}
      <section className="py-12 md:py-20 px-4 bg-[#FDF8F6] border-t-4 border-[#9B1C1C]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#9B1C1C] text-white text-[12px] md:text-sm font-bold px-4 py-1.5 rounded-full mb-3 tracking-wide">遺品整理 専門サービス</span>
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              座間市の遺品整理は<br className="md:hidden"/>私たちにお任せください
            </h2>
            <p className="text-[13px] md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              大切なご家族を亡くされたご遺族様の心に寄り添い、故人様の想いを大切にしながら丁寧に遺品整理を行います。大和市福田の地元業者として、座間市にも迅速かつ誠実に対応いたします。
            </p>
          </div>

          {/* 遺品整理の流れ */}
          <div className="mb-10 md:mb-14">
            <h3 className="text-[18px] md:text-2xl font-extrabold text-gray-900 text-center mb-6 md:mb-8">遺品整理の流れ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="bg-white rounded-xl p-3 md:p-5 border border-[#E8D5D5] shadow-sm text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9B1C1C] text-white font-black text-base md:text-lg flex items-center justify-center rounded-full mx-auto mb-3">①</div>
                <h4 className="font-extrabold text-[12px] md:text-sm text-gray-900 mb-1.5 leading-tight">ご相談・無料お見積り</h4>
                <p className="text-[12px] md:text-xs text-gray-600 leading-relaxed">お電話またはLINEで気軽にご相談ください。概算をご提示します。</p>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-5 border border-[#E8D5D5] shadow-sm text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9B1C1C] text-white font-black text-base md:text-lg flex items-center justify-center rounded-full mx-auto mb-3">②</div>
                <h4 className="font-extrabold text-[12px] md:text-sm text-gray-900 mb-1.5 leading-tight">現地調査・お打ち合わせ</h4>
                <p className="text-[12px] md:text-xs text-gray-600 leading-relaxed">ご自宅にお伺いし、ご遺族様のご要望をしっかり伺います。</p>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-5 border border-[#E8D5D5] shadow-sm text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9B1C1C] text-white font-black text-base md:text-lg flex items-center justify-center rounded-full mx-auto mb-3">③</div>
                <h4 className="font-extrabold text-[12px] md:text-sm text-gray-900 mb-1.5 leading-tight">丁寧な仕分け作業</h4>
                <p className="text-[12px] md:text-xs text-gray-600 leading-relaxed">貴重品・思い出の品を大切に仕分けながら、誠実に作業します。</p>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-5 border border-[#E8D5D5] shadow-sm text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9B1C1C] text-white font-black text-base md:text-lg flex items-center justify-center rounded-full mx-auto mb-3">④</div>
                <h4 className="font-extrabold text-[12px] md:text-sm text-gray-900 mb-1.5 leading-tight">清掃・お引き渡し</h4>
                <p className="text-[12px] md:text-xs text-gray-600 leading-relaxed">作業後に簡易清掃を行い、きれいな状態でお引き渡しします。</p>
              </div>
            </div>
          </div>

          {/* 料金表と配慮事項 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 md:mb-14">
            <div className="flex-1">
              <h3 className="text-[18px] md:text-2xl font-extrabold text-gray-900 mb-4">遺品整理の料金目安</h3>
              <div className="bg-white rounded-xl border border-[#E8D5D5] overflow-hidden shadow-sm">
                <table className="w-full text-[13px] md:text-sm">
                  <thead>
                    <tr className="bg-[#9B1C1C] text-white">
                      <th className="p-3 md:p-4 text-left font-extrabold">間取り</th>
                      <th className="p-3 md:p-4 text-right font-extrabold">料金目安</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#FDF8F6]">
                      <td className="p-3 md:p-4 font-medium text-gray-800 border-b border-[#F0E0E0]">1K / 1R</td>
                      <td className="p-3 md:p-4 text-right font-extrabold text-[#9B1C1C] border-b border-[#F0E0E0]">30,000円〜</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 md:p-4 font-medium text-gray-800 border-b border-[#F0E0E0]">1LDK / 2K</td>
                      <td className="p-3 md:p-4 text-right font-extrabold text-[#9B1C1C] border-b border-[#F0E0E0]">80,000円〜</td>
                    </tr>
                    <tr className="bg-[#FDF8F6]">
                      <td className="p-3 md:p-4 font-medium text-gray-800 border-b border-[#F0E0E0]">2LDK / 3K</td>
                      <td className="p-3 md:p-4 text-right font-extrabold text-[#9B1C1C] border-b border-[#F0E0E0]">150,000円〜</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 md:p-4 font-medium text-gray-800">3LDK以上</td>
                      <td className="p-3 md:p-4 text-right font-extrabold text-[#9B1C1C]">250,000円〜</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[12px] md:text-xs text-gray-500 p-3 border-t border-[#F0E0E0] leading-relaxed">※買取相殺により実際のお支払いはさらに安くなる場合があります。まずはお気軽にご相談ください。</p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] md:text-2xl font-extrabold text-gray-900 mb-4">私たちの想い・配慮事項</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-white rounded-xl p-3 md:p-4 border border-[#E8D5D5] shadow-sm">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-[#FDF0F0] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4 md:w-5 md:h-5 text-[#9B1C1C]" />
                  </div>
                  <div>
                    <p className="font-extrabold text-[13px] md:text-base text-gray-900">故人様の想いを大切に</p>
                    <p className="text-[12px] md:text-xs text-gray-600 mt-0.5">形見の品や思い出の遺品は丁寧に仕分けます</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3 md:p-4 border border-[#E8D5D5] shadow-sm">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-[#FDF0F0] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#9B1C1C]" />
                  </div>
                  <div>
                    <p className="font-extrabold text-[13px] md:text-base text-gray-900">ご遺族様のプライバシー厳守</p>
                    <p className="text-[12px] md:text-xs text-gray-600 mt-0.5">作業内容・お客様情報は一切外部に漏らしません</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3 md:p-4 border border-[#E8D5D5] shadow-sm">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-[#FDF0F0] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4 md:w-5 md:h-5 text-[#9B1C1C]" />
                  </div>
                  <div>
                    <p className="font-extrabold text-[13px] md:text-base text-gray-900">貴重品は必ずご確認</p>
                    <p className="text-[12px] md:text-xs text-gray-600 mt-0.5">現金・通帳・貴金属は作業前にご一緒に確認します</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-xl p-3 md:p-4 border border-[#E8D5D5] shadow-sm">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-[#FDF0F0] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-4 h-4 md:w-5 md:h-5 text-[#9B1C1C]" />
                  </div>
                  <div>
                    <p className="font-extrabold text-[13px] md:text-base text-gray-900">合同供養も対応可能</p>
                    <p className="text-[12px] md:text-xs text-gray-600 mt-0.5">ご希望の方には遺品の合同供養をご案内します</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="tel:0120437599" className="inline-flex items-center justify-center gap-3 bg-[#9B1C1C] text-white font-black text-[16px] md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-[0_8px_24px_rgba(155,28,28,0.4)] border border-[#7a1515] touch-manipulation active:scale-95 w-full md:w-auto max-w-sm md:max-w-md">
              <Phone className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
              遺品整理について電話で相談する
            </a>
            <p className="text-gray-500 text-[12px] md:text-sm mt-3">☎ 0120-437-599 ／ 年中無休・無料相談</p>
          </div>
        </div>
      </section>

      {/* 解決事例 */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[22px] md:text-4xl font-extrabold text-center text-gray-900 mb-3 md:mb-5 leading-tight">
            座間市での驚きの「買取相殺」<br className="md:hidden"/>ビフォーアフター
          </h2>
          <p className="text-center text-red-600 font-extrabold text-[13px] md:text-lg mb-8 md:mb-12">💡 買取相殺で最大4万円引きになったお客様も！</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 bg-red-600 text-white text-[12px] md:text-sm font-extrabold px-3 py-1 md:py-2 rounded-br-xl z-20 shadow-sm">
                座間市で1.5万円お得に！
              </div>
              <div className="flex w-full h-40 md:h-64 relative bg-gray-100">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <Image src="/IMG_1948.png" alt="散らかった部屋 Before" fill sizes="50vw" className="object-cover brightness-90"/>
                  <div className="absolute top-1.5 left-1.5 bg-gray-900/80 text-white text-[12px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">Before</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <Image src="/IMG_1949.png" alt="綺麗な部屋 After" fill sizes="50vw" className="object-cover"/>
                  <div className="absolute top-1.5 left-1.5 bg-blue-600/90 text-white text-[12px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md border border-gray-100 z-10">
                  <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-green-600" />
                </div>
              </div>

              <div className="p-4 md:p-8 flex-grow flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="bg-green-700 text-white text-[12px] md:text-sm font-bold inline-block px-2.5 py-1 rounded-full mb-2.5 shadow-sm">座間市 相武台前 1K（不用品回収）</div>
                  <div className="flex gap-1.5 text-[12px] md:text-sm text-gray-600 mb-3 font-medium">
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">スタッフ2名</span>
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">作業時間：約1.5時間</span>
                  </div>
                </div>
                <div className="bg-white p-3 md:p-5 rounded-xl text-center border border-gray-200 shadow-sm relative">
                  <p className="text-gray-800 text-[12px] md:text-base mb-2 font-bold border-b border-dashed border-gray-300 pb-2">お見積り金額：80,000円のところ…</p>
                  <div className="text-gray-500 text-[12px] md:text-sm mt-2 font-medium">作業費・処分費：45,000円</div>
                  <div className="text-red-500 font-extrabold my-1 text-[13px] md:text-xl">買取額：- 15,000円</div>
                  <div className="text-[12px] md:text-xs text-gray-700 mb-2 font-bold text-left bg-red-50 p-2 rounded-md border border-red-100 leading-relaxed">
                    【買取の理由】製造年式の新しい冷蔵庫や洗濯機などを地元価格で高価買取させていただきました！
                  </div>
                  <div className="border-t border-gray-100 my-2 pt-2">
                    <div className="text-[17px] md:text-3xl font-black text-gray-900 tracking-tight">
                      お支払総額：30,000<span className="text-[12px] md:text-lg font-bold">円</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs md:text-sm font-extrabold px-5 py-2 rounded-br-2xl z-20 shadow-sm">
                遺品整理もお任せ！
              </div>
              <div className="flex w-full h-40 md:h-64 relative bg-gray-100">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <Image src="/yamato-minamirinkan-before.png" alt="不用品 Before" fill sizes="50vw" className="object-cover brightness-90"/>
                  <div className="absolute top-1.5 left-1.5 bg-gray-900/80 text-white text-[12px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">Before</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <Image src="/yamato-minamirinkan-after.png" alt="スッキリ After" fill sizes="50vw" className="object-cover"/>
                  <div className="absolute top-1.5 left-1.5 bg-blue-600/90 text-white text-[12px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md border border-gray-100 z-10">
                  <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-green-600" />
                </div>
              </div>

              <div className="p-4 md:p-8 flex-grow flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="bg-green-700 text-white text-[12px] md:text-sm font-bold inline-block px-2.5 py-1 rounded-full mb-2.5 shadow-sm">座間市 入谷 2DK（遺品整理）</div>
                  <div className="flex gap-1.5 text-[12px] md:text-sm text-gray-600 mb-3 font-medium">
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">スタッフ3名</span>
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">作業時間：約3時間</span>
                  </div>
                </div>
                <div className="bg-white p-3 md:p-5 rounded-xl text-center border border-gray-200 shadow-sm relative">
                  <p className="text-gray-800 text-[12px] md:text-base mb-2 font-bold border-b border-dashed border-gray-300 pb-2">実家の家具・家電の全処分</p>
                  <div className="text-gray-500 text-[12px] md:text-sm mt-2 font-medium">作業費・処分費：120,000円</div>
                  <div className="text-red-500 font-extrabold my-1 text-[13px] md:text-xl">買取額：- 40,000円</div>
                  <div className="text-[12px] md:text-xs text-gray-700 mb-2 font-bold text-left bg-red-50 p-2 rounded-md border border-red-100 leading-relaxed">
                    【買取の理由】大切に使われていたブランド家具や骨董品にしっかり価値を見出し、相殺させていただきました。
                  </div>
                  <div className="border-t border-gray-100 my-2 pt-2">
                    <div className="text-[18px] md:text-4xl font-black text-gray-900 tracking-tight">
                      お支払総額：80,000<span className="text-[12px] md:text-lg font-bold text-gray-900">円</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-12 md:py-20 px-4 bg-green-50 border-t border-green-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              座間市のお客様から<br className="md:hidden" />喜びの声が多数届いております
            </h2>
            <div className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white py-1.5 md:py-2 px-5 md:px-6 rounded-full shadow-sm border border-gray-200">
               <span className="font-bold text-gray-700 text-xs md:text-base">多くのお客様にご満足いただいています</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[12px] px-2 py-1 rounded-bl-lg font-bold">座間市でのご依頼</div>
              <div className="-mx-5 md:-mx-6 -mt-5 md:-mt-6 mb-4 overflow-hidden rounded-t-xl md:rounded-t-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 128" width="100%">
                  <rect width="300" height="128" fill="#FFF9E6"/>
                  <rect x="1" y="1" width="298" height="126" fill="none" stroke="#D4C48A" strokeWidth="1" rx="4"/>
                  <line x1="10" y1="38" x2="290" y2="38" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="62" x2="290" y2="62" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="86" x2="290" y2="86" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="110" x2="290" y2="110" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <text x="150" y="22" textAnchor="middle" fontFamily="'Klee One', cursive" fontSize="12" fill="#7A3030" fontWeight="600" letterSpacing="2">お客様アンケート</text>
                  <line x1="40" y1="29" x2="260" y2="29" stroke="#D4C48A" strokeWidth="0.7"/>
                  <text x="96" y="57" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fill="#E8A820">★★★★★</text>
                  <rect x="12" y="68" width="11" height="11" fill="none" stroke="#9B1C1C" strokeWidth="1.5" rx="1.5"/>
                  <path d="M13.5 73.5 L16 77 L22.5 68.5" stroke="#9B1C1C" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="29" y="79" fontFamily="'Klee One', cursive" fontSize="11" fill="#444">とても満足</text>
                  <text x="12" y="101" fontFamily="'Klee One', cursive" fontSize="10.5" fill="#555">丁寧に作業していただきました</text>
                  <text x="286" y="123" textAnchor="end" fontFamily="'Klee One', cursive" fontSize="11" fill="#999" fontStyle="italic">T.S</text>
                </svg>
              </div>
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">最初の見積もり通りで安心！</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                「遺品整理をお願いしました。電話から2時間で来てくれて、丁寧に作業していただきました。料金も見積り通りで安心でした。」
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                 <p className="text-[12px] md:text-xs text-gray-400 font-bold">座間市 相武台前 T様 / 50代女性</p>
              </div>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[12px] px-2 py-1 rounded-bl-lg font-bold">座間市でのご依頼</div>
              <div className="-mx-5 md:-mx-6 -mt-5 md:-mt-6 mb-4 overflow-hidden rounded-t-xl md:rounded-t-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 128" width="100%">
                  <rect width="300" height="128" fill="#FFF9E6"/>
                  <rect x="1" y="1" width="298" height="126" fill="none" stroke="#D4C48A" strokeWidth="1" rx="4"/>
                  <line x1="10" y1="38" x2="290" y2="38" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="62" x2="290" y2="62" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="86" x2="290" y2="86" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="110" x2="290" y2="110" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <text x="150" y="22" textAnchor="middle" fontFamily="'Klee One', cursive" fontSize="12" fill="#7A3030" fontWeight="600" letterSpacing="2">お客様アンケート</text>
                  <line x1="40" y1="29" x2="260" y2="29" stroke="#D4C48A" strokeWidth="0.7"/>
                  <text x="96" y="57" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fill="#E8A820">★★★★★</text>
                  <rect x="12" y="68" width="11" height="11" fill="none" stroke="#9B1C1C" strokeWidth="1.5" rx="1.5"/>
                  <path d="M13.5 73.5 L16 77 L22.5 68.5" stroke="#9B1C1C" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="29" y="79" fontFamily="'Klee One', cursive" fontSize="11" fill="#444">とても満足</text>
                  <text x="12" y="101" fontFamily="'Klee One', cursive" fontSize="10.5" fill="#555">すぐ対応してもらえました</text>
                  <text x="286" y="123" textAnchor="end" fontFamily="'Klee One', cursive" fontSize="11" fill="#999" fontStyle="italic">S.K</text>
                </svg>
              </div>
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">すぐ対応してもらえました</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                「引っ越し前日に急いでお願いしましたが、すぐ対応してもらえました。追加料金もなく、本当に助かりました。」
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                 <p className="text-[12px] md:text-xs text-gray-400 font-bold">座間市 小松原 S様 / 40代男性</p>
              </div>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[12px] px-2 py-1 rounded-bl-lg font-bold">座間市でのご依頼</div>
              <div className="-mx-5 md:-mx-6 -mt-5 md:-mt-6 mb-4 overflow-hidden rounded-t-xl md:rounded-t-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 128" width="100%">
                  <rect width="300" height="128" fill="#FFF9E6"/>
                  <rect x="1" y="1" width="298" height="126" fill="none" stroke="#D4C48A" strokeWidth="1" rx="4"/>
                  <line x1="10" y1="38" x2="290" y2="38" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="62" x2="290" y2="62" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="86" x2="290" y2="86" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <line x1="10" y1="110" x2="290" y2="110" stroke="#E5D9A8" strokeWidth="0.7"/>
                  <text x="150" y="22" textAnchor="middle" fontFamily="'Klee One', cursive" fontSize="12" fill="#7A3030" fontWeight="600" letterSpacing="2">お客様アンケート</text>
                  <line x1="40" y1="29" x2="260" y2="29" stroke="#D4C48A" strokeWidth="0.7"/>
                  <text x="96" y="57" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fill="#E8A820">★★★★★</text>
                  <rect x="12" y="68" width="11" height="11" fill="none" stroke="#9B1C1C" strokeWidth="1.5" rx="1.5"/>
                  <path d="M13.5 73.5 L16 77 L22.5 68.5" stroke="#9B1C1C" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="29" y="79" fontFamily="'Klee One', cursive" fontSize="11" fill="#444">とても満足</text>
                  <text x="12" y="101" fontFamily="'Klee One', cursive" fontSize="10.5" fill="#555">想定よりとても安く済み大満足でした</text>
                  <text x="286" y="123" textAnchor="end" fontFamily="'Klee One', cursive" fontSize="11" fill="#999" fontStyle="italic">K.M</text>
                </svg>
              </div>
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">買取で費用がすごく安くなった</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                「捨てるしかないと思っていた冷蔵庫やテレビに値段をつけてもらい、回収費用から相殺してくれました。結果的に想定よりずっと安く済み、大満足です。」
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                 <p className="text-[12px] md:text-xs text-gray-400 font-bold">座間市 栗原 K様 / 50代女性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ご依頼の流れ */}
      <section className="py-12 md:py-20 px-4 bg-slate-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[22px] md:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-16">
            ご依頼のカンタン4ステップ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1.5 bg-green-200 z-0"></div>

            <div className="bg-white rounded-2xl shadow-sm md:shadow-md border border-slate-200 md:border-green-100 p-3 md:p-6 text-center relative mt-5 md:mt-0 flex flex-col items-center z-10 h-full">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white font-black flex items-center justify-center rounded-full text-base md:text-2xl shadow-lg border-2 md:border-4 border-white">
                1
              </div>
              <div className="relative w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-green-50 shadow-inner overflow-hidden mb-2.5 md:mb-4 mt-3 md:mt-5 bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500" alt="無料相談・見積り" loading="lazy" className="w-full h-full object-cover object-[80%_62%]"/>
              </div>
              <h3 className="font-extrabold text-[12px] md:text-lg mb-1.5 md:mb-2 text-green-800">無料相談・見積り</h3>
              <p className="text-[12px] md:text-sm text-gray-600 font-medium leading-relaxed">LINEで部屋の写真をお送りいただくとスムーズです。</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm md:shadow-md border border-slate-200 md:border-green-100 p-3 md:p-6 text-center relative mt-5 md:mt-0 flex flex-col items-center z-10 h-full">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white font-black flex items-center justify-center rounded-full text-base md:text-2xl shadow-lg border-2 md:border-4 border-white">
                2
              </div>
              <div className="relative w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-green-50 shadow-inner overflow-hidden mb-2.5 md:mb-4 mt-3 md:mt-5 bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500" alt="現地調査・確定" loading="lazy" className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-extrabold text-[12px] md:text-lg mb-1.5 md:mb-2 text-green-800">現地調査・確定</h3>
              <p className="text-[12px] md:text-sm text-gray-600 font-medium leading-relaxed">正確な金額を算出。<span className="text-red-500 font-bold block mt-0.5">キャンセル無料！</span></p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm md:shadow-md border border-slate-200 md:border-green-100 p-3 md:p-6 text-center relative mt-5 md:mt-0 flex flex-col items-center z-10 h-full">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white font-black flex items-center justify-center rounded-full text-base md:text-2xl shadow-lg border-2 md:border-4 border-white">
                3
              </div>
              <div className="relative w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-green-50 shadow-inner overflow-hidden mb-2.5 md:mb-4 mt-3 md:mt-5 bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500" alt="スピーディな作業" loading="lazy" className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-extrabold text-[12px] md:text-lg mb-1.5 md:mb-2 text-green-800">スピーディな作業</h3>
              <p className="text-[12px] md:text-sm text-gray-600 font-medium leading-relaxed">座間市ならすぐ急行！全て丸投げでOKです。</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm md:shadow-md border border-slate-200 md:border-green-100 p-3 md:p-6 text-center relative mt-5 md:mt-0 flex flex-col items-center z-10 h-full">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white font-black flex items-center justify-center rounded-full text-base md:text-2xl shadow-lg border-2 md:border-4 border-white">
                4
              </div>
              <div className="relative w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-green-50 shadow-inner overflow-hidden mb-2.5 md:mb-4 mt-3 md:mt-5 bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500" alt="ご精算（買取相殺）" loading="lazy" className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-extrabold text-[12px] md:text-lg mb-1.5 md:mb-2 text-green-800">ご精算（買取相殺）</h3>
              <p className="text-[12px] md:text-sm text-gray-600 font-medium leading-relaxed">作業後にお支払い。買取でお得に。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className="py-10 md:py-20 px-3 md:px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 relative overflow-hidden">
          <div className="relative w-32 h-32 md:w-64 md:h-64 shrink-0 overflow-hidden rounded-full border-4 md:border-8 border-slate-600 shadow-2xl">
            <Image src="/IMG_1828.webp" alt="座間市 不用品回収 まごころ整理センター 代表 粟野匠音" fill sizes="(max-width: 768px) 128px, 256px" className="object-cover rounded-full"/>
          </div>
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-2xl md:text-4xl font-extrabold text-yellow-400 mb-2 md:mb-4 tracking-tight">座間市の皆様へ</h2>
            <div className="mb-4 md:mb-6">
              <span className="text-sm md:text-lg font-bold text-gray-300 block mb-0.5">代表</span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-widest">粟野 匠音</h3>
            </div>
            <p className="text-gray-200 text-[13px] md:text-[16px] leading-relaxed md:leading-loose text-left font-medium">
              『神奈川 まごころ整理センター』代表の粟野です。<br/>
              私たちは、大和市福田に拠点を置き、座間市にも迅速にお伺いする「地元密着企業」です。遠方から来て高額な出張費を請求するような業者とは違い、地元のお客様に愛される誠実なサービスを第一としております。<br/>
              不要になったお品物を、単に処分するのではなく、新しい価値を見出し、高価買取を行うことで、お客様のご負担を大幅に軽減いたします。<br/>
              座間市の皆様、どのような些細なご相談でもお気軽にお申し付けください。私が直接お電話に出ます！
            </p>

            <div className="mt-6 md:mt-8 flex flex-col items-center md:items-start">
              <p className="text-yellow-400 font-bold text-xs md:text-sm mb-2">＼ 担当者たらい回しなし！代表直通です ／</p>
              <a href="tel:+819013835108" className="bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl py-3 px-6 shadow-lg flex items-center justify-center gap-3 border border-[#e65f00] w-full sm:w-auto touch-manipulation">
                <Phone className="w-5 h-5 md:w-6 md:h-6 shrink-0" aria-hidden />
                <span className="text-left leading-tight">
                  <span className="block text-[12px] md:text-xs font-bold opacity-90 mb-0.5">今すぐ代表の粟野に電話で相談する</span>
                  <span className="block text-lg md:text-2xl font-black tracking-tight drop-shadow-sm">090-1383-5108</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 (FAQ) */}
      <section className="py-12 md:py-20 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14">
            <HelpCircle className="w-7 h-7 md:w-10 md:h-10 text-green-600" />
            <h2 className="text-[24px] md:text-4xl font-extrabold text-gray-900">よくあるご質問</h2>
          </div>
          <div className="space-y-3 md:space-y-6">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-lg md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">見積もり後にキャンセルしても本当にお金はかかりませんか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed"><strong className="text-red-600">完全無料です。</strong>金額にご納得いただけない場合はお気兼ねなくお断りください。強引な営業も一切いたしません。</span>
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-lg md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">LINE査定では、どんな写真を送ればいいですか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">綺麗に撮る必要はありません！「お部屋全体がわかる写真」「処分したい大型家具・家電の写真」など、2〜3枚をパシャッと撮って送るだけでOKです。</span>
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-lg md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">今日すぐに来てほしいのですが、当日対応できますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">はい、可能です！当店は大和市福田にございますので、座間市へも最短30分でお伺い可能です。お急ぎの場合はお電話にてご相談ください。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要・許認可 */}
      <section className="py-10 md:py-20 px-3 md:px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 md:gap-3 mb-6 md:mb-10">
            <Building2 className="w-5 h-5 md:w-8 md:h-8 text-gray-700" />
            <h2 className="text-[20px] md:text-3xl font-extrabold text-gray-900">会社概要・許認可</h2>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-[12px] md:text-base font-medium">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 py-3 md:py-5 px-3 md:px-6 text-left w-[30%] md:w-1/4 text-gray-700 border-r border-gray-200">屋号</th>
                  <td className="py-3 md:py-5 px-3 md:px-6 text-gray-900 font-extrabold">神奈川 まごころ整理センター</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 py-3 md:py-5 px-3 md:px-6 text-left text-gray-700 border-r border-gray-200">所在地</th>
                  <td className="py-3 md:py-5 px-3 md:px-6 text-gray-900 flex items-center gap-2">
                     〒242-0024<br className="md:hidden"/> 神奈川県大和市福田５丁目4-11
                  </td>
                </tr>
                <tr>
                  <th className="bg-gray-50 py-3 md:py-5 px-3 md:px-6 text-left text-gray-700 align-top border-r border-gray-200">許認可番号</th>
                  <td className="py-3 md:py-5 px-3 md:px-6 text-gray-900 leading-relaxed">
                    古物商許可：東京都公安委員第301052616733号<br/>
                    <div className="mt-2 text-[12px] md:text-xs text-gray-500 leading-relaxed bg-gray-50 p-2 md:p-3 rounded border border-gray-200 font-normal">
                      ※家庭から出る一般廃棄物の回収につきましては、各市町村の許可を受けた業者に委託し、各種法令を厳守して処理を行っております。
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="py-12 md:py-20 px-3 md:px-4 bg-gradient-to-b from-white to-green-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[20px] md:text-4xl font-black text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
            座間市の不用品回収なら<br/>
            大和市福田の<span className="text-green-700">まごころ整理センター</span>にお任せ！
          </h2>
          <p className="text-[12px] md:text-lg text-green-700 mb-6 md:mb-10 font-bold bg-white inline-block px-3 sm:px-4 py-2 md:py-2.5 rounded-full shadow-sm border border-green-200 w-full sm:max-w-2xl sm:mx-auto text-balance leading-snug">
            ＼ 大和市福田の地元業者として、座間市のご相談も丁寧にお受けします ／
          </p>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 justify-center">
            <div className="w-full md:w-auto">
               <a href="https://lin.ee/Gf8Or5r" className="w-full md:px-12 bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-xl md:rounded-2xl py-3.5 md:py-5 shadow-lg flex items-center justify-center gap-2 md:gap-3 transition-transform active:scale-95 border border-[#05b34c]">
                 <Camera className="w-6 h-6 md:w-10 md:h-10" />
                 <div className="text-left leading-tight">
                   <div className="text-[12px] md:text-sm font-bold opacity-90 mb-0.5">無料で見積りを取る</div>
                   <div className="text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md">写真を送ってLINE査定</div>
                 </div>
               </a>
            </div>
            <div className="w-full md:w-auto mt-2 md:mt-0">
               <a href="tel:0120437599" className="w-full md:px-12 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl md:rounded-2xl py-3.5 md:py-5 shadow-lg flex items-center justify-center gap-2 md:gap-3 border border-[#e65f00] touch-manipulation">
                 <Phone className="w-6 h-6 md:w-10 md:h-10 shrink-0" aria-hidden />
                 <span className="text-left leading-tight">
                   <span className="block text-[12px] md:text-sm font-bold opacity-90 mb-0.5">電話で今すぐ相談</span>
                   <span className="block text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md">0120-437-599</span>
                 </span>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-gray-300 py-10 md:py-16 px-4 text-center text-[12px] md:text-sm pb-32 md:pb-48">
        <p className="font-extrabold mb-2 md:mb-4 text-sm md:text-xl tracking-widest">神奈川 まごころ整理センター</p>
        <p className="mb-4 md:mb-5 text-gray-400 font-medium">〒242-0024 神奈川県大和市福田５丁目4-11</p>
        <p className="opacity-70">© 2026 神奈川 まごころ整理センター All Rights Reserved.</p>
      </footer>

      {/* 追従型CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] p-2 md:p-3" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-1 md:gap-2">
          <p className="text-center text-[12px] md:text-xs font-bold text-[#666666] px-2 leading-tight">
            出張費・お見積り・キャンセル 0円
          </p>
          <div className="flex gap-2 md:gap-2 mt-0.5">
            <a
              href="tel:0120437599"
              className="flex-[2] min-h-[52px] min-w-0 bg-[#B93838] text-white rounded-lg md:rounded-xl flex items-center justify-center gap-1.5 md:gap-3 py-3 md:py-4 px-2 md:px-3 shadow-md border border-[#9C2F2F] touch-manipulation"
            >
              <Phone className="w-5 h-5 md:w-8 md:h-8 shrink-0" aria-hidden />
              <span className="text-left">
                <span className="block text-[12px] md:text-xs font-bold leading-tight opacity-95 mb-0.5">お電話一本で完結！</span>
                <span className="block text-[13px] md:text-xl font-black leading-tight tracking-tight">0120-437-599</span>
              </span>
            </a>

            <a
              href="https://lin.ee/Gf8Or5r"
              className="flex-1 min-h-[52px] min-w-0 bg-[#06C755] text-white rounded-lg md:rounded-xl flex items-center justify-center py-3 md:py-4 px-1.5 md:px-3 shadow-md border border-[#05b34c] touch-manipulation"
            >
              <div className="flex items-center gap-1 md:gap-2">
                <Camera className="w-4 h-4 md:w-7 md:h-7 shrink-0" />
                <span className="text-[12px] md:text-sm font-bold leading-tight">写真を送って<br/>見積もり</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}