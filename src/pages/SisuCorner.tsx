import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Quote, Heart, Coffee, BookOpen, Sun, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';

const tags = ['All', 'Design', 'Life', 'Nature', 'Tech'] as const;

export default function SisuCorner() {
  const [selectedTag, setSelectedTag] = useState<typeof tags[number]>('All');

  const filteredArticles = selectedTag === 'All' 
    ? articles 
    : articles.filter(article => article.tag === selectedTag);

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <header className="mb-24 text-center max-w-3xl mx-auto">
        <div className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 font-label text-xs font-black tracking-[0.2em] uppercase mb-6">
          Philosophy & Spirit
        </div>
        <h1 className="font-headline text-7xl md:text-9xl font-black text-primary tracking-tighter leading-none mb-8">
          SISU <span className="text-secondary">小角落</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed">
          「Sisu」是一個芬蘭詞彙，代表著極致的堅韌、勇氣與毅力。在技術的道路上，我們不只追求速度，更追求在逆境中持續前行的力量。
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
        <div className="md:col-span-8 bg-primary p-12 md:p-20 relative overflow-hidden">
          <Quote className="absolute top-10 left-10 text-surface/10" size={120} />
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-black text-surface leading-tight mb-10">
              "Sisu begins where perseverance ends."
            </h2>
            <div className="flex items-center gap-6">
              <div className="w-16 h-[2px] bg-tertiary"></div>
              <p className="text-surface-variant text-lg italic">
                這是我在開發每一個複雜系統時的座右銘。當邏輯卡住、當 Bug 難尋，Sisu 是那股推動我再試一次的力量。
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-tertiary/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        <div className="md:col-span-4 bg-surface-container-highest p-12 flex flex-col justify-center border-t-8 border-secondary">
          <h3 className="font-headline text-3xl font-bold text-primary mb-6">今日份的堅韌</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                <Coffee className="text-on-secondary-container" size={20} />
              </div>
              <div>
                <p className="font-bold text-primary">保持專注</p>
                <p className="text-sm text-on-surface-variant">在嘈雜的世界中，為自己留出一小時的深度工作時間。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                <BookOpen className="text-on-secondary-container" size={20} />
              </div>
              <div>
                <p className="font-bold text-primary">持續學習</p>
                <p className="text-sm text-on-surface-variant">每天理解一個新的概念，哪怕只是一行代碼的優化。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="font-headline text-4xl font-black text-primary">靈感拾遺</h2>
          <div className="flex-1 h-[1px] bg-outline-variant"></div>
        </div>

        <nav className="mb-12 flex flex-wrap gap-4 items-center border-b border-outline-variant pb-6">
          <div className="flex items-center gap-2 text-on-surface-variant mr-4">
            <Filter size={18} />
            <span className="font-label text-sm font-bold uppercase tracking-widest">Filter by Tag</span>
          </div>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 font-headline font-bold text-sm uppercase tracking-tight transition-all ${
                selectedTag === tag 
                  ? 'bg-primary text-on-primary' 
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {tag}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.div
                layout
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link to={`/inspiration/${article.id}`} className="block">
                  <div className="aspect-video bg-surface-container-low mb-6 overflow-hidden relative">
                    <img 
                      alt={article.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                      src={article.image}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-surface/90 px-3 py-1 text-[10px] font-label font-bold tracking-widest uppercase">
                      {article.tag}
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-label text-on-surface-variant font-bold uppercase tracking-widest">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="font-headline text-2xl font-black text-primary mb-4 group-hover:text-tertiary transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-headline font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                    Read Full Story <ChevronRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-on-surface-variant italic">目前尚無此標籤的文章，敬請期待。</p>
          </div>
        )}
      </section>

      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Heart className="text-secondary mx-auto mb-8" size={48} />
          <h3 className="font-headline text-4xl font-black text-primary mb-8">
            讓我們一起，在技術的荒原中<br/>
            <span className="sketch-underline">開墾出屬於自己的綠洲</span>
          </h3>
          <p className="text-on-surface-variant mb-12 max-w-xl mx-auto">
            如果你也對這種精神感興趣，或者只是想聊聊生活與技術的平衡，歡迎隨時聯繫我。
          </p>
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Sun size={20} />
              <span>Stay Positive</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Sparkles size={20} />
              <span>Keep Creating</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23163422\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </section>
    </div>
  );
}
