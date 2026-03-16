import React from 'react';
import type { Metadata } from 'next';
import { 
  Phone, MessageCircle, MapPin, Clock, HeartHandshake, 
  CheckCircle2, BadgeJapaneseYen, ClipboardList, Truck,
  HelpCircle, Building2, AlertTriangle, ThumbsUp, 
  Gift, CheckSquare, ArrowRight, ArrowDown, Sparkles, Timer, Star, ShieldCheck, Camera,
  XCircle, CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【神奈川の不用品回収・遺品整理】高価買取で費用が安い！まごころ整理センター',
  description: '神奈川県（大和市・横浜など）の不用品回収、粗大ゴミ処分、遺品整理なら「神奈川 まごころ整理センター」へ。リサイクル買取で回収費用を劇的に安く相殺！搬出・出張費コミコミ。見積もり後のキャンセル無料。最短30分で急行します！',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-28 md:pb-24 text-gray-800">
      {/* 🟢 ヘッダー */}
      <header className="bg-white py-2.5 px-3 md:px-6 sticky top-0 z-40 shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="神奈川 まごころ整理センター" 
              className="h-7 md:h-11 object-contain" 
            />
          </div>
          <div className="text-[10px] md:text-sm bg-green-50 text-green-700 border border-green-600 px-3 py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1">
            <Timer className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
            24時間受付
          </div>
        </div>
      </header>

      {/* 🟢 1. ファーストビュー（スマホで一番映えるレイアウト） */}
      <section className="relative pb-10 md:pb-16 pt-8 md:pt-12 min-h-[85vh] flex items-center flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="整理された綺麗な部屋" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full text-center flex flex-col items-center">
          
          <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-5">
            <div className="bg-white text-green-800 font-extrabold px-3 py-1.5 md:py-2 rounded-full text-[11px] md:text-sm shadow-lg border border-green-500">
              神奈川エリア 累計対応 1,200件突破！
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 font-extrabold px-3 py-1.5 md:py-2 rounded-full text-[11px] md:text-sm shadow-lg flex items-center gap-1 border border-yellow-300">
              <div className="flex gap-0.5 mr-0.5">
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-900" />
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-900" />
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-900" />
              </div>
              お客様満足度トップクラス
            </div>
          </div>

          <h2 className="text-[28px] md:text-5xl font-extrabold text-white leading-snug mb-5 tracking-tight drop-shadow-xl w-full">
            その不用品・粗大ゴミ、<br />
            <span className="text-yellow-400 border-b-4 border-yellow-400 pb-1 inline-block mt-1">捨てるのちょっと待って！</span>
          </h2>
          
          <div className="bg-white inline-block px-4 py-2.5 md:py-3 transform -rotate-1 shadow-2xl rounded-lg mb-6 w-[95%] md:w-auto">
            <p className="text-lg md:text-3xl font-extrabold text-gray-900 tracking-tight">
              『高価買取』で回収費用を<br className="md:hidden" /><span className="text-red-600 text-xl md:text-4xl">大幅に安く</span>します！
            </p>
          </div>

          <div className="w-full max-w-2xl bg-white border-4 border-red-500 rounded-2xl p-3 md:p-6 mb-6 shadow-2xl relative mt-2">
            <div className="bg-red-600 text-white text-[11px] md:text-sm font-extrabold py-1 px-4 absolute -top-3.5 left-1/2 transform -translate-x-1/2 rounded-full animate-pulse shadow-md whitespace-nowrap">
              ＼ 今月の特別枠・残りわずか！ ／
            </div>
            <div className="flex items-center justify-center gap-1 text-red-600 font-bold mb-1 mt-1">
              <Gift className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-xl">【毎月先着20名様限定】特別キャンペーン</span>
            </div>
            <p className="text-gray-900 font-bold text-[13px] md:text-xl mt-1.5 leading-tight">
              今すぐのお見積りで<br className="md:hidden"/>
              <span className="text-red-600 text-xl md:text-3xl mx-1 font-extrabold bg-yellow-100 px-1 rounded inline-block mt-1 md:mt-0">「買取金額最大20%UP」</span>適用！
            </p>
            <p className="text-[9px] md:text-xs text-gray-500 font-medium mt-2 leading-tight">※当社の基準を満たす買取対象品（家電・家具等）がある場合に適用となります。</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2 max-w-4xl mx-auto w-full">
            <div className="bg-white/95 border border-green-400 rounded-xl py-2 px-1 flex flex-col items-center justify-center gap-1 shadow-lg font-bold text-gray-800 text-[10px] md:text-xs text-center">
              <ShieldCheck className="text-blue-500 w-5 h-5 md:w-6 md:h-6" />見積後<br/>キャンセル無料
            </div>
            <div className="bg-white/95 border border-green-400 rounded-xl py-2 px-1 flex flex-col items-center justify-center gap-1 shadow-lg font-bold text-gray-800 text-[10px] md:text-xs text-center">
              <Clock className="text-orange-500 w-5 h-5 md:w-6 md:h-6" />最短30分で<br/>急行可能
            </div>
            <div className="bg-white/95 border border-green-400 rounded-xl py-2 px-1 flex flex-col items-center justify-center gap-1 shadow-lg font-bold text-gray-800 text-[10px] md:text-xs text-center">
              <Building2 className="text-indigo-500 w-5 h-5 md:w-6 md:h-6" />損害賠償保険<br/>加入済み
            </div>
            <div className="bg-white/95 border border-green-400 rounded-xl py-2 px-1 flex flex-col items-center justify-center gap-1 shadow-lg font-bold text-gray-800 text-[10px] md:text-xs text-center">
              <HeartHandshake className="text-pink-500 w-5 h-5 md:w-6 md:h-6" />女性スタッフ<br/>同行OK
            </div>
          </div>
        </div>
      </section>

      {/* 🚨 お急ぎショートカット（指が届きやすい大きめボタン） */}
      <section className="bg-gradient-to-b from-green-50 to-white py-6 md:py-8 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 font-bold text-xs md:text-base mb-3 bg-red-50 inline-block px-3 py-1 rounded-full border border-red-100">
            ＼ お急ぎの方は今すぐこちら！最短30分でお伺い ／
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-2">
            <a href="#" className="flex-1 bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-2xl py-4 md:py-4 px-4 shadow-xl flex items-center justify-center gap-3 transition-transform active:scale-95 border border-[#05b34c]">
              <Camera className="w-8 h-8 md:w-9 md:h-9" />
              <div className="text-left leading-tight">
                <div className="text-[10px] md:text-xs font-bold opacity-90 mb-0.5">部屋全体・大型家具・家電の3枚でOK!</div>
                <div className="text-lg md:text-xl font-extrabold tracking-tight drop-shadow-sm">LINEで無料スピード査定</div>
              </div>
            </a>
            <a href="tel:0120000000" className="flex-1 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-2xl py-4 md:py-4 px-4 shadow-xl flex items-center justify-center gap-3 transition-transform active:scale-95 border border-[#e65f00]">
              <Phone className="w-8 h-8 md:w-9 md:h-9" />
              <div className="text-left leading-tight">
                <div className="text-[10px] md:text-xs font-bold opacity-90 mb-0.5">相見積もり・ご相談だけでも大歓迎</div>
                <div className="text-lg md:text-xl font-extrabold tracking-tight drop-shadow-sm">0120-XXX-XXX</div>
              </div>
            </a>
          </div>
          <p className="text-xs text-gray-600 mt-4 font-bold text-balance bg-gray-50 p-2 rounded-lg inline-block">
            ※とりあえず見積もりだけ…でも大歓迎！<span className="text-red-500">しつこい営業は一切いたしません。</span>
          </p>
        </div>
      </section>

      {/* 🟢 2. 悩み共感セクション（チェックリストを大きく見やすく） */}
      <section className="py-12 md:py-16 px-4 bg-slate-800 text-white relative">
        {/* スクロール誘導矢印 */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 z-10">
          <ArrowDown className="w-6 h-6 text-green-600 animate-bounce" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 pt-4">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-[22px] md:text-3xl font-extrabold mb-6 text-yellow-400 text-center md:text-left leading-tight">
              不用品回収・遺品整理で<br className="md:hidden"/>こんなお悩みありませんか？
            </h2>
            <ul className="space-y-4 md:space-y-5 text-[15px] md:text-lg font-medium bg-slate-700/50 p-5 md:p-0 rounded-2xl md:bg-transparent">
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">他社の見積もりが<strong className="text-yellow-200">高すぎて驚いた。</strong>もっと安く済ませたい…</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">後から<strong className="text-yellow-200">「追加料金」</strong>を請求される悪徳業者が怖い…</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">重い家具や家電、<strong className="text-yellow-200">自分たちだけでは</strong>外に運び出せない…</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 md:w-7 md:h-7 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">引越し退去日が迫っていて、<strong className="text-yellow-200">すぐに片付けて</strong>ほしい…</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1584820927498-cafe2c11866e?auto=format&fit=crop&q=80&w=800" 
              alt="片付けの悩み" 
              className="w-full h-52 md:h-72 object-cover rounded-2xl shadow-2xl border-2 md:border-4 border-slate-600"
            />
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-3xl font-black mb-2 text-white opacity-80">↓↓↓</p>
          <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-5 px-4 md:py-6 md:px-8 rounded-2xl border border-slate-600 shadow-xl inline-block w-[95%] md:w-auto">
            <p className="text-lg md:text-3xl font-extrabold text-white leading-snug">
              そのお悩み、私たちがすべて<br className="md:hidden" />
              <span className="bg-red-600 text-white px-3 py-1 rounded-lg mx-1 inline-block mt-2 md:mt-0 text-xl md:text-4xl shadow-md border border-red-500 transform scale-105">丸投げ</span> で解決します！
            </p>
          </div>
        </div>
      </section>

      {/* 🟢 3. 【スマホで一番見やすい】他社との比較表 */}
      <section className="py-12 md:py-20 px-3 md:px-4 bg-green-50 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-green-700 font-bold text-sm md:text-base mb-2">相見積もりで勝つ自信があります！</p>
            <h2 className="text-[22px] md:text-4xl font-extrabold text-gray-900 leading-tight">
              なぜ安くて安心？<br className="md:hidden" /><span className="text-red-600 border-b-2 border-red-300 pb-1">他社との圧倒的な違い</span>
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-green-600">
            <table className="w-full text-center table-fixed">
              <thead>
                <tr>
                  <th className="w-[30%] p-2 md:p-5 bg-gray-50 border-r border-gray-200"></th>
                  <th className="w-[40%] p-3 md:p-6 bg-gradient-to-b from-green-500 to-green-700 text-white font-extrabold text-sm md:text-2xl border-r border-green-800 relative shadow-inner">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-[10px] md:text-sm px-3 py-0.5 rounded-full font-black shadow-md whitespace-nowrap border border-yellow-200">
                      圧倒的おすすめ
                    </div>
                    当店<br/><span className="text-[9px] md:text-sm font-medium opacity-90 block mt-0.5">（まごころ整理）</span>
                  </th>
                  <th className="w-[30%] p-3 md:p-5 bg-gray-500 text-white font-bold text-xs md:text-lg">
                    一般的な他社
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-lg">
                <tr className="border-b border-gray-200">
                  <th className="p-3 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[11px] md:text-base leading-tight">お見積り後の<br/>キャンセル</th>
                  <td className="p-3 md:p-5 bg-green-50 text-green-700 font-extrabold border-r-2 border-green-600">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                      <CheckCircle className="w-6 h-6 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[13px] md:text-xl">完全無料！</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                      <XCircle className="w-5 h-5 md:w-8 md:h-8 text-gray-400" />
                      <span className="text-[10px] md:text-sm">出張費がかかる事も</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-3 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[11px] md:text-base leading-tight">作業後の<br/>追加料金</th>
                  <td className="p-3 md:p-5 bg-green-50 text-green-700 font-extrabold border-r-2 border-green-600">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                      <CheckCircle className="w-6 h-6 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[13px] md:text-xl">一切なし！</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                      <AlertTriangle className="w-5 h-5 md:w-8 md:h-8 text-yellow-500" />
                      <span className="text-[10px] md:text-sm">高額請求トラブルも</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="p-3 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[11px] md:text-base leading-tight">買取による<br/>費用相殺</th>
                  <td className="p-3 md:p-5 bg-green-50 text-green-700 font-extrabold border-r-2 border-green-600">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                      <CheckCircle className="w-6 h-6 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[13px] md:text-xl">高価買取！</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                      <XCircle className="w-5 h-5 md:w-8 md:h-8 text-gray-400" />
                      <span className="text-[10px] md:text-sm">処分のみ(高い)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="p-3 md:p-5 bg-gray-50 text-gray-700 font-bold text-center text-[11px] md:text-base leading-tight">万が一の<br/>損害補償</th>
                  <td className="p-3 md:p-5 bg-green-50 text-green-700 font-extrabold border-r-2 border-green-600">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                      <CheckCircle className="w-6 h-6 md:w-10 md:h-10 text-green-600" />
                      <span className="text-[12px] md:text-lg">保険加入済み</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-5 text-gray-500 font-medium">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                      <XCircle className="w-5 h-5 md:w-8 md:h-8 text-gray-400" />
                      <span className="text-[10px] md:text-sm">未加入の業者も</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🚨 中間CTA（比較して納得した直後にボタンを置く） */}
      <section className="bg-white py-8 md:py-10 px-4 border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-600 font-bold text-sm md:text-lg mb-4 bg-red-50 inline-block px-4 py-1.5 rounded-full">
            ＼ 相見積もり大歓迎！まずは当店の安さをご確認ください ／
          </p>
          <a href="#" className="w-full bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-2xl py-4 md:py-5 px-4 shadow-xl flex items-center justify-center gap-3 transition-transform active:scale-95 border border-[#05b34c]">
            <Camera className="w-8 h-8 md:w-10 md:h-10" />
            <div className="text-left leading-tight">
              <div className="text-[11px] md:text-sm font-bold opacity-90 mb-1">部屋全体・大型家具・家電の3枚でOK!</div>
              <div className="text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-md">LINEで無料スピード査定</div>
            </div>
          </a>
        </div>
      </section>

      {/* 🟢 4. 料金プラン（スマホで見やすく縦積みの余白を調整） */}
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
                <p className="text-sm text-gray-700 font-bold mb-5 mt-4 bg-green-50 py-2 rounded-lg border border-green-100">間取り目安：1R 〜 1K</p>
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
                <p className="text-sm text-gray-700 font-bold mb-5 mt-4 bg-green-50 py-2 rounded-lg border border-green-100">間取り目安：1DK 〜 2DK</p>
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
                <p className="text-sm text-gray-700 font-bold mb-5 mt-4 bg-green-50 py-2 rounded-lg border border-green-100">間取り目安：2LDK 〜 3LDK</p>
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
              <span className="bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">簡易清掃</span>
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 mt-5 leading-relaxed text-left font-medium bg-gray-50 p-3 rounded text-balance">
              ※階段が3階以上の場合や、特殊な解体が必要な場合は事前にお見積りにて明確にお伝えします。<br/>
              ※リサイクル家電（テレビ・冷蔵庫・洗濯機・エアコン）には別途法定リサイクル料金がかかる場合がございますが、買取可能な場合は相殺いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 🟢 5. 解決事例（画像を大きく、文字を読みやすく） */}
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
                  <img src="https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&q=80&w=600" alt="散らかった部屋 Before" className="w-full h-full object-cover filter brightness-90"/>
                  <div className="absolute top-2 left-2 bg-gray-900/80 text-white text-[11px] md:text-sm font-bold px-3 py-1 rounded shadow-sm">Before</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600" alt="綺麗な部屋 After" className="w-full h-full object-cover"/>
                  <div className="absolute top-2 left-2 bg-blue-600/90 text-white text-[11px] md:text-sm font-bold px-3 py-1 rounded shadow-sm">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-xl border border-gray-100 z-10">
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="bg-green-700 text-white text-xs md:text-sm font-bold inline-block px-3 py-1.5 rounded-full mb-3 shadow-sm">大和市 A様邸（2LDK 実家の遺品整理）</div>
                  <div className="flex gap-2 text-[11px] md:text-sm text-gray-600 mb-4 font-medium">
                    <span className="bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">スタッフ3名</span>
                    <span className="bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">作業時間：約4時間</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl text-center border border-gray-200 shadow-sm relative">
                  <p className="text-gray-800 text-sm md:text-base mb-3 font-bold border-b border-dashed border-gray-300 pb-3">他社見積り：250,000円だったのが…</p>
                  <div className="text-gray-500 text-xs md:text-sm mt-3 font-medium">作業費・処分費：180,000円</div>
                  <div className="text-red-500 font-extrabold my-1.5 text-base md:text-xl">買取額：- 80,000円</div>
                  <div className="text-[11px] md:text-xs text-gray-700 mb-3 font-bold text-left bg-red-50 p-3 rounded-lg border border-red-100 leading-relaxed">
                    【買取の理由】製造5年以内の大型冷蔵庫と、状態の良いブランド家具等にしっかり値がつきました！
                  </div>
                  <div className="border-t-2 border-gray-100 my-3 pt-3">
                    <div className="text-xl md:text-3xl font-black text-gray-900 tracking-tight">
                      お支払総額：100,000<span className="text-sm md:text-lg font-bold">円</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 bg-red-600 text-white text-xs md:text-sm font-extrabold px-5 py-2 rounded-br-2xl z-20 shadow-lg">
                費用相殺で実質0円！
              </div>
              <div className="flex w-full h-56 md:h-64 relative bg-gray-100">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <img src="https://images.unsplash.com/photo-1584820927498-cafe2c11866e?auto=format&fit=crop&q=80&w=600" alt="不用品 Before" className="w-full h-full object-cover filter brightness-90"/>
                  <div className="absolute top-2 left-2 bg-gray-900/80 text-white text-[11px] md:text-sm font-bold px-3 py-1 rounded shadow-sm">Before</div>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600" alt="スッキリ After" className="w-full h-full object-cover"/>
                  <div className="absolute top-2 left-2 bg-blue-600/90 text-white text-[11px] md:text-sm font-bold px-3 py-1 rounded shadow-sm">After</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-xl border border-gray-100 z-10">
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-slate-50">
                <div>
                  <div className="bg-green-700 text-white text-xs md:text-sm font-bold inline-block px-3 py-1.5 rounded-full mb-3 shadow-sm">横浜市 B様（1K 引越し不用品回収）</div>
                  <div className="flex gap-2 text-[11px] md:text-sm text-gray-600 mb-4 font-medium">
                    <span className="bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">スタッフ2名</span>
                    <span className="bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">作業時間：約1.5時間</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl text-center border border-gray-200 shadow-sm relative">
                  <p className="text-gray-800 text-sm md:text-base mb-3 font-bold border-b border-dashed border-gray-300 pb-3">引越しに伴う家具・家電の処分</p>
                  <div className="text-gray-500 text-xs md:text-sm mt-3 font-medium">作業費・処分費：39,800円</div>
                  <div className="text-red-500 font-extrabold my-1.5 text-base md:text-xl">買取額：- 39,800円</div>
                  <div className="text-[11px] md:text-xs text-gray-700 mb-3 font-bold text-left bg-red-50 p-3 rounded-lg border border-red-100 leading-relaxed">
                    【買取の理由】大切に使われていたドラム式洗濯機と液晶テレビが年式も新しく、作業費を全額相殺できました！
                  </div>
                  <div className="border-t-2 border-gray-100 my-3 pt-3">
                    <div className="text-2xl md:text-4xl font-black text-red-600 tracking-tight">
                      お支払総額：実質 0<span className="text-sm md:text-lg font-bold text-gray-900">円！</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 6. ご依頼の流れ */}
      <section className="py-12 md:py-20 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[24px] md:text-4xl font-extrabold text-center text-gray-900 mb-10 md:mb-16">
            ご依頼のカンタン4ステップ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
            <div className="hidden md:block absolute top-20 left-16 right-16 h-1.5 bg-green-200 z-0"></div>
            
            <div className="text-center relative z-10 bg-white md:bg-transparent p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-green-100 md:border-none">
              <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-3 md:mb-5 relative">
                <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=500" alt="相談" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 bg-green-600 text-white font-black flex items-center justify-center rounded-br-xl text-sm md:text-xl shadow-md">1</div>
              </div>
              <h3 className="font-extrabold text-sm md:text-xl mb-1.5 md:mb-3 text-gray-900">無料相談・見積り</h3>
              <p className="text-[11px] md:text-sm text-gray-600 font-medium">LINEで部屋の写真をお送りいただくとスムーズです。</p>
            </div>
            
            <div className="text-center relative z-10 bg-white md:bg-transparent p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-green-100 md:border-none">
              <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-3 md:mb-5 relative">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500" alt="見積もり" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 bg-green-600 text-white font-black flex items-center justify-center rounded-br-xl text-sm md:text-xl shadow-md">2</div>
              </div>
              <h3 className="font-extrabold text-sm md:text-xl mb-1.5 md:mb-3 text-gray-900">現地調査・確定</h3>
              <p className="text-[11px] md:text-sm text-gray-600 font-medium">正確な金額を算出。<br/><span className="text-red-500 font-bold bg-red-50 px-1 rounded">見積後のキャンセル無料！</span></p>
            </div>
            
            <div className="text-center relative z-10 bg-white md:bg-transparent p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-green-100 md:border-none">
              <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-3 md:mb-5 relative">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=500" alt="作業" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 bg-green-600 text-white font-black flex items-center justify-center rounded-br-xl text-sm md:text-xl shadow-md">3</div>
              </div>
              <h3 className="font-extrabold text-sm md:text-xl mb-1.5 md:mb-3 text-gray-900">スピーディな作業</h3>
              <p className="text-[11px] md:text-sm text-gray-600 font-medium">プロが迅速に運び出します。全て丸投げでOK！</p>
            </div>
            
            <div className="text-center relative z-10 bg-white md:bg-transparent p-4 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-green-100 md:border-none">
              <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-3 md:mb-5 relative">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=500" alt="精算" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 bg-green-600 text-white font-black flex items-center justify-center rounded-br-xl text-sm md:text-xl shadow-md">4</div>
              </div>
              <h3 className="font-extrabold text-sm md:text-xl mb-1.5 md:mb-3 text-gray-900">ご精算（買取相殺）</h3>
              <p className="text-[11px] md:text-sm text-gray-600 font-medium">作業完了後にお支払い。買取でお得に。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. 代表挨拶 */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[32px] p-8 md:p-14 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 md:h-3 bg-green-600"></div>
          <div className="w-36 h-36 md:w-64 md:h-64 shrink-0 overflow-hidden rounded-full border-4 md:border-8 border-white shadow-2xl">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="代表" className="w-full h-full object-cover"/>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
              大和市を中心に、地元神奈川に<br className="hidden md:block"/>「頼んでよかった」を届けたい。
            </h3>
            <p className="text-gray-700 text-[13px] md:text-lg leading-loose mb-6 md:mb-8 text-left font-medium text-balance">
              はじめまして。不用品回収業界では残念ながら「無料と言っていたのに、後から数万円を請求された」といったトラブルが後を絶ちません。<br/><br/>
              だからこそ、私たちは地元密着の企業として<strong className="text-red-600 border-b-2 border-red-200">「お見積り後の追加料金一切なし」「万が一の損害保険加入」「買取による費用削減の徹底」</strong>をお約束します。ご自宅にお伺いする以上、清潔感と礼儀作法を徹底したスタッフのみがお伺いいたします。どんな小さなことでも、まずは地元の当店へ安心してご相談ください。
            </p>
            <p className="font-black text-gray-900 text-right text-base md:text-xl">神奈川 まごころ整理センター 代表</p>
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
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-3 md:gap-4 mb-3">
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-base md:text-xl leading-snug">LINE査定では、どんな写真を送ればいいですか？</span>
              </h3>
              <div className="border-b border-dashed border-gray-200 mb-3"></div>
              <p className="text-gray-700 flex items-start gap-3 md:gap-4">
                <span className="shrink-0 font-black text-green-600 text-xl md:text-3xl leading-none mt-0.5">A.</span><span className="text-sm md:text-lg font-medium leading-relaxed">綺麗に撮る必要はありません！「お部屋全体がわかる写真」「処分したい大型家具・家電の写真」など、2〜3枚をパシャッと撮って送るだけでOKです。</span>
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-3 md:gap-4 mb-3">
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-base md:text-xl leading-snug">今日すぐに来てほしいのですが、当日対応できますか？</span>
              </h3>
              <div className="border-b border-dashed border-gray-200 mb-3"></div>
              <p className="text-gray-700 flex items-start gap-3 md:gap-4">
                <span className="shrink-0 font-black text-green-600 text-xl md:text-3xl leading-none mt-0.5">A.</span><span className="text-sm md:text-lg font-medium leading-relaxed">はい、可能です！神奈川県内であれば、ご予約状況により<strong className="text-red-600">最短30分</strong>でお伺いいたします。お急ぎの場合はお電話にてご相談ください。</span>
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-3 md:gap-4 mb-3">
                <span className="shrink-0 text-xl md:text-3xl text-red-600 font-black leading-none mt-0.5">Q.</span><span className="text-base md:text-xl leading-snug">見積もり後にキャンセルしても本当にお金はかかりませんか？</span>
              </h3>
              <div className="border-b border-dashed border-gray-200 mb-3"></div>
              <p className="text-gray-700 flex items-start gap-3 md:gap-4">
                <span className="shrink-0 font-black text-green-600 text-xl md:text-3xl leading-none mt-0.5">A.</span><span className="text-sm md:text-lg font-medium leading-relaxed"><strong className="text-red-600">はい、完全無料です。</strong>金額にご納得いただけない場合はお気兼ねなくお断りください。強引な営業も一切いたしません。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 9. 会社概要・許認可 */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
            <h2 className="text-[22px] md:text-3xl font-extrabold text-gray-900">会社概要・許認可</h2>
          </div>
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-md">
            <table className="w-full text-[13px] md:text-base font-medium">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 py-4 md:py-5 px-4 md:px-6 text-left w-[35%] md:w-1/4 text-gray-700 border-r border-gray-200">屋号</th>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-gray-900 font-extrabold">神奈川 まごころ整理センター</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="bg-gray-50 py-4 md:py-5 px-4 md:px-6 text-left text-gray-700 border-r border-gray-200">所在地</th>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-gray-900">〒242-0024<br className="md:hidden"/> 神奈川県大和市福田５丁目4-11</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 py-4 md:py-5 px-4 md:px-6 text-left text-gray-700 align-top border-r border-gray-200">許認可番号等</th>
                  <td className="py-4 md:py-5 px-4 md:px-6 text-gray-900 leading-relaxed">
                    <span className="text-red-600 font-bold text-xs">※公開前に古物商番号を記載※</span><br/>
                    古物商許可：神奈川県公安委員会 第XXXX号<br/>
                    <div className="mt-3 text-[10px] md:text-xs text-gray-600 leading-relaxed bg-gray-50 p-3 rounded border border-gray-200 font-normal">
                      ※家庭から出る一般廃棄物の回収・処分につきましては、各市町村の許可を受けた一般廃棄物収集運搬業者に委託し、各種法令を厳守して適正に処理を行っております。
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🟢 最終CTA（画面下部の強力なオファー） */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-green-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[24px] md:text-4xl font-black text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight">
            神奈川県の不用品回収・遺品整理なら<br/>
            <span className="text-green-700">まごころ整理センター</span>にお任せください！
          </h2>
          <p className="text-sm md:text-lg text-red-600 mb-8 md:mb-10 font-bold bg-white inline-block px-5 py-2.5 rounded-full shadow-sm border border-red-100">
            ＼ 相見積もり大歓迎！まずは当店の安さと対応の良さをご実感ください ／
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center">
            <a href="#" className="w-full md:w-auto md:px-12 bg-gradient-to-b from-[#06C755] to-[#04a044] text-white rounded-2xl py-4 md:py-5 shadow-xl flex items-center justify-center gap-3 transition-transform active:scale-95 border border-[#05b34c]">
              <Camera className="w-8 h-8 md:w-10 md:h-10" />
              <div className="text-left leading-tight">
                <div className="text-[11px] md:text-sm font-bold opacity-90 mb-1">匿名OK・24時間受付中</div>
                <div className="text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-md">LINE無料査定</div>
              </div>
            </a>
            <a href="tel:0120000000" className="w-full md:w-auto md:px-12 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] text-white rounded-2xl py-4 md:py-5 shadow-xl flex items-center justify-center gap-3 transition-transform active:scale-95 border border-[#e65f00]">
              <Phone className="w-8 h-8 md:w-10 md:h-10" />
              <div className="text-left leading-tight">
                <div className="text-[11px] md:text-sm font-bold opacity-90 mb-1">最短30分で急行！相談だけでもOK</div>
                <div className="text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-md">0120-XXX-XXX</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 🟢 フッター */}
      <footer className="bg-gray-800 text-gray-300 py-12 md:py-16 px-4 text-center text-xs md:text-sm pb-40 md:pb-48">
        <p className="font-extrabold mb-3 md:mb-4 text-lg md:text-xl tracking-widest">神奈川 まごころ整理センター</p>
        <p className="mb-5 text-gray-400 font-medium">〒242-0024 神奈川県大和市福田５丁目4-11</p>
        <p className="opacity-70">© 2026 神奈川 まごころ整理センター All Rights Reserved.</p>
      </footer>

      {/* 🟢 追従型CTA（指が届く範囲に大きく、押しやすく） */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t-2 border-green-500 shadow-[0_-10px_30px_rgba(0,0,0,0.15)] p-2 md:p-3 pb-safe">
        <div className="max-w-4xl mx-auto flex flex-col gap-1.5 md:gap-2">
          <p className="text-center text-[10px] md:text-xs font-extrabold text-gray-700 bg-gray-100 py-1 rounded-full mx-2 md:mx-0">
            ＼ <span className="text-red-600">しつこい営業なし！</span>写真2〜3枚送るだけ・相見積もり歓迎 ／
          </p>
          <div className="flex gap-2 mt-0.5">
            <a 
              href="#" 
              className="flex-1 bg-gradient-to-b from-[#06C755] to-[#04a044] transition-colors text-white rounded-xl flex items-center justify-center py-3 md:py-4 px-1 md:px-3 shadow-lg relative overflow-hidden group border border-[#05b34c]"
            >
              <div className="absolute top-0 right-0 bg-red-600 text-[9px] md:text-xs font-black px-2 md:px-3 py-0.5 rounded-bl-lg animate-pulse shadow-sm">20%UP!</div>
              <div className="flex items-center gap-1.5 md:gap-3 relative z-10">
                <Camera className="w-6 h-6 md:w-9 md:h-9 group-hover:scale-110 transition-transform drop-shadow-md" />
                <div className="text-left">
                  <div className="text-[9px] md:text-xs font-bold leading-tight opacity-95 mb-0.5">匿名OK・最短5分返信</div>
                  <div className="text-[14px] md:text-xl font-extrabold leading-tight tracking-tight drop-shadow-sm">LINE査定</div>
                </div>
              </div>
            </a>
            
            <a 
              href="tel:0120000000" 
              className="flex-1 bg-gradient-to-b from-[#FF6A00] to-[#e05d00] transition-colors text-white rounded-xl flex items-center justify-center py-3 md:py-4 px-1 md:px-3 shadow-lg group border border-[#e65f00]"
            >
              <div className="flex items-center gap-1.5 md:gap-3">
                <Phone className="w-6 h-6 md:w-9 md:h-9 group-hover:rotate-12 transition-transform drop-shadow-md" />
                <div className="text-left">
                  <div className="text-[9px] md:text-xs font-bold leading-tight opacity-95 mb-0.5">最短30分で急行！</div>
                  <div className="text-[14px] md:text-xl font-extrabold leading-tight tracking-tight drop-shadow-sm">電話相談</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}