import React, { useRef, useState } from 'react';
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
        <p class="italic text-on-surface-variant">這不是一堂純語法課，這是讓你看透系統如何流動的底層地圖。</p>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. 馮紐曼架構 (Von Neumann Architecture)</h2>
          <p>理解 CPU、記憶體 (RAM) 與輸入/輸出設備之間的協作關係。這是所有現代電腦的基礎。</p>
          <div class="bg-slate-100 p-4 border-l-4 border-primary">
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li>控制單元 (Control Unit)</li>
              <li>算術邏輯單元 (ALU)</li>
              <li>暫存器 (Registers)</li>
            </ul>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. 資料流與系統協作</h2>
          <p>每個網頁的「登入」功能，背後都是這三者在協作。你將看到資料如何從使用者、伺服器到資料庫流動。</p>
          <p class="text-sm">小練習：試著畫出電腦架構圖，標出資料進出的路徑。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 學生作品</h2>
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-sm">
          學生作品展示： [Placeholder: 學生繪製的電腦架構]
          </div>
        </section>
      </div>
    `
  },
  { 
    id: 'html-css-js', 
    name: 'HTML / CSS / JS', 
    content: `
      <div class="space-y-6 font-body text-on-surface">
        <h1 class="text-3xl font-headline font-black text-primary border-b-2 border-tertiary pb-2">Web Development: 網頁三劍客</h1>
        <p class="italic text-on-surface-variant">理解結構、樣式與互動，讓網頁成為真實可操控的產品。</p>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. HTML / CSS / JS 的協作</h2>
          <p>結構、樣式與行為不是獨立的，它們共同決定使用者是否能愉快地使用你的網頁。</p>
        </section>

        <section class="space-y-4 bg-slate-50 p-4 rounded-3xl border border-slate-200">
          <h2 class="text-xl font-headline font-bold text-primary">2. 專業筆記</h2>
          <pre class="bg-white p-4 rounded-xl text-sm overflow-x-auto border border-slate-200">
&lt;button id="magic-btn"&gt;點我！&lt;/button&gt;

&lt;script&gt;
  // JS: 賦予按鈕靈魂
  document.getElementById('magic-btn').onclick = () =&gt; {
    alert('Hello World! 你觸發了一個事件！');
  };
&lt;/script&gt;
          </pre>
          <p class="text-sm">這段簡單的互動示範了事件監聽與 DOM 操作，從靜態畫面變成交互體驗。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 學生作品</h2>
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-sm">
          學生作品展示： [Placeholder: 學生設計的網頁]
          </div>
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
        <p class="italic text-on-surface-variant">從遊戲玩家轉為創作者，體驗互動內容背後的邏輯。</p>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. 基礎零件與事件</h2>
          <p>掌握 Workspace、Explorer 與 Properties。學會放置零件、調整位置與屬性。</p>
        </section>

        <section class="space-y-4 bg-slate-50 p-4 rounded-3xl border border-slate-200">
          <h2 class="text-xl font-headline font-bold text-primary">2. Lua 腳本專業筆記</h2>
          <pre class="bg-white p-4 rounded-xl text-sm overflow-x-auto border border-slate-200">
-- 讓一個方塊碰觸後消失的簡單邏輯
local part = script.Parent

part.Touched:Connect(function(otherPart)
    print("有人踩到我了！")
    part.Transparency = 1 -- 變透明
    part.CanCollide = false -- 變穿透
end)
          </pre>
          <p class="text-sm">小練習：嘗試在代碼中加入 wait(3)，讓方塊在消失 3 秒後重新出現。</p>
          <p class="text-sm">現實例子：遊戲中的「陷阱」或「傳送門」就是這樣寫出來的。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 學生作品</h2>
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-sm">
          學生作品展示： [Placeholder: 學生製作的小關卡]
          </div>
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
        <p class="italic text-on-surface-variant">讓軟體幫你處理重複工作，讓你專注於核心想法。</p>

        <section class="space-y-4 bg-slate-50 p-4 rounded-3xl border border-slate-200">
          <h2 class="text-xl font-headline font-bold text-primary">1. 專業筆記</h2>
          <pre class="bg-white p-4 rounded-xl text-sm overflow-x-auto border border-slate-200">
# 簡單的打招呼自動化
def welcome_guest(name):
    print(f"你好, {name}! 準備好開始編程之旅了嗎？")

students = ["Alice", "Bob", "Ivan"]
for s in students:
    welcome_guest(s)
          </pre>
          <p class="text-sm">這段程式示範如何把重複工作自動化，讓輸入與輸出流程更有節奏。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. 小練習</h2>
          <p class="text-sm">寫一個可以計算 1 加到 100 總和的小程式。</p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 學生作品</h2>
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-sm">
          學生作品展示： [Placeholder: 學生寫的自動化計數器]
          </div>
        </section>

      </div>
    `
  }
];

export default function Teaching() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>('it-fundamentals');

  const currentSubject = subjects.find(s => s.id === selectedSubject);

  const teachingSectionRef = useRef<HTMLDivElement>(null);

  const scrollToTeaching = () => {
    teachingSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
        <div className="lg:col-span-7">
          <div className="mb-4 inline-block bg-slate-100 text-primary px-3 py-1 rounded-full font-label text-xs uppercase font-bold tracking-widest">
            學習與教學
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-primary leading-[0.9] mb-8">
            系統思維與底層邏輯
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            「學會點樣思考，比學會語法更重要。」我們將從「系統思維」出發，拆解邏輯架構，讓你掌握程式開發最核心的底層邏輯，才有能力分辨 AI 的對與錯，建立受用一生的解決問題能力。
          </p>
          
          <div className="relative bg-white p-8 rounded-[28px] mt-12 border border-slate-100 shadow-sm">
            <div className="absolute -top-4 -right-2 -rotate-2 bg-slate-100 text-primary font-label text-xs px-2 py-1 font-bold shadow-sm">
              個人化筆記
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-4 flex items-center gap-2">
              <BookOpen className="text-tertiary" />
              1-on-1 導師指導：帶你跟上我的步調
            </h3>
            <p className="font-body text-on-surface italic leading-relaxed">
              我不只教你寫程式，更教你如何思考。我擅長將艱澀的底層邏輯拆解成易懂的故事，讓你不再迷失於代碼海洋，而是有節奏地建立屬於你的技術版圖。
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
                />
              </div>
              <div>
                <div className="font-bold text-primary font-headline">Ivan Lam</div>
                <div className="text-xs text-on-surface-variant uppercase font-label tracking-tighter">Last Year University Student | Mentor</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="bg-surface-container-high aspect-4/5 rounded-sm overflow-hidden relative group">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-surface/90 backdrop-blur-sm p-6 shadow-xl border-t-2 border-tertiary">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-tertiary font-label text-xs font-bold uppercase mb-1">Previewing</div>
                  <div className="text-primary font-headline text-2xl font-bold">課程大綱：邏輯架構篇</div>
                </div>
                <button 
                  onClick={scrollToTeaching}
                  className="bg-primary text-on-primary p-3 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-lg shadow-primary/20"
                >
                  <Play fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-surface-variant -z-10"></div>
        </div>
      </section>

      <section className="mb-32">
  <div className="bg-orange-50/20 p-12 md:p-20 relative overflow-hidden rounded-3xl border border-slate-400">
    
    <div className="relative z-10">
      <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-slate-900 mb-6">
        學習診斷 <span className="text-primary font-light">/ Diagnosis</span>
      </h2>
      <p className="text-slate-500 max-w-2xl mb-16 text-lg font-medium leading-relaxed">
        讓我們根據你目前的身分與目標，為你量身打造最合適的學習地圖。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 卡片模板 */}
        {[
          { id: 'zero', title: 'Zero Basis', sub: '零基礎小白', desc: '從認識計算機科學開始，建立基礎運算思維。專屬推薦：基礎網頁開發與邏輯拼圖課程。', icon: Baby },
          { id: 'primary', title: 'Primary Student', sub: '中小學生', desc: '透過趣味專案激發創造力。推薦：Roblox 遊戲開發、Python 基礎。', icon: School },
          { id: 'uni', title: 'University Student', sub: '大學生/初學者', desc: '專注於基礎鞏固。推薦：IT Fundamentals、基礎算法與數據結構、網頁開發入門。', icon: School }
        ].map((item) => (
          <button 
            key={item.id}
            className="text-left group bg-white hover:bg-primary p-10 transition-all duration-500 rounded-[2rem] border border-orange-100 shadow-sm hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden"
          >
            <item.icon 
              className="text-primary group-hover:text-orange-200 mb-8 transition-colors duration-300" 
              size={48} 
              strokeWidth={1.5}
            />
            
            <div className="text-2xl font-black font-headline text-slate-900 group-hover:text-white mb-2 transition-colors duration-300 tracking-tight">
              {item.title}
            </div>
            
            <div className="text-primary font-bold text-xs uppercase mb-6 tracking-[0.2em] group-hover:text-orange-200 transition-colors duration-300">
              {item.sub}
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 font-medium">
              {item.desc}
            </p>

            <span className="handwriting absolute bottom-4 right-6 text-white/20 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              Let's go!
            </span>
          </button>
        ))}
      </div>
    </div>
  </div>
</section>

      <section ref={teachingSectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h3 className="text-3xl font-black font-headline tracking-tight text-primary mb-10 flex items-center gap-4">
              教學範疇
              <span className="h-0.5 grow bg-surface-container-highest"></span>
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

            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-primary translate-x-2 translate-y-2 rounded-xl"></div>

              <div className="relative bg-white border-4 border-slate-900 p-8 md:p-10 rounded-xl shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div className="max-w-md">
                    <div className="font-headline font-black text-3xl md:text-4xl mb-3 italic tracking-tighter text-slate-900 uppercase">
                      Need a<br></br>1-on-1<br></br> session?
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      歡迎預約線上或實體家教諮詢，為你客製化學習進度。<br/>
                      <span className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-slate-400">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        支援實體 (香港) 或 Zoom 授課
                      </span>
                    </p>
                  </div>

                  <button className="rounded-xl group relative bg-slate-900 text-white px-10 py-5 font-black font-headline uppercase tracking-widest overflow-hidden transition-all hover:pr-14 active:scale-95">
                    <span className="relative z-10">預約諮詢</span>
                    <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
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
              <div className="p-12 overflow-y-auto grow bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
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
