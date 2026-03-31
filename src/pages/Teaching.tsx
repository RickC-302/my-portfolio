import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Play, Baby, School, History, ChevronRight, Lock, Pencil, CheckCircle, FileText, X } from 'lucide-react';
import { cn } from '../lib/utils';

const subjects = [
  { 
    id: 'it-fundamentals', 
    name: 'IT Fundamentals', 
    content: `
      <div class="space-y-6 font-body text-on-surface">
        <h1 class="text-3xl font-headline font-black text-primary border-b-2 border-tertiary pb-2">IT Fundamentals: 核心架構</h1>
        <p class="italic text-on-surface-variant">這份教材將帶領你從最底層的計算機原理開始，理解資料是如何在硬體與軟體之間流動的。</p>
        
        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. 馮紐曼架構 (Von Neumann Architecture)</h2>
          <p>理解 CPU、記憶體 (RAM) 與輸入/輸出設備之間的協作關係。這是所有現代電腦的基礎。</p>
          <div class="bg-surface-container-low p-4 border-l-4 border-primary">
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li>控制單元 (Control Unit)</li>
              <li>算術邏輯單元 (ALU)</li>
              <li>暫存器 (Registers)</li>
            </ul>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. 二進位與資料表示</h2>
          <p>為什麼電腦只認識 0 與 1？我們如何用 0 與 1 表示文字、圖片與聲音？</p>
          <p class="text-sm">從 Bit 到 Byte，再到更高層級的資料結構，這是一場抽象化的旅程。</p>
        </section>

        <div class="mt-12 p-6 bg-tertiary-container/30 rounded-sm italic text-sm">
          "Understanding the 'Why' behind the hardware makes the 'How' of software much clearer." - Ivan
        </div>
      </div>
    `
  },
  { 
    id: 'html-css-js', 
    name: 'HTML / CSS / JS', 
    content: `
      <div class="space-y-6 font-body text-on-surface">
        <h1 class="text-3xl font-headline font-black text-primary border-b-2 border-tertiary pb-2">Web Development: 網頁三劍客</h1>
        <p class="italic text-on-surface-variant">結構、樣式與行為：理解網頁是如何被構建並賦予生命的。</p>
        
        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. HTML5: 語意化結構</h2>
          <p>不只是 &lt;div&gt;。學習使用 &lt;header&gt;, &lt;main&gt;, &lt;article&gt; 等標籤來建立對搜尋引擎與輔助技術友善的網頁。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. CSS3: 佈局與美學</h2>
          <p>從 Box Model 到 Flexbox 與 Grid。掌握現代佈局技術，讓你的設計在任何螢幕上都能完美呈現。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. JavaScript: 互動的核心</h2>
          <p>DOM 操作、事件監聽與非同步請求。讓你的網頁不再只是靜態文件，而是具備靈魂的應用程式。</p>
        </section>
      </div>
    `
  },
  { 
    id: 'roblox-studio', 
    name: 'Roblox Studio', 
    content: `
      <div class="space-y-6 font-body text-on-surface">
        <h1 class="text-3xl font-headline font-black text-primary border-b-2 border-tertiary pb-2">Roblox Studio: 遊戲開發入門</h1>
        <p class="italic text-on-surface-variant">從玩家變身創作者：在 3D 世界中實踐你的創意。</p>
        
        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. 環境搭建與零件操作</h2>
          <p>熟悉 Workspace, Explorer 與 Properties 面板。學習如何放置、旋轉與縮放零件 (Parts)。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. Lua 腳本基礎</h2>
          <p>變數、函數與事件。學習如何讓零件在玩家觸碰時變色，或建立一個簡單的傳送門。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 遊戲循環與發佈</h2>
          <p>理解伺服器與客戶端的關係，並將你的作品發佈到 Roblox 平台與全世界分享。</p>
        </section>
      </div>
    `
  },
  { 
    id: 'python-mastery', 
    name: 'Python Mastery', 
    content: `
      <div class="space-y-6 font-body text-on-surface">
        <h1 class="text-3xl font-headline font-black text-primary border-b-2 border-tertiary pb-2">Python Mastery: 邏輯與自動化</h1>
        <p class="italic text-on-surface-variant">簡潔、強大且無處不在：掌握最受歡迎的通用程式語言。</p>
        
        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. 語法基礎與資料類型</h2>
          <p>理解 Python 的縮排美學。掌握 List, Dictionary, Tuple 等強大的內建資料結構。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. 函數與模組化</h2>
          <p>學習如何編寫可重用的代碼塊。理解模組 (Modules) 與包 (Packages) 的概念，站在巨人的肩膀上開發。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 實戰應用：爬蟲與自動化</h2>
          <p>利用 Python 處理 Excel、抓取網頁資料，將重複性的枯燥工作交給電腦處理。</p>
        </section>
      </div>
    `
  }
];

export default function Teaching() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>('it-fundamentals');

  const currentSubject = subjects.find(s => s.id === selectedSubject);

  return (
    <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
        <div className="lg:col-span-7">
          <div className="mb-4 inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm font-label text-xs uppercase font-bold tracking-widest">
            Featured Course
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-primary leading-[0.9] mb-8">
            Foundations of Systems Thinking
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            這不是一門單純的語法課。我們將從「系統思維」出發，拆解邏輯架構，讓你掌握程式開發最核心的底層邏輯，才有能力分辨 AI 的 output 對與錯，建立受用一生的解決問題能力。
          </p>
          
          <div className="relative bg-surface-container-low p-8 rounded-sm mt-12 border-l-4 border-tertiary shadow-sm">
            <div className="absolute -top-4 -right-2 rotate-[-2deg] bg-tertiary-fixed text-on-tertiary-fixed font-label text-xs px-2 py-1 font-bold shadow-sm">
              IVAN'S NOTES
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-4 flex items-center gap-2">
              <BookOpen className="text-tertiary" />
              Tutor's Note: Why Coding?
            </h3>
            <p className="font-body text-on-surface italic leading-relaxed">
              「寫程式的本質並非與機器對話，而是與『邏輯』共舞。當你理解了系統是如何流動的，你會發現，程式語言只是你用來描述這個世界的工具之一。我希望教給你的，是看透複雜問題、並將其模組化的能力。」
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6AeRqgAhzZxOkw3mQMfzdWKXzbEDNG8AhE0YrjLk_lzeu_fuLrBAz7IfiutNUK-pW2Un_ikZEZirCe7SUYGH_01OwM2z_E6C5xJlgmUP1tAw1z7Mckxra4LQPeEih1YtTUPObU0y3I3Eoay8QyzWhpkztxBXqeY2mEI9o2wvzRiMr2EBjIQ9Z3fbWAo4FcFjymHRWPaIGZfvSfjLNg9-75EbbWdO-5jlzOzqrSjzZD0DYIn-wgGtYgG4LxQtA7YP5tOVYaTWXqANX"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-bold text-primary font-headline">Ivan Chen</div>
                <div className="text-xs text-on-surface-variant uppercase font-label tracking-tighter">Last Year University Student | Mentor</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="bg-surface-container-high aspect-[4/5] rounded-sm overflow-hidden relative group">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQWJPe0k83uJFCU4zGi_WP3gV8DQJ8w0-GOk3DTFbG6tcFHY58Asa3zOGNSf16L4cv6N8ISGUGrFic6JTS7em0EIqYUBcEfpgzCFeKd7srJSUfAPsUykAJDwb_lXVQlUCkKEo5XM-WPlgO6VDgmu0bQtHGiH1lg0VnJV4wcqf3JfR8o8auAhAwkre1LNzVcJbVMj1MgEmGp-WfhUFzpjfv2e5wQOS_fjmm7cuPvMUjp7AnEVZLqrwV4fHt3tLPTYBx81mNP5B8sK0-"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-surface/90 backdrop-blur-sm p-6 shadow-xl border-t-2 border-tertiary">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-tertiary font-label text-xs font-bold uppercase mb-1">Previewing</div>
                  <div className="text-primary font-headline text-2xl font-bold">課程大綱：邏輯架構篇</div>
                </div>
                <button className="bg-primary text-on-primary p-3 rounded-full flex items-center justify-center">
                  <Play />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-surface-variant -z-10"></div>
        </div>
      </section>

      <section className="mb-32">
        <div className="bg-on-surface p-12 md:p-20 text-on-primary-fixed relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tight text-surface mb-6">學習診斷 <span className="text-tertiary-fixed">/ Diagnosis</span></h2>
            <p className="text-surface-variant max-w-2xl mb-12 text-lg">
              讓我們根據你目前的身分與目標，為你量身打造最合適的學習地圖。請選擇最符合你的現狀：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="text-left group bg-surface/10 hover:bg-tertiary p-8 transition-all duration-300 border border-surface-variant/20">
                <Baby className="text-tertiary-fixed group-hover:text-surface mb-6 block text-4xl" size={40} />
                <div className="text-2xl font-headline font-bold text-surface mb-2">Zero Basis</div>
                <div className="text-surface-variant/80 font-label text-sm uppercase mb-4 tracking-widest">零基礎小白</div>
                <p className="text-surface-variant text-sm leading-relaxed group-hover:text-surface/90">
                  從認識計算機科學開始，建立基礎運算思維。專屬推薦：基礎網頁開發與邏輯拼圖課程。
                </p>
              </button>
              <button className="text-left group bg-surface/10 hover:bg-tertiary p-8 transition-all duration-300 border border-surface-variant/20">
                <School className="text-tertiary-fixed group-hover:text-surface mb-6 block text-4xl" size={40} />
                <div className="text-2xl font-headline font-bold text-surface mb-2">Primary Student</div>
                <div className="text-surface-variant/80 font-label text-sm uppercase mb-4 tracking-widest">中小學生</div>
                <p className="text-surface-variant text-sm leading-relaxed group-hover:text-surface/90">
                  透過趣味專案激發創造力。推薦：Roblox 遊戲開發、Python 基礎。
                </p>
              </button>
              <button className="text-left group bg-surface/10 hover:bg-tertiary p-8 transition-all duration-300 border border-surface-variant/20">
                <School className="text-tertiary-fixed group-hover:text-surface mb-6 block text-4xl" size={40} />
                <div className="text-2xl font-headline font-bold text-surface mb-2">University Student</div>
                <div className="text-surface-variant/80 font-label text-sm uppercase mb-4 tracking-widest">大學生/初學者</div>
                <p className="text-surface-variant text-sm leading-relaxed group-hover:text-surface/90">
                  專注於基礎鞏固。推薦：IT Fundamentals、基礎算法與數據結構、網頁開發入門。
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h3 className="text-3xl font-black font-headline tracking-tight text-primary mb-10 flex items-center gap-4">
              教學範疇
              <span className="h-[2px] flex-grow bg-surface-container-highest"></span>
            </h3>
            <ul className="space-y-4">
              {subjects.map((subject, i) => (
                <li 
                  key={subject.id} 
                  onClick={() => setSelectedSubject(subject.id)}
                  className={cn(
                    "group flex items-center justify-between p-4 transition-colors cursor-pointer",
                    selectedSubject === subject.id ? "bg-primary text-on-primary" : "bg-surface-container-low hover:bg-primary/10"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "text-xs font-label",
                      selectedSubject === subject.id ? "text-on-primary/60" : "text-on-surface-variant group-hover:text-primary"
                    )}>0{i+1}</span>
                    <span className={cn(
                      "font-headline font-bold text-xl",
                      selectedSubject === subject.id ? "text-on-primary" : "text-primary group-hover:text-primary"
                    )}>{subject.name}</span>
                  </div>
                  <ChevronRight className={cn(
                    "transition-transform",
                    selectedSubject === subject.id ? "text-tertiary-fixed rotate-90" : "text-tertiary group-hover:translate-x-1"
                  )} size={16} />
                </li>
              ))}
            </ul>
            <div className="mt-12 p-6 bg-tertiary-container text-on-tertiary-container rounded-sm">
              <div className="font-headline font-black text-2xl mb-2 italic">Need a 1-on-1 session?</div>
              <p className="text-sm opacity-80 mb-6">歡迎預約線上或實體家教諮詢，為你客製化學習進度。</p>
              <button className="w-full border-2 border-on-tertiary-container py-3 font-bold font-headline uppercase hover:bg-on-tertiary-container hover:text-white transition-colors">預約諮詢</button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSubject || 'empty'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white shadow-2xl rounded-sm border border-outline-variant/20 overflow-hidden flex flex-col h-full min-h-[600px]"
            >
              <div className="bg-surface-container-highest p-4 flex justify-between items-center border-b border-outline-variant">
                <div className="flex items-center gap-3">
                  <FileText className="text-primary" size={20} />
                  <span className="font-headline font-bold text-primary uppercase tracking-widest text-sm">教材預覽：{currentSubject?.name}</span>
                </div>
              </div>
              <div className="p-12 overflow-y-auto flex-grow bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
                <div 
                  className="max-w-2xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: currentSubject?.content || '' }}
                />
              </div>
              <div className="bg-surface-container p-4 text-center border-t border-outline-variant">
                <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-[0.3em] font-bold">
                  © 2026 IVAN.DEV - PROPRIETARY EDUCATIONAL MATERIAL
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
