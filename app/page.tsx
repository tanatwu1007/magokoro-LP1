import React from 'react';
import type { Metadata } from 'next';
import { 
  Phone, MessageCircle, MapPin, Clock, HeartHandshake, 
  CheckCircle2, BadgeJapaneseYen, ClipboardList, Truck,
  HelpCircle, Building2, AlertTriangle, ThumbsUp, 
  Gift, CheckSquare, ArrowDown, Sparkles
} from 'lucide-react';

// ⑦ SEO対策（検索結果でクリックされやすいタイトルと説明文）
export const metadata: Metadata = {
  title: '【神奈川の不用品回収・遺品整理】高価買取で費用が安い！まごころ遺品センター',
  description: '神奈川県（横浜・大和など）の不用品回収、粗大ゴミ処分、遺品整理なら「神奈川まごころ遺品センター」へ。リサイクル買取で回収費用を劇的に安く相殺！分別・運び出し不要の丸投げOK。最短30分で無料出張見積もりに伺います。追加料金一切なし！',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-28">
      {/* 🟢 ヘッダー */}
      <header className="bg-green-800 text-white py-3 px-4 sticky top-0 z-40 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-sm md:text-lg font-bold flex items-center gap-1">
            <HeartHandshake className="w-5 h-5" />
            神奈川まごころ遺品センター
          </h1>
          <div className="text-xs md:text-sm bg-green-700 px-3 py-1 rounded-full font-bold">
            ご相談・お見積り無料
          </div>
        </div>
      </header>

      {/* 🟢 1. ファーストビュー（権威性＋強烈オファー） */}
      <section className="relative bg-white pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="綺麗な部屋" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-8 pb-8 text-center">
          {/* 権威性バッジ */}
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 font-extrabold px-4 py-2 rounded-full text-sm md:text-base shadow-md flex items-center gap-1">
              <ThumbsUp className="w-5 h-5" />
              おかげさまで神奈川県エリア満足度98%！
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
            その不用品・粗大ゴミ、<br className="md:hidden" />
            <span className="text-red-600 border-b-4 border-red-600 pb-1">捨てるのちょっと待って！</span>
          </h2>
          <p className="text-lg md:text-2xl font-bold text-gray-900 mb-8 bg-yellow-200 inline-block px-3 py-1 transform -rotate-1 shadow-sm">
            『高価買取』で回収費用を劇的に安くします。
          </p>

          {/* 限定オファー */}
          <div className="max-w-2xl mx-auto bg-red-50 border-2 border-red-500 rounded-xl p-4 mb-8 shadow-sm">
            <div className="flex items-center justify-center gap-2 text-red-600 font-bold mb-1">
              <Gift className="w-6 h-6 animate-pulse" />
              <span className="text-lg md:text-xl">【WEB限定】特別キャンペーン実施中！</span>
            </div>
            <p className="text-gray-800 font-bold text-sm md:text-base">
              今お見積りいただくと<span className="text-red-600 text-lg md:text-xl">「買取金額20%UP」</span>または<span className="text-red-600 text-lg md:text-xl">「基本料金割引」</span>適用！
            </p>
          </div>

          {/* 3つの安心 */}
          <div className="flex flex-col md:flex-row justify-center gap-3 max-w-3xl mx-auto">
            <div className="bg-white border-2 border-green-600 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm font-bold text-green-800">
              <MapPin className="text-red-500 w-5 h-5" />神奈川全域対応
            </div>
            <div className="bg-white border-2 border-green-600 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm font-bold text-green-800">
              <Clock className="text-orange-500 w-5 h-5" />最短30分で急行
            </div>
            <div className="bg-white border-2 border-green-600 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm font-bold text-green-800">
              <HeartHandshake className="text-pink-500 w-5 h-5" />女性スタッフ同行OK
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 2. 悩み共感セクション（ここで読者の心を掴む） */}
      <section className="py-12 px-4 bg-slate-800 text-white relative">
        {/* 下向き矢印 */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
          <ArrowDown className="w-8 h-8 text-green-600" />
        </div>

        <div className="max-w-3xl mx-auto pt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">
            こんなお悩み、抱えていませんか？
          </h2>
          <div className="bg-slate-700/50 rounded-2xl p-6 md:p-8 border border-slate-600">
            <ul className="space-y-4 text-lg font-medium">
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                <span>市の粗大ゴミ回収は、手続きもシールを買うのも面倒…</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                <span>重い家具や家電、自分たちだけでは外に運び出せない…</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                <span>遺品整理をしたいが、量が多くて何から手をつけていいか分からない…</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                <span>他社の見積もりが高すぎて驚いた。もっと安く済ませたい…</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xl md:text-2xl font-bold mb-2">↓↓↓</p>
            <p className="text-xl md:text-2xl font-extrabold text-yellow-400">
              そのお悩み、私たちがすべて<span className="bg-red-600 text-white px-2 py-1 rounded mx-1">丸投げ</span>で解決します！
            </p>
          </div>
        </div>
      </section>

      {/* 🟢 3. 中間CTA（今すぐ連絡したくなった人向け） */}
      <section className="py-8 px-4 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-bold text-red-600 mb-2">＼ スマホで写真を撮って送るだけ！最短3分でわかる ／</p>
          <a href="#" className="inline-flex items-center justify-center w-full md:w-auto bg-[#06C755] hover:bg-[#05b34c] transition-colors text-white text-lg md:text-2xl font-extrabold rounded-full py-4 px-8 shadow-lg shadow-green-200">
            <MessageCircle className="w-8 h-8 mr-2" />
            【無料】LINEでカンタン写真査定
          </a>
          <p className="text-xs text-gray-500 mt-3">※無理な営業は一切いたしません。匿名でのご相談も大歓迎です。</p>
        </div>
      </section>

      {/* 🟢 4. 選ばれる3つの理由（差別化） */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            私たちが<span className="text-red-600">圧倒的に選ばれる</span>3つの理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 理由1 */}
            <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100 shadow-sm relative pt-12 mt-6 md:mt-0">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-md">1</div>
              <BadgeJapaneseYen className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">買取相殺で費用が<br/>「実質0円」になることも！</h3>
              <p className="text-gray-600 text-sm text-left">リサイクルショップの機能を持つ当社ならではの強み。他社で「処分費10万円」と言われた品も、当社が買い取って作業費から差し引くことで圧倒的な安さを実現します。</p>
            </div>
            {/* 理由2 */}
            <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100 shadow-sm relative pt-12 mt-8 md:mt-0">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-md">2</div>
              <Sparkles className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">分別・袋詰め・運び出し<br/>すべて「丸投げ」でOK！</h3>
              <p className="text-gray-600 text-sm text-left">お客様が事前に準備することは一切ありません。ゴミの仕分けから袋詰め、重い家具の運び出しまで、プロのスタッフがすべて行います。お客様は「指をさすだけ」です。</p>
            </div>
            {/* 理由3 */}
            <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100 shadow-sm relative pt-12 mt-8 md:mt-0">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-md">3</div>
              <HeartHandshake className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">追加料金一切なし！<br/>安心の「明朗会計」</h3>
              <p className="text-gray-600 text-sm text-left">業界で多い「作業後の高額請求」トラブル。当社はお見積りでお伝えした金額から、1円たりとも追加で請求することはありません。女性スタッフの同行も可能で安心です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 5. 料金プラン */}
      <section className="py-14 px-4 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
            分かりやすい安心料金プラン
          </h2>
          <p className="text-center text-red-600 font-bold mb-8 text-sm md:text-base bg-white py-2 px-4 rounded-full inline-block mx-auto shadow-sm border border-red-200">
            ★相見積もり大歓迎！以下の料金から、さらに【買取金額】を差し引きます！
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* プラン1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="bg-gray-700 text-white text-center py-3 font-bold text-lg">ちょっとしたお片付け</div>
              <div className="p-6 text-center flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">軽トラ積み放題パック</h3>
                <div className="text-3xl font-extrabold text-red-600 mb-1">19,800<span className="text-lg font-normal text-gray-900">円〜</span></div>
                <p className="text-sm text-gray-700 font-bold mb-4 mt-4 bg-green-50 py-2 rounded">間取り目安：1R 〜 1K</p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 押し入れ〜1部屋程度の不用品</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 単身のお引越し・片付けに</li>
                </ul>
              </div>
            </div>

            {/* プラン2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-500 relative transform md:-translate-y-2 flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-b-md">1番人気！</div>
              <div className="bg-green-600 text-white text-center py-4 font-bold text-xl mt-4">ごっそりお片付け</div>
              <div className="p-6 text-center flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">2tトラック平積みパック</h3>
                <div className="text-3xl font-extrabold text-red-600 mb-1">39,800<span className="text-lg font-normal text-gray-900">円〜</span></div>
                <p className="text-sm text-gray-700 font-bold mb-4 mt-4 bg-green-50 py-2 rounded">間取り目安：1DK 〜 2DK</p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 大型家具・家電が複数ある場合</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 2名分の荷物・遺品整理に</li>
                </ul>
              </div>
            </div>

            {/* プラン3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="bg-gray-700 text-white text-center py-3 font-bold text-lg">家まるごと・ゴミ屋敷</div>
              <div className="p-6 text-center flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">2tトラック箱型パック</h3>
                <div className="text-3xl font-extrabold text-red-600 mb-1">79,800<span className="text-lg font-normal text-gray-900">円〜</span></div>
                <p className="text-sm text-gray-700 font-bold mb-4 mt-4 bg-green-50 py-2 rounded">間取り目安：2LDK 〜 3LDK</p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 一軒家まるごとの遺品整理</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> ゴミ屋敷など大量の不用品に</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            ※上記はあくまで目安です。買取品が多数ある場合は、ご請求額が0円になることもございます。<br/>他社より1円でも高い場合はお気軽にご相談ください！
          </p>
        </div>
      </section>

      {/* 🟢 6. 解決事例（買取相殺の実績） */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            驚きの「買取相殺」実績
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 事例1 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">15万円お得！</div>
              <div className="bg-green-600 text-white text-sm font-bold inline-block px-3 py-1 rounded-full mb-3 mt-2">大和市 A様邸（2LDK遺品整理）</div>
              <p className="text-gray-600 text-sm mb-4 font-bold">他社見積り：250,000円だったのが…</p>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-100">
                <div className="text-gray-500 text-sm">作業費：180,000円</div>
                <div className="text-red-500 font-bold my-1 text-lg">買取額：- 80,000円<span className="text-xs">（家電・骨董品等）</span></div>
                <div className="border-t border-dashed my-2 border-gray-300"></div>
                <div className="text-xl font-extrabold text-gray-900">
                  お支払総額：100,000<span className="text-sm font-normal">円</span>
                </div>
              </div>
              <p className="text-sm mt-3 text-gray-700 italic">「見積もりを聞いて驚きました。丸投げできて本当に助かりました！」</p>
            </div>
            {/* 事例2 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">費用相殺！</div>
              <div className="bg-green-600 text-white text-sm font-bold inline-block px-3 py-1 rounded-full mb-3 mt-2">横浜市 B様（1K 不用品回収）</div>
              <p className="text-gray-600 text-sm mb-4 font-bold">引越しに伴う冷蔵庫・洗濯機などの処分</p>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-100">
                <div className="text-gray-500 text-sm">作業費：39,800円</div>
                <div className="text-red-500 font-bold my-1 text-lg">買取額：- 39,800円<span className="text-xs">（高年式家電）</span></div>
                <div className="border-t border-dashed my-2 border-gray-300"></div>
                <div className="text-2xl font-extrabold text-red-600">
                  お支払総額：実質 0<span className="text-sm font-normal text-gray-900">円！</span>
                </div>
              </div>
              <p className="text-sm mt-3 text-gray-700 italic">「買取分で費用がチャラになりました。女性スタッフの配慮も嬉しかったです。」</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 7. ご依頼の流れ */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            ご依頼のカンタン4ステップ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* PC向けコネクタ線 */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-green-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm relative z-10 border border-green-100">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 transform -translate-x-1/2 border-4 border-green-50 shadow-sm">1</div>
              <MessageCircle className="w-10 h-10 text-green-600 mx-auto mt-4 mb-2" />
              <h3 className="font-bold text-base mb-2">無料相談・お見積り</h3>
              <p className="text-xs text-gray-600">LINEや電話で「いくらくらい？」とお気軽にご相談ください。</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm relative z-10 border border-green-100">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 transform -translate-x-1/2 border-4 border-green-50 shadow-sm">2</div>
              <ClipboardList className="w-10 h-10 text-green-600 mx-auto mt-4 mb-2" />
              <h3 className="font-bold text-base mb-2">現地調査・確定金額</h3>
              <p className="text-xs text-gray-600">正確な買取額と回収費を算出。<span className="text-red-500 font-bold">※追加料金一切なし！</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm relative z-10 border border-green-100">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 transform -translate-x-1/2 border-4 border-green-50 shadow-sm">3</div>
              <Truck className="w-10 h-10 text-green-600 mx-auto mt-4 mb-2" />
              <h3 className="font-bold text-base mb-2">スピーディな作業</h3>
              <p className="text-xs text-gray-600">プロのスタッフが迅速かつ丁寧に運び出します。丸投げでOK！</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm relative z-10 border border-green-100">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 transform -translate-x-1/2 border-4 border-green-50 shadow-sm">4</div>
              <BadgeJapaneseYen className="w-10 h-10 text-green-600 mx-auto mt-4 mb-2" />
              <h3 className="font-bold text-base mb-2">ご精算（買取相殺）</h3>
              <p className="text-xs text-gray-600">作業完了後にお支払い。買取額が上回った場合は現金をお渡しします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 8. 代表挨拶 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 border border-slate-200">
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" alt="代表" className="w-full h-full object-cover"/>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              「不当な高額請求」などの<br className="hidden md:block"/>悪徳業者にどうかご注意ください。
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              はじめまして。不用品回収業界では「無料と言っていたのに、トラックに積んだ後で数万円を請求された」といったトラブルが後を絶ちません。<br/><br/>
              だからこそ、私たちは<strong className="text-red-600 border-b border-red-600">「お見積り後の追加料金一切なし」「買取による費用削減の徹底」</strong>をお約束します。ご自宅にお伺いする以上、清潔感と礼儀作法を徹底したスタッフのみがお伺いいたします。どんな小さなことでも、まずは安心してご相談ください。
            </p>
            <p className="font-bold text-gray-900 text-right">代表</p>
          </div>
        </div>
      </section>

      {/* 🟢 9. よくある質問 (FAQ) */}
      <section className="py-12 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">よくあるご質問</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2 mb-2">
                <span className="shrink-0 text-xl text-red-600 font-extrabold">Q.</span><span>見積もりした後に、料金が追加されることはありませんか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2 text-sm md:text-base mt-3">
                <span className="shrink-0 font-extrabold text-green-600 text-xl">A.</span><span>一切ありません。事前にお出ししたお見積り金額から、作業後に追加で請求することは絶対にありませんのでご安心ください。</span>
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-start gap-2 mb-2">
                <span className="shrink-0 text-xl text-red-600 font-extrabold">Q.</span><span>ゴミ屋敷のように足の踏み場もない状態ですが、依頼できますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2 text-sm md:text-base mt-3">
                <span className="shrink-0 font-extrabold text-green-600 text-xl">A.</span><span>はい、全く問題ありません！仕分けから袋詰め、運び出しまで全てプロのスタッフが行いますので、そのままの状態でご連絡ください。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 10. 会社概要・許認可 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Building2 className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">会社概要・許認可</h2>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm md:text-base">
              <tbody>
                <tr className="border-b">
                  <th className="bg-gray-50 py-3 px-4 text-left w-1/3 font-medium text-gray-700">屋号</th>
                  <td className="py-3 px-4 text-gray-900 font-bold">神奈川まごころ遺品センター</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-50 py-3 px-4 text-left font-medium text-gray-700">所在地</th>
                  <td className="py-3 px-4 text-gray-900">〒242-0000 神奈川県大和市〇〇1-2-3</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 py-3 px-4 text-left font-medium text-gray-700 align-top">許認可番号</th>
                  <td className="py-3 px-4 text-gray-900">
                    古物商許可番号：神奈川県公安委員会 第450000000000号<br/>
                    一般廃棄物収集運搬業許可：第〇〇号（※提携業者含む）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-start gap-2 text-xs md:text-sm text-gray-600 bg-red-50 p-4 rounded-lg border border-red-200">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
            <p>無許可で不用品回収を行う業者にはご注意ください。当店は法令を遵守し、適正な処分および買取を行っております。</p>
          </div>
        </div>
      </section>

      {/* 🟢 フッター */}
      <footer className="bg-gray-800 text-gray-300 py-10 px-4 text-center text-sm pb-36">
        <p className="font-bold mb-3 text-lg">神奈川まごころ遺品センター</p>
        <p className="mb-4 text-gray-400">〒242-0000 神奈川県大和市〇〇1-2-3</p>
        <p>© 2026 神奈川まごころ遺品センター All Rights Reserved.</p>
      </footer>

      {/* 🟢 追従型CTA（アクションボタン） */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] p-2 md:p-3">
        <div className="max-w-4xl mx-auto flex gap-2">
          {/* LINEボタン */}
          <a 
            href="#" 
            className="flex-1 bg-[#06C755] hover:bg-[#05b34c] transition-colors text-white rounded-xl flex items-center justify-center py-3 px-2 shadow-md relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-red-600 text-[8px] md:text-xs font-bold px-2 py-0.5 rounded-bl-lg">20%UP中!</div>
            <div className="flex items-center gap-2 relative z-10">
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] md:text-xs font-bold leading-tight opacity-90">写真で簡単・匿名OK</div>
                <div className="text-sm md:text-lg font-extrabold leading-tight tracking-tight">LINE無料査定</div>
              </div>
            </div>
          </a>
          
          {/* 電話ボタン */}
          <a 
            href="tel:000-000-0000" 
            className="flex-1 bg-[#FF6A00] hover:bg-[#e65f00] transition-colors text-white rounded-xl flex items-center justify-center py-3 px-2 shadow-md group"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-7 h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] md:text-xs font-bold leading-tight opacity-90">最短30分で急行！</div>
                <div className="text-sm md:text-lg font-extrabold leading-tight tracking-tight">電話で相談する</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}