import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Code2, Monitor, ChevronRight, Globe } from 'lucide-react';

// Syntax highlighting for source snippet
const syntaxHighlight = (code: string) => {
  return code
    // Keywords
    .replace(/\b(function|const|let|if|else|for|return|null|true|false)\b/g, '<span class="text-blue-600 font-bold">$1</span>')
    // Library functions
    .replace(/\b(Math|parseInt|toString|charAt|endsWith|slice|join|split|map|trim|floor)\b/g, '<span class="text-purple-600 font-bold">$1</span>')
    // Numbers
    .replace(/\b(\d+)\b/g, '<span class="text-green-600">$1</span>')
    // Strings
    .replace(/(['"`])([^`]*?)\1/g, '<span class="text-red-600">$1$2$1</span>')
    // Comments
    .replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
    // Chinese text - color it differently
    .replace(/[\u4E00-\u9FFF]+/g, (match) => `<span class="text-indigo-600 font-semibold">${match}</span>`);
};

const projects = [
  {
    id: 'anco',
    title: 'Anco Development Ltd E-commerce',
    status: '70% Complete',
    category: 'E-commerce / Web App',
    description: '這是一個為 Anco Development Ltd 量身打造的電子商務平台。旨在優化 B2B 採購流程，整合庫存管理與自動化訂單處理系統。',
    documentation: `
### 技術棧
Frontend: React, Tailwind CSS, Framer Motion (打造極致流暢且現代的企業級 UI 交互)

Backend: Node.js, Express (穩健高效的後端邏輯與 API 處理)

Database: PostgreSQL (專為複雜 B2B 業務場景設計的數據庫)

Integration: Stripe API (安全無虞的金流支付), Google Sheets API (輕量靈活的自動化數據串接)


### 💡 為什麼做這個？（拯救傳統 B2B 的數位轉型痛點）
你以為最折磨採購人員的是什麼？不是預算不夠，而是永遠對不起來的紙本單據、打電話問庫存的漫長等待，以及手動算折扣算到眼花的 Excel 地獄！為了幫 Anco Development 徹底告別這些繁瑣的舊時代流程，我決定一手打造這套「次世代 B2B 電商與自動化系統」。

我的 Priority 不是為了用新技術而用，而是真正解決商業痛點——把繁瑣的流程自動化，將出錯率降到最低，讓客戶隨時隨地都能快速下單，讓後台管理像呼吸一樣自然！

### 🚀 核心功能 (Core Features)

📦 極速響應式產品目錄：支援數千件商品的快速檢索與分類。拒絕笨重的傳統電商加載，運用 React 搭配極簡 UI，流暢度如同絲滑的 App 體驗，讓採購人員在幾秒鐘內精準鎖定目標商品。

📄 全自動「王牌報價導航」：別再手動按計算機了！系統會根據不同客戶等級自動計算專屬折扣，並一鍵生成專業 PDF 報價單，直接切入核心交易痛點，把原本要耗費數小時的溝通縮短至幾秒鐘。

🔄 零延遲庫存同步：告別「下單才發現沒貨」的尷尬局面。前端與後端 ERP 系統即時同步，配合 PostgreSQL 資料庫的高效設計，確保每一件商品的庫存數據都精準無誤。
    `,
    screencap: 'https://picsum.photos/seed/anco/1200/800',
    liveLink: '',
    githubLink: '',
    timeline: '2025 - Present'
  },
  {
    id: 'taxi',
    title: 'Taxi Quiz Application',
    status: 'Live',
    category: 'Educational / Mobile App',
    description: '專為香港計程車司機筆試設計的練習應用程式。包含完整的題庫、模擬測試以及錯題分析功能。',
    documentation: `
### 技術棧
Frontend: HTML5, CSS3, Pure JavaScript

Data: 359 題的士司機「盲點」數據庫

### 💡 為什麼做這個？（拯救全港的士考生）
你聽說過全香港最難考的試是什麼嗎？不是大學聯考，而是的士筆試的地方試題！無數準司機都在這裡折戟沉沙。為了解救被繁瑣路名折磨的考生，我決定開發這款「地方試題特訓 App」。

我的 Priority 不是炫技，而是 Runtime 效率與實用性。用最短的開發週期，直接切入核心痛點——幫準司機們把錯題撈出來反覆鞭屍，直到記住為止！

### 🚀 核心功能 (Core Features)
🚖 全自動「錯題自動導航」：答錯的題目不會平白消失，系統會像貼心的副駕駛一樣幫你存進錯題本，隨時等待你重新挑戰。

🏁 極簡流暢測驗：去除所有干擾元素，專注於題目與選項的快速直覺交互，讓你在搭地鐵的 5 分鐘內就能刷完一輪。

🔒 100% 隱私安全溫習：所有答題紀錄完全留在用戶本地，不聯網、不收集隱私，最純粹的工具體驗。
    `,
    sourceSnippet: `// 錯題庫儲存
function saveWrongQuestions() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allWrongQuestions));
  } catch (e) {
    console.warn('localStorage 儲存失敗');
  }
}

// 由題目型別決定選項來源，隨機抽錯選項
function loadQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById('current').textContent = currentIndex + 1;
  document.getElementById('total').textContent = currentQuestions.length;
  document.getElementById('question-text').innerHTML = \`以下地方的位置是？<br><strong>\${q.q}</strong>\`;

  const pool = q.type === "district" ? districtPool : streetPool;
  const wrongs = shuffle(pool.filter(a => a !== q.a)).slice(0, 2);
  const opts = shuffle([q.a, ...wrongs]);

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = "";
  opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, q.a, q);
    optionsDiv.appendChild(btn);
  });
}

// 答錯就推入 localStorage 錯題庫
function checkAnswer(selected, correct, question) {
  const isCorrect = selected === correct;
  if (!isCorrect && !allWrongQuestions.find(w => w.id === question.id)) {
    allWrongQuestions.push(question);
    saveWrongQuestions();
    updateWrongCount();
  }
  // UI 反饋與結果顯示
}
`,
    screencap: 'hk-taxi-quiz-preview.webp',
    liveLink: 'https://rickc-302.github.io/hk-taxi-WrittenTest-LocationQuestionsReview/',
    githubLink: 'https://github.com/RickC-302/hk-taxi-WrittenTest-LocationQuestionsReview',
    timeline: '2026 Mar '
  },
  {
    id: 'cheque',
    title: '智能支票填寫助手',
    status: 'Live',
    category: 'Utility / Web Tool',
    description: '「用最簡單的 Vanilla JS，解決最容易寫錯的痛點。」每次寫實體支票都怕寫錯？這個輕量級工具能幫你自動搞定繁瑣的金額轉換。',
    documentation: `
### 技術棧
- Frontend: Vanilla HTML, CSS, JavaScript
- Data: 本地暫存 (localStorage)

### 💡 為什麼做這個？（認清問題 & Priority）
寫實體支票最麻煩的不是填數字，而是要填寫繁複的中文大寫（如：壹佰貳拾元整）和英文大寫（Dollars Only）。人工轉換極易出錯，寫錯一張就報銷一張。

作為 Business + IT 的混血兒，我的 Priority 很明確：用最低的技術成本，解決最痛的核心問題。我不盲目追求複雜的 React/Vue 框架，而是選擇最純粹、輕量的 Vanilla JS。追求 100% 算法精準度，配合即時票根預覽與輸入驗證，用前端底層邏輯直接搞定。

### 🚀 核心功能 (Core Features)
✍️ 數字雙語自動推算：輸入金額即時輸出完美符合銀行格式的中文大寫（元整）與英文大寫（Dollars Only）。

🖼️ 票根與劃線預覽：支援切換不同的劃線樣式（如 A/C Payee Only），並即時同步票根顯示，填寫前萬無一失。

💾 本地隱私暫存 (localStorage)：自動保存用戶的佈局設定，資料全在瀏覽器處理，不經任何後端，100% 隱私安全。
    `,
    screencap: 'cheque-preview.webp',
    liveLink: 'https://rickc-302.github.io/cheque-helper/',
    githubLink: 'https://github.com/RickC-302/cheque-helper',
    timeline: '2026 Mar - Apr'
  }
];

export default function SideProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [activeProject]);

  const isLocalImage = !activeProject.screencap.startsWith('http');
  const imageSrc = isLocalImage
    ? `/images/${activeProject.screencap}`
    : activeProject.screencap;

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <header className="mb-20">
        <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 font-label text-xs font-black tracking-[0.2em] uppercase mb-6">
          Portfolio Archive
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-black text-primary tracking-tighter leading-none mb-8 uppercase">
          個人 <span className="text-secondary">專案</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          這裡展示了我的一些個人專案與開發中的原型。每個專案都是我對技術邊界的探索，從商業應用到生活工具。
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-4 space-y-4 sticky top-32">
          <div className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-4">
            Project List <span className="h-px flex-1 bg-outline-variant"></span>
          </div>
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`w-full text-left p-6 transition-all duration-300 border-l-4 ${
                activeProject.id === project.id
                  ? 'bg-primary text-on-primary border-tertiary'
                  : 'bg-surface-container-low text-primary border-transparent hover:bg-surface-container'
              }`}
            >
              <div className="text-[10px] font-label uppercase tracking-widest opacity-70 mb-1">{project.category}</div>
              <div className="font-headline text-xl font-bold mb-2">{project.title}</div>
              <div className="flex justify-between items-center">
                <span className={`text-[10px] px-2 py-0.5 font-bold ${
                  activeProject.id === project.id ? 'bg-tertiary text-on-tertiary' : 'bg-secondary-container text-on-secondary-container'
                }`}>
                  {project.status}
                </span>
                <ChevronRight size={16} className={activeProject.id === project.id ? 'opacity-100' : 'opacity-0'} />
              </div>
            </button>
          ))}
          
          <div className="mt-12 p-8 bg-surface-container-highest border-t-4 border-secondary">
            <h4 className="font-headline font-bold text-primary mb-4">關於開發過程</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              我習慣在開發過程中記錄文檔。這不僅有助於維護，更能讓合作夥伴快速理解系統架構。
            </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Screencap / Preview */}
              <div className="bg-surface-container-low p-2 shadow-2xl">
                <div className="aspect-video bg-surface-dim relative overflow-hidden">
                  {!imageError ? (
                    <img 
                      src={imageSrc}
                      alt={activeProject.title}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-container flex items-center justify-center">
                      <div className="text-center">
                        <Monitor size={48} className="mx-auto mb-4 text-outline-variant" />
                        <p className="text-on-surface-variant font-bold">Screenshot not available</p>
                        {isLocalImage ? (
                          <p className="text-xs text-on-surface-variant mt-2">📁 Place: <code className="bg-surface px-2 py-1 rounded">/public/images/{activeProject.screencap}</code></p>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="font-headline text-4xl font-black text-primary mb-6">{activeProject.title}</h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                    {activeProject.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a 
                      href={activeProject.liveLink || '#'} 
                      title={activeProject.liveLink ? undefined : 'Not available to access'}
                      target={activeProject.liveLink ? '_blank' : undefined}
                      rel={activeProject.liveLink ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-2 px-6 py-3 font-headline font-bold uppercase tracking-tight transition-all ${
                        activeProject.liveLink 
                          ? 'bg-primary text-on-primary hover:opacity-90 cursor-pointer' 
                          : 'bg-surface-container text-on-surface-variant cursor-not-allowed opacity-50'
                      }`}
                    >
                      <Globe size={18} />
                      {activeProject.liveLink ? 'Visit Site' : 'Not available'}
                    </a>
                    <a 
                      href={activeProject.githubLink || '#'} 
                      title={activeProject.githubLink ? undefined : 'Not available to access'}
                      target={activeProject.githubLink ? '_blank' : undefined}
                      rel={activeProject.githubLink ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-2 px-6 py-3 font-headline font-bold uppercase tracking-tight transition-all ${
                        activeProject.githubLink 
                          ? 'border-2 border-primary text-primary hover:bg-primary hover:text-on-primary' 
                          : 'border-2 border-surface-container text-on-surface-variant cursor-not-allowed opacity-50'
                      }`}
                    >
                      <Code2 size={18} />
                      {activeProject.githubLink ? 'Source Code' : 'Not available'}
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container p-8 border-l-4 border-secondary">
                  <div className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Project Meta</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] text-on-surface-variant uppercase font-bold">Role</div>
                      <div className="font-bold text-primary">Lead Developer</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-on-surface-variant uppercase font-bold">Timeline</div>
                      <div className="font-bold text-primary">{activeProject.timeline}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-on-surface-variant uppercase font-bold">Status</div>
                      <div className="font-bold text-secondary">{activeProject.status}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Section */}
              <div className="bg-surface-container-low p-12 border border-outline-variant/20 relative">
                <FileText className="absolute top-8 right-8 text-outline-variant/30" size={64} />
                <h3 className="font-headline text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <FileText className="text-secondary" />
                  Technical Documentation
                </h3>
                <div className="prose prose-slate max-w-none prose-headings:font-headline prose-headings:text-primary prose-p:text-on-surface-variant prose-li:text-on-surface-variant">
                  {activeProject.documentation.split('\n').map((line: string, i: number) => {
                    if (line.startsWith('###')) return <h4 key={i} className="text-xl font-bold mt-8 mb-4">{line.replace('### ', '')}</h4>;
                    if (line.startsWith('-')) return <li key={i} className="ml-4 mb-2">{line.replace('- ', '')}</li>;
                    if (line.match(/^\d\./)) return <div key={i} className="mb-4"><strong>{line.split('. ')[0]}.</strong> {line.split('. ')[1]}</div>;
                    return <p key={i}>{line}</p>;
                  })}
                </div>
              </div>

              {/* Source snippet: show only the most significant/hard part */}
              {activeProject.sourceSnippet && (
                <div className="bg-surface-container p-6 mt-6 border border-outline-variant/20">
                  <details className="group">
                    <summary className="cursor-pointer font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 flex items-center gap-2 hover:text-primary transition-colors">
                      <span className="inline-block transition-transform group-open:rotate-90">▶</span>
                      Source Snippet (核心邏輯)
                    </summary>
                    <div className="mt-6">
                      <div className="text-sm overflow-x-auto bg-black/5 rounded-md p-4 font-mono">
                        <pre style={{ color: '#1e293b', lineHeight: '1.6' }}>
{activeProject.sourceSnippet}
                        </pre>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-4 italic">
                        💡 關鍵點：選取最核心的題目邏輯與錯題紀錄流程，展示 App 的可用性與穩定性。
                      </p>
                    </div>
                  </details>
                </div>
              )}

              {/* Interactive Sandbox */}
              {(activeProject.id === 'cheque' || activeProject.id === 'taxi') && (
                <div className="pt-12">
                  <div className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-4">
                    Interactive Sandbox <span className="h-px flex-1 bg-outline-variant"></span>
                  </div>
                  {activeProject.liveLink ? (
                    <iframe 
                      src={activeProject.liveLink} 
                      className="w-full border-2 border-primary rounded-lg shadow-lg"
                      style={{ height: '520px' }}
                      title={`${activeProject.title} Demo`}
                    />
                  ) : (
                    <div className="w-full bg-surface-container-low p-12 rounded-lg border-2 border-outline-variant text-center">
                      <Code2 size={48} className="mx-auto mb-4 text-outline-variant" />
                      <p className="font-headline font-bold text-primary mb-2">Demo Not Available</p>
                      <p className="text-on-surface-variant">This project doesn't have a live preview yet.</p>
                    </div>
                  )}
                  {activeProject.liveLink && (
                    <p className="mt-4 text-xs text-on-surface-variant italic text-center">
                      * 此預覽為實時 Demo，資料全在瀏覽器處理，100% 隱私安全。
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
