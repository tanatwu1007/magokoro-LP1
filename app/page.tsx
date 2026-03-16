import React from 'react';
import type { Metadata } from 'next';
import { 
  Phone, MessageCircle, MapPin, Clock, HeartHandshake, 
  CheckCircle2, BadgeJapaneseYen, ClipboardList, Truck,
  HelpCircle, Building2, AlertTriangle, ThumbsUp, 
  Gift, CheckSquare, ArrowDown, Sparkles, Timer, Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【神奈川の不用品回収・遺品整理】高価買取で費用が安い！まごころ整理センター',
  description: '神奈川県（大和市・横浜など）の不用品回収、粗大ゴミ処分、遺品整理なら「神奈川 まごころ整理センター」へ。リサイクル買取で回収費用を劇的に安く相殺！分別・運び出し不要の丸投げOK。見積もり後のキャンセル無料。最短30分で急行します！',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-28 md:pb-24">
      {/* 🟢 ヘッダー */}
      <header className="bg-white py-2.5 px-3 md:px-6 sticky top-0 z-40 shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* publicフォルダの logo.png を読み込み */}
            <img 
              src="/logo.png" 
              alt="神奈川 まごころ整理センター" 
              className="h-8 md:h-11 object-contain" 
            />
          </div>
          <div className="text-[10px] md:text-sm bg-green-50 text-green-700 border border-green-600 px-3 py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1">
            <Timer className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
            24時間受付中
          </div>
        </div>
      </header>

      {/* 🟢 1. ファーストビュー（背景画像をハッキリ見せるダークオーバーレイ仕様） */}
      <section className="relative pb-12 md:pb-20 pt-10 md:pt-16 min-h-[85vh] flex items-center">
        {/* 背景画像：清潔感のある美しい部屋 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="整理された綺麗な部屋" 
            className="w-full h-full object-cover"
          />
          {/* 黒の半透明フィルムを重ねて、文字を読みやすくしつつ画像を見せる */}
          <div className="absolute inset-0 bg-slate-900/65"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full text-center">
          
          {/* 権威性バッジ（星マーク追加で信用度UP） */}
          <div className="flex justify-center mb-5">
            <div className="bg-yellow-400 text-yellow-900 font-extrabold px-5 py-2 rounded-full text-xs md:text-base shadow-lg flex items-center gap-1.5 border-2 border-yellow-300">
              <div className="flex gap-0.5 mr-1">
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-900" />
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-900" />
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-900" />
              </div>
              おかげさまで神奈川エリア満足度98%！
            </div>
          </div>

          {/* メインコピー（白と黄色で圧倒的なインパクト） */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight text-balance drop-shadow-md">
            その不用品・粗大ゴミ、<br />
            <span className="text-yellow-400 border-b-4 border-yellow-400 pb-1 inline-block mt-2">捨てるのちょっと待って！</span>
          </h2>
          
          <p className="text-lg md:text-3xl font-bold text-gray-900 mb-8 bg-white inline-block px-5 py-2 md:py-3 transform -rotate-1 shadow-xl rounded-sm text-balance">
            『高価買取』で回収費用を<span className="text-red-600">大幅に安く</span>します。
          </p>

          {/* 限定キャンペーンバナー（白背景で目立たせる） */}
          <div className="max-w-2xl mx-auto bg-white border-4 border-red-500 rounded-2xl p-4 md:p-6 mb-8 shadow-2xl relative">
            <div className="bg-red-600 text-white text-[10px] md:text-sm font-bold py-1 px-4 absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-full animate-pulse shadow-md whitespace-nowrap">
              ＼ 残り枠わずか！お急ぎください ／
            </div>
            <div className="flex items-center justify-center gap-1.5 text-red-600 font-bold mb-2 mt-2">
              <Gift className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-base md:text-xl">【毎月先着20名様限定】特別キャンペーン</span>
            </div>
            <p className="text-gray-900 font-bold text-sm md:text-xl text-balance mt-2">
              今すぐのお見積りで<span className="text-red-600 text-xl md:text-3xl mx-1.5 font-extrabold">「買取金額20%UP」</span>適用！
            </p>
          </div>

          {/* 安心バッジ */}
          <div className="grid grid-cols-2 md:flex md:flex-row justify-center gap-2 max-w-3xl mx-auto">
            <div className="bg-white/95 border-2 border-green-500 rounded-lg py-2.5 px-2 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 shadow-lg font-bold text-green-800 text-xs md:text-sm col-span-2 md:col-span-1">
              <MapPin className="text-red-500 w-5 h-5" />神奈川全域対応
            </div>
            <div className="bg-white/95 border-2 border-green-500 rounded-lg py-2.5 px-2 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 shadow-lg font-bold text-green-800 text-xs md:text-sm">
              <Clock className="text-orange-500 w-5 h-5" />最短30分で急行
            </div>
            <div className="bg-white/95 border-2 border-green-500 rounded-lg py-2.5 px-2 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 shadow-lg font-bold text-green-800 text-xs md:text-sm">
              <HeartHandshake className="text-pink-500 w-5 h-5" />女性スタッフ同行
            </div>
          </div>
        </div>
      </section>

      {/* 🚨 FV直後の「お急ぎショートカット」 */}
      <section className="bg-gradient-to-b from-green-50 to-white py-6 md:py-8 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 font-bold text-sm md:text-base mb-3">＼ お急ぎの方は今すぐこちら！最短30分でお伺い ／</p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <a href="#" className="flex-1 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-xl py-3.5 px-4 shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95">
              <MessageCircle className="w-7 h-7" />
              <div className="text-left leading-tight">
                <div className="text-[10px] font-bold opacity-90">写真で簡単・匿名OK</div>
                <div className="text-base md:text-lg font-extrabold tracking-tight">LINEで無料査定</div>
              </div>
            </a>
            <a href="tel:0120-000-000" className="flex-1 bg-[#FF6A00] hover:bg-[#e65f00] text-white rounded-xl py-3.5 px-4 shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95">
              <Phone className="w-7 h-7" />
              <div className="text-left leading-tight">
                <div className="text-[10px] font-bold opacity-90">相談だけでも大歓迎</div>
                <div className="text-base md:text-lg font-extrabold tracking-tight">0120-000-000</div>
              </div>
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4 font-medium text-balance">
            ※とりあえず見積もりだけ…でも大歓迎！<span className="text-red-500 font-bold">見積もり後のキャンセルは完全無料</span>です。
          </p>
        </div>
      </section>

      {/* 🟢 2. 悩み共感セクション */}
      <section className="py-12 md:py-16 px-4 bg-slate-800 text-white relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-xl md:text-3xl font-bold mb-5 text-yellow-400 text-center md:text-left">
              こんなお悩み、抱えていませんか？
            </h2>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium">
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-6 md:h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">市の粗大ゴミ回収は、手続きもシールを買うのも面倒…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-6 md:h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">重い家具や家電、自分たちだけでは外に運び出せない…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-6 md:h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">遺品整理をしたいが、量が多くて何から手をつけていいか分からない…</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckSquare className="w-5 h-5 md:w-6 md:h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">他社の見積もりが高すぎて驚いた。もっと安く済ませたい…</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1584820927498-cafe2c11866e?auto=format&fit=crop&q=80&w=800" 
              alt="片付けの悩み" 
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg border-2 md:border-4 border-slate-600"
            />
          </div>
        </div>
        
        <div className="mt-10 md:mt-14 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-2xl font-bold mb-1">↓↓↓</p>
          <p className="text-lg md:text-2xl font-extrabold text-yellow-400 bg-slate-900/50 py-3.5 md:py-4 px-3 rounded-xl border border-slate-600 text-balance leading-snug">
            そのお悩み、私たちがすべて<span className="bg-red-600 text-white px-2 py-0.5 rounded mx-1">丸投げ</span>で解決します！
          </p>
        </div>
      </section>

      {/* 🟢 3. 選ばれる3つの理由 */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            私たちが<span className="text-red-600">圧倒的に選ばれる</span>3つの理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative h-40 md:h-48">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="高価買取で安く" className="w-full h-full object-cover"/>
                <div className="absolute top-2 left-2 bg-green-600 text-white font-bold px-3 py-1 rounded-full text-xs md:text-sm shadow-md">理由 1</div>
              </div>
              <div className="p-5 md:p-6 text-center flex-grow">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 border-b-2 border-green-200 pb-2 leading-snug">買取相殺で費用が<br/>「実質0円」になることも！</h3>
                <p className="text-gray-600 text-xs md:text-sm text-left leading-relaxed">リサイクルショップの機能を持つ当社ならではの強み。他社で「処分費10万円」と言われた品も、当社が買い取って作業費から差し引くことで圧倒的な安さを実現します。</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative h-40 md:h-48">
                <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" alt="丸投げ片付け" className="w-full h-full object-cover"/>
                <div className="absolute top-2 left-2 bg-green-600 text-white font-bold px-3 py-1 rounded-full text-xs md:text-sm shadow-md">理由 2</div>
              </div>
              <div className="p-5 md:p-6 text-center flex-grow">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 border-b-2 border-green-200 pb-2 leading-snug">分別・袋詰め・運び出し<br/>すべて「丸投げ」でOK！</h3>
                <p className="text-gray-600 text-xs md:text-sm text-left leading-relaxed">お客様が事前に準備することは一切ありません。ゴミの仕分けから袋詰め、重い家具の運び出しまで、プロのスタッフがすべて行います。お客様は「指をさすだけ」です。</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative h-40 md:h-48">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="安心のスタッフ" className="w-full h-full object-cover"/>
                <div className="absolute top-2 left-2 bg-green-600 text-white font-bold px-3 py-1 rounded-full text-xs md:text-sm shadow-md">理由 3</div>
              </div>
              <div className="p-5 md:p-6 text-center flex-grow">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 border-b-2 border-green-200 pb-2 leading-snug">追加料金一切なし！<br/>安心の「明朗会計」</h3>
                <p className="text-gray-600 text-xs md:text-sm text-left leading-relaxed">業界で多い「作業後の高額請求」トラブル。当社はお見積りでお伝えした金額から、1円たりとも追加で請求することはありません。女性スタッフの同行も可能で安心です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 4. 料金プラン */}
      <section className="py-12 md:py-16 px-4 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-3">
            分かりやすい安心料金プラン
          </h2>
          <p className="text-center text-red-600 font-bold mb-8 md:mb-10 text-xs md:text-base bg-white py-2 px-3 md:px-4 rounded-lg inline-block mx-auto shadow-sm border border-red-200 text-balance leading-snug w-full md:w-auto">
            ★相見積もり大歓迎！以下の料金から、さらに【買取金額】を差し引きます！
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 flex flex-col">
              <div className="bg-gray-700 text-white text-center py-2 font-bold text-xs md:text-sm">ちょっとしたお片付け</div>
              <div className="p-5 md:p-6 text-center flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">軽トラ積み放題パック</h3>
                <div className="text-3xl font-extrabold text-red-600 mb-1">19,800<span className="text-base font-normal text-gray-900">円〜</span></div>
                <p className="text-xs text-gray-700 font-bold mb-4 mt-2 bg-green-50 py-1.5 rounded">間取り目安：1R 〜 1K</p>
                <ul className="text-xs md:text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> 押し入れ〜1部屋程度の不用品</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> 単身のお引越し・片付けに</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-500 relative flex flex-col z-10 md:-translate-y-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-b-md shadow-sm z-20">1番人気！</div>
              <div className="bg-green-600 text-white text-center py-3 md:py-4 font-bold text-sm md:text-base mt-4 md:mt-0">ごっそりお片付け</div>
              <div className="p-5 md:p-6 text-center flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">2tトラック平積みパック</h3>
                <div className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">39,800<span className="text-base font-normal text-gray-900">円〜</span></div>
                <p className="text-xs text-gray-700 font-bold mb-4 mt-2 bg-green-50 py-1.5 rounded">間取り目安：1DK 〜 2DK</p>
                <ul className="text-xs md:text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> 大型家具・家電が複数ある場合</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> 2名分の荷物・遺品整理に</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 flex flex-col">
              <div className="bg-gray-700 text-white text-center py-2 font-bold text-xs md:text-sm">家まるごと・ゴミ屋敷</div>
              <div className="p-5 md:p-6 text-center flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">2tトラック箱型パック</h3>
                <div className="text-3xl font-extrabold text-red-600 mb-1">79,800<span className="text-base font-normal text-gray-900">円〜</span></div>
                <p className="text-xs text-gray-700 font-bold mb-4 mt-2 bg-green-50 py-1.5 rounded">間取り目安：2LDK 〜 3LDK</p>
                <ul className="text-xs md:text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> 一軒家まるごとの遺品整理</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> ゴミ屋敷など大量の不用品に</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 5. 解決事例 */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-10">
            驚きの「買取相殺」実績
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-bl-lg z-10">15万円お得！</div>
              <div className="h-40 md:w-2/5 md:h-auto relative">
                 <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" alt="遺品整理実績" className="w-full h-full object-cover"/>
                 <div className="absolute bottom-0 left-0 bg-black/60 text-white text-[10px] px-2 py-1">整理後の部屋</div>
              </div>
              <div className="p-4 md:p-5 md:w-3/5">
                <div className="bg-green-600 text-white text-[10px] font-bold inline-block px-2 py-1 rounded mb-2">大和市 A様邸（2LDK遺品整理）</div>
                <p className="text-gray-800 text-xs md:text-sm mb-2 font-bold">他社見積り：250,000円だったのが…</p>
                <div className="bg-white p-3 rounded-lg text-center border border-gray-100 shadow-sm">
                  <div className="text-gray-500 text-[10px] md:text-xs">作業費：180,000円</div>
                  <div className="text-red-500 font-bold my-1 text-sm md:text-base">買取額：- 80,000円<span className="text-[10px]">（家電等）</span></div>
                  <div className="border-t border-dashed my-1 border-gray-300"></div>
                  <div className="text-base md:text-lg font-extrabold text-gray-900">
                    お支払総額：100,000<span className="text-[10px] md:text-xs font-normal">円</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-bl-lg z-10">費用相殺！</div>
              <div className="h-40 md:w-2/5 md:h-auto relative">
                 <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" alt="不用品回収実績" className="w-full h-full object-cover"/>
                 <div className="absolute bottom-0 left-0 bg-black/60 text-white text-[10px] px-2 py-1">回収後のリビング</div>
              </div>
              <div className="p-4 md:p-5 md:w-3/5">
                <div className="bg-green-600 text-white text-[10px] font-bold inline-block px-2 py-1 rounded mb-2">横浜市 B様（1K 不用品回収）</div>
                <p className="text-gray-800 text-xs md:text-sm mb-2 font-bold">引越しに伴う冷蔵庫などの処分</p>
                <div className="bg-white p-3 rounded-lg text-center border border-gray-100 shadow-sm">
                  <div className="text-gray-500 text-[10px] md:text-xs">作業費：39,800円</div>
                  <div className="text-red-500 font-bold my-1 text-sm md:text-base">買取額：- 39,800円<span className="text-[10px]">（高年式家電）</span></div>
                  <div className="border-t border-dashed my-1 border-gray-300"></div>
                  <div className="text-lg md:text-xl font-extrabold text-red-600">
                    お支払総額：実質 0<span className="text-[10px] md:text-xs font-normal text-gray-900">円！</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 6. ご依頼の流れ */}
      <section className="py-12 md:py-16 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            ご依頼のカンタン4ステップ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
            <div className="hidden md:block absolute top-16 left-10 right-10 h-1 bg-green-200 z-0"></div>
            
            <div className="text-center relative z-10 bg-white md:bg-transparent p-3 md:p-0 rounded-xl shadow-sm md:shadow-none border border-green-100 md:border-none">
              <div className="w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-white shadow-md overflow-hidden mb-2 md:mb-4 relative">
                <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=500" alt="相談" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-5 h-5 md:w-8 md:h-8 bg-green-600 text-white font-bold flex items-center justify-center rounded-br-lg text-xs md:text-base">1</div>
              </div>
              <h3 className="font-bold text-xs md:text-lg mb-1 md:mb-2">無料相談・見積り</h3>
              <p className="text-[10px] md:text-sm text-gray-600">LINEや電話でお気軽にご相談ください。</p>
            </div>
            
            <div className="text-center relative z-10 bg-white md:bg-transparent p-3 md:p-0 rounded-xl shadow-sm md:shadow-none border border-green-100 md:border-none">
              <div className="w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-white shadow-md overflow-hidden mb-2 md:mb-4 relative">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500" alt="見積もり" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-5 h-5 md:w-8 md:h-8 bg-green-600 text-white font-bold flex items-center justify-center rounded-br-lg text-xs md:text-base">2</div>
              </div>
              <h3 className="font-bold text-xs md:text-lg mb-1 md:mb-2">現地調査・確定</h3>
              <p className="text-[10px] md:text-sm text-gray-600">正確な金額を算出。<span className="text-red-500 font-bold">追加料金なし！</span></p>
            </div>
            
            <div className="text-center relative z-10 bg-white md:bg-transparent p-3 md:p-0 rounded-xl shadow-sm md:shadow-none border border-green-100 md:border-none">
              <div className="w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-white shadow-md overflow-hidden mb-2 md:mb-4 relative">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=500" alt="作業" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-5 h-5 md:w-8 md:h-8 bg-green-600 text-white font-bold flex items-center justify-center rounded-br-lg text-xs md:text-base">3</div>
              </div>
              <h3 className="font-bold text-xs md:text-lg mb-1 md:mb-2">スピーディな作業</h3>
              <p className="text-[10px] md:text-sm text-gray-600">プロが迅速に運び出します。丸投げでOK！</p>
            </div>
            
            <div className="text-center relative z-10 bg-white md:bg-transparent p-3 md:p-0 rounded-xl shadow-sm md:shadow-none border border-green-100 md:border-none">
              <div className="w-16 h-16 md:w-32 md:h-32 mx-auto rounded-full border-2 md:border-4 border-white shadow-md overflow-hidden mb-2 md:mb-4 relative">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=500" alt="精算" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-5 h-5 md:w-8 md:h-8 bg-green-600 text-white font-bold flex items-center justify-center rounded-br-lg text-xs md:text-base">4</div>
              </div>
              <h3 className="font-bold text-xs md:text-lg mb-1 md:mb-2">ご精算（買取相殺）</h3>
              <p className="text-[10px] md:text-sm text-gray-600">作業完了後にお支払い。買取でお得に。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. 代表挨拶 */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-10 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-green-600"></div>
          <div className="w-28 h-28 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="代表" className="w-full h-full object-cover"/>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-snug">
              「不当な高額請求」などの<br className="hidden md:block"/>悪徳業者にどうかご注意ください。
            </h3>
            <p className="text-gray-700 text-xs md:text-base leading-relaxed mb-4 md:mb-6 text-left">
              はじめまして。不用品回収業界では「無料と言っていたのに、後から数万円を請求された」といったトラブルが後を絶ちません。<br/><br/>
              だからこそ、私たちは<strong className="text-red-600 border-b-2 border-red-200">「お見積り後の追加料金一切なし」「買取による費用削減の徹底」</strong>をお約束します。ご自宅にお伺いする以上、清潔感と礼儀作法を徹底したスタッフのみがお伺いいたします。どんな小さなことでも、まずは安心してご相談ください。
            </p>
            <p className="font-bold text-gray-900 text-right text-sm md:text-lg">神奈川 まごころ整理センター 代表</p>
          </div>
        </div>
      </section>

      {/* 🟢 8. よくある質問 (FAQ) */}
      <section className="py-12 md:py-16 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
            <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">よくあるご質問</h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2 md:gap-3 mb-2">
                <span className="shrink-0 text-lg md:text-2xl text-red-600 font-extrabold leading-none mt-0.5">Q.</span><span className="text-sm md:text-lg">見積もりした後に、料金が追加されることはありませんか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2 md:gap-3 mt-2 md:mt-3">
                <span className="shrink-0 font-extrabold text-green-600 text-lg md:text-2xl leading-none mt-0.5">A.</span><span className="text-xs md:text-base">一切ありません。事前にお出ししたお見積り金額から、作業後に追加で請求することは絶対にありませんのでご安心ください。</span>
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2 md:gap-3 mb-2">
                <span className="shrink-0 text-lg md:text-2xl text-red-600 font-extrabold leading-none mt-0.5">Q.</span><span className="text-sm md:text-lg">見積もり後にキャンセルしても本当にお金はかかりませんか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2 md:gap-3 mt-2 md:mt-3">
                <span className="shrink-0 font-extrabold text-green-600 text-lg md:text-2xl leading-none mt-0.5">A.</span><span className="text-xs md:text-base"><strong className="text-red-600">はい、完全無料です。</strong>金額にご納得いただけない場合はお気兼ねなくお断りください。強引な営業も一切いたしません。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 9. 会社概要・許認可 */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <Building2 className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">会社概要・許認可</h2>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-xs md:text-base">
              <tbody>
                <tr className="border-b">
                  <th className="bg-gray-50 py-3 md:py-4 px-3 md:px-6 text-left w-1/3 md:w-1/4 font-medium text-gray-700">屋号</th>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-gray-900 font-bold">神奈川 まごころ整理センター</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-50 py-3 md:py-4 px-3 md:px-6 text-left font-medium text-gray-700">所在地</th>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-gray-900">〒242-0024<br className="md:hidden"/> 神奈川県大和市福田５丁目4-11</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 py-3 md:py-4 px-3 md:px-6 text-left font-medium text-gray-700 align-top">許認可番号</th>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-gray-900">
                    古物商許可番号：<br className="md:hidden"/>神奈川県公安委員会 第450000000000号<br/>
                    一般廃棄物収集運搬業許可：<br className="md:hidden"/>第〇〇号（※提携業者含む）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 md:mt-6 flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-600 bg-red-50 p-3 md:p-5 rounded-lg border border-red-200">
            <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0" />
            <p>無許可で不用品回収を行う業者にはご注意ください。当店は法令を遵守し、適正な処分および買取を行っております。</p>
          </div>
        </div>
      </section>

      {/* 🟢 フッター */}
      <footer className="bg-gray-800 text-gray-300 py-10 md:py-12 px-4 text-center text-xs md:text-sm pb-36 md:pb-40">
        <p className="font-bold mb-2 md:mb-3 text-base md:text-lg">神奈川 まごころ整理センター</p>
        <p className="mb-4 text-gray-400">〒242-0024 神奈川県大和市福田５丁目4-11</p>
        <p>© 2026 神奈川 まごころ整理センター All Rights Reserved.</p>
      </footer>

      {/* 🟢 追従型CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-t-2 border-green-500 shadow-[0_-8px_20px_rgba(0,0,0,0.1)] p-2 md:p-3 pb-safe">
        <div className="max-w-4xl mx-auto flex flex-col gap-1.5 md:gap-2">
          <p className="text-center text-[10px] md:text-xs font-bold text-gray-700">
            ＼ まずは相談だけ・他社との相見積もりも大歓迎！ <span className="text-red-600">見積り後のキャンセル無料</span> ／
          </p>
          <div className="flex gap-2">
            <a 
              href="#" 
              className="flex-1 bg-[#06C755] hover:bg-[#05b34c] transition-colors text-white rounded-xl flex items-center justify-center py-2.5 md:py-3 px-1 md:px-2 shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-red-600 text-[8px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 rounded-bl-lg animate-pulse">20%UP!</div>
              <div className="flex items-center gap-1.5 md:gap-2 relative z-10">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-[9px] md:text-xs font-bold leading-tight opacity-90">写真で簡単・匿名OK</div>
                  <div className="text-[13px] md:text-lg font-extrabold leading-tight tracking-tight">LINE無料査定</div>
                </div>
              </div>
            </a>
            
            <a 
              href="tel:0120-000-000" 
              className="flex-1 bg-[#FF6A00] hover:bg-[#e65f00] transition-colors text-white rounded-xl flex items-center justify-center py-2.5 md:py-3 px-1 md:px-2 shadow-md group"
            >
              <div className="flex items-center gap-1.5 md:gap-2">
                <Phone className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
                <div className="text-left">
                  <div className="text-[9px] md:text-xs font-bold leading-tight opacity-90">最短30分で急行！</div>
                  <div className="text-[13px] md:text-lg font-extrabold leading-tight tracking-tight">0120-000-000</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}