import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  BadgeJapaneseYen, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* 🟢 ヘッダー */}
      <header className="bg-green-800 text-white py-3 px-4 sticky top-0 z-40 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-sm md:text-lg font-bold flex items-center gap-1">
            <HeartHandshake className="w-5 h-5" />
            神奈川まごころ遺品センター
          </h1>
          <div className="text-xs md:text-sm bg-green-700 px-3 py-1 rounded-full">
            ご相談・お見積り無料
          </div>
        </div>
      </header>

      {/* 🟢 1. ファーストビュー（ヒーローセクション） */}
      {/* ※プロの指摘：ここで「綺麗になるイメージ」と「神奈川・安さ」を3秒で伝える */}
      <section className="relative bg-white">
        {/* 背景画像（一旦、綺麗な部屋のフリー素材URLを入れています。後で自分の画像に変えられます） */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="綺麗な部屋" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-12 pb-16 text-center">
          <div className="inline-block bg-red-600 text-white text-sm md:text-base font-bold px-4 py-1 rounded-full mb-4 animate-pulse">
            神奈川県エリア限定・地域密着
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            その遺品・不用品、<br className="md:hidden" />
            <span className="text-red-600">捨てるのちょっと待って！</span>
          </h2>
          <p className="text-lg md:text-2xl font-bold text-gray-800 mb-8 bg-yellow-200 inline-block px-2 transform -rotate-1">
            『高価買取』で費用を劇的に安く相殺します。
          </p>

          {/* 3つの安心バッジ（プロの指摘：数字と安心感） */}
          <div className="flex flex-col md:flex-row justify-center gap-3 max-w-3xl mx-auto">
            <div className="bg-white border-2 border-green-600 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm font-bold text-green-800">
              <MapPin className="text-red-500 w-5 h-5" />
              神奈川全域対応
            </div>
            <div className="bg-white border-2 border-green-600 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm font-bold text-green-800">
              <Clock className="text-orange-500 w-5 h-5" />
              最短30分で急行
            </div>
            <div className="bg-white border-2 border-green-600 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm font-bold text-green-800">
              <HeartHandshake className="text-pink-500 w-5 h-5" />
              女性スタッフ同行OK
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 2. 他社との圧倒的な違い（差別化セクション） */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            なぜ、まごころ遺品センターは<br className="md:hidden"/>「圧倒的に安い」のか？
          </h2>
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-600">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3 flex justify-center">
                <BadgeJapaneseYen className="w-32 h-32 text-green-600" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-red-600 mb-3">秘密は「買取・リサイクル」の独自ルート！</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ただゴミとして処分するだけの回収業者とは違い、私たちは**「リサイクルショップの機能」**を持っています。他社で「処分費用が10万円かかります」と言われた品物も、私たちが買い取って作業費から差し引く（相殺する）ことで、実質負担が0円になるケースも多数あります！
                </p>
                <ul className="space-y-2 font-bold text-gray-800">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> 家電・家具・貴金属・骨董品もプロが査定</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> 買取できないものだけを格安で回収</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 3. 解決事例（実績セクション） */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            驚きの「買取相殺」事例
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 事例1 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="bg-green-600 text-white text-sm font-bold inline-block px-3 py-1 rounded-full mb-3">
                大和市 A様邸（2LDK遺品整理）
              </div>
              <p className="text-gray-600 text-sm mb-4">他社見積り：250,000円だったのが…</p>
              <div className="bg-white p-4 rounded-lg text-center mb-2">
                <div className="text-gray-500 text-sm">作業費：180,000円</div>
                <div className="text-red-500 font-bold my-1">買取額：- 80,000円（家電等）</div>
                <div className="border-t border-dashed my-2"></div>
                <div className="text-xl font-extrabold text-gray-900">
                  お支払総額：100,000<span className="text-sm font-normal">円</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center">「見積もりを聞いて驚きました。本当に助かりました！」</p>
            </div>
            
            {/* 事例2 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="bg-green-600 text-white text-sm font-bold inline-block px-3 py-1 rounded-full mb-3">
                横浜市 B様邸（不用品回収）
              </div>
              <p className="text-gray-600 text-sm mb-4">引越しに伴う大型家具・家電の処分</p>
              <div className="bg-white p-4 rounded-lg text-center mb-2">
                <div className="text-gray-500 text-sm">作業費：50,000円</div>
                <div className="text-red-500 font-bold my-1">買取額：- 50,000円（冷蔵庫等）</div>
                <div className="border-t border-dashed my-2"></div>
                <div className="text-xl font-extrabold text-red-600">
                  お支払総額：実質 0<span className="text-sm font-normal">円！</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center">「買取分で費用がチャラになりました。女性スタッフの配慮も嬉しかったです。」</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 4. 代表挨拶（安心感セクション） */}
      <section className="py-12 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 overflow-hidden rounded-full border-4 border-green-100">
            {/* 代表の顔写真（フリー素材URL。後で自分の顔写真に変えられます） */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
              alt="代表" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              「どんな人が来るか不安…」<br/>その思い、私たちが払拭します。
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              はじめまして。遺品整理や不用品回収は、お客様のプライベートな空間にお邪魔する責任重大な仕事です。だからこそ、私たちは「礼儀正しさ」「清潔感」「明朗会計」を何より大切にしています。<br/><br/>
              他社で嫌な思いをした方、初めてで不安な方、ぜひ一度ご相談ください。お見積り後の追加料金は一切いただきません。まごころ込めて対応させていただきます。
            </p>
            <p className="font-bold text-gray-900">代表</p>
          </div>
        </div>
      </section>

      {/* 🟢 フッター */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4 text-center text-sm pb-32">
        <p className="font-bold mb-2">神奈川まごころ遺品センター</p>
        <p className="mb-4">〒242-0000 神奈川県大和市〇〇</p>
        <p>© 2026 神奈川まごころ遺品センター All Rights Reserved.</p>
      </footer>

      {/* 🟢 5. 追従型CTA（アクションボタン） */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-2 md:p-3">
        <div className="max-w-4xl mx-auto flex gap-2">
          {/* LINEボタン */}
          <a 
            href="#" 
            className="flex-1 bg-[#06C755] hover:bg-[#05b34c] transition-colors text-white rounded-xl flex items-center justify-center py-3 px-2 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-left">
                <div className="text-[10px] md:text-xs font-bold leading-tight">写真で簡単・匿名OK</div>
                <div className="text-sm md:text-lg font-extrabold leading-tight">LINE無料査定</div>
              </div>
            </div>
          </a>
          
          {/* 電話ボタン */}
          <a 
            href="tel:000-000-0000" 
            className="flex-1 bg-[#FF6A00] hover:bg-[#e65f00] transition-colors text-white rounded-xl flex items-center justify-center py-3 px-2 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-left">
                <div className="text-[10px] md:text-xs font-bold leading-tight">最短30分で急行！</div>
                <div className="text-sm md:text-lg font-extrabold leading-tight">電話で相談する</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}