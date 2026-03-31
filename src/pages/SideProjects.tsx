import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, FileText, Code2, Monitor, Smartphone, Layout, ChevronRight, Globe } from 'lucide-react';

const projects = [
  {
    id: 'anco',
    title: 'Anco Development Ltd E-commerce',
    status: '70% Complete',
    category: 'E-commerce / Web App',
    description: '這是一個為 Anco Development Ltd 量身打造的電子商務平台。旨在優化 B2B 採購流程，整合庫存管理與自動化訂單處理系統。',
    documentation: `
### 技術棧
- Frontend: React, Tailwind CSS, Framer Motion
- Backend: Node.js, Express
- Database: PostgreSQL
- Integration: Stripe API, Google Sheets API

### 核心功能
1. **響應式產品目錄**: 支援數千件商品的快速檢索與分類。
2. **自動化報價系統**: 根據客戶等級自動計算折扣與生成 PDF 報價單。
3. **庫存同步**: 與後端 ERP 系統即時同步庫存數據。
    `,
    screencap: 'https://picsum.photos/seed/anco/1200/800',
    iframePlaceholder: 'https://ais-dev-oxcwjhngwlyifp4zfm7mbt-351476649397.asia-northeast1.run.app' // Placeholder
  },
  {
    id: 'taxi',
    title: 'Taxi Quiz Application',
    status: '50% Complete',
    category: 'Educational / Mobile App',
    description: '專為香港計程車司機筆試設計的練習應用程式。包含完整的題庫、模擬測試以及錯題分析功能。',
    documentation: `
### 技術棧
- Frontend: React Native (Expo)
- Backend: Firebase Auth & Firestore
- Data: Local SQLite for offline mode

### 核心功能
1. **模擬考試**: 模擬真實香港計程車筆試環境與計時。
2. **地點記憶訓練**: 針對香港街道與建築物的專項練習。
3. **進度追蹤**: 視覺化呈現考生的學習進度與弱點分析。
    `,
    screencap: 'https://picsum.photos/seed/taxi/1200/800',
    iframePlaceholder: 'https://ais-dev-oxcwjhngwlyifp4zfm7mbt-351476649397.asia-northeast1.run.app' // Placeholder
  }
];

export default function SideProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

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
            Project List <span className="h-[1px] flex-1 bg-outline-variant"></span>
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
                <div className="aspect-video bg-surface-dim relative overflow-hidden group">
                  <img 
                    src={activeProject.screencap} 
                    alt={activeProject.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/40 backdrop-blur-sm">
                    <div className="bg-surface p-6 shadow-2xl text-center">
                      <Monitor className="mx-auto mb-4 text-primary" size={32} />
                      <p className="font-headline font-bold text-primary">Live Preview Available Soon</p>
                    </div>
                  </div>
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
                    <button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 font-headline font-bold uppercase tracking-tight hover:opacity-90 transition-all">
                      <Globe size={18} />
                      Visit Site
                    </button>
                    <button className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 font-headline font-bold uppercase tracking-tight hover:bg-primary hover:text-on-primary transition-all">
                      <Code2 size={18} />
                      Source Code
                    </button>
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
                      <div className="font-bold text-primary">2025 - Present</div>
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
                  {activeProject.documentation.split('\n').map((line, i) => {
                    if (line.startsWith('###')) return <h4 key={i} className="text-xl font-bold mt-8 mb-4">{line.replace('### ', '')}</h4>;
                    if (line.startsWith('-')) return <li key={i} className="ml-4 mb-2">{line.replace('- ', '')}</li>;
                    if (line.match(/^\d\./)) return <div key={i} className="mb-4"><strong>{line.split('. ')[0]}.</strong> {line.split('. ')[1]}</div>;
                    return <p key={i}>{line}</p>;
                  })}
                </div>
              </div>

              {/* Iframe Placeholder */}
              <div className="pt-12">
                <div className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-4">
                  Interactive Sandbox <span className="h-[1px] flex-1 bg-outline-variant"></span>
                </div>
                <div className="bg-surface-container-highest aspect-video relative group border-4 border-primary">
                  <iframe 
                    src={activeProject.iframePlaceholder} 
                    className="w-full h-full border-none opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    title="Project Preview"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-primary text-on-primary px-8 py-4 font-headline font-bold text-xl shadow-2xl rotate-[-2deg]">
                      PREVIEW MODE ACTIVE
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-on-surface-variant italic text-center">
                  * 此預覽僅供展示 UI 結構，部分後端功能在沙盒環境中可能受限。
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
