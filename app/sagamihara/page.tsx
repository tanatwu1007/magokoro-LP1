import React from 'react';
import type { Metadata } from 'next';
import { 
  Phone, MessageCircle, MapPin, Clock, HeartHandshake, 
  CheckCircle2, BadgeJapaneseYen, ClipboardList, Truck,
  HelpCircle, Building2, AlertTriangle, ThumbsUp, 
  Gift, CheckSquare, ArrowRight, ArrowDown, Timer, Star, ShieldCheck, Camera,
  XCircle, CheckCircle, MessageSquareQuote, Flame
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '【神奈川の不用品回収・遺品整理】高価買取で費用が安い！まごころ整理センター',
  description: '神奈川県（大和市・横浜など）の不用品回収、粗大ゴミ処分、遺品整理なら「神奈川 まごころ整理センター」へ。リサイクル買取で回収費用を劇的に安く相殺！搬出・出張費コミコミ。見積もり後のキャンセル無料。最短30分で急行します！',
  formatDetection: { telephone: false },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "神奈川 まごころ整理センター",
    "image": "https://magokoro-lp-1.vercel.app/logo.png",
    "description": "神奈川県大和市を中心に不用品回収、遺品整理、ゴミ屋敷清掃を行っております。高価買取で費用を大幅に削減します。他社のお見積り書提示で最低価格保証。",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "大和市",
      "addressRegion": "神奈川県",
      "postalCode": "242-0024",
      "streetAddress": "福田５丁目4-11"
    },
    "telephone": "0120-437-599",
    "priceRange": "¥19,800~",
    "areaServed": ["神奈川県", "大和市", "横浜市", "相模原市", "川崎市", "海老名市", "座間市", "綾瀬市", "藤沢市"]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-[100px] md:pb-24 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 🟢 ヘッダー */}
      <header className="bg-white py-2 px-3 md:px-6 sticky top-0 z-40 shadow-sm border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="神奈川 まごころ整理センター" width={952} height={242} className="h-8 md:h-14 w-auto object-contain" />
        </div>
        <div className="text-[9px] md:text-sm bg-green-50 text-green-700 border border-green-600 px-2.5 py-1 md:py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1">
          <Timer className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
          24時間受付中
        </div>
      </header>

      {/* 🟢 1. ファーストビュー */}
      <section className="relative pb-8 md:pb-16 pt-6 md:pt-12 min-h-[85vh] flex items-center flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="整理された綺麗な部屋"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-3 w-full text-center flex flex-col items-center">
          
          <div className="bg-red-600 text-white font-black px-3 py-1.5 md:py-2 rounded-t-lg text-[10px] md:text-base shadow-lg flex items-center justify-center gap-1 mb-0 border-x border-t border-red-500 animate-pulse w-[95%] md:w-auto">
            <Flame className="w-3.5 h-3.5 md:w-5 md:h-5 fill-yellow-300 text-yellow-300" />
            <span className="truncate">【3・4月 引越しシーズン】ご予約殺到中！</span>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 mb-4 md:mb-6 bg-white/10 p-2 rounded-b-lg rounded-t-sm backdrop-blur-sm border border-white/20 w-[95%] md:w-auto">
            <div className="bg-white text-green-800 font-extrabold px-2.5 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm shadow-lg border border-green-500">
              年間1,200件以上対応<span className="hidden md:inline">（神奈川県内）</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 font-extrabold px-2.5 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm shadow-lg flex items-center gap-1 border border-yellow-300">
              <div className="flex gap-0.5 mr-0.5">
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-900" />
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-900" />
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-900" />
              </div>
              お客様満足度98.3%
            </div>
          </div>

          <h2 className="text-[24px] sm:text-[26px] md:text-5xl font-extrabold text-white leading-snug mb-4 tracking-tight drop-shadow-xl w-full px-1">
            他社で25万円の不用品回収が、<br />
            <span className="text-yellow-400 border-b-2 md:border-b-4 border-yellow-400 pb-0.5 md:pb-1 inline-block mt-1">買取相殺で実質0円に！？</span>
          </h2>
          
          <div className="bg-white inline-block px-4 py-2 md:py-3 transform -rotate-1 shadow-2xl rounded-lg mb-5 w-[95%] md:w-auto">
            <p className="text-[16px] md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              捨てるのちょっと待って！<br className="md:hidden" />回収費用を<span className="text-red-600 text-xl md:text-4xl ml-1">大幅に安く</span>します
            </p>
          </div>

          <div className="w-[98%] max-w-2xl bg-white border-2 md:border-4 border-red-500 rounded-xl p-3 md:p-6 mb-5 shadow-2xl relative mt-2 mx-auto">
            <div className="bg-red-600 text-white text-[10px] md:text-base font-black py-1 px-4 md:px-6 absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-full shadow-md whitespace-nowrap">
              ＼ 今月の特別割引、残り3枠！ ／
            </div>
            <div className="flex items-center justify-center gap-1 text-red-600 font-bold mb-1.5 mt-2">
              <Gift className="w-4 h-4 md:w-6 md:h-6" />
              <span className="text-[12px] md:text-xl tracking-tight">【相見積もり大歓迎】最低価格保証</span>
            </div>
            <p className="text-gray-900 font-bold text-[12px] md:text-xl mt-1 leading-snug">
              他社の見積書をLINEで送るだけ！<br className="md:hidden"/>
              <span className="text-red-600 text-lg md:text-3xl mx-0.5 font-extrabold bg-yellow-100 px-1 rounded inline-block border border-yellow-300 leading-tight">「他社より必ずお安く」</span>します！
            </p>
            <p className="text-[9px] md:text-xs text-gray-500 font-medium mt-2.5 leading-tight text-center bg-gray-50 p-1.5 rounded">※当社の買取基準を満たすお品物がある場合に適用いたします。</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-1.5 max-w-4xl mx-auto w-full px-1">
            <div className="bg-white/95 border border-green-400 rounded-lg py-1.5 px-1 flex flex-col items-center justify-center gap-0.5 shadow-lg font-bold text-gray-800 text-[9px] md:text-xs text-center leading-tight">
              <ShieldCheck className="text-blue-500 w-4 h-4 md:w-6 md:h-6" />見積後<br/>キャンセル無料
            </div>
            <div className="bg-white/95 border border-green-400 rounded-lg py-1.5 px-1 flex flex-col items-center justify-center gap-0.5 shadow-lg font-bold text-gray-800 text-[9px] md:text-xs text-center leading-tight">
              <Clock className="text-orange-500 w-4 h-4 md:w-6 md:h-6" />最短30分で<br/>急行可能
            </div>
            <div className="bg-white/95 border border-green-400 rounded-lg py-1.5 px-1 flex flex-col items-center justify-center gap-0.5 shadow-lg font-bold text-gray-800 text-[9px] md:text-xs text-center leading-tight">
              <Building2 className="text-indigo-500 w-4 h-4 md:w-6 md:h-6" />損害賠償保険<br/>加入済み
            </div>
            <div className="bg-white/95 border border-green-400 rounded-lg py-1.5 px-1 flex flex-col items-center justify-center gap-0.5 shadow-lg font-bold text-gray-800 text-[9px] md:text-xs text-center leading-tight">
              <HeartHandshake className="text-pink-500 w-4 h-4 md:w-6 md:h-6" />女性スタッフ<br/>同行OK
            </div>
          </div>
        </div>
      </section>

      {/* 🚨 お急ぎショートカット */}
      <section className="bg-gradient-to-b from-green-50 to-white py-6 md:py-8 px-3 md:px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 font-bold text-[11px] md:text-base mb-2.5 bg-red-50 inline-block px-3 py-1 rounded-full border border-red-100">
            ＼ お急ぎの方は今すぐこちら！最短30分でお伺い ／
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 mt-1">
            <a href="#" className="flex-1 bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-xl py-3 md:py-4 px-3 shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 border border-[#05b34c]">
              <Camera className="w-6 h-6 md:w-10 md:h-10" />
              <div className="text-left leading-tight">
                <div className="text-[9px] md:text-xs font-bold opacity-90 mb-0.5">他社見積書・部屋の写真を送るだけ!</div>
                <div className="text-[15px] md:text-xl font-extrabold tracking-tight drop-shadow-sm">LINEで最短5分スピード査定</div>
              </div>
            </a>
            <a href="tel:0120437599" className="flex-1 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl py-3 md:py-4 px-3 shadow-lg flex items-center justify-center gap-2 border border-[#e65f00] touch-manipulation">
              <Phone className="w-6 h-6 md:w-10 md:h-10 shrink-0" aria-hidden />
              <span className="text-left leading-tight">
                <span className="block text-[9px] md:text-xs font-bold opacity-90 mb-0.5">相見積もり・ご相談だけでも大歓迎</span>
                <span className="block text-[15px] md:text-xl font-extrabold tracking-tight drop-shadow-sm">0120-437-599</span>
              </span>
            </a>
          </div>
          <p className="text-[10px] md:text-xs text-gray-700 mt-3 font-bold text-balance bg-gray-50 p-1.5 rounded-md inline-block border border-gray-200 w-full sm:w-auto">
            ※とりあえず見積もりだけ…でも大歓迎！<span className="text-red-500">しつこい営業は一切いたしません。</span>
          </p>
        </div>
      </section>

      {/* 🟢 2. 悩み共感 ＆ 特殊清掃等への対応アピール */}
      <section className="py-10 md:py-16 px-4 bg-slate-800 text-white relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1.5 shadow-lg border border-gray-200 z-10">
          <ArrowDown className="w-5 h-5 text-green-600 animate-bounce" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 pt-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-[20px] md:text-3xl font-extrabold mb-5 text-yellow-400 text-center md:text-left leading-tight">
              不用品回収・遺品整理で<br className="md:hidden"/>こんなお悩みありませんか？
            </h2>
            <ul className="space-y-3.5 md:space-y-5 text-[14px] md:text-lg font-medium bg-slate-700/50 p-4 md:p-0 rounded-xl md:bg-transparent">
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">他社の見積もりが<strong className="text-yellow-200">高すぎて驚いた。</strong>もっと安く済ませたい…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">後から<strong className="text-yellow-200">「追加料金」</strong>を請求される悪徳業者が怖い…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">重い家具や家電、<strong className="text-yellow-200">自分たちだけでは</strong>外に運び出せない…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">ゴミ屋敷状態で恥ずかしい。<strong className="text-yellow-200">他社に断られた…</strong></span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <img
              src="https://images.unsplash.com/photo-1584820927498-cafe2c11866e?auto=format&fit=crop&q=80&w=800"
              alt="片付けの悩み"
              loading="lazy"
              className="w-full h-44 md:h-72 object-cover rounded-xl md:rounded-2xl shadow-xl border-2 md:border-4 border-slate-600"
            />
          </div>
        </div>
        
        <div className="mt-8 md:mt-16 text-center max-w-4xl mx-auto w-full">
          <p className="text-xl md:text-3xl font-black mb-2 text-white opacity-80">↓↓↓</p>
          <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-4 px-3 md:py-6 md:px-8 rounded-xl border border-slate-600 shadow-xl w-[98%] mx-auto">
            <p className="text-[17px] md:text-3xl font-extrabold text-white leading-snug">
              他社で断られるような案件も、<br className="md:hidden" />
              <span className="bg-red-600 text-white px-2.5 py-0.5 md:py-1 rounded-md mx-1 inline-block mt-1.5 md:mt-0 text-[20px] md:text-4xl shadow-md border border-red-500 transform scale-105">完全丸投げ</span> で解決します！
            </p>
            <p className="text-[10px] md:text-sm text-gray-300 mt-3 md:mt-6 font-medium text-balance">※ゴミ屋敷・特殊清掃・孤独死後の片付け等、困難な現場も秘密厳守で対応いたします。</p>
          </div>
        </div>
      </section>

      {/* 🟢 3. 他社との比較表 */}
      <section className="py-10 md:py-20 px-2 md:px-4 bg-green-50 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <p className="text-green-700 font-bold text-xs md:text-base mb-1.5">相見積もりで勝つ自信があります！</p>
            <h2 className="text-[20px] md:text-4xl font-extrabold text-gray-900 leading-tight">
              なぜ安くて安心？<br className="md:hidden" /><span className="text-red-600 border-b-2 border-red-300 pb-0.5">他社との圧倒的な違い</span>
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-600">
            <table className="w-full text-center table-fixed">
              <thead>
                <tr>
                  <th className="w-[28%] p-1.5 md:p-5 bg-gray-50 border-r border-gray-200"></th>
                  <th className="w-[42%] p-2 md:p-6 bg-gradient-to-b from-green-500 to-green-700 text-white font-extrabold text-sm md:text-2xl border-r border-green-800 relative shadow-inner">
                    当店<br/><span className="text-[8px] md:text-sm font-medium opacity-90 block mt-0 md:mt-0.5">（まごころ整理）</span>
                  </th>
                  <th className="w-[30%] p-2 md:p-5 bg-gray-500 text-white font-bold text-[10px] md:text-lg">
                    一般的な他社
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-lg">
                <tr className="border-b border-gray-200">
                  <th className="p-1.5 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[9px] md:text-base leading-tight">お見積り後<br/>キャンセル</th>
                  <td className="p-2 md:p-5 bg-green-50 text-green-700 font-extrabold border-r border-green-200">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <CheckCircle className="w-5 h-5 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[11px] md:text-xl">完全無料！</span>
                    </div>
                  </td>
                  <td className="p-2 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <XCircle className="w-4 h-4 md:w-8 md:h-8 text-gray-400" />
                      <span className="text-[9px] md:text-sm">出張費請求も</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-1.5 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[9px] md:text-base leading-tight">作業後の<br/>追加料金</th>
                  <td className="p-2 md:p-5 bg-green-50 text-green-700 font-extrabold border-r border-green-200">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <CheckCircle className="w-5 h-5 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[11px] md:text-xl">一切なし！</span>
                    </div>
                  </td>
                  <td className="p-2 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <AlertTriangle className="w-4 h-4 md:w-8 md:h-8 text-yellow-500" />
                      <span className="text-[9px] md:text-sm">高額トラブルも</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-1.5 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[9px] md:text-base leading-tight">相見積もり<br/>での対応</th>
                  <td className="p-2 md:p-5 bg-green-50 text-green-700 font-extrabold border-r border-green-200">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <CheckCircle className="w-5 h-5 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[10px] md:text-lg">見積書提示で値引</span>
                    </div>
                  </td>
                  <td className="p-2 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <XCircle className="w-4 h-4 md:w-8 md:h-8 text-gray-400" />
                      <span className="text-[9px] md:text-sm">値引きなし</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="p-1.5 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[9px] md:text-base leading-tight">万が一の<br/>損害補償</th>
                  <td className="p-2 md:p-5 bg-green-50 text-green-700 font-extrabold border-r border-green-200">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <CheckCircle className="w-5 h-5 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[10px] md:text-lg">保険加入済み</span>
                    </div>
                  </td>
                  <td className="p-2 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <XCircle className="w-4 h-4 md:w-8 md:h-8 text-gray-400" />
                      <span className="text-[9px] md:text-sm">未加入業者も</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🚨 中間CTA */}
      <section className="bg-white py-6 md:py-10 px-3 md:px-4 border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-600 font-bold text-[11px] md:text-lg mb-3 bg-red-50 inline-block px-3 py-1.5 rounded-full border border-red-100 w-full sm:w-auto truncate">
            ＼ 他社の見積書を送るだけ！最低価格保証で無料査定 ／
          </p>
          <a href="#" className="w-full bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-xl py-3 md:py-5 px-3 shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 border border-[#05b34c]">
            <Camera className="w-7 h-7 md:w-10 md:h-10" />
            <div className="text-left leading-tight">
              <div className="text-[10px] md:text-sm font-bold opacity-90 mb-0.5">見積書・部屋の写真をパシャッと送るだけ!</div>
              <div className="text-[16px] md:text-2xl font-extrabold tracking-tight drop-shadow-md">LINEで最短5分スピード査定</div>
            </div>
          </a>
        </div>
      </section>

      {/* 🟢 4. 料金プラン */}
      <section className="py-12 md:py-20 px-4 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-[24px] md:text-4xl font-extrabold text-gray-900 mb-4">
              分かりやすい安心料金プラン
            </h2>
            <p className="text-red-600 font-extrabold text-sm md:text-lg bg-white py-3 px-5 rounded-xl shadow-md border-2 border-red-200 inline-block w-full md:w-auto leading-relaxed text-balance">
              ★相見積もり大歓迎！<br className="md:hidden"/>以下の料金から、さらに<span className="text-red-600 text-lg md:text-2xl mx-1 bg-yellow-100 px-1 rounded">【買取金額】</span>を差し引きます！
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="bg-gray-700 text-white text-center py-3 font-bold text-sm md:text-base tracking-widest">ちょっとしたお片付け</div>
              <div className="p-6 md:p-8 text-center flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">軽トラ積み放題</h3>
                <div className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2 mt-4 drop-shadow-sm">19,800<span className="text-lg font-bold text-gray-900 ml-1">円〜</span></div>
                <p className="text-xs text-gray-700 font-bold mb-5 mt-4 bg-green-50 py-2 rounded-lg border border-green-100">間取り目安：1R 〜 1K</p>
                <ul className="text-sm md:text-base text-gray-600 text-left space-y-3 font-medium">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> 押し入れ〜1部屋程度の不用品に</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> 単身のお引越し・片付けに</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-green-500 relative flex flex-col z-10 transform scale-105 md:scale-110 my-4 md:my-0">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs md:text-sm font-extrabold px-6 py-1.5 rounded-b-lg shadow-md z-20 whitespace-nowrap">1番人気！おすすめ</div>
              <div className="bg-gradient-to-b from-green-500 to-green-600 text-white text-center py-4 font-bold text-base md:text-lg tracking-widest mt-6 md:mt-0">ごっそりお片付け</div>
              <div className="p-6 md:p-8 text-center flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">2t平積みパック</h3>
                <div className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2 mt-4 drop-shadow-sm">39,800<span className="text-lg font-bold text-gray-900 ml-1">円〜</span></div>
                <p className="text-xs text-gray-700 font-bold mb-5 mt-4 bg-green-50 py-2 rounded-lg border border-green-100">間取り目安：1DK 〜 2DK</p>
                <ul className="text-sm md:text-base text-gray-600 text-left space-y-3 font-medium">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> 大型家具・家電が複数ある場合に</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> 2名分の荷物・遺品整理に</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="bg-gray-700 text-white text-center py-3 font-bold text-sm md:text-base tracking-widest">家まるごと・ゴミ屋敷</div>
              <div className="p-6 md:p-8 text-center flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">2t箱型パック</h3>
                <div className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2 mt-4 drop-shadow-sm">79,800<span className="text-lg font-bold text-gray-900 ml-1">円〜</span></div>
                <p className="text-xs text-gray-700 font-bold mb-4 mt-2 bg-green-50 py-2 rounded-lg border border-green-100">間取り目安：2LDK 〜 3LDK</p>
                <ul className="text-sm md:text-base text-gray-600 text-left space-y-3 font-medium">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> 一軒家まるごとの遺品整理に</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> 大量の不用品・ゴミ屋敷対応に</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white border-2 border-green-200 rounded-2xl p-5 md:p-8 text-center shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white font-bold px-6 py-1.5 rounded-full text-sm shadow-md whitespace-nowrap">
              安心のコミコミ価格！
            </div>
            <p className="font-extrabold text-gray-900 mb-4 text-base md:text-xl mt-2">当店のパック料金は、<span className="text-red-600 border-b-2 border-red-200">以下の作業がすべて無料（込み）</span>です！</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-green-800 font-bold">
              <span className="bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">搬出作業費</span>
              <span className="bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">出張費</span>
              <span className="bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">車両費</span>
              <span className="bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">スタッフ費(規定内)</span>
              <span className="bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">エアコン取り外し</span>
              <span className="bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">簡易清掃</span>
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 mt-5 leading-relaxed text-left font-medium bg-gray-50 p-3 rounded text-balance">
              ※階段が3階以上の場合や特殊な解体が必要な場合は事前にお見積りにて明確にお伝えします。<br/>
              ※リサイクル家電には別途法定リサイクル料金がかかる場合がございますが、買取可能な場合は相殺いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 🟢 5. 解決事例 */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[24px] md:text-4xl font-extrabold text-center text-gray-900 mb-10 md:mb-14 leading-tight">
            驚きの「買取相殺」<br className="md:hidden"/>ビフォーアフター
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs md:text-sm font-extrabold px-5 py-2 rounded-br-2xl z-20 shadow-lg">
                15万円もお得に！
              </div>
              <div className="flex w-full h-56 md:h-64 relative bg-gray-100">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <img src="https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&q=80&w=600" alt="散らかった部屋 Before" loading="lazy" className="w-full h-full object-cover filter brightness-90"/>
                  <div className="absolute top-1.5 left-1.5 bg-gray-900/80 text-white text-[11px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">Before</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600" alt="綺麗な部屋 After" loading="lazy" className="w-full h-full object-cover"/>
                  <div className="absolute top-1.5 left-1.5 bg-blue-600/90 text-white text-[11px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-xl border border-gray-100 z-10">
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="bg-green-700 text-white text-xs md:text-sm font-bold inline-block px-3 py-1.5 rounded-full mb-3 shadow-sm">大和市 A様邸（2LDK 実家の遺品整理）</div>
                  <div className="flex gap-1.5 text-[9px] md:text-sm text-gray-600 mb-3 font-medium">
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">スタッフ3名</span>
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">作業時間：約4時間</span>
                  </div>
                </div>
                <div className="bg-white p-3 md:p-5 rounded-xl text-center border border-gray-200 shadow-sm relative">
                  <p className="text-gray-800 text-[11px] md:text-base mb-2 font-bold border-b border-dashed border-gray-300 pb-2">他社見積り：250,000円だったのが…</p>
                  <div className="text-gray-500 text-[10px] md:text-sm mt-2 font-medium">作業費・処分費：180,000円</div>
                  <div className="text-red-500 font-extrabold my-1 text-[13px] md:text-xl">買取額：- 80,000円</div>
                  <div className="text-[9px] md:text-xs text-gray-700 mb-2 font-bold text-left bg-red-50 p-2 rounded-md border border-red-100 leading-relaxed">
                    【買取の理由】製造5年以内の大型冷蔵庫と、状態の良いブランド家具等にしっかり値がつきました！
                  </div>
                  <div className="border-t border-gray-100 my-2 pt-2">
                    <div className="text-[17px] md:text-3xl font-black text-gray-900 tracking-tight">
                      お支払総額：100,000<span className="text-[10px] md:text-lg font-bold">円</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs md:text-sm font-extrabold px-5 py-2 rounded-br-2xl z-20 shadow-sm">
                費用相殺で実質0円！
              </div>
              <div className="flex w-full h-40 md:h-64 relative bg-gray-100">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <Image src="/b-yokohama-before.png" alt="不用品 Before" fill sizes="50vw" className="object-cover filter brightness-90"/>
                  <div className="absolute top-1.5 left-1.5 bg-gray-900/80 text-white text-[9px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">Before</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <Image src="/b-yokohama-after.png" alt="スッキリ After" fill sizes="50vw" className="object-cover"/>
                  <div className="absolute top-1.5 left-1.5 bg-blue-600/90 text-white text-[9px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md border border-gray-100 z-10">
                  <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-green-600" />
                </div>
              </div>

              <div className="p-4 md:p-8 flex-grow flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="bg-green-700 text-white text-[10px] md:text-sm font-bold inline-block px-2.5 py-1 rounded-full mb-2.5 shadow-sm">横浜市 B様（1K 引越し不用品回収）</div>
                  <div className="flex gap-1.5 text-[9px] md:text-sm text-gray-600 mb-3 font-medium">
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">スタッフ2名</span>
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">作業時間：約1.5時間</span>
                  </div>
                </div>
                <div className="bg-white p-3 md:p-5 rounded-xl text-center border border-gray-200 shadow-sm relative">
                  <p className="text-gray-800 text-[11px] md:text-base mb-2 font-bold border-b border-dashed border-gray-300 pb-2">引越しに伴う家具・家電の処分</p>
                  <div className="text-gray-500 text-[10px] md:text-sm mt-2 font-medium">作業費・処分費：39,800円</div>
                  <div className="text-red-500 font-extrabold my-1 text-[13px] md:text-xl">買取額：- 39,800円</div>
                  <div className="text-[9px] md:text-xs text-gray-700 mb-2 font-bold text-left bg-red-50 p-2 rounded-md border border-red-100 leading-relaxed">
                    【買取の理由】大切に使われていたドラム式洗濯機と液晶テレビが新しく、作業費を全額相殺できました！
                  </div>
                  <div className="border-t border-gray-100 my-2 pt-2">
                    <div className="text-[18px] md:text-4xl font-black text-red-600 tracking-tight">
                      お支払総額：実質 0<span className="text-[10px] md:text-lg font-bold text-gray-900">円！</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 NEW! お客様の声 */}
      <section className="py-12 md:py-20 px-4 bg-green-50 border-t border-green-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-[24px] md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              お客様から喜びの声が<br className="md:hidden" />届いております！
            </h2>
            <div className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white py-1.5 md:py-2 px-5 md:px-6 rounded-full shadow-sm border border-gray-200">
               <span className="font-bold text-gray-700 text-xs md:text-base">総合評価</span>
               <span className="text-lg md:text-xl font-black text-gray-900">4.8</span>
               <div className="flex gap-0.5">
                 <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                 <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                 <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                 <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                 <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-200">
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">相見積もりで一番安かったです！</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                他社の見積書をLINEで送ったところ、しっかり査定していただき驚くほど安くなりました。当日の作業も素早く大満足です。
              </p>
              <p className="text-[10px] md:text-xs text-gray-400 text-right font-bold">大和市 / 40代 男性</p>
            </div>
            
            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-200">
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">女性スタッフさんがいて安心</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                一人暮らしなので男性だけが家に来るのが不安でしたが、予約時に女性スタッフ同行をお願いできたので安心して任せられました。気配りしていただき助かりました。
              </p>
              <p className="text-[10px] md:text-xs text-gray-400 text-right font-bold">横浜市 / 20代 女性</p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-200">
              <div className="flex gap-1 mb-2 md:mb-3">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">ゴミ屋敷状態でも快く対応</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                足の踏み場もないほど散らかっており他社に断られましたが、こちらは快く引き受けてくれました。追加料金もなく誠実な業者です。
              </p>
              <p className="text-[10px] md:text-xs text-gray-400 text-right font-bold">相模原市 / 50代 男性</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 6. ご依頼の流れ */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[24px] md:text-4xl font-extrabold text-center text-gray-900 mb-10 md:mb-16">
            ご依頼のカンタン4ステップ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
            <div className="hidden md:block absolute top-20 left-16 right-16 h-1.5 bg-green-100 z-0"></div>
            
            <div className="text-center relative z-10 bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-200 md:border-none">
              <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-3 md:mb-5 relative">
                <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=500" alt="相談" loading="lazy" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 bg-green-600 text-white font-black flex items-center justify-center rounded-br-xl text-sm md:text-xl shadow-md">1</div>
              </div>
              <h3 className="font-extrabold text-sm md:text-xl mb-1.5 md:mb-3 text-gray-900">無料相談・見積り</h3>
              <p className="text-[11px] md:text-sm text-gray-600 font-medium">LINEで部屋の写真をお送りいただくとスムーズです。</p>
            </div>
            
            <div className="text-center relative z-10 bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-200 md:border-none">
              <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-3 md:mb-5 relative">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500" alt="見積もり" loading="lazy" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 bg-green-600 text-white font-black flex items-center justify-center rounded-br-xl text-sm md:text-xl shadow-md">2</div>
              </div>
              <h3 className="font-extrabold text-sm md:text-xl mb-1.5 md:mb-3 text-gray-900">現地調査・確定</h3>
              <p className="text-[11px] md:text-sm text-gray-600 font-medium">正確な金額を算出。<br/><span className="text-red-500 font-bold bg-red-50 px-1 rounded">見積後のキャンセル無料！</span></p>
            </div>
            
            <div className="text-center relative z-10 bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-200 md:border-none">
              <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-3 md:mb-5 relative">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=500" alt="作業" loading="lazy" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 bg-green-600 text-white font-black flex items-center justify-center rounded-br-xl text-sm md:text-xl shadow-md">3</div>
              </div>
              <h3 className="font-extrabold text-sm md:text-xl mb-1.5 md:mb-3 text-gray-900">スピーディな作業</h3>
              <p className="text-[11px] md:text-sm text-gray-600 font-medium">プロが迅速に運び出します。全て丸投げでOK！</p>
            </div>
            
            <div className="text-center relative z-10 bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-slate-200 md:border-none">
              <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-3 md:mb-5 relative">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=500" alt="精算" loading="lazy" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 bg-green-600 text-white font-black flex items-center justify-center rounded-br-xl text-sm md:text-xl shadow-md">4</div>
              </div>
              <h3 className="font-extrabold text-sm md:text-xl mb-1.5 md:mb-3 text-gray-900">ご精算（買取相殺）</h3>
              <p className="text-[10px] md:text-sm text-gray-600 font-medium">作業後にお支払い。買取でお得に。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. 代表挨拶（デザインリニューアル） */}
      <section className="py-10 md:py-20 px-3 md:px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* 画像部分：スクショ通り青い枠線の円形 */}
          <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 rounded-full border-[6px] border-[#104285] p-1.5 shadow-lg mx-auto md:mx-0 bg-white">
            <div className="relative w-full h-full overflow-hidden rounded-full">
              <Image src="/IMG_1828.jpg" alt="代表 粟野 匠音" fill sizes="(max-width: 768px) 128px, 256px" className="object-cover"/>
            </div>
          </div>
          {/* テキスト部分 */}
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#104285] mb-2 md:mb-4 tracking-tight">代表挨拶</h2>
            <div className="mb-4 md:mb-6">
              <span className="text-sm md:text-lg font-bold text-[#104285] block mb-0.5">代表</span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#104285] tracking-widest">粟野 匠音</h3>
            </div>
            <p className="text-gray-800 text-[13px] md:text-[16px] leading-relaxed md:leading-loose text-left font-medium">
              『神奈川 まごころ整理センター』代表の粟野 匠音（あわの たくと）です。当サイトをご覧いただき、誠にありがとうございます。<br/>
              私たちは、単なる不用品回収に留まらず、プロフェッショナルな技術と知識に基づいた確実な『整理』をご提供することを最優先と考えております。<br/>
              不要になったお品物を、単に処分するのではなく、新しい価値を見出し、高価買取を行うことで、お客様のご負担を大幅に軽減いたします。<br/>
              プライバシー保護を徹底し、誠実かつ迅速に対応させていただきます。どのようなご相談でも、お気軽にお申し付けください。
            </p>
          </div>
        </div>
      </section>

      {/* 🟢 SEO対策：対応エリア一覧 */}
      <section className="py-8 md:py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center font-bold text-gray-800 mb-3 text-sm md:text-base flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />対応エリア（神奈川県全域）
          </h3>
          <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed text-center bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-200 font-medium">
            大和市 / 横浜市 / 川崎市 / 相模原市 / 海老名市 / 座間市 / 綾瀬市 / 藤沢市 / 茅ヶ崎市 / 鎌倉市 / 逗子市 / 平塚市 / 厚木市 / 伊勢原市 / 秦野市 / 横須賀市 / 三浦市 / 小田原市 など、神奈川県全域に最短30分で無料出張お見積りにお伺いいたします！遠方の場合もまずはご相談ください。
          </p>
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
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">LINE査定では、どんな写真を送ればいいですか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">綺麗に撮る必要はありません！「お部屋全体がわかる写真」「処分したい大型家具・家電の写真」など、2〜3枚をパシャッと撮って送るだけでOKです。</span>
              </p>
            </div>
            
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">今日すぐに来てほしいのですが、当日対応できますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">はい、可能です！ご予約状況により<strong className="text-red-600">最短30分</strong>でお伺いいたします。お急ぎの場合はお電話にてご相談ください。</span>
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">ゴミ屋敷で足の踏み場もありませんが、お願いできますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">そのままの状態で全く問題ありません！他社で断られるような困難な現場や、孤独死・特殊清掃の現場も秘密厳守でプロが対応いたします。</span>
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">エアコンの取り外しなどはしてもらえますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">はい、お任せください。標準的なエアコンの取り外し作業も対応可能です。買取可能な高年式エアコンであれば、取り外し費用を含めてもプラスになるケースがございます。</span>
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">見積もり後にキャンセルしても本当にお金はかかりませんか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed"><strong className="text-red-600">完全無料です。</strong>金額にご納得いただけない場合はお気兼ねなくお断りください。強引な営業も一切いたしません。</span>
              </p>
            </div>
            
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">神奈川県外（東京や静岡など）ですがお願いできますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">基本的には神奈川県内を中心としておりますが、町田市や東京都内の隣接エリアなど、状況により出張可能な場合がございます。まずは一度LINE等でご相談ください。</span>
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
                  <td className="py-3 md:py-5 px-3 md:px-6 text-gray-900">〒242-0024<br className="md:hidden"/> 神奈川県大和市福田５丁目4-11</td>
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
            神奈川県の不用品回収・遺品整理なら<br/>
            <span className="text-green-700">まごころ整理センター</span>にお任せ！
          </h2>
          <p className="text-[11px] md:text-lg text-red-600 mb-6 md:mb-10 font-bold bg-white inline-block px-4 py-2 md:py-2.5 rounded-full shadow-sm border border-red-100 w-full sm:w-auto truncate">
            ＼ 他社のお見積書提示で最低価格保証 ／
          </p>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 justify-center">
            <a href="#" className="w-full md:w-auto md:px-12 bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-xl md:rounded-2xl py-3.5 md:py-5 shadow-lg flex items-center justify-center gap-2 md:gap-3 transition-transform active:scale-95 border border-[#05b34c]">
              <Camera className="w-6 h-6 md:w-10 md:h-10" />
              <div className="text-left leading-tight">
                <div className="text-[9px] md:text-sm font-bold opacity-90 mb-0.5">匿名OK・24時間受付中</div>
                <div className="text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md">LINE無料査定</div>
              </div>
            </a>
            <a href="tel:0120437599" className="w-full md:w-auto md:px-12 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl md:rounded-2xl py-3.5 md:py-5 shadow-lg flex items-center justify-center gap-2 md:gap-3 border border-[#e65f00] touch-manipulation">
              <Phone className="w-6 h-6 md:w-10 md:h-10 shrink-0" aria-hidden />
              <span className="text-left leading-tight">
                <span className="block text-[9px] md:text-sm font-bold opacity-90 mb-0.5">最短30分で急行！相談だけでもOK</span>
                <span className="block text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md">0120-437-599</span>
              </span>
            </a>
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
          <p className="text-center text-[9px] md:text-xs font-extrabold text-gray-700 truncate px-1">
            ＼ <span className="text-red-600">しつこい営業なし！</span>写真送るだけ・相見積もり歓迎 ／
          </p>
          <div className="flex gap-1.5 md:gap-2 mt-0.5">
            <a 
              href="#" 
              className="flex-1 bg-gradient-to-b from-[#06C755] to-[#04a044] transition-colors text-white rounded-lg md:rounded-xl flex items-center justify-center py-2.5 md:py-4 px-1 md:px-3 shadow-md relative overflow-hidden active:scale-95 border border-[#05b34c]"
            >
              <div className="absolute top-0 right-0 bg-red-600 text-[8px] md:text-xs font-black px-1.5 md:px-3 py-0.5 rounded-bl-md animate-pulse shadow-sm">20%UP</div>
              <div className="flex items-center gap-1 md:gap-3 relative z-10">
                <Camera className="w-5 h-5 md:w-9 md:h-9 drop-shadow-md" />
                <div className="text-left">
                  <div className="text-[8px] md:text-xs font-bold leading-tight opacity-95 mb-0.5">最短5分返信</div>
                  <div className="text-[13px] md:text-xl font-black leading-tight tracking-tight drop-shadow-sm">LINE査定</div>
                </div>
              </div>
            </a>
            
            <a 
              href="tel:0120437599" 
              className="flex-1 min-h-[52px] min-w-0 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-lg md:rounded-xl flex items-center justify-center gap-1 md:gap-3 py-2.5 md:py-4 px-1 md:px-3 shadow-md border border-[#e65f00] touch-manipulation"
            >
              <Phone className="w-5 h-5 md:w-9 md:h-9 shrink-0 drop-shadow-md" aria-hidden />
              <span className="text-left">
                <span className="block text-[8px] md:text-xs font-bold leading-tight opacity-95 mb-0.5">最短30分急行</span>
                <span className="block text-[13px] md:text-xl font-black leading-tight tracking-tight drop-shadow-sm">電話相談</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}