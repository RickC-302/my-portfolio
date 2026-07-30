import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, Loader2, Mail, Sparkles, X, XCircle } from 'lucide-react';
import { cn } from '../lib/utils';

type ContactFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type NoticeState = {
  type: 'success' | 'error';
  message: string;
} | null;

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const subjectOptions = [
  { value: 'Personal Projects', label: '個人專案' },
  { value: 'Learning & Teaching Courses', label: '學習與教學課程' },
  { value: 'Others', label: '其他' },
];

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<NoticeState>(null);

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormState);
      setNotice(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotice(null);

    try {
      const response = await fetch('https://formspree.io/f/mjgnzdyb', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(event.currentTarget),
      });

      if (response.ok) {
        setFormData(initialFormState);
        onClose();
        navigate('/', {
          state: {
            contactNotice: {
              type: 'success',
              message: '訊息已成功送出，我會盡快回覆你！',
            },
          },
        });
      } else {
        setNotice({
          type: 'error',
          message: '送出時發生了點小問題，請稍後再試或直接以郵件聯絡我。',
        });
      }
    } catch {
      setNotice({
        type: 'error',
        message: '目前無法連線，請稍後再試。',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/50 px-4 py-8 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.35)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="聯絡我表單"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  <Sparkles size={16} />
                  讓我們聊聊你的想法
                </div>
                <h2 className="text-2xl font-black font-headline tracking-tight text-slate-900">
                  聯絡我
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  填寫以下資訊，我會盡快回覆你。無論是個人專案、教學課程或其他合作機會，都歡迎留言。
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-200 p-2 text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-slate-700"
                aria-label="關閉表單"
              >
                <X size={18} />
              </button>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-700">
                  <span>姓名</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="例如：Ivan"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                  />
                </label>

                <label className="space-y-2 text-sm font-semibold text-slate-700">
                  <span>電郵</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="例如：your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm font-semibold text-slate-700">
                <span>想了解的項目</span>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                >
                  <option value="" disabled>
                    請選擇一個項目
                  </option>
                  {subjectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm font-semibold text-slate-700">
                <span>查詢內容</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="請描述你想討論的內容..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Mail size={16} />
                  也可以直接發送至 ivanlamlth@gmail.com
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      正在送出...
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      送出訊息
                    </>
                  )}
                </button>
              </div>
            </form>

            {notice ? (
              <div
                className={cn(
                  'mt-5 rounded-lg border px-4 py-3 text-sm',
                  notice.type === 'success'
                    ? 'border-emerald-100 bg-emerald-50 text-emerald-700'
                    : 'border-rose-100 bg-rose-50 text-rose-700'
                )}
              >
                <div className="flex items-start gap-2">
                  {notice.type === 'success' ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                  <span>{notice.message}</span>
                </div>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
