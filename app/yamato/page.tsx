import React from 'react';
import type { Metadata } from 'next';
import { 
  Phone, MessageCircle, MapPin, Clock, HeartHandshake, 
  CheckCircle2, BadgeJapaneseYen, ClipboardList, Truck,
  HelpCircle, Building2, AlertTriangle, ThumbsUp, 
  Gift, CheckSquare, ArrowRight, ArrowDown, Timer, Star, ShieldCheck, Camera,
  XCircle, CheckCircle, MessageSquareQuote, Flame
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【大和市民限定】不用品回収・遺品整理なら地元福田のまごころ整理センター',
  description: '大和市の不用品回収、粗大ゴミ処分、遺品整理なら地元・福田の「まごころ整理センター」へ！大和市民限定の買取20%UPキャンペーン実施中。福田から最短15分で急行、出張費・見積もり完全無料です。',
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "まごころ整理センター 大和市本店",
    "image": "https://magokoro-lp-1.vercel.app/logo.png",
    "description": "大和市密着！不用品回収、遺品整理、ゴミ屋敷清掃を高価買取で費用を大幅に削減します。地元・大和市福田から最短15分で急行。",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "大和市",
      "addressRegion": "神奈川県",
      "postalCode": "242-0024",
      "streetAddress": "福田５丁目4-11"
    },
    "telephone": "090-1383-5108",
    "priceRange": "¥19,800~",
    "areaServed": ["大和市"]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-[100px] md:pb-24 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 🟢 ヘッダー */}
      <header className="bg-white py-2 px-3 md:px-6 sticky top-0 z-40 shadow-sm border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* 🎯 圧倒的地元アピール */}
          <div className="text-[9px] md:text-xs font-black text-red-600 border-2 border-red-500 bg-red-50 px-1.5 py-0.5 rounded shadow-sm">大和市福田の地元企業</div>
          <img src="/logo.png" alt="大和市 まごころ整理センター" className="h-5 md:h-10 object-contain" />
        </div>
        <div className="text-[9px] md:text-sm bg-green-50 text-green-700 border border-green-600 px-2.5 py-1 md:py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1">
          <Timer className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
          24時間受付
        </div>
      </header>

      {/* 🟢 1. ファーストビュー（大和市民特化） */}
      <section className="relative pb-8 md:pb-16 pt-6 md:pt-12 min-h-[85vh] flex items-center flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="整理された綺麗な部屋" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-3 w-full text-center flex flex-col items-center">
          
          <div className="bg-yellow-400 text-yellow-900 font-black px-4 py-2 rounded-t-xl text-[12px] md:text-lg shadow-xl flex items-center justify-center gap-1.5 mb-0 border-x-2 border-t-2 border-yellow-500 animate-pulse w-[95%] md:w-auto">
            <MapPin className="w-4 h-4 md:w-6 md:h-6 text-red-600" />
            <span className="tracking-wide">大和市にお住まいの方へ朗報です！</span>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 mb-5 bg-white/10 p-2.5 rounded-b-xl rounded-t-sm backdrop-blur-sm border border-white/20 w-[95%] md:w-auto">
            <div className="bg-white text-red-700 font-extrabold px-3 py-1.5 md:py-2 rounded-full text-[11px] md:text-base shadow-lg border-2 border-red-500">
              福田5丁目から最短15分で急行！
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white font-extrabold px-3 py-1.5 md:py-2 rounded-full text-[11px] md:text-base shadow-lg border border-green-400">
              大和市民のお客様満足度98.3%
            </div>
          </div>

          <h2 className="text-[26px] sm:text-[28px] md:text-5xl font-extrabold text-white leading-snug mb-4 tracking-tight drop-shadow-2xl w-full px-1">
            大和市の不用品・遺品整理<br />
            <span className="text-yellow-400 text-[32px] sm:text-[36px] md:text-6xl border-b-4 border-yellow-400 pb-1 md:pb-2 inline-block mb-2 md:mb-4 mt-1">地元企業にお任せ！</span>
          </h2>
          
          <div className="bg-white inline-block px-5 py-3 md:py-4 transform -rotate-1 shadow-2xl rounded-xl mb-6 w-[95%] md:w-auto border-2 border-gray-100">
            <p className="text-[17px] md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              他社で高かったお見積り、<br className="md:hidden" />『買取相殺』で<span className="text-red-600 text-2xl md:text-5xl ml-1">超・激安</span>に！
            </p>
          </div>

          <div className="w-[98%] max-w-2xl bg-gradient-to-b from-red-50 to-white border-2 md:border-4 border-red-600 rounded-xl p-4 md:p-8 mb-6 shadow-2xl relative mt-2 mx-auto">
            <div className="bg-red-600 text-white text-[12px] md:text-xl font-black py-1.5 px-6 md:px-8 absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg whitespace-nowrap border-2 border-white">
              ＼ 大和市民限定キャンペーン ／
            </div>
            <div className="flex items-center justify-center gap-1.5 text-red-600 font-bold mb-2 mt-2">
              <Gift className="w-5 h-5 md:w-8 md:h-8" />
              <span className="text-[14px] md:text-2xl tracking-tight">他社の見積書提示で【最低価格保証】</span>
            </div>
            <p className="text-gray-900 font-bold text-[13px] md:text-xl mt-2 leading-snug">
              遠方の業者に頼むと出張費で高くなります！<br />
              <span className="text-red-600 text-xl md:text-3xl mx-0.5 font-extrabold bg-yellow-100 px-2 py-0.5 rounded inline-block border border-yellow-300 leading-tight mt-1">大和市地元価格で必ずお安くします</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2 max-w-4xl mx-auto w-full px-1">
            <div className="bg-white/95 border-2 border-green-500 rounded-lg py-2 px-1 flex flex-col items-center justify-center gap-1 shadow-lg font-bold text-gray-800 text-[10px] md:text-sm text-center leading-tight">
              <MapPin className="text-red-500 w-5 h-5 md:w-7 md:h-7" />大和市内<br/>出張費０円！
            </div>
            <div className="bg-white/95 border-2 border-green-500 rounded-lg py-2 px-1 flex flex-col items-center justify-center gap-1 shadow-lg font-bold text-gray-800 text-[10px] md:text-sm text-center leading-tight">
              <Clock className="text-orange-500 w-5 h-5 md:w-7 md:h-7" />福田から<br/>最短15分急行
            </div>
            <div className="bg-white/95 border-2 border-green-500 rounded-lg py-2 px-1 flex flex-col items-center justify-center gap-1 shadow-lg font-bold text-gray-800 text-[10px] md:text-sm text-center leading-tight">
              <ShieldCheck className="text-blue-500 w-5 h-5 md:w-7 md:h-7" />見積もり後の<br/>キャンセル無料
            </div>
            <div className="bg-white/95 border-2 border-green-500 rounded-lg py-2 px-1 flex flex-col items-center justify-center gap-1 shadow-lg font-bold text-gray-800 text-[10px] md:text-sm text-center leading-tight">
              <Building2 className="text-indigo-500 w-5 h-5 md:w-7 md:h-7" />損害賠償保険<br/>加入済みで安心
            </div>
          </div>
        </div>
      </section>

      {/* 🚨 お急ぎショートカット */}
      <section className="bg-gradient-to-b from-green-50 to-white py-5 md:py-8 px-3 md:px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 font-bold text-[11px] md:text-base mb-2.5 bg-red-50 inline-block px-3 py-1 rounded-full border border-red-100">
            ＼ 大和市内（福田・林間・鶴間など）最短15分でお伺い！ ／
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 mt-1">
            <a href="#" className="flex-1 bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-xl py-3 md:py-4 px-3 shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 border border-[#05b34c]">
              <Camera className="w-6 h-6 md:w-10 md:h-10" />
              <div className="text-left leading-tight">
                <div className="text-[9px] md:text-xs font-bold opacity-90 mb-0.5">他社見積書・部屋の写真を送るだけ!</div>
                <div className="text-[15px] md:text-xl font-extrabold tracking-tight drop-shadow-sm">LINEで最短5分スピード査定</div>
              </div>
            </a>
            <a href="tel:09013835108" className="flex-1 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl py-3 md:py-4 px-3 shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 border border-[#e65f00]">
              <Phone className="w-6 h-6 md:w-10 md:h-10" />
              <div className="text-left leading-tight">
                <div className="text-[9px] md:text-xs font-bold opacity-90 mb-0.5">相見積もり・ご相談だけでも大歓迎</div>
                <div className="text-[16px] md:text-2xl font-extrabold tracking-tight drop-shadow-sm">090-1383-5108</div>
              </div>
            </a>
          </div>
          <p className="text-[10px] md:text-xs text-gray-700 mt-3 font-bold text-balance bg-gray-50 p-1.5 rounded-md inline-block border border-gray-200 w-full sm:w-auto">
            ※とりあえず見積もりだけ…でも大歓迎！<span className="text-red-500">地元の信用第一なので、しつこい営業は一切しません。</span>
          </p>
        </div>
      </section>

      {/* 🟢 2. 悩み共感 ＆ 大和市特有の悩み */}
      <section className="py-10 md:py-16 px-4 bg-slate-800 text-white relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1.5 shadow-lg border border-gray-200 z-10">
          <ArrowDown className="w-5 h-5 text-green-600 animate-bounce" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 pt-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-[20px] md:text-3xl font-extrabold mb-5 text-yellow-400 text-center md:text-left leading-tight">
              大和市での不用品処分で<br className="md:hidden"/>こんなお悩みありませんか？
            </h2>
            <ul className="space-y-3.5 md:space-y-5 text-[14px] md:text-lg font-medium bg-slate-700/50 p-4 md:p-0 rounded-xl md:bg-transparent">
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug"><strong className="text-yellow-200">大和市の粗大ごみ収集</strong>は予約がいっぱいで、捨てるまでに数週間も待てない…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">他市から来る業者の見積もりを見たら、<strong className="text-yellow-200">出張費・運搬費が高すぎて</strong>驚いた…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">ベッドやタンスなど、<strong className="text-yellow-200">自分たちだけでは</strong>家の外（収集場所）まで運び出せない…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">ゴミ屋敷状態で恥ずかしい。<strong className="text-yellow-200">近所にバレずに</strong>サクッと片付けてほしい…</span>
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
              市の回収で待てない案件も、<br className="md:hidden" />
              地元企業が<span className="bg-red-600 text-white px-2.5 py-0.5 md:py-1 rounded-md mx-1 inline-block mt-1.5 md:mt-0 text-[20px] md:text-4xl shadow-md border border-red-500 transform scale-105">完全丸投げ・即日対応</span> で解決します！
            </p>
            <p className="text-[10px] md:text-sm text-gray-300 mt-3 md:mt-6 font-medium text-balance">※分別から運び出しまで全て当店スタッフが行います。お客様は指を差すだけでOKです。</p>
          </div>
        </div>
      </section>

      {/* 🟢 3. 他社との比較表 */}
      <section className="py-10 md:py-20 px-2 md:px-4 bg-green-50 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <p className="text-green-700 font-bold text-xs md:text-base mb-1.5">相見積もりで絶対に勝つ自信があります！</p>
            <h2 className="text-[20px] md:text-4xl font-extrabold text-gray-900 leading-tight">
              大和市で選ばれる理由<br className="md:hidden" /><span className="text-red-600 border-b-2 border-red-300 pb-0.5">他社との圧倒的な違い</span>
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-600">
            <table className="w-full text-center table-fixed">
              <thead>
                <tr>
                  <th className="w-[28%] p-1.5 md:p-5 bg-gray-50 border-r border-gray-200"></th>
                  <th className="w-[42%] p-2 md:p-6 bg-gradient-to-b from-green-500 to-green-700 text-white font-extrabold text-sm md:text-2xl border-r border-green-800 relative shadow-inner">
                    <div className="absolute -top-2.5 md:-top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-[8px] md:text-sm px-2 py-0.5 rounded-full font-black shadow-md whitespace-nowrap border border-yellow-200">
                      大和市民の強い味方！
                    </div>
                    当店<br/><span className="text-[8px] md:text-sm font-medium opacity-90 block mt-0 md:mt-0.5">（まごころ整理）</span>
                  </th>
                  <th className="w-[30%] p-2 md:p-5 bg-gray-500 text-white font-bold text-[10px] md:text-lg">
                    遠方から来る他社
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-lg">
                <tr className="border-b border-gray-200">
                  <th className="p-1.5 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[9px] md:text-base leading-tight">大和市内の<br/>出張費</th>
                  <td className="p-2 md:p-5 bg-green-50 text-green-700 font-extrabold border-r border-green-200">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <CheckCircle className="w-5 h-5 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[11px] md:text-xl">完全無料！</span>
                    </div>
                  </td>
                  <td className="p-2 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <XCircle className="w-4 h-4 md:w-8 md:h-8 text-gray-400" />
                      <span className="text-[9px] md:text-sm">3,000円〜請求も</span>
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
                  <th className="p-1.5 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[9px] md:text-base leading-tight">到着までの<br/>スピード</th>
                  <td className="p-2 md:p-5 bg-green-50 text-green-700 font-extrabold border-r border-green-200">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <CheckCircle className="w-5 h-5 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[10px] md:text-lg">福田から最短15分</span>
                    </div>
                  </td>
                  <td className="p-2 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-0.5 md:gap-2">
                      <XCircle className="w-4 h-4 md:w-8 md:h-8 text-gray-400" />
                      <span className="text-[9px] md:text-sm">数日待たされる事も</span>
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
            ＼ 他社の見積書を送るだけ！大和市エリア最低価格保証 ／
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
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
              大和市民向け・安心料金プラン
            </h2>
            <p className="text-red-600 font-extrabold text-[12px] md:text-lg bg-white py-2.5 px-4 rounded-xl shadow-sm border border-red-200 inline-block w-[98%] md:w-auto leading-relaxed text-balance">
              ★大和市での相見積もり大歓迎！<br className="md:hidden"/>以下の料金から、さらに<span className="text-red-600 text-base md:text-2xl mx-1 bg-yellow-100 px-1 rounded">【買取金額】</span>を差し引きます！
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-red-100 text-red-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg">大和市民割引適用可</div>
              <div className="bg-gray-700 text-white text-center py-2.5 font-bold text-xs md:text-sm tracking-widest mt-4">ちょっとしたお片付け</div>
              <div className="p-5 md:p-8 text-center flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">軽トラ積み放題</h3>
                <div className="text-3xl md:text-5xl font-extrabold text-red-600 mb-1 mt-3 drop-shadow-sm">19,800<span className="text-base font-bold text-gray-900 ml-0.5">円〜</span></div>
                <p className="text-[11px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：1R 〜 1K</p>
                <ul className="text-xs md:text-base text-gray-600 text-left space-y-2 font-medium">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 押し入れ〜1部屋程度の不用品に</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 単身のお引越し・片付けに</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-[3px] border-green-500 relative flex flex-col z-10 transform md:scale-110">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-[10px] md:text-sm font-extrabold px-4 py-1 rounded-b-md shadow-sm z-20 whitespace-nowrap">大和市で1番人気！</div>
              <div className="bg-gradient-to-b from-green-500 to-green-600 text-white text-center py-3 md:py-4 font-bold text-sm md:text-lg tracking-widest mt-5 md:mt-0">ごっそりお片付け</div>
              <div className="p-5 md:p-8 text-center flex-grow">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">2t平積みパック</h3>
                <div className="text-3xl md:text-5xl font-extrabold text-red-600 mb-1 mt-3 drop-shadow-sm">39,800<span className="text-base font-bold text-gray-900 ml-0.5">円〜</span></div>
                <p className="text-[11px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：1DK 〜 2DK</p>
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
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">2t箱型パック</h3>
                <div className="text-3xl md:text-5xl font-extrabold text-red-600 mb-1 mt-3 drop-shadow-sm">79,800<span className="text-base font-bold text-gray-900 ml-0.5">円〜</span></div>
                <p className="text-[11px] md:text-sm text-gray-700 font-bold mb-4 mt-3 bg-green-50 py-1.5 rounded-md border border-green-100">間取り目安：2LDK 〜 3LDK</p>
                <ul className="text-xs md:text-base text-gray-600 text-left space-y-2 font-medium">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 一軒家まるごとの遺品整理に</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" /> 大量の不用品・ゴミ屋敷対応に</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white border-2 border-green-200 rounded-xl p-4 md:p-8 text-center shadow-md relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white font-bold px-4 py-1 rounded-full text-[11px] md:text-sm shadow-sm whitespace-nowrap">
              安心のコミコミ価格！
            </div>
            <p className="font-extrabold text-gray-900 mb-3 text-[14px] md:text-xl mt-2">当店のパック料金は、<span className="text-red-600 border-b-2 border-red-200">以下の作業がすべて無料（込み）</span>です！</p>
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-4 text-[10px] md:text-sm text-green-800 font-bold">
              <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100">搬出作業費</span>
              <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100">大和市内出張費０円</span>
              <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100">車両費</span>
              <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100">スタッフ費(規定内)</span>
              <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100">エアコン取り外し</span>
              <span className="bg-green-50 px-2 py-1 md:py-1.5 rounded border border-green-100">簡易清掃</span>
            </div>
            <p className="text-[9px] md:text-xs text-gray-500 mt-4 leading-relaxed text-left font-medium bg-gray-50 p-2.5 rounded text-balance">
              ※階段が3階以上の場合や特殊な解体が必要な場合は事前にお見積りにて明確にお伝えします。<br/>
              ※リサイクル家電には別途法定リサイクル料金がかかる場合がございますが、買取可能な場合は相殺いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 🟢 5. 解決事例（大和市特化） */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[22px] md:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-14 leading-tight">
            大和市での驚きの「買取相殺」<br className="md:hidden"/>ビフォーアフター
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* 🎯 事例1：大和市中央 */}
            <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] md:text-sm font-extrabold px-3 py-1 md:py-2 rounded-br-xl z-20 shadow-sm">
                大和市で15万円お得に！
              </div>
              <div className="flex w-full h-40 md:h-64 relative bg-gray-100">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <img src="/yamato-chuo-before.png" alt="散らかった部屋 Before" loading="lazy" className="w-full h-full object-cover filter brightness-90"/>
                  <div className="absolute top-1.5 left-1.5 bg-gray-900/80 text-white text-[9px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">Before</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="/yamato-chuo-after.png" alt="綺麗な部屋 After" loading="lazy" className="w-full h-full object-cover"/>
                  <div className="absolute top-1.5 left-1.5 bg-blue-600/90 text-white text-[9px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md border border-gray-100 z-10">
                  <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-green-600" />
                </div>
              </div>

              <div className="p-4 md:p-8 flex-grow flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="bg-green-700 text-white text-[10px] md:text-sm font-bold inline-block px-2.5 py-1 rounded-full mb-2.5 shadow-sm">大和市 中央 1K（不用品回収）</div>
                  <div className="flex gap-1.5 text-[9px] md:text-sm text-gray-600 mb-3 font-medium">
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">スタッフ2名</span>
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">作業時間：約1.5時間</span>
                  </div>
                </div>
                <div className="bg-white p-3 md:p-5 rounded-xl text-center border border-gray-200 shadow-sm relative">
                  <p className="text-gray-800 text-[11px] md:text-base mb-2 font-bold border-b border-dashed border-gray-300 pb-2">他社見積り：80,000円だったのが…</p>
                  <div className="text-gray-500 text-[10px] md:text-sm mt-2 font-medium">作業費・処分費：45,000円</div>
                  <div className="text-red-500 font-extrabold my-1 text-[13px] md:text-xl">買取額：- 15,000円</div>
                  <div className="text-[9px] md:text-xs text-gray-700 mb-2 font-bold text-left bg-red-50 p-2 rounded-md border border-red-100 leading-relaxed">
                    【買取の理由】製造年式の新しい冷蔵庫や洗濯機などを地元価格で高価買取させていただきました！
                  </div>
                  <div className="border-t border-gray-100 my-2 pt-2">
                    <div className="text-[17px] md:text-3xl font-black text-gray-900 tracking-tight">
                      お支払総額：30,000<span className="text-[10px] md:text-lg font-bold">円</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 🎯 事例2：大和市南林間 */}
            <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs md:text-sm font-extrabold px-5 py-2 rounded-br-2xl z-20 shadow-sm">
                遺品整理もお任せ！
              </div>
              <div className="flex w-full h-40 md:h-64 relative bg-gray-100">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <img src="https://images.unsplash.com/photo-1584820927498-cafe2c11866e?auto=format&fit=crop&q=80&w=600" alt="不用品 Before" loading="lazy" className="w-full h-full object-cover filter brightness-90"/>
                  <div className="absolute top-1.5 left-1.5 bg-gray-900/80 text-white text-[9px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">Before</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600" alt="スッキリ After" loading="lazy" className="w-full h-full object-cover"/>
                  <div className="absolute top-1.5 left-1.5 bg-blue-600/90 text-white text-[9px] md:text-sm font-bold px-2 py-0.5 rounded shadow-sm">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md border border-gray-100 z-10">
                  <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-green-600" />
                </div>
              </div>

              <div className="p-4 md:p-8 flex-grow flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="bg-green-700 text-white text-[10px] md:text-sm font-bold inline-block px-2.5 py-1 rounded-full mb-2.5 shadow-sm">大和市 南林間 2DK（遺品整理）</div>
                  <div className="flex gap-1.5 text-[9px] md:text-sm text-gray-600 mb-3 font-medium">
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">スタッフ3名</span>
                    <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-sm">作業時間：約3時間</span>
                  </div>
                </div>
                <div className="bg-white p-3 md:p-5 rounded-xl text-center border border-gray-200 shadow-sm relative">
                  <p className="text-gray-800 text-[11px] md:text-base mb-2 font-bold border-b border-dashed border-gray-300 pb-2">実家の家具・家電の全処分</p>
                  <div className="text-gray-500 text-[10px] md:text-sm mt-2 font-medium">作業費・処分費：120,000円</div>
                  <div className="text-red-500 font-extrabold my-1 text-[13px] md:text-xl">買取額：- 40,000円</div>
                  <div className="text-[9px] md:text-xs text-gray-700 mb-2 font-bold text-left bg-red-50 p-2 rounded-md border border-red-100 leading-relaxed">
                    【買取の理由】大切に使われていたブランド家具や骨董品にしっかり価値を見出し、相殺させていただきました。
                  </div>
                  <div className="border-t border-gray-100 my-2 pt-2">
                    <div className="text-[18px] md:text-4xl font-black text-gray-900 tracking-tight">
                      お支払総額：80,000<span className="text-[10px] md:text-lg font-bold text-gray-900">円</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 NEW! お客様の声（大和市特化） */}
      <section className="py-12 md:py-20 px-4 bg-green-50 border-t border-green-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              大和市のお客様から喜びの声が<br className="md:hidden" />多数届いております！
            </h2>
            <div className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white py-1.5 md:py-2 px-5 md:px-6 rounded-full shadow-sm border border-gray-200">
               <span className="font-bold text-gray-700 text-xs md:text-base">大和市エリア 総合評価</span>
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
            {/* 🎯 大和市の声を優先して見せる */}
            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-bl-lg font-bold">大和市でのご依頼</div>
              <div className="flex gap-1 mb-2 md:mb-3 mt-2">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">地元の業者さんで安かった！</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                他市の業者より圧倒的に安かったです。同じ大和市内ということで、電話してすぐに福田から飛んで来てくれたのには驚きました。
              </p>
              <p className="text-[10px] md:text-xs text-gray-400 text-right font-bold">大和市福田 / 40代 男性</p>
            </div>
            
            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-bl-lg font-bold">大和市でのご依頼</div>
              <div className="flex gap-1 mb-2 md:mb-3 mt-2">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">女性スタッフさんがいて安心</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                一人暮らしなので不安でしたが、女性スタッフ同行をお願いできたので安心して任せられました。地元ですぐに来てくれて助かりました。
              </p>
              <p className="text-[10px] md:text-xs text-gray-400 text-right font-bold">大和市中央林間 / 20代 女性</p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-green-200 relative">
              <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-bl-lg font-bold">大和市でのご依頼</div>
              <div className="flex gap-1 mb-2 md:mb-3 mt-2">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" /><Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-[14px] md:text-lg">市の粗大ごみで間に合わず…</h4>
              <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed mb-3">
                大和市の粗大ごみ収集に間に合わず困っていましたが、こちらにお願いしたら即日で全部持って行ってくれました。神対応です！
              </p>
              <p className="text-[10px] md:text-xs text-gray-400 text-right font-bold">大和市鶴間 / 50代 男性</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 6. ご依頼の流れ */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[22px] md:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-16">
            ご依頼のカンタン4ステップ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1.5 bg-green-200 z-0"></div>
            
            {/* ステップ1 */}
            <div className="bg-slate-50 md:bg-white rounded-2xl shadow-sm md:shadow-md border border-slate-200 md:border-green-100 p-3 md:p-6 text-center relative mt-5 md:mt-0 flex flex-col items-center z-10 h-full">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white font-black flex items-center justify-center rounded-full text-base md:text-2xl shadow-lg border-2 md:border-4 border-white">
                1
              </div>
              <div className="w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-green-50 shadow-inner overflow-hidden mb-2.5 md:mb-4 mt-3 md:mt-5 bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=500" alt="相談" loading="lazy" className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-extrabold text-[12px] md:text-lg mb-1.5 md:mb-2 text-green-800">無料相談・見積り</h3>
              <p className="text-[9px] md:text-sm text-gray-600 font-medium leading-relaxed">LINEで部屋の写真をお送りいただくとスムーズです。</p>
            </div>
            
            {/* ステップ2 */}
            <div className="bg-slate-50 md:bg-white rounded-2xl shadow-sm md:shadow-md border border-slate-200 md:border-green-100 p-3 md:p-6 text-center relative mt-5 md:mt-0 flex flex-col items-center z-10 h-full">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white font-black flex items-center justify-center rounded-full text-base md:text-2xl shadow-lg border-2 md:border-4 border-white">
                2
              </div>
              <div className="w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-green-50 shadow-inner overflow-hidden mb-2.5 md:mb-4 mt-3 md:mt-5 bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500" alt="見積もり" loading="lazy" className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-extrabold text-[12px] md:text-lg mb-1.5 md:mb-2 text-green-800">現地調査・確定</h3>
              <p className="text-[9px] md:text-sm text-gray-600 font-medium leading-relaxed">正確な金額を算出。<span className="text-red-500 font-bold block mt-0.5">キャンセル無料！</span></p>
            </div>
            
            {/* ステップ3 */}
            <div className="bg-slate-50 md:bg-white rounded-2xl shadow-sm md:shadow-md border border-slate-200 md:border-green-100 p-3 md:p-6 text-center relative mt-5 md:mt-0 flex flex-col items-center z-10 h-full">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white font-black flex items-center justify-center rounded-full text-base md:text-2xl shadow-lg border-2 md:border-4 border-white">
                3
              </div>
              <div className="w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-green-50 shadow-inner overflow-hidden mb-2.5 md:mb-4 mt-3 md:mt-5 bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=500" alt="作業" loading="lazy" className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-extrabold text-[12px] md:text-lg mb-1.5 md:mb-2 text-green-800">スピーディな作業</h3>
              <p className="text-[9px] md:text-sm text-gray-600 font-medium leading-relaxed">大和市内ならすぐ急行！全て丸投げでOKです。</p>
            </div>
            
            {/* ステップ4 */}
            <div className="bg-slate-50 md:bg-white rounded-2xl shadow-sm md:shadow-md border border-slate-200 md:border-green-100 p-3 md:p-6 text-center relative mt-5 md:mt-0 flex flex-col items-center z-10 h-full">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white font-black flex items-center justify-center rounded-full text-base md:text-2xl shadow-lg border-2 md:border-4 border-white">
                4
              </div>
              <div className="w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-green-50 shadow-inner overflow-hidden mb-2.5 md:mb-4 mt-3 md:mt-5 bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=500" alt="精算・お支払い" loading="lazy" className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-extrabold text-[12px] md:text-lg mb-1.5 md:mb-2 text-green-800">ご精算（買取相殺）</h3>
              <p className="text-[9px] md:text-sm text-gray-600 font-medium leading-relaxed">作業後にお支払い。買取でお得に。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. 代表挨拶 */}
      <section className="py-10 md:py-20 px-3 md:px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-[32px] p-6 md:p-14 shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-12 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 md:h-3 bg-green-600"></div>
          <div className="w-28 h-28 md:w-64 md:h-64 shrink-0 overflow-hidden rounded-full border-4 md:border-8 border-slate-100 shadow-inner">
            <img src="/IMG_1828.jpg" alt="代表 粟野 匠音" loading="lazy" className="w-full h-full object-cover rounded-full"/>
          </div>
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#104285] mb-2 md:mb-4 tracking-tight">大和市の皆様へ</h2>
            <div className="mb-4 md:mb-6">
              <span className="text-sm md:text-lg font-bold text-[#104285] block mb-0.5">代表</span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#104285] tracking-widest">粟野 匠音</h3>
            </div>
            <p className="text-gray-800 text-[13px] md:text-[16px] leading-relaxed md:leading-loose text-left font-medium">
              『神奈川 まごころ整理センター』代表の粟野 匠音（あわの たくと）です。当サイトをご覧いただき、誠にありがとうございます。<br/>
              私たちは、大和市福田に拠点を置く「生粋の地元企業」です。遠方から来て高額な出張費を請求するような業者とは違い、地元のお客様に愛される誠実なサービスを第一としております。<br/>
              不要になったお品物を、単に処分するのではなく、新しい価値を見出し、高価買取を行うことで、お客様のご負担を大幅に軽減いたします。<br/>
              大和市民の皆様、どのような些細なご相談でもお気軽にお申し付けください。私が直接お電話に出ます！
            </p>
            
            {/* 🎯 代表直通ボタン追加 */}
            <div className="mt-6 md:mt-8 flex flex-col items-center md:items-start">
              <p className="text-red-600 font-bold text-xs md:text-sm mb-2">＼ 代表の粟野が直接お電話に出ます！ ／</p>
              <a href="tel:09013835108" className="bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl py-3 px-6 shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95 border border-[#e65f00] hover:shadow-xl w-full sm:w-auto">
                <Phone className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] md:text-xs font-bold opacity-90 mb-0.5">どんな小さな事でもご相談ください</div>
                  <div className="text-lg md:text-2xl font-black tracking-tight drop-shadow-sm">代表直通: 090-1383-5108</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 SEO対策：対応エリア一覧（大和市を強調） */}
      <section className="py-8 md:py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center font-bold text-gray-800 mb-3 text-sm md:text-base flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />大和市 対応エリア
          </h3>
          <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed text-center bg-gray-50 p-3 md:p-4 rounded-lg border border-gray-200 font-medium">
            <strong className="text-red-600">【大和市内（福田から）最短15分で急行！】</strong><br/>
            大和市（福田、中央林間、南林間、つきみ野、鶴間、桜森、下和田、上草柳、下草柳 など全域対応）<br/>
            ※大和市民のお客様は出張費が完全無料となります。近隣エリア（横浜市 / 座間市 / 綾瀬市など）もお気軽にご相談ください。
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

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-lg md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">ゴミ屋敷で足の踏み場もありませんが、お願いできますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">そのままの状態で全く問題ありません！他社で断られるような困難な現場や、孤独死・特殊清掃の現場も秘密厳守でプロが対応いたします。</span>
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-lg md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">エアコンの取り外しなどはしてもらえますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed">はい、お任せください。標準的なエアコンの取り外し作業も対応可能です。買取可能な高年式エアコンであれば、取り外し費用を含めてもプラスになるケースがございます。</span>
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2.5 md:gap-4 mb-2 md:mb-3">
                <span className="shrink-0 text-lg md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-[13px] md:text-xl leading-snug">見積もり後にキャンセルしても本当にお金はかかりませんか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2.5 md:gap-4 border-t border-dashed border-gray-100 pt-2 md:pt-3">
                <span className="shrink-0 font-black text-green-600 text-lg md:text-3xl leading-none mt-0.5">A.</span><span className="text-[12px] md:text-lg font-medium leading-relaxed"><strong className="text-red-600">完全無料です。</strong>金額にご納得いただけない場合はお気兼ねなくお断りください。強引な営業も一切いたしません。</span>
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
                    <span className="text-red-600 font-bold text-[9px] md:text-xs">※公開前に古物商番号を記載※</span><br/>
                    古物商許可：第XXXX号<br/>
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
          <p className="text-[11px] md:text-lg text-red-600 mb-6 md:mb-10 font-bold bg-white inline-block px-4 py-2 md:py-2.5 rounded-full shadow-sm border border-red-100 w-full sm:w-auto truncate">
            ＼ 大和市民限定！他社のお見積書提示で最低価格保証 ／
          </p>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 justify-center">
            <a href="#" className="w-full md:w-auto md:px-12 bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-xl md:rounded-2xl py-3.5 md:py-5 shadow-lg flex items-center justify-center gap-2 md:gap-3 transition-transform active:scale-95 border border-[#05b34c]">
              <Camera className="w-6 h-6 md:w-10 md:h-10" />
              <div className="text-left leading-tight">
                <div className="text-[9px] md:text-sm font-bold opacity-90 mb-0.5">匿名OK・24時間受付中</div>
                <div className="text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md">LINE無料査定</div>
              </div>
            </a>
            <a href="tel:09013835108" className="w-full md:w-auto md:px-12 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-xl md:rounded-2xl py-3.5 md:py-5 shadow-lg flex items-center justify-center gap-2 md:gap-3 transition-transform active:scale-95 border border-[#e65f00]">
              <Phone className="w-6 h-6 md:w-10 md:h-10" />
              <div className="text-left leading-tight">
                <div className="text-[9px] md:text-sm font-bold opacity-90 mb-0.5">代表直通！相談だけでもOK</div>
                <div className="text-lg md:text-2xl font-extrabold tracking-tight drop-shadow-md">090-1383-5108</div>
              </div>
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
              href="tel:09013835108" 
              className="flex-1 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] transition-colors text-white rounded-lg md:rounded-xl flex items-center justify-center py-2.5 md:py-4 px-1 md:px-3 shadow-md active:scale-95 border border-[#e65f00]"
            >
              <div className="flex items-center gap-1 md:gap-3">
                <Phone className="w-5 h-5 md:w-9 md:h-9 drop-shadow-md" />
                <div className="text-left">
                  <div className="text-[8px] md:text-xs font-bold leading-tight opacity-95 mb-0.5">大和市専用ダイヤル</div>
                  <div className="text-[13px] md:text-xl font-black leading-tight tracking-tight drop-shadow-sm">電話相談</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}