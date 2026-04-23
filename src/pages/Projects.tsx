import React from 'react';
import { motion } from 'motion/react';
import { Layout, ShoppingCart, LayoutDashboard, Globe, Database, Send, MessageSquare, Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <header className="mb-24 flex flex-col md:flex-row gap-12 items-end">
        <div className="flex-1">
          <span className="font-label text-tertiary font-bold tracking-widest uppercase mb-4 block">Crafting Digital Solutions</span>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.9]">
            專案開發<br/><span className="text-secondary">Project Lab</span>
          </h1>
          <p className="mt-8 text-xl text-on-surface-variant max-w-xl leading-relaxed">
            我們不只是寫程式。我們在構建穩固的數位基礎，融合 <span className="sketch-underline">Sisu</span> 的堅毅精神與工業級的精確度。
          </p>
        </div>
        <div className="relative w-full md:w-1/3 aspect-square bg-surface-container overflow-hidden p-4">
          <img 
            alt="Drafting tools" 
            className="w-full h-full object-cover filter grayscale contrast-125" 
            src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1000&q=80"
          />
          <div className="absolute -bottom-2 -left-2 bg-tertiary text-on-tertiary p-3 rotate-3 font-label text-xs">
            ARCHIVE NO. 2024-DEV
          </div>
        </div>
      </header>

      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Primary Focus: Landing Pages & Multi-page Websites */}
          <div className="md:col-span-2 bg-surface-container-high p-10 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
            <Globe className="text-4xl text-primary group-hover:text-surface-bright" size={40} />
            <div className="mt-12">
              <h3 className="font-headline text-3xl font-bold group-hover:text-surface-bright uppercase tracking-tighter">品牌著陸頁 & 多頁面官網<br/>Landing Pages & Multi-page Sites</h3>
              <p className="mt-4 text-on-surface-variant group-hover:text-surface-bright/80">
                採用 <span className="font-bold">Atomic Design</span> 原子設計架構，確保網頁具備極高的擴展性與維護性。專注於高轉換率與極致視覺呈現。
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-surface-dim p-10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group hover:bg-tertiary transition-colors duration-500">
            <div className="flex-1 z-10">
              <h3 className="font-headline text-4xl font-black text-primary group-hover:text-on-tertiary mb-4 uppercase tracking-tighter">Google API & Integrations</h3>
              <p className="text-on-surface-variant group-hover:text-on-tertiary/80 max-w-2xl text-lg">
                整合 Maps, Sheets, Calendar 與 AI 模型。我們讓數位工具之間進行無縫對話，將繁瑣流程自動化。
              </p>
            </div>
            <div className="flex gap-4 z-10">
              <div className="w-16 h-16 bg-surface-bright flex items-center justify-center shadow-lg group-hover:bg-on-tertiary group-hover:text-tertiary"><Database size={32} /></div>
              <div className="w-16 h-16 bg-surface-bright flex items-center justify-center shadow-lg group-hover:bg-on-tertiary group-hover:text-tertiary"><Code2 size={32} /></div>
            </div>
            <div className="absolute right-[-5%] top-[-20%] text-[10rem] font-black text-on-surface/5 select-none pointer-events-none">API</div>
          </div>

          {/* Secondary Focus: Backend & E-commerce */}
          <div className="md:col-span-2 bg-surface-container p-10 flex flex-col justify-between border-t-4 border-secondary">
            <div className="flex justify-between items-start">
              <ShoppingCart className="text-4xl text-secondary" size={40} />
              <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant/40">Secondary Focus</span>
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl font-bold">電商系統與後台管理</h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                從結帳流程優化到高效、直覺的內部操作平台。雖然不是我們目前的主打，但我們依然能提供穩固的解決方案。
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-surface-container-low p-10 flex flex-col justify-between border-t-4 border-primary">
            <div className="flex justify-between items-start">
              <LayoutDashboard className="text-4xl text-primary" size={40} />
              <span className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant/40">Internal Tools</span>
            </div>
            <div className="mt-8">
              <h3 className="font-headline text-2xl font-bold">數據驅動決策平台</h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                將複雜的數據轉化為可視化的儀表板，釋放團隊生產力，讓決策更有依據。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-start">
        <div className="sticky top-32">
          <h2 className="font-headline text-5xl font-black text-primary leading-tight">
            傾聽，然後解決。<br/>Direct Inquiry Console
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                <MessageSquare className="text-on-secondary-container" size={20} />
              </div>
              <p className="text-on-surface-variant font-medium">這不是一般的填表單。這是一次深度的需求對接，讓我們直接進入核心問題。</p>
            </div>
            <div className="rotate-[-1deg] bg-tertiary-fixed p-4 shadow-sm inline-block border-l-4 border-tertiary">
              <p className="font-label text-sm text-on-tertiary-fixed italic">
                "每個成功的專案都始於一個誠實的提問。告訴我你的現狀，我會提供解法。" — Ivan
              </p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-highest shadow-2xl overflow-hidden flex flex-col h-[600px] font-mono">
          <div className="bg-primary p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-surface-bright text-xs font-headline tracking-widest uppercase opacity-70">Query Terminal v2.1 - Simulation</span>
          </div>
          <div className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth bg-on-surface text-surface-bright">
            <div className="space-y-4">
              <div className="flex gap-2">
                <span className="text-secondary font-bold">ivan@dev:~$</span>
                <span className="animate-pulse">_</span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-tertiary-fixed"
              >
                [SYSTEM] Initializing secure connection...
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-secondary">Ivan:</span> 你好！我是 Ivan。很高興你想聊聊新專案。
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <span className="text-secondary">Client:</span> 我想要一個能自動擴展的網頁，你有什麼建議？
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5 }}
              >
                <span className="text-secondary">Ivan:</span> 我建議使用 <span className="text-tertiary-fixed">Atomic Design</span> 架構配合 React。這樣你的組件可以像樂高一樣重複使用，未來要加功能非常快。
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6.5 }}
              >
                <span className="text-secondary">Client:</span> 聽起來不錯，那後台數據怎麼處理？
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8 }}
              >
                <span className="text-secondary">Ivan:</span> 我們可以整合 Google Sheets API 作為輕量級後台，或者使用 Firebase 處理即時數據。這取決於你的規模。
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 10 }}
                className="flex gap-2"
              >
                <span className="text-secondary font-bold">ivan@dev:~$</span>
                <span className="animate-pulse">|</span>
              </motion.div>
            </div>
          </div>
          <div className="p-4 bg-on-surface border-t border-surface-variant/20">
            <div className="flex items-center gap-4 opacity-50 cursor-not-allowed">
              <div className="text-secondary font-bold">guest@dev:~$</div>
              <input disabled className="flex-1 bg-transparent border-none focus:ring-0 text-surface-bright py-1 px-0 placeholder:text-surface-variant/40" placeholder="Simulation mode active..." type="text"/>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-headline text-5xl font-black text-primary mb-8">啟動專案諮詢</h2>
            <p className="text-on-surface-variant text-lg mb-12">
              填寫下方的表單，我將在 24 小時內親自回覆您的需求。讓我們一起將想法轉化為現實。
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="font-bold text-primary">快速回覆</div>
                  <div className="text-sm text-on-surface-variant">所有諮詢均由我本人親自處理</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                  <Layout size={24} />
                </div>
                <div>
                  <div className="font-bold text-primary">技術評估</div>
                  <div className="text-sm text-on-surface-variant">提供初步的技術架構建議與報價</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form className="bg-surface-container p-10 space-y-6 shadow-sm border-t-4 border-tertiary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">您的姓名</label>
                  <input className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-tertiary p-4" placeholder="Ivan Chen" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">電子郵件</label>
                  <input className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-tertiary p-4" placeholder="hello@ivan.dev" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">專案類型</label>
                <select className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-tertiary p-4 appearance-none">
                  <option>品牌著陸頁 / Landing Page</option>
                  <option>多頁面官網 / Multi-page Website</option>
                  <option>API 整合 / 自動化流程</option>
                  <option>其他技術諮詢</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">專案描述</label>
                <textarea className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-tertiary p-4 h-32" placeholder="請簡單描述您的需求與目標..."></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 font-headline font-bold uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-all">
                提交諮詢請求
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="font-headline text-4xl font-black text-primary">Active Bench</h2>
          <div className="flex-1 h-[2px] bg-primary/10"></div>
          <span className="font-label text-xs uppercase tracking-tighter text-on-surface-variant">Live Project Status</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface-container-low p-8 relative">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-label text-tertiary font-bold mb-1 block">E-COMMERCE REFACTOR</span>
                <h4 className="font-headline text-2xl font-bold">Anco Development Ltd</h4>
              </div>
              <span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-1 font-bold">70% COMPLETE</span>
            </div>
            <div className="space-y-4">
              <div className="w-full bg-surface-variant h-1 overflow-hidden">
                <div className="bg-primary h-full" style={{ width: '70%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] font-label uppercase text-on-surface-variant font-semibold">
                <span>E-commerce website</span>
                <span>70% Complete</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 relative">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-label text-tertiary font-bold mb-1 block">APPLICATION DEV</span>
                <h4 className="font-headline text-2xl font-bold">Taxi Quiz</h4>
              </div>
              <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 font-bold">50% COMPLETE</span>
            </div>
            <div className="space-y-4">
              <div className="w-full bg-surface-variant h-1 overflow-hidden">
                <div className="bg-secondary h-full" style={{ width: '50%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] font-label uppercase text-on-surface-variant font-semibold">
                <span>Taxi Quiz application</span>
                <span>50% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="bg-primary p-12 md:p-24 relative overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="font-headline text-5xl md:text-7xl font-black text-surface-bright leading-none mb-8">
              Ready to Build<br/><span className="text-primary-fixed">Something Enduring?</span>
            </h2>
            <p className="text-white max-w-2xl mx-auto text-lg mb-12">
              我們不相信快速修補。我們相信的是從底層邏輯到頂層介面的一致性。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-tertiary text-on-tertiary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-bright transition-colors">啟動詢問主控台</button>
              <button className="border border-on-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-on-primary hover:text-primary transition-colors">查看更多案例</button>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c8ebd0 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
      </section>
    </div>
  );
}
