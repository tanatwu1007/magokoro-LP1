import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  BadgeJapaneseYen, 
  ClipboardList,
  Truck,
  HelpCircle,
  Building2,
  AlertTriangle
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
      <section className="relative bg-white">
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
            その不用品・粗大ゴミ、<br className="md:hidden" />
            <span className="text-red-600">捨てるのちょっと待って！</span>
          </h2>
          <p className="text-lg md:text-2xl font-bold text-gray-800 mb-8 bg-yellow-200 inline-block px-2 transform -rotate-1">
            『高価買取』で回収費用を劇的に安くします。
          </p>

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
                  ただゴミとして処分するだけの回収業者とは違い、私たちは**「リサイクルショップの機能」**を持っています。他社で「処分費用が10万円かかります」と言われた不用品も、私たちが買い取って作業費から差し引く（相殺する）ことで、実質負担が0円になるケースも多数あります！
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

      {/* 🟢 【NEW】3. ご依頼の流れ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            ご依頼のカンタン4ステップ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* ステップ1 */}
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200 relative">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 transform -translate-x-1/2 border-4 border-white">1</div>
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mt-4 mb-2" />
              <h3 className="font-bold text-lg mb-2">無料相談・お見積り</h3>
              <p className="text-sm text-gray-600">LINEや電話で「いくらくらい？」とお気軽にご相談ください。写真査定も可能です。</p>
            </div>
            {/* ステップ2 */}
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200 relative">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 transform -translate-x-1/2 border-4 border-white">2</div>
              <ClipboardList className="w-12 h-12 text-green-600 mx-auto mt-4 mb-2" />
              <h3 className="font-bold text-lg mb-2">現地調査・確定金額</h3>
              <p className="text-sm text-gray-600">現地へお伺いし、正確な買取額と回収費を算出。※この後の追加料金は一切ありません！</p>
            </div>
            {/* ステップ3 */}
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200 relative">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 transform -translate-x-1/2 border-4 border-white">3</div>
              <Truck className="w-12 h-12 text-green-600 mx-auto mt-4 mb-2" />
              <h3 className="font-bold text-lg mb-2">スピーディな作業</h3>
              <p className="text-sm text-gray-600">プロのスタッフが迅速かつ丁寧に運び出します。お客様は見ているだけでOKです。</p>
            </div>
            {/* ステップ4 */}
            <div className="bg-slate-50 p-6 rounded-xl text-center border border-slate-200 relative">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 left-1/2 transform -translate-x-1/2 border-4 border-white">4</div>
              <BadgeJapaneseYen className="w-12 h-12 text-green-600 mx-auto mt-4 mb-2" />
              <h3 className="font-bold text-lg mb-2">ご精算（買取相殺）</h3>
              <p className="text-sm text-gray-600">作業完了後にお支払い。買取額が上回った場合は、その場で現金をお渡しします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 4. 代表挨拶（安心感セクション） */}
      <section className="py-12 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row items-center gap-8 border-t-4 border-gray-800">
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 overflow-hidden rounded-full border-4 border-green-100">
            {/* 代表の顔写真 */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
              alt="代表" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              「不当な高額請求」などの<br className="md:hidden"/>悪徳業者にご注意ください。
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              はじめまして。不用品回収業界では、残念ながら「無料と言っていたのに、トラックに積んだ後で数万円を請求された」といったトラブルが後を絶ちません。<br/><br/>
              だからこそ、私たちは**「お見積り後の追加料金一切なし」「買取による費用削減の徹底」**をお約束します。ご自宅にお伺いする以上、清潔感と礼儀作法を徹底したスタッフのみがお伺いいたします。どんな小さなことでも、まずは安心してご相談ください。
            </p>
            <p className="font-bold text-gray-900">代表</p>
          </div>
        </div>
      </section>

      {/* 🟢 【NEW】5. よくある質問 (FAQ) */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">よくあるご質問</h2>
          </div>
          <div className="space-y-4">
            {/* Q1 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50">
              <h3 className="font-bold text-red-600 flex items-start gap-2 mb-2">
                <span className="shrink-0 text-lg">Q.</span>
                <span>見積もりした後に、料金が追加されることはありませんか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2 text-sm md:text-base">
                <span className="shrink-0 font-bold text-green-600 text-lg">A.</span>
                <span>一切ありません。事前にお出ししたお見積り金額から、作業後に追加で請求することは絶対にありませんのでご安心ください。</span>
              </p>
            </div>
            {/* Q2 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50">
              <h3 className="font-bold text-red-600 flex items-start gap-2 mb-2">
                <span className="shrink-0 text-lg">Q.</span>
                <span>ゴミ屋敷のように足の踏み場もない状態ですが、依頼できますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2 text-sm md:text-base">
                <span className="shrink-0 font-bold text-green-600 text-lg">A.</span>
                <span>はい、全く問題ありません！仕分けから袋詰め、運び出しまで全てスタッフが行いますので、お客様はそのままの状態でご連絡ください。</span>
              </p>
            </div>
            {/* Q3 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50">
              <h3 className="font-bold text-red-600 flex items-start gap-2 mb-2">
                <span className="shrink-0 text-lg">Q.</span>
                <span>壊れている家電や古い家具でも買い取ってもらえますか？</span>
              </h3>
              <p className="text-gray-700 flex items-start gap-2 text-sm md:text-base">
                <span className="shrink-0 font-bold text-green-600 text-lg">A.</span>
                <span>部品に価値があるものや、海外輸出向けに需要があるものは、壊れていても買取・無料引取ができる場合があります。まずは査定させてください。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 【NEW】6. 会社概要・許認可（違法業者との差別化） */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Building2 className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">会社概要・許認可</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
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
                <tr className="border-b">
                  <th className="bg-gray-50 py-3 px-4 text-left font-medium text-gray-700">営業時間</th>
                  <td className="py-3 px-4 text-gray-900">9:00 〜 20:00（年中無休）</td>
                </tr>
                <tr>
                  <th className="bg-gray-50 py-3 px-4 text-left font-medium text-gray-700 align-top">許認可番号<br/><span className="text-[10px] text-red-500">※超重要</span></th>
                  <td className="py-3 px-4 text-gray-900">
                    古物商許可番号：神奈川県公安委員会 第450000000000号<br/>
                    一般廃棄物収集運搬業許可：第〇〇号（※提携業者含む）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-start gap-2 text-xs text-gray-500 bg-red-50 p-3 rounded border border-red-100">
            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
            <p>無許可で不用品回収を行う業者にはご注意ください。当店は法令を遵守し、適正な処分および買取を行っております。</p>
          </div>
        </div>
      </section>

      {/* 🟢 フッター */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4 text-center text-sm pb-32">
        <p className="font-bold mb-2">神奈川まごころ遺品センター</p>
        <p>© 2026 神奈川まごころ遺品センター All Rights Reserved.</p>
      </footer>

      {/* 🟢 7. 追従型CTA（アクションボタン） */}
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