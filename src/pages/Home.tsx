import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Terminal, CheckCircle, Sparkles, BookOpen, X } from 'lucide-react';

type NoticeState = {
  type: 'success' | 'error';
  message: string;
};

export default function Home() {
  const location = useLocation();
  const [notice, setNotice] = useState<NoticeState | null>(null);

  useEffect(() => {
    const nextNotice = (location.state as { contactNotice?: NoticeState } | null)?.contactNotice ?? null;
    setNotice(nextNotice);
  }, [location.state]);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <AnimatePresence>
        {notice ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4" />
                <span>{notice.message}</span>
              </div>
              <button
                type="button"
                onClick={() => setNotice(null)}
                className="rounded-full p-1 text-emerald-700 transition hover:bg-emerald-100"
                aria-label="關閉通知"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block bg-slate-100 px-3 py-1 text-primary font-label text-sm font-bold tracking-widest uppercase rounded-full"
          >
            Last Year University Student | Developer & Mentor
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.05] mb-6 tracking-tighter"
          >
            我是 Ivan，一個超熱衷於「解決問題」的跨學科開發者。
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-extrabold text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed"
          >
            我的樂趣就是 Brainstorm 出海量的 Idea，然後親手把它們變出來！
          </motion.p>

          {/* Field Note Annotation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-14 ml-4"
          >
            <p className="annotation-text text-orange-500 text-lg font-medium pl-6 border-l-2 border-orange-200">
              作為 Business + IT 的混血兒，我最擅長的就是認清問題、排好 Priority（優先順序）並搭好系統 Structure。我會把複雜的技術，轉譯成最直覺的語言。
            </p>
          </motion.div>

          {/* CTA Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between h-40" to="/side-projects">
              <span className="font-headline text-xl font-bold">🎨 想看我的作品？</span>
              <div className="flex justify-between items-end">
                <span className="text-sm text-on-surface-variant">(找案例)</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform text-primary" />
              </div>
              <p className="text-sm text-on-surface-variant mt-4">靈感與技術的實驗室 每一個 Project，都是我把商業點子結合技術結構的實戰探索。</p>
            </Link>
            <Link className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between h-40" to="/teaching">
              <span className="font-headline text-xl font-bold">🎯 想跟我學編程？</span>
              <div className="flex justify-between items-end">
                <span className="text-sm text-on-surface-variant">(找導師)</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform text-primary" />
              </div>
              <p className="text-sm text-on-surface-variant mt-4">從零開始，不做代碼奴隸 教你學會底層邏輯與排 Priority。</p>
            </Link>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 ml-8 mt-8"
          >
            <img 
              alt="Ivan" 
              className="shadow-2xl w-full h-125 object-cover rounded-[28px]" 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
            />
            <div className="absolute -top-8 -left-8 w-full h-full border border-slate-200 -z-10 rounded-[28px]"></div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-black text-primary uppercase tracking-tight mb-2">匠人工具箱</h2>
            <p className="font-body text-on-surface-variant max-w-md">我的技術棧不只是工具，更是我解決挑戰的武器。</p>
          </div>
          <div className="hidden md:block annotation-text text-orange-300 text-sm">
            手繪標記：我的實戰心得
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="group card-surface p-8 relative overflow-hidden">
            <div className="handwriting absolute top-6 right-6 text-sm text-violet-700">AI：「AI讓我專注創意。」</div>
            <div className="flex justify-between items-start mb-8">
              <Sparkles className="text-4xl text-slate-400 group-hover:text-violet-500 transition-colors" size={40} />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">AI & Prompting</h3>
            <p className="text-sm text-on-surface-variant mb-6">Prompt Engineering, AI Knowledge, AI Workflow.</p>
          </div>
          <div className="group card-surface p-8 relative overflow-hidden">
            <div className="handwriting absolute top-6 right-6 text-sm text-sky-600">Dev：「TypeScript 是我的保險絲。」</div>
            <div className="flex justify-between items-start mb-8">
              <Terminal className="text-4xl text-slate-400 group-hover:text-sky-600 transition-colors" size={40} />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Core Dev</h3>
            <p className="text-sm text-on-surface-variant mb-6">HTML, CSS, JS, SQL, React, TypeScript, Excel, Roblox Studio.</p>
          </div>
          <div className="group card-surface p-8 md:col-span-2 relative overflow-hidden">
            <div className="handwriting absolute top-6 right-6 text-sm text-slate-600">Architecture：「地基穩，大廈才經得起時間考驗。」</div>
            <div className="flex justify-between items-start mb-8">
              <BookOpen className="text-4xl text-slate-400 group-hover:text-slate-700 transition-colors" size={40} />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-headline text-3xl font-black mb-2 italic">Architecture</h3>
                <p className="text-sm text-on-surface-variant">System Design, Security, Network, IT Fundamentals.</p>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <ul className="text-xs space-y-2 font-label text-on-surface-variant">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Computer Knowledge</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Security Protocols</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span> Network Topology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="bg-white border border-slate-100 aspect-square w-full relative rounded-[28px] overflow-hidden shadow-sm">
            <img
              alt="Coding session"
              className="w-full h-full object-cover absolute inset-0 grayscale"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
            />
          </div>
        </div>

        <div>
          <h3 className="font-headline text-4xl font-black mb-6 leading-tight">💻 AI 時代，寫 Code 靠 Vibe；贏，靠「腦袋」！</h3>
          <p className="font-body text-lg text-on-surface-variant mb-6 leading-relaxed">
            現在跟 AI 講兩句就能生出一堆 Code，單純死背語法的時代已經過去了。當人人都能用 AI 產出，拉開差距的關鍵反而是：你懂不懂得「串連」？懂不懂得認清問題、排好 Priority、搭好 Structure？          </p>
          <p className="font-body text-lg text-on-surface-variant mb-6 leading-relaxed">
            AI 負責提供零件，而我的大腦負責當總指揮。作為 Business + IT 的跨學科混血兒，這正是我最擅長的天生能力。
          </p>
          <p className="font-body text-lg text-on-surface-variant mb-6 leading-relaxed">
            這個網頁是我的實踐基地，專門用來分享我的 個人專案 (Projects) 和 學習教學。
          </p>

          <div className="flex flex-col gap-6 mt-6">
            <div className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4 text-primary mb-2">
                <CheckCircle className="text-amber-500 w-6 h-6" size={24} />
                <span className="font-bold">1-on-1 導師指導</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">🎯 1-on-1 導師指導：不教你死記 hard code，而是教你抓核心問題、排 Priority。把複雜技術拆成好懂的故事，帶你當個精準指揮 AI 的 Leader。</p>
            </div>

            <div className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4 text-primary mb-2">
                <CheckCircle className="text-amber-500 w-6 h-6" size={24} />
                <span className="font-bold">🚀 AI 協作賦能：</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">「AI 一定要用，唔用先奇怪！」教你把 AI 當成 24 小時副駕駛，快速把 Idea 變成 Prototype。我們負責出腦袋，實作讓 AI 幫我們開掛加速。</p>
            </div>

            <div className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4 text-primary mb-2">
                <CheckCircle className="text-amber-500 w-6 h-6" size={24} />
                <span className="font-bold">🛠️ 跨學科全流程實戰：</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">得益於 Business + IT 的雙重思維，我能從 Brainstorm 點子、UI/UX 設計，一路玩到系統架構與部署。陪你把超酷的想法，變成真正能 Run 的厲害作品！</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
