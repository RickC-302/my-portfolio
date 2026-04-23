import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8">
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
            我是 Ivan，一名熱衷於「解決問題」的開發者
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-extrabold text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed"
          >
            我的樂趣源於腦力激盪出海量的 Idea，並親手將它們從虛幻轉化為現實。
          </motion.p>

          {/* Field Note Annotation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-14 ml-4"
          >
            <p className="annotation-text text-orange-500 text-lg font-medium pl-6 border-l-2 border-orange-200">
              在無數次的「構思、失敗、優化、實現」循環中，我學會了如何解構複雜的技術，將其轉譯為直覺的語言。
            </p>
          </motion.div>

          {/* CTA Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between h-40" to="/sisu-corner">
              <span className="font-headline text-xl font-bold">我想看你的作品</span>
              <div className="flex justify-between items-end">
                <span className="text-sm text-on-surface-variant">(找案例)</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform text-primary" />
              </div>
              <p className="text-sm text-on-surface-variant mt-4">靈感與技術的實驗室，每一個都是我對技術的探索。</p>
            </Link>
            <Link className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between h-40" to="/teaching">
              <span className="font-headline text-xl font-bold">我想學編程</span>
              <div className="flex justify-between items-end">
                <span className="text-sm text-on-surface-variant">(找導師)</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform text-primary" />
              </div>
              <p className="text-sm text-on-surface-variant mt-4">從零開始，陪你拆解技術的底層邏輯。</p>
            </Link>
            <Link className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between h-40" to="/projects">
              <span className="font-headline text-xl font-bold">我想做網頁</span>
              <div className="flex justify-between items-end">
                <span className="text-sm text-on-surface-variant">(找開發)</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform text-primary" />
              </div>
              <p className="text-sm text-on-surface-variant mt-4">開發、部署、維護你的網頁，讓品牌靈魂注入像素。</p>
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
            <p className="font-body text-on-surface-variant max-w-md">我的技術棧不僅是工具，更是我解決複雜挑戰的武器。每一種語言背後都有它的哲學。</p>
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
            <p className="text-sm text-on-surface-variant mb-6">Prompt Engineering, AI Knowledge, AI Using. 掌握與未來對話的語言。</p>
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

      {/* Asymmetric Content Block */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="bg-white border border-slate-100 aspect-square w-full relative rounded-[28px] overflow-hidden shadow-sm">
            <img 
              alt="Coding session" 
              className="w-full h-full object-cover absolute inset-0 grayscale" 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
            />
          </div>
        <div className="absolute -bottom-8 -right-8 bg-[#0F172A] text-white p-8 max-w-xs shadow-[0_20px_50px_rgba(249,115,22,0.2)] rounded-3xl border-t-4 border-orange-500">
          <p className="font-body text-sm italic leading-relaxed">
            「在 AI 寫代碼的年代，Programming 的本質已進化為一種『高階思考』。」
          </p>
        </div>
        </div>
        <div className="order-1 md:order-2">
          <h3 className="font-headline text-4xl font-black mb-8 leading-tight">AI 時代：為何我們仍需學習程式邏輯？</h3>
          <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
            AI 能幫你填補細節，但只有你的「底層邏輯」能賦予它靈魂。學習編程不再是為了記憶語法，而是為了掌握與 AI 溝通的權杖。當你理解了代碼背後的邏輯結構，你就不再是被動的工具使用者，而是能精準駕馭 AI 的指揮官。
          </p>
          <div className="flex flex-col gap-6">
            <div className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4 text-primary mb-2">
                <CheckCircle className="text-amber-500 w-6 h-6" size={24} />
                <span className="font-bold">1-on-1 導師指導：帶你跟上我的步調</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">我不只教你寫程式，更教你如何思考。我擅長將艱澀的底層邏輯拆解成易懂的故事，讓你不再迷失於代碼海洋，而是有節奏地建立屬於你的技術版圖。</p>
            </div>
            <div className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4 text-primary mb-2">
                <CheckCircle className="text-amber-500 w-6 h-6" size={24} />
                <span className="font-bold">AI 協作賦能：教你與未來對話</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">「AI 一定要用，唔用先奇怪。」在這個時代，懂得如何與 AI 合作才是王道。我會教你如何使用這個強大工具，將你的點子快速建模、完善並落地，讓你不是被 AI 取代，而是借力 AI 變得更快更強。</p>
            </div>
            <div className="group card-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4 text-primary mb-2">
                <CheckCircle className="text-amber-500 w-6 h-6" size={24} />
                <span className="font-bold">全流程開發服務：從腦力激盪到完美交付</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">從最初的點子發想、UI/UX 質感設計，到最後的底層架構與自動化部署。我以解決問題為愛好，致力於打造兼具性能與靈魂的數位作品，陪你把好想法變成好產品。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
