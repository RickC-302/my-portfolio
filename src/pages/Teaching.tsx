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
        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. 馮紐曼架構 (Von Neumann Architecture)</h2>
          <p>理解 CPU、記憶體 (RAM) 與輸入/輸出設備之間的協作關係。這是所有現代電腦的基礎。</p>
          <div class="bg-slate-50 p-4 rounded-3xl border border-slate-200">
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li><strong>控制單元 (Control Unit, CU)：</strong> 電腦的「大腦指揮官」，負責解碼指令並協調各個部件。</li>
              <li><strong>算術邏輯單元 (Arithmetic Logic Unit, ALU)：</strong> 電腦的「超級計算機」，負責所有數學運算（加減乘除）與邏輯判斷（AND / OR / 比較大小）。</li>
              <li><strong>暫存器 (Registers)：</strong> CPU 內部的「超高速極限暫存區」，容量極小但速度最快，用來存放 CPU 當下立刻要用的數據與指令。</li>
            </ul>
          </div>
        </section>

        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. 資料流與系統協作</h2>
          <p>每個網頁的「登入」功能，背後都是這三者在協作。你將看到資料如何從使用者、伺服器到資料庫流動。</p>
          <div class="bg-slate-50 p-4 rounded-3xl border border-slate-200">
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li><strong>前端 (Client-side)：</strong> 收集用戶輸入（帳號密碼），打包成 Request 發送。</li>
              <li><strong>後端 (Server-side)：</strong> 驗證格式、比對邏輯、並向數據庫發起查詢。</li>
              <li><strong>資料庫 (Database)：</strong> 比對 Hash 密碼，回傳驗證結果。</li>
            </ul>
          </div>
          <div class="bg-slate-100 p-4 rounded-3xl border-l-4 border-primary">
            <p class="font-medium">📝 課後小練習：試著畫出「馮紐曼電腦架構圖」，並用箭頭標示出數據 (Data) 與 控制訊號 (Control Signal) 在各個組件之間的進出路徑。</p>
          </div>
        </section>

        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 學生作品展示：電腦架構 Model Answer</h2>
          <p>以下為本課程推薦之標準解答範本（Model Answer）。一個優秀的架構圖不僅要畫出元件，更要清晰表現出資料流 (Data Path) 與 控制流 (Control Path) 的區別。</p>
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-sm">
            <img src="/images/Computer Architecture.webp" alt="Computer Architecture Model Answer" class="w-full rounded-3xl border border-slate-300 shadow-sm" />
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
        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. HTML / CSS / JS 的協作</h2>
          <p>結構、樣式與行為不是獨立的，它們共同決定使用者是否能愉快地使用你的網頁。我們常說，網頁就像是建造一棟房子（或打造一個機器人）：</p>
          <div class="bg-slate-50 p-4 rounded-3xl border border-slate-200">
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li><strong>HTML (骨架/結構)：</strong> 房子的樑柱與牆壁，決定網頁有哪些元素（按鈕、文字、圖片）。</li>
              <li><strong>CSS (裝潢/樣式)：</strong> 粉刷牆壁、挑選家具、排版設計，決定網頁美不美觀、排版是否舒適。</li>
              <li><strong>JavaScript (機電/行為)：</strong> 房子的自動感應門、電梯、警報器，賦予網頁「生命力」與「互動能力」。</li>
            </ul>
          </div>
        </section>

        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. 專業筆記</h2>
          <div class="bg-slate-50 p-4 rounded-3xl border border-slate-200">
            <pre class="bg-white p-4 rounded-xl text-sm overflow-x-auto border border-slate-200">
\`\`\`
< button id="magic-btn">點我！< /button>

< style>
  /* CSS: 穿上帥氣的外衣 */
  #magic-btn {
    padding: 12px 24px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  #magic-btn:hover {
    background-color: #0051a2;
  }
< /style>

< script>
  // JS: 賦予按鈕靈魂
  document.getElementById('magic-btn').onclick = () => {
    alert('Hello World! 你觸發了一個事件！');
  };
< /script>
\`\`\`
            </pre>
          </div>
          <p class="text-sm">這段簡單的互動示範了事件監聽 (Event Listening) 與 DOM 操作 (DOM Manipulation)，展示了網頁如何從靜態畫面變成鮮活的交互體驗。</p>
        </section>

        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 學生作品展示：網頁三劍客 Model Answer</h2>
          <p>以下為學生在實作課後交出的優秀網頁作品範本：一個「隨機按鈕」。</p>
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-sm">
            <img src="/images/studentWebsite.webp" alt="Student Website Model Answer" class="w-full rounded-3xl border border-slate-300 shadow-sm" />
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
        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. 基礎零件與事件</h2>
          <p>掌握 Workspace、Explorer 與 Properties。學會放置零件、調整位置與屬性。</p>
          <div class="bg-slate-50 p-4 rounded-3xl border border-slate-200">
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li><strong>Workspace (工作區)：</strong> 你的 3D 舞台，所有玩家看得到、摸得到的方塊（Part）、地形（Terrain）都放在這裡。</li>
              <li><strong>Explorer (資源管理器)：</strong> 遊戲的樹狀目錄結構。就像電腦的資料夾，讓你管理所有的物件與腳本（Script）。</li>
              <li><strong>Properties (屬性面板)：</strong> 調整方塊的物理屬性，例如顏色（Color）、材質（Material）、是否會往下掉（Anchored）或是否能穿透（CanCollide）。</li>
            </ul>
          </div>
        </section>

        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. Lua 腳本專業筆記</h2>
          <p>在 Roblox 裡，我們使用 Lua 語言來賦予物件生命。</p>
          <div class="bg-slate-50 p-4 rounded-3xl border border-slate-200">
            <pre class="bg-white p-4 rounded-xl text-sm overflow-x-auto border border-slate-200">
\`\`\`lua
-- Lua 腳本：讓一個方塊碰觸後消失的簡單邏輯
local part = script.Parent  -- 取得這份腳本所在的方塊

part.Touched:Connect(function(otherPart)
    -- 當有任何物件（例如玩家的腳）碰觸到這個方塊時，觸發此函數
    print("有人踩到我了！")
    
    part.Transparency = 1      -- 變透明 (1 代表 100% 透明)
    part.CanCollide = false    -- 關閉碰撞 (玩家可以穿透它)
end)
\`\`\`
            </pre>
          </div>
          <div class="bg-slate-100 p-4 rounded-3xl border-l-4 border-primary">
            <p class="font-medium">📝 課後小練習：嘗試在代碼中加入 task.wait(3)，讓方塊在消失 3 秒後自動重新出現（恢復不透明與碰撞實體），做成一個「會自動復原的踏板」！</p>
          </div>
          <p class="text-sm">現實例子：許多 Obby (障礙賽) 遊戲中的「消失陷阱」或「限時傳送門」就是這樣寫出來的。</p>
        </section>

        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 學生作品展示：Roblox Studio Model Answer</h2>
          <p>以下為學生在第一堂後交出的作品，一個可以開關的火把。</p>
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-sm">
            <img src="/images/RobloxStudio_TorchExercise.webp" alt="Roblox Studio Torch Exercise" class="w-full rounded-3xl border border-slate-300 shadow-sm" />
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
        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">1. 專業筆記</h2>
          <p>在程式的世界裡，我們不重複自己（DRY - Don't Repeat Yourself）。透過「函式」封裝邏輯，再用「迴圈」批量執行，你就能瞬間完成人類需要花費數小時的手工操作。</p>
          <div class="bg-slate-50 p-4 rounded-3xl border border-slate-200">
            <pre class="bg-white p-4 rounded-xl text-sm overflow-x-auto border border-slate-200">
\`\`\`python
# 簡單的打招呼自動化
def welcome_guest(name):
    # 這是一個「模板」，定義好之後就能重複套用
    print(f"你好, {name}! 準備好開始編程之旅了嗎？")

# 用一個 List 儲存所有名單
students = ["Alice", "Bob", "Ivan"]

# 讓電腦像傳送帶一樣，自動執行重複工作
for s in students:
    welcome_guest(s)
\`\`\`
            </pre>
          </div>
          <p class="text-sm">這段程式示範了如何把重複工作自動化，讓輸入與輸出流程更有節奏。</p>
        </section>

        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">2. 課後小練習</h2>
          <div class="bg-slate-100 p-4 rounded-3xl border-l-4 border-primary">
            <p class="font-medium">📝 練習目標：請寫一個 Python 程式，計算從 1 累加到 100 的總和（$1 + 2 + 3 + \\dots + 100$），並將最終結果輸出在畫面上。提示：你需要一個變數來儲存「累積的總和」，並配合 for 迴圈與 range() 函式來讓數字自動遞增。</p>
          </div>
        </section>

        <div class="text-slate-400 font-bold">---</div>

        <section class="space-y-4">
          <h2 class="text-xl font-headline font-bold text-primary">3. 學生作品展示：Python 自動化計數器 Model Answer</h2>
          <p>以下為學生針對此練習交出的標準解答範本。這段程式碼不僅完美解決了基本累加問題，更展現了優秀的程式習慣：將邏輯封裝進可重複使用的函式中，並預留了上限參數，讓這個工具未來可以一秒計算「1 加到 1000」甚至「1 加到 100 萬」！</p>
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-sm">
            <img src="/images/pythonExercise.webp" alt="Python Exercise Model Answer" class="w-full rounded-3xl border border-slate-300 shadow-sm" />
          </div>
        </section>
      </div>
    `
  }
];

type TeachingProps = {
  onOpenContactForm: () => void;
};

export default function Teaching({ onOpenContactForm }: TeachingProps) {
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

                  <button
                    type="button"
                    onClick={onOpenContactForm}
                    className="rounded-xl group relative bg-slate-900 text-white px-10 py-5 font-black font-headline uppercase tracking-widest overflow-hidden transition-all hover:pr-14 active:scale-95"
                  >
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
                  <span className="font-headline font-bold text-primary uppercase tracking-widest text-sm">教材預覽(節錄)：{currentSubject?.name}</span>
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
