import React from 'react';
import type { Metadata } from 'next';
import { 
  Phone, MessageCircle, MapPin, Clock, HeartHandshake, 
  CheckCircle2, BadgeJapaneseYen, ClipboardList, Truck,
  HelpCircle, Building2, AlertTriangle, ThumbsUp, 
  Gift, CheckSquare, ArrowRight, ArrowDown, Timer, Star, ShieldCheck, Camera,
  XCircle, CheckCircle, MessageSquareQuote, Flame, Info, ChevronRight,
  Banknote, CreditCard, Users
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '大和市の不用品回収・遺品整理｜即日対応・最短30分｜まごころ整理センター',
  description: '大和市で不用品回収・遺品整理なら地元・福田のまごころ整理センター。即日対応・最短30分で到着。見積無料・追加料金なし・年中無休。軽トラパック14,800円〜。大和市全域対応。',
  formatDetection: { telephone: false },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "まごころ整理センター 大和市本店",
    "image": "https://magokoro-lp-1.vercel.app/logo.png",
    "description": "大和市密着！不用品回収、遺品整理、ゴミ屋敷清掃を高価買取で費用を大幅に削減します。地元・大和市福田から最短30分で急行。",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "大和市",
      "addressRegion": "神奈川県",
      "postalCode": "242-0024",
      "streetAddress": "福田５丁目4-11"
    },
    "telephone": "0120-437-599",
    "priceRange": "¥14,800~",
    "areaServed": ["大和市"]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-[100px] md:pb-24 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 🟢 上部帯 */}
      <div className="bg-green-600 text-white text-[9px] sm:text-[10px] md:text-sm font-bold py-1.5 px-2 text-center flex flex-wrap justify-center items-center gap-x-1.5 gap-y-0.5 md:gap-x-4 md:gap-y-0 shadow-sm z-50 relative leading-snug">
        <span className="shrink-0">大和市対応</span><span className="opacity-50 shrink-0">|</span>
        <span className="shrink-0">見積もり無料</span><span className="opacity-50 shrink-0">|</span>
        <span className="shrink-0">女性スタッフ同行可</span><span className="opacity-50 shrink-0">|</span>
        <span className="shrink-0">年中無休</span>
      </div>

      {/* 🟢 ヘッダー */}
      <header className="bg-white py-1 md:py-1.5 px-3 md:px-6 sticky top-0 z-40 shadow-sm border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-[9px] md:text-xs font-black text-red-600 border-2 border-red-500 bg-red-50 px-1.5 py-0.5 rounded shadow-sm">大和市福田の地元企業</div>
          <Image src="/logo.png" alt="大和市 まごころ整理センター" width={952} height={242} className="h-6 md:h-10 w-auto object-contain mt-1 origin-left scale-140" />
        </div>
        <div className="text-[9px] md:text-sm bg-green-50 text-green-700 border border-green-600 px-2.5 py-0.5 md:py-1 rounded-full font-bold shadow-sm flex items-center gap-1">
          <Timer className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
          24時間受付
        </div>
      </header>

      {/* 🟢 1. ファーストビュー（信頼→CTA→価格の順） */}
      <section className="relative pb-8 md:pb-14 pt-7 md:pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-engawa.jpg"
            alt="落ち着いた日本家屋の縁側"
            fetchPriority="high"
            className="w-full h-full object-cover"
            style={{ objectPosition: '65% center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,248,240,0.78)] to-[rgba(245,235,220,0.72)]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-3 w-full text-center flex flex-col items-center">

          {/* H1 */}
          <h1 className="w-full px-1 mb-3 text-center tracking-[0.03em]" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>
            <span className="block text-[#2B2B2B] text-[28px] sm:text-[26px] md:text-[42px] lg:text-[50px] font-bold leading-[1.4] md:leading-[1.25]">
              大和市で、ご実家の片付け・<br/>遺品整理をお手伝いします
            </span>
          </h1>

          {/* サブコピー */}
          <p className="text-[#3B2E1F] md:text-[#6B5B47] text-[15px] sm:text-base md:text-lg font-medium leading-relaxed mb-3 tracking-[0.03em]" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.9)' }}>
            ご遺族・ご家族のお気持ちに寄り添い、<br/>一つひとつ丁寧にお引き受けします
          </p>

          {/* 第三コピー */}
          <div className="w-[95%] max-w-xl mx-auto mb-3 text-center" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>
            <p className="text-[#4A3D2E] md:text-[#555555] text-[13px] sm:text-sm md:text-base font-medium md:font-normal leading-relaxed">
              <span className="whitespace-nowrap">大和市・福田の地元業者</span><span className="hidden md:inline">　│　</span><br className="md:hidden" /><span className="whitespace-nowrap">代表・粟野が直接ご相談をお受けします</span>
            </p>
            <p className="text-[#4A3D2E] md:text-[#6B5B47] text-[12px] sm:text-[13px] md:text-sm font-medium md:font-normal mt-1">
              お家具1点のお片付けから、お家丸ごとまで
            </p>
          </div>

          {/* Step 13: 信頼バッジ */}
          <div className="w-[80%] max-w-[280px] md:w-[95%] md:max-w-xl mx-auto mb-4 md:mb-5 flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-2">
            <div className="bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-[#D4C4A8] shadow-sm w-full md:w-auto justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-green-700 shrink-0" />
              <span className="text-[11px] md:text-xs font-bold text-[#3B2E1F]">古物商許可証あり</span>
            </div>
            <div className="bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-[#D4C4A8] shadow-sm w-full md:w-auto justify-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-700 shrink-0" />
              <span className="text-[11px] md:text-xs font-bold text-[#3B2E1F]">女性スタッフ在籍</span>
            </div>
            <div className="bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-[#D4C4A8] shadow-sm w-full md:w-auto justify-center">
              <HeartHandshake className="w-3.5 h-3.5 text-green-700 shrink-0" />
              <span className="text-[11px] md:text-xs font-bold text-[#3B2E1F]">供養・お焚き上げ対応</span>
            </div>
          </div>

          {/* Step 8: 電話CTA */}
          <a href="tel:0120437599" className="w-[95%] max-w-xl min-h-[84px] bg-[#A83232] hover:bg-[#963030] text-white rounded-xl py-4 md:py-5 shadow-[0_6px_20px_rgba(168,50,50,0.4)] flex items-center justify-center gap-3 border-2 border-[#8a2a2a] touch-manipulation active:scale-[0.97] transition-transform mb-2">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-[56px] h-[56px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: '#E8D9C0', border: '3px solid #FFFFFF', boxShadow: '0 0 0 2px #D4A04A, 0 4px 12px rgba(0,0,0,0.25)' }}>
                <Image src="/images/representative-awano.png" alt="代表 粟野匠音" width={718} height={888} className="w-full h-full object-cover object-top" />
              </div>
              <span className="text-[10px] md:text-[11px] font-medium mt-1 opacity-90">代表　粟野</span>
            </div>
            <Phone className="w-7 h-7 md:w-9 md:h-9 shrink-0" aria-hidden />
            <span className="text-left leading-tight">
              <span className="block text-[11px] md:text-sm font-bold opacity-90 mb-0.5">お電話でのご相談（通話無料）</span>
              <span className="block text-[28px] md:text-3xl font-black tracking-[0.03em] drop-shadow-md">0120-437-599</span>
              <span className="block text-[12px] md:text-sm font-normal mt-1 text-white/90">年中無休・受付中</span>
            </span>
          </a>

          {/* 安心要素 */}
          <div className="w-[95%] max-w-xl flex flex-col sm:flex-row sm:justify-center gap-1.5 sm:gap-4 mb-4 bg-white/50 rounded-lg py-3 md:py-2 px-4 md:px-3">
            <p className="text-[#3B2E1F] text-[13px] md:text-xs font-medium flex items-center justify-start sm:justify-center gap-1.5 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 md:w-3 md:h-3 text-green-600 shrink-0"/>見積もり後のキャンセル無料
            </p>
            <p className="text-[#3B2E1F] text-[13px] md:text-xs font-medium flex items-center justify-start sm:justify-center gap-1.5 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 md:w-3 md:h-3 text-green-600 shrink-0"/>しつこい営業は一切いたしません
            </p>
            <p className="text-[#3B2E1F] text-[13px] md:text-xs font-medium flex items-center justify-start sm:justify-center gap-1.5 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 md:w-3 md:h-3 text-green-600 shrink-0"/>ご家族でご相談の上でお決めください
            </p>
          </div>

          {/* Step 10: LINE CTA */}
          <a href="https://lin.ee/Gf8Or5r" className="w-[95%] max-w-xl min-h-[44px] bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-xl py-2.5 md:py-3 shadow-[0_6px_16px_rgba(6,199,85,0.35)] flex items-center justify-center gap-2 transition-transform active:scale-[0.97] border border-[#05b34c] touch-manipulation">
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
            <span className="text-[13px] md:text-base font-black tracking-tight drop-shadow-md">LINEで写真を送ってお見積もり（無料）</span>
          </a>

          {/* Step 11: 料金バッジはFVから削除。料金セクション(#pricing)に既存のため移動不要 */}
        </div>
      </section>

      {/* 🟢 対応エリアと実績 */}
      <section className="py-8 md:py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-[20px] md:text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
              大和市全域、<span className="text-red-600 border-b-2 border-red-300">最短30分で到着</span>します
           </h2>
           
           <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-6 mb-6">
             <div className="flex items-center justify-center gap-2 text-red-600 font-bold mb-3">
               <MapPin className="w-5 h-5 md:w-6 md:h-6" />
               <span className="text-[15px] md:text-xl">大和市の主な対応エリア</span>
             </div>
             <p className="text-gray-700 font-medium text-[13px] md:text-base leading-relaxed text-balance">
               大和駅周辺・中央林間・南林間・鶴間・高座渋谷<br className="hidden md:block"/>
               桜ヶ丘・つきみ野・深見・上草柳・下草柳・渋谷 など
             </p>
           </div>

           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="bg-white border-2 border-green-500 rounded-lg py-3 px-6 shadow-sm flex items-center justify-center gap-3">
                 <ClipboardList className="w-8 h-8 text-green-600" />
                 <div className="text-left">
                   <div className="text-[11px] md:text-sm text-gray-500 font-bold">大和市での対応件数</div>
                   <div className="text-[18px] md:text-2xl font-black text-gray-900">年間<span className="text-red-600 text-[24px] md:text-3xl mx-1">300</span>件</div>
                 </div>
              </div>
              <div className="bg-white border-2 border-orange-500 rounded-lg py-3 px-6 shadow-sm flex items-center justify-center gap-3">
                 <Truck className="w-8 h-8 text-orange-600" />
                 <div className="text-left">
                   <div className="text-[11px] md:text-sm text-gray-500 font-bold">最短到着時間</div>
                   <div className="text-[18px] md:text-2xl font-black text-gray-900"><span className="text-red-600 text-[24px] md:text-3xl mx-1">30</span>分</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 🟢 3. 料金セクション（二重価格で限定感演出） */}
      <section id="pricing" className="py-12 md:py-20 px-4 bg-slate-100 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-red-600 font-extrabold text-[12px] md:text-lg bg-white py-2 px-4 rounded-full shadow-sm border border-red-200 inline-block mb-3">
              ★大和市での相見積もり大歓迎！買取相殺でさらに激安に★
            </p>
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4 leading-tight">
              大和市の不用品回収・遺品整理<br/><span className="whitespace-nowrap">料金プラン</span><br className="md:hidden"/><span className="text-red-600 border-b-2 border-red-300">追加料金は一切いただきません。</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 mb-10">
            {/* 🎯 軽トラパック（価格変更・限定ラベル） */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-red-400 flex flex-col relative">
              <div className="bg-gray-700 text-white text-center py-2.5 font-bold text-xs md:text-sm tracking-widest">ちょっとしたお片付け</div>
              <div className="p-5 md:p-8 text-center flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">軽トラ積み放題</h3>
                <div className="mt-3 mb-1 flex flex-col items-center gap-2">
                  <span className="text-red-600 text-3xl md:text-5xl font-black">14,800<span className="text-base md:text-2xl font-bold">円</span><span className="text-lg md:text-3xl">〜</span></span>
                </div>
                <p className="text-[11px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：1R 〜 1K</p>
                <ul className="text-xs md:text-base text-gray-600 text-left space-y-2 font-medium">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 押し入れ〜1部屋程度の不用品に</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 単身のお引越し・片付けに</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-[3px] border-green-500 relative flex flex-col z-10 transform md:scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-[10px] md:text-sm font-extrabold px-4 py-1 rounded-b-md shadow-sm z-20 whitespace-nowrap">スタッフおすすめプラン</div>
              <div className="bg-gradient-to-b from-green-500 to-green-600 text-white text-center py-3 md:py-4 font-bold text-sm md:text-lg tracking-widest mt-5 md:mt-0">ごっそりお片付け</div>
              <div className="p-5 md:p-8 text-center flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">1.5t平積みパック</h3>
                <div className="text-3xl md:text-5xl font-extrabold text-red-600 mb-1 mt-3 drop-shadow-sm">29,800<span className="text-base font-bold text-gray-900 ml-0.5">円〜</span></div>
                <p className="text-[11px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：1DK 〜 1LDK</p>
                <ul className="text-xs md:text-base text-gray-600 text-left space-y-2 font-medium">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 大型家具・家電が複数ある場合に</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 2名分の荷物・遺品整理に</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-red-100 text-red-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg">大和市民割引適用可</div>
              <div className="bg-gray-700 text-white text-center py-2.5 font-bold text-xs md:text-sm tracking-widest mt-4">家まるごと・ゴミ屋敷</div>
              <div className="p-5 md:p-8 text-center flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">2tトラックパック</h3>
                <div className="text-3xl md:text-5xl font-extrabold text-red-600 mb-1 mt-3 drop-shadow-sm">49,800<span className="text-base font-bold text-gray-900 ml-0.5">円〜</span></div>
                <p className="text-[11px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：2LDK 〜 3LDK</p>
                <ul className="text-xs md:text-base text-gray-600 text-left space-y-2 font-medium">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 一軒家まるごとの遺品整理に</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 大量の不用品・ゴミ屋敷対応に</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-2 border-green-200 rounded-xl p-5 md:p-8 shadow-md relative mt-8">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white font-bold px-4 py-1 rounded-full text-[11px] md:text-sm shadow-sm whitespace-nowrap">
              安心のコミコミ価格！
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mt-3">
              <div className="flex-1">
                 <p className="font-extrabold text-gray-900 mb-3 text-[14px] md:text-lg">当店の料金は、<span className="text-red-600 border-b-2 border-red-200">以下の作業がすべて無料（込み）</span>です！</p>
                 <div className="flex flex-wrap gap-1.5 md:gap-2 text-[10px] md:text-sm text-green-800 font-bold mb-3">
                   <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>作業費</span>
                   <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>出張費（大和市内）</span>
                   <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>車両費</span>
                   <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>スタッフ費</span>
                   <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/>簡易清掃</span>
                 </div>
                 <p className="text-[10px] md:text-xs text-gray-600 font-medium bg-gray-50 p-2 rounded border border-gray-200">※階段料金・エアコン取外しなども、事前の見積もり金額にすべて含めてご提示し、後からの追加費用は絶対にいただきません。</p>
              </div>
              
              <div className="flex-1">
                 <p className="font-extrabold text-gray-900 mb-3 text-[14px] md:text-lg">他社との料金比較</p>
                 <table className="w-full text-[11px] md:text-sm text-center border-collapse">
                   <thead>
                     <tr>
                       <th className="bg-gray-100 border border-gray-200 p-1.5 md:p-2 text-gray-600">項目</th>
                       <th className="bg-green-100 border border-green-200 p-1.5 md:p-2 text-green-800 font-bold">当社（まごころ）</th>
                       <th className="bg-gray-100 border border-gray-200 p-1.5 md:p-2 text-gray-600">他社平均</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td className="border border-gray-200 p-1.5 md:p-2 font-medium bg-gray-50">軽トラ積み放題</td>
                       <td className="border border-green-200 p-1.5 md:p-2 font-bold text-red-600 bg-green-50">14,800円〜</td>
                       <td className="border border-gray-200 p-1.5 md:p-2 text-gray-500">25,000円〜</td>
                     </tr>
                     <tr>
                       <td className="border border-gray-200 p-1.5 md:p-2 font-medium bg-gray-50">大和市内出張費</td>
                       <td className="border border-green-200 p-1.5 md:p-2 font-bold text-red-600 bg-green-50">完全無料</td>
                       <td className="border border-gray-200 p-1.5 md:p-2 text-gray-500">3,000円〜</td>
                     </tr>
                     <tr>
                       <td className="border border-gray-200 p-1.5 md:p-2 font-medium bg-gray-50">見積り後の追加</td>
                       <td className="border border-green-200 p-1.5 md:p-2 font-bold text-red-600 bg-green-50">一切なし保証</td>
                       <td className="border border-gray-200 p-1.5 md:p-2 text-gray-500">あり</td>
                     </tr>
                   </tbody>
                 </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 代表挨拶 */}
      <section className="pt-[60px] pb-12 md:pt-[100px] md:pb-20 px-3 md:px-4" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 relative overflow-hidden">
          <div className="w-32 h-32 md:w-64 md:h-64 shrink-0 overflow-hidden rounded-full shadow-xl relative" style={{ backgroundColor: '#E8D9C0', border: '3px solid #FFFFFF', boxShadow: '0 0 0 3px #D4A04A, 0 4px 16px rgba(0,0,0,0.15)' }}>
            <Image src="/images/representative-awano.png" alt="大和市 不用品回収 まごころ整理センター 代表 粟野匠音" fill sizes="(max-width: 768px) 128px, 256px" className="object-cover object-top rounded-full"/>
          </div>
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#3B2E1F] mb-2 md:mb-4 tracking-tight">大和市の皆様へ</h2>
            <div className="mb-4 md:mb-6">
              <span className="text-sm md:text-lg font-bold text-[#6B5B47] block mb-0.5">代表</span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#2B2B2B] tracking-widest">粟野 匠音</h3>
            </div>
            <p className="text-[#3B2E1F] text-[13px] md:text-[16px] leading-[1.8] text-left font-medium">
              『神奈川 まごころ整理センター』代表の粟野です。<br/>
              私たちは、大和市福田に拠点を置く「生粋の地元企業」です。遠方から来て高額な出張費を請求するような業者とは違い、地元のお客様に愛される誠実なサービスを第一としております。<br/>
              不要になったお品物を、単に処分するのではなく、新しい価値を見出し、高価買取を行うことで、お客様のご負担を大幅に軽減いたします。<br/>
              大和市民の皆様、どのような些細なご相談でもお気軽にお申し付けください。私が直接お電話に出ます。
            </p>

            <div className="mt-6 md:mt-8 flex flex-col items-center md:items-start">
              <p className="text-[#6B5B47] font-bold text-xs md:text-sm mb-2">＼ 担当者たらい回しなし！代表直通です ／</p>
              <a href="tel:+819013835108" className="bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl py-3 px-6 shadow-lg flex items-center justify-center gap-3 border border-[#e65f00] w-full sm:w-auto touch-manipulation">
                <Phone className="w-5 h-5 md:w-6 md:h-6 shrink-0" aria-hidden />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] md:text-xs font-bold opacity-90 mb-0.5">代表の粟野に電話で相談する</span>
                  <span className="block text-lg md:text-2xl font-black tracking-tight drop-shadow-sm">090-1383-5108</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 5. これまでのご依頼例 */}
      <section className="py-12 md:py-20 px-4 bg-green-50 border-t border-green-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              これまでのご依頼例
            </h2>
            <p className="text-[12px] md:text-sm text-gray-500">※ご依頼内容の典型的な事例をご紹介しています</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
            {/* 事例1: T.Y様・60代女性・遺品整理 */}
            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative flex flex-col">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-bl-lg font-bold">大和市でのご依頼</div>
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
                  <text x="12" y="101" fontFamily="'Klee One', cursive" fontSize="10.5" fill="#555">寄り添った対応で安心できました</text>
                  <text x="286" y="123" textAnchor="end" fontFamily="'Klee One', cursive" fontSize="11" fill="#999" fontStyle="italic">T.Y</text>
                </svg>
              </div>
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">代表・粟野さんが直接対応してくださり安心しました</h4>
              <div className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3 flex-grow space-y-2">
                <p><span className="font-bold text-gray-800">ご依頼内容：</span>父の遺品整理・実家の片付け</p>
                <p><span className="font-bold text-gray-800">ご相談時のお気持ち：</span>「父が亡くなり、実家の片付けをどこに頼めばいいか分からず困っていました」</p>
                <p><span className="font-bold text-gray-800">対応について：</span>お電話で代表・粟野さんが直接応対してくださり、お見積もりの際も急かすことなく、家族と相談する時間をいただけました。女性スタッフも同行してくださり、母も安心して立ち会えました。仏壇のお焚き上げまで対応いただけて、本当に頼んで良かったと感じています。</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                 <p className="text-[10px] md:text-xs text-gray-400 font-bold">大和市 中央林間 T.Y様 / 60代女性</p>
              </div>
            </div>

            {/* 事例2: A.K様・70代女性・生前整理 */}
            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative flex flex-col">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-bl-lg font-bold">大和市でのご依頼</div>
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
                  <text x="12" y="101" fontFamily="'Klee One', cursive" fontSize="10.5" fill="#555">丁寧にお話を聞いてくださいました</text>
                  <text x="286" y="123" textAnchor="end" fontFamily="'Klee One', cursive" fontSize="11" fill="#999" fontStyle="italic">A.K</text>
                </svg>
              </div>
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">家族でゆっくり相談できて無理な即決もなし</h4>
              <div className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3 flex-grow space-y-2">
                <p><span className="font-bold text-gray-800">ご依頼内容：</span>生前整理（今後のための荷物の整理）</p>
                <p><span className="font-bold text-gray-800">ご相談時のお気持ち：</span>「自分が元気なうちに家の物を整理したいと考えていましたが、何から始めればよいか迷っていました」</p>
                <p><span className="font-bold text-gray-800">対応について：</span>代表の粟野さんにお電話で相談した際、「ご家族でゆっくりご相談の上でお決めください」と言っていただけて、ホッとしました。お見積もり後のしつこい営業もなく、娘と話し合ってから改めてお願いすることができました。お家具1点から対応していただけたのもありがたかったです。</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                 <p className="text-[10px] md:text-xs text-gray-400 font-bold">大和市 鶴間 A.K様 / 70代女性</p>
              </div>
            </div>

            {/* 事例3: S.M様・50代男性・実家じまい */}
            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative flex flex-col">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-bl-lg font-bold">大和市でのご依頼</div>
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
                  <text x="12" y="101" fontFamily="'Klee One', cursive" fontSize="10.5" fill="#555">地元の業者さんで安心しました</text>
                  <text x="286" y="123" textAnchor="end" fontFamily="'Klee One', cursive" fontSize="11" fill="#999" fontStyle="italic">S.M</text>
                </svg>
              </div>
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">遠方からでも地元業者さんで安心</h4>
              <div className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3 flex-grow space-y-2">
                <p><span className="font-bold text-gray-800">ご依頼内容：</span>実家じまい（空き家の片付け）</p>
                <p><span className="font-bold text-gray-800">ご相談時のお気持ち：</span>「母が施設に入り、実家が空き家に。遠方に住んでいるため、信頼できる地元業者を探していました」</p>
                <p><span className="font-bold text-gray-800">対応について：</span>大和市福田の地元業者ということで安心感がありました。古物商許可証もお持ちで、家具や家電の買取分を回収費用から相殺していただけて、想定より費用を抑えられました。代表の粟野さんが直接ご対応くださり、遠方の私にも作業内容を丁寧にご報告いただけました。</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                 <p className="text-[10px] md:text-xs text-gray-400 font-bold">大和市 高座渋谷 S.M様 / 50代男性</p>
              </div>
            </div>
          </div>

          <p className="text-[12px] md:text-[13px] text-[#888888] text-center leading-[1.7] max-w-[600px] mx-auto mt-6 md:mt-8 px-5">
            ※上記はこれまでのご依頼内容をもとにした事例紹介です。<br />お客様のプライバシー保護のため詳細は一部変更しております。
          </p>
        </div>
      </section>

      {/* 🟢 お支払い方法 */}
      <section className="py-12 md:py-20 px-4 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-[20px] md:text-3xl font-extrabold text-gray-900 mb-2">お支払い方法について</h2>
            <p className="text-[13px] md:text-base text-gray-600 font-medium">現金・各種クレジットカードに対応しております</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-gray-200 text-center">
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F0E9DC' }}>
                <Banknote className="w-9 h-9 md:w-12 md:h-12 text-green-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] md:text-lg font-extrabold text-gray-900 mb-3">現金でのお支払い</h3>
              <p className="text-[12px] md:text-sm text-gray-600 leading-[1.8]">作業完了後、その場でお支払いいただけます。事前のお振込みは不要で、領収書の発行もその場でご対応いたします。</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-gray-200 text-center">
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F0E9DC' }}>
                <CreditCard className="w-9 h-9 md:w-12 md:h-12 text-green-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] md:text-lg font-extrabold text-gray-900 mb-3">クレジットカード決済</h3>
              <p className="text-[12px] md:text-sm text-gray-600 leading-[1.8] mb-3">Squareによる決済システムを導入しております。高額のご依頼もその場でカード決済いただけるため、現金のご準備も不要で安心です。</p>
              <p className="text-[11px] md:text-[13px] text-[#6B5B47] font-medium mb-1">対応ブランド：</p>
              <p className="text-[12px] md:text-[14px] text-[#3B2E1F] font-medium">VISA / Mastercard / JCB / American Express / Diners Club</p>
            </div>
          </div>

          <p className="text-[11px] md:text-xs text-gray-500 text-center font-medium">※お見積もり時に、ご希望のお支払い方法をお伝えください</p>
        </div>
      </section>

      {/* 🟢 ご依頼からお作業までの流れ */}
      <section className="py-12 md:py-20 px-4 bg-slate-50 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#2B2B2B] mb-2">ご依頼からお作業までの流れ</h2>
            <p className="text-[15px] md:text-base text-[#6B5B47]">はじめての方でも安心していただけるよう、丁寧にご案内いたします</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6 items-stretch">
            {/* STEP 1 */}
            <div className="bg-white rounded-xl p-7 border border-[#D4C4A8] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[36px] md:text-[48px] font-bold text-[#D4A04A] leading-none">01</span>
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-green-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] md:text-lg font-bold text-[#2B2B2B] mb-3">お電話・LINEでご相談</h3>
              <p className="text-[13px] md:text-[14px] text-[#3B2E1F] leading-[1.8] flex-grow">まずはお気軽にお電話（0120-437-599）またはLINEでご連絡ください。代表・粟野が直接お話を伺い、お客様のご状況を丁寧にお聞きします。ご相談だけでも構いません。</p>
            </div>

            {/* 矢印（モバイルのみ） */}
            <div className="flex justify-center md:hidden"><ArrowDown className="w-5 h-5 text-[#D4C4A8]" /></div>

            {/* STEP 2 */}
            <div className="bg-white rounded-xl p-7 border border-[#D4C4A8] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[36px] md:text-[48px] font-bold text-[#D4A04A] leading-none">02</span>
                <ClipboardList className="w-8 h-8 md:w-10 md:h-10 text-green-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] md:text-lg font-bold text-[#2B2B2B] mb-3">無料でお見積もり訪問</h3>
              <p className="text-[13px] md:text-[14px] text-[#3B2E1F] leading-[1.8] flex-grow">ご希望の日時にお伺いし、実際のお荷物を拝見した上で正確なお見積もりをご提示します。出張費・お見積もりは無料です。お見積もり後のキャンセルも無料ですので、ご安心ください。</p>
            </div>

            <div className="flex justify-center md:hidden"><ArrowDown className="w-5 h-5 text-[#D4C4A8]" /></div>

            {/* STEP 3 */}
            <div className="bg-white rounded-xl p-7 border border-[#D4C4A8] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[36px] md:text-[48px] font-bold text-[#D4A04A] leading-none">03</span>
                <Users className="w-8 h-8 md:w-10 md:h-10 text-green-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] md:text-lg font-bold text-[#2B2B2B] mb-3">ご家族でご検討</h3>
              <p className="text-[13px] md:text-[14px] text-[#3B2E1F] leading-[1.8] flex-grow">お見積もりを元に、ご家族でゆっくりとご検討ください。その場で即決いただく必要はございません。しつこい営業のお電話も一切いたしません。ご不明な点があれば、何度でもご相談可能です。</p>
            </div>

            <div className="flex justify-center md:hidden"><ArrowDown className="w-5 h-5 text-[#D4C4A8]" /></div>

            {/* STEP 4 */}
            <div className="bg-white rounded-xl p-7 border border-[#D4C4A8] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[36px] md:text-[48px] font-bold text-[#D4A04A] leading-none">04</span>
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] md:text-lg font-bold text-[#2B2B2B] mb-3">ご納得いただいてから作業</h3>
              <p className="text-[13px] md:text-[14px] text-[#3B2E1F] leading-[1.8] flex-grow">ご依頼内容にご納得いただけましたら、ご希望の日時にお作業にお伺いします。女性スタッフの同行、仏壇のお焚き上げなど、ご要望に合わせて丁寧に対応いたします。作業完了後、その場でお支払いが可能です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 8. よくある質問 (FAQ) */}
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
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">はい、可能です！当店は大和市福田にございますので、ご予約状況により<strong className="text-red-600">最短15〜30分</strong>でお伺いいたします。お急ぎの場合はお電話にてご相談ください。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 9. 会社概要・許認可 */}
      <section className="py-10 md:py-20 px-3 md:px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 md:gap-3 mb-6 md:mb-10">
            <Building2 className="w-5 h-5 md:w-8 md:h-8 text-gray-700" />
            <h2 className="text-[20px] md:text-3xl font-extrabold text-gray-900">会社概要・許認可</h2>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-[11px] md:text-base font-medium">
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
                    <div className="mt-2 text-[9px] md:text-xs text-gray-500 leading-relaxed bg-gray-50 p-2 md:p-3 rounded border border-gray-200 font-normal">
                      ※家庭から出る一般廃棄物の回収につきましては、各市町村の許可を受けた業者に委託し、各種法令を厳守して処理を行っております。
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🟢 最終CTA */}
      <section className="py-12 md:py-20 px-3 md:px-4 bg-gradient-to-b from-white to-green-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[20px] md:text-4xl font-black text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
            大和市の不用品回収・遺品整理なら<br/>
            地元・福田の<span className="text-green-700">まごころ整理センター</span>にお任せ！
          </h2>
          <p className="text-[11px] md:text-lg text-red-600 mb-6 md:mb-10 font-bold bg-white inline-block px-3 sm:px-4 py-2 md:py-2.5 rounded-full shadow-sm border border-red-100 w-full sm:max-w-2xl sm:mx-auto text-balance leading-snug">
            ＼ 大和市民限定！他社のお見積書提示で最低価格保証 ／
          </p>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 justify-center">
            <div className="w-full md:w-auto">
               <a href="https://lin.ee/Gf8Or5r" className="w-full md:px-12 bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-xl md:rounded-2xl py-3.5 md:py-5 shadow-lg flex items-center justify-center gap-2 md:gap-3 transition-transform active:scale-95 border border-[#05b34c]">
                 <Camera className="w-6 h-6 md:w-10 md:h-10" />
                 <div className="text-left leading-tight">
                   <div className="text-[9px] md:text-sm font-bold opacity-90 mb-0.5">無料で見積りを取る</div>
                   <div className="text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md">LINEで写真を送って相談</div>
                 </div>
               </a>
            </div>
            <div className="w-full md:w-auto mt-2 md:mt-0">
               <a href="tel:0120437599" className="w-full md:px-12 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl md:rounded-2xl py-3.5 md:py-5 shadow-lg flex items-center justify-center gap-2 md:gap-3 border border-[#e65f00] touch-manipulation">
                 <Phone className="w-6 h-6 md:w-10 md:h-10 shrink-0" aria-hidden />
                 <span className="text-left leading-tight">
                   <span className="block text-[9px] md:text-sm font-bold opacity-90 mb-0.5">お電話で相談する</span>
                   <span className="block text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md">0120-437-599</span>
                 </span>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 フッター */}
      <footer className="bg-gray-800 text-gray-300 py-10 md:py-16 px-4 text-center text-[10px] md:text-sm pb-32 md:pb-48">
        <p className="font-extrabold mb-2 md:mb-4 text-sm md:text-xl tracking-widest">神奈川 まごころ整理センター</p>
        <p className="mb-4 md:mb-5 text-gray-400 font-medium">〒242-0024 神奈川県大和市福田５丁目4-11</p>
        <p className="opacity-70">© 2026 神奈川 まごころ整理センター All Rights Reserved.</p>
      </footer>

      {/* 🟢 追従型CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] p-2 md:p-3" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-1 md:gap-2">
          <p className="text-center text-[9px] md:text-xs font-extrabold text-gray-700 px-2 text-balance leading-tight">
            ＼ <span className="text-red-600">しつこい営業なし！</span>出張費・お見積り・キャンセル0円 ／
          </p>
          <div className="flex gap-2 md:gap-2 mt-0.5">
            <a 
              href="https://lin.ee/Gf8Or5r" 
              className="flex-1 min-h-[52px] min-w-0 bg-gradient-to-b from-[#06C755] to-[#04a044] transition-colors text-white rounded-lg md:rounded-xl flex items-center justify-center py-3 md:py-4 px-1.5 md:px-3 shadow-md relative overflow-hidden active:scale-95 border border-[#05b34c] touch-manipulation"
            >
              <div className="absolute top-0 right-0 bg-red-600 text-[8px] md:text-xs font-black px-1.5 md:px-3 py-0.5 rounded-bl-md animate-pulse shadow-sm">無料</div>
              <div className="flex items-center gap-1 md:gap-3 relative z-10">
                <Camera className="w-5 h-5 md:w-9 md:h-9 drop-shadow-md" />
                <div className="text-left">
                  <div className="text-[8px] md:text-xs font-bold leading-tight opacity-95 mb-0.5">無料で見積りを取る</div>
                  <div className="text-[12px] md:text-xl font-black leading-tight tracking-tight drop-shadow-sm">LINEで写真を送って相談</div>
                </div>
              </div>
            </a>
            
            <a 
              href="tel:0120437599" 
              className="flex-1 min-h-[52px] min-w-0 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-lg md:rounded-xl flex items-center justify-center gap-1 md:gap-3 py-3 md:py-4 px-1.5 md:px-3 shadow-md border border-[#e65f00] touch-manipulation"
            >
              <Phone className="w-5 h-5 md:w-9 md:h-9 shrink-0 drop-shadow-md" aria-hidden />
              <span className="text-left">
                <span className="block text-[8px] md:text-xs font-bold leading-tight opacity-95 mb-0.5">お急ぎの方はこちら</span>
                <span className="block text-[12px] md:text-xl font-black leading-tight tracking-tight drop-shadow-sm">お電話で相談する</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}