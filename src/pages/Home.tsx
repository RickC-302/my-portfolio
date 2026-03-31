import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Settings, Code2, CheckCircle, AudioLines, Sparkles, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block bg-secondary-container px-3 py-1 text-on-secondary-container font-label text-sm font-bold tracking-widest uppercase"
          >
            Last Year University Student | Developer & Mentor
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-6xl md:text-8xl font-extrabold text-primary leading-[1.1] mb-8 tracking-tighter"
          >
            你好，我是 Ivan。<br/>
            <span className="text-tertiary">我喜歡把複雜的代碼變成易懂的故事</span>
          </motion.h1>

          {/* Field Note Annotation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-12 ml-4"
          >
            <div className="absolute -left-6 top-0 text-tertiary">
              <svg fill="none" height="40" viewBox="0 0 40 40" width="40">
                <path d="M5 5C15 15 25 25 35 35M35 35L30 35M35 35L35 30" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
              </svg>
            </div>
            <p className="annotation-text text-tertiary text-lg font-medium pl-6">
              雖然我還是大學生，但我擁有豐富的實戰經驗，能從底層邏輯為你解構技術。
            </p>
          </motion.div>

          {/* CTA Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link className="group bg-primary text-on-primary p-6 transition-all hover:bg-primary-container flex flex-col justify-between h-40" to="/teaching">
              <span className="font-headline text-xl font-bold">我想學編程</span>
              <div className="flex justify-between items-end">
                <span className="text-sm opacity-80">(找導師)</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
            <Link className="group bg-surface-container-high text-on-surface p-6 transition-all hover:bg-surface-container-highest flex flex-col justify-between h-40" to="/projects">
              <span className="font-headline text-xl font-bold">我想做網頁</span>
              <div className="flex justify-between items-end">
                <span className="text-sm opacity-80">(找開發)</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
            <Link className="group bg-surface-container-low text-on-surface p-6 transition-all hover:bg-surface-container flex flex-col justify-between h-40" to="/sisu-corner">
              <span className="font-headline text-xl font-bold">我只想隨便逛逛</span>
              <div className="flex justify-between items-end">
                <span className="text-sm opacity-80">(交朋友)</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
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
              className="grayscale contrast-125 shadow-2xl w-full h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw4mk84T6Tqhp9RZoOs-58K73uPWd0K7V979_CezMZ_dXjv9zy1cnkFcI1X-PhQdnDvsXdjgBNKoBQTCyVa2SHn4CLSpkf0VGpjJMWUsfR7l2EdRgKiVibvWcc5YbpH0NhiECZTQFoOG7apHXD_Xw_ZJ6q9qMpoe0tzj1cBv8eRXpWh2lv1e0RJV0AM2-BNogStvHnrkuJ1ujXRvvlXqOGShNZCAUlHziCLg1_FOfwXPJSBI6Mr9CXBFB2HbquM1z2iRHRRNTj-QvW"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-8 -left-8 w-full h-full border border-primary/10 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-4xl font-black text-primary uppercase tracking-tight mb-2">匠人工具箱</h2>
            <p className="font-body text-on-surface-variant max-w-md">我的技術棧不僅是工具，更是我解決複雜挑戰的武器。每一種語言背後都有它的哲學。</p>
          </div>
          <div className="hidden md:block annotation-text text-secondary text-sm">
            手繪標記：我的實戰心得
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-surface-container-low p-8 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-8">
              <Sparkles className="text-4xl text-primary" size={40} />
              <div className="text-xs font-label bg-primary/10 px-2 py-1">NEW ERA</div>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">AI & Prompting</h3>
            <p className="text-sm text-on-surface-variant mb-6">Prompt Engineering, AI Knowledge, AI Using. 掌握與未來對話的語言。</p>
          </div>
          <div className="bg-surface-container p-8 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-8">
              <Terminal className="text-4xl text-primary" size={40} />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Core Dev</h3>
            <p className="text-sm text-on-surface-variant mb-6">HTML, CSS, JS, SQL, React, TypeScript, Excel, Roblox Studio.</p>
          </div>
          <div className="bg-surface-dim p-8 md:col-span-2 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-8">
              <BookOpen className="text-4xl text-primary" size={40} />
              <span className="font-label text-xs uppercase tracking-widest">Theory & Fundamentals</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-headline text-3xl font-black mb-2 italic">Architecture</h3>
                <p className="text-sm text-on-surface-variant">System Design, Security, Network, IT Fundamentals.</p>
              </div>
              <div className="border-l border-outline-variant pl-6">
                <ul className="text-xs space-y-2 font-label">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-tertiary"></span> Computer Knowledge</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-tertiary"></span> Security Protocols</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-tertiary"></span> Network Topology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Content Block */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="bg-surface-container-highest aspect-square w-full relative">
            <img 
              alt="Coding session" 
              className="w-full h-full object-cover absolute top-4 left-4 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAI2wu-FFahYifPQzViyc2344BD9LMNXGtYVLQr6CiMaCU5_8pzNRHMfNiR1YjSCMU9cAVoMvsn9oYaZIgUxf4qEWgaMBBrM_jwW2JZfzmWRSRnvKAGSXApyMWNPXi0w5lGgw9djAHoamV-1OXx3Bfk-2Tqabzln8XfG7QVVw5haUK04e4Q-54AvFScjuSWmy2FxVjDbYkBV9CbGjzNgDG60m8Ulqbty29T7JXv0I2FpxWMWxDKIwUQLY-9FLJhYG1b3vighMLGYf9"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-tertiary text-on-tertiary p-8 max-w-xs shadow-xl">
            <p className="font-body text-sm italic">
              "代碼不只是邏輯的堆砌，它是人類與機器之間的詩篇。"
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h3 className="font-headline text-4xl font-black mb-8 leading-tight">不僅是開發者，更是你的<span className="sketch-underline">技術翻譯官</span></h3>
          <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
            在過去的五年裡，我致力於彌合「純技術」與「用戶需求」之間的鴻溝。無論你是想從零開始學習編程的初學者，還是需要一套高品質企業官網的創業家，我都能提供兼具質感與性能的解決方案。
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 text-primary">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">1-on-1 導師指導課程</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">AI 一定會用，唔用先奇怪，但我地要學識，點用呢個工具，點用佢溝通，掌握核心邏輯先係王道。</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 text-primary">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">全端響應式網頁開發</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">從底層架構到頂層介面，打造流暢且具備 AI 整合能力的現代化應用。</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 text-primary">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">品牌視覺與 UIUX 設計</span>
              </div>
              <p className="text-sm text-on-surface-variant pl-10">不僅要好用，更要好看。將品牌靈魂注入每一個像素之中。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Intro FAB */}
      <button className="fixed bottom-8 right-8 bg-tertiary text-on-tertiary w-16 h-16 flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-transform z-50 group">
        <AudioLines size={30} />
        <span className="absolute right-20 bg-on-surface text-surface px-4 py-2 text-sm font-label opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          聽聽我的自我介紹
        </span>
      </button>
    </div>
  );
}
