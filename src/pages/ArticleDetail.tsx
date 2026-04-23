import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { articles } from '../data/articles';
import { ArrowLeft, ChevronRight, Share2, Calendar, Tag } from 'lucide-react';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-32 text-center">
        <h1 className="text-4xl font-headline font-black text-primary mb-8">找不到此文章</h1>
        <Link to="/inspiration" className="text-tertiary font-bold font-headline uppercase tracking-widest flex items-center justify-center gap-2">
          <ArrowLeft size={18} /> 返回靈感拾遺
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-8 py-20"
    >
      <Link to="/inspiration" className="text-on-surface-variant font-bold font-headline uppercase tracking-widest text-xs flex items-center gap-2 mb-12 hover:text-primary transition-colors">
        <ArrowLeft size={14} /> Back to Inspiration
      </Link>

      <header className="mb-16">
        <div className="flex items-center gap-6 mb-8 text-on-surface-variant font-label text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            {article.date}
          </div>
          <div className="flex items-center gap-2 text-tertiary">
            <Tag size={14} />
            {article.tag}
          </div>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-12">
          {article.title}
        </h1>
        <div className="aspect-video bg-surface-container-low overflow-hidden rounded-sm relative shadow-2xl">
          <img 
            alt={article.title} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            src={article.image}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-1 flex flex-col gap-6 sticky top-32 h-fit">
          <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
            <Share2 size={18} />
          </button>
        </div>
        <div className="md:col-span-11">
          <div 
            className="prose prose-lg max-w-none font-body text-on-surface-variant leading-relaxed space-y-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="mt-24 pt-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1517502166878-35c93a0072bb?auto=format&fit=crop&w=200&q=80"
                />
              </div>
              <div>
                <div className="font-bold text-primary font-headline">Ivan Chen</div>
                <div className="text-xs text-on-surface-variant uppercase font-label tracking-tighter">Last Year University Student | Mentor</div>
              </div>
            </div>
            <Link to="/inspiration" className="bg-surface-container-highest px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center gap-4">
              Explore More Inspiration <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
