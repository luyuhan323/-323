
import React from 'react';

interface AITutorProps {
  onBack: () => void;
}

const AITutor: React.FC<AITutorProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-paper bg-paper-texture flex flex-col">
       <div className="p-8 border-b-2 border-slate-900/5 flex items-center justify-between">
          <button onClick={onBack} className="text-title"><i className="fa-solid fa-arrow-left text-xl"></i></button>
          <div className="text-center">
             <h2 className="text-[10px] font-bold tracking-widest uppercase text-helper">AI 助教专项评测</h2>
             <p className="text-xl font-serif italic text-title">Evaluation Issue #24</p>
          </div>
          <div className="w-6"></div>
       </div>

       <div className="flex-1 p-8 space-y-10 overflow-y-auto">
          <section className="space-y-4">
             <span className="text-rose font-bold uppercase tracking-widest text-xs">专家总结 / Summary</span>
             <h1 className="text-3xl font-serif italic leading-tight text-title">
               "在这场富有诗意的创编中，我们看到了舞蹈与童心的深度联结。"
             </h1>
             <div className="h-0.5 w-12 bg-amber"></div>
          </section>

          <section className="grid grid-cols-2 gap-8 py-6 border-y border-slate-100">
             <div>
                <h4 className="text-[10px] font-bold text-helper mb-2 uppercase">创编主题度</h4>
                <p className="text-2xl font-serif text-title">9.4/10</p>
             </div>
             <div>
                <h4 className="text-[10px] font-bold text-helper mb-2 uppercase">动作创新性</h4>
                <p className="text-2xl font-serif text-title">8.8/10</p>
             </div>
          </section>

          <section className="space-y-6">
             <div className="relative">
                <span className="absolute -left-6 top-0 text-6xl font-serif text-slate-100 -z-10 opacity-60">"</span>
                <p className="text-sm text-body leading-relaxed indent-8 first-letter:text-3xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                   本次幼儿舞蹈《森林漫步》的创编过程，展示了极佳的空间层次感。动作设计符合幼儿生理特点，不仅考虑了平衡性，更在情感传达上做到了‘润物细无声’。系统识别到在视频第45秒处的转场衔接略显生硬，建议尝试更自然的手势过渡。
                </p>
             </div>
             
             <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg shadow-soft flex-shrink-0 flex items-center justify-center text-rose">
                   <i className="fa-solid fa-play-circle text-3xl"></i>
                </div>
                <div>
                   <h5 className="text-xs font-bold text-title">推荐示范课片断</h5>
                   <p className="text-[10px] text-helper mt-1">查看如何通过“模拟动物呼吸”增强动作的连贯性</p>
                </div>
             </div>
          </section>

          <section className="pt-10">
             <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-amber"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-title">核心术语解析</h3>
             </div>
             <div className="space-y-3">
                <div className="p-3 bg-white shadow-soft rounded-xl flex items-center justify-between border border-slate-50 group">
                   <span className="text-xs font-medium text-body">动作动力场 (Kinetic Field)</span>
                   <i className="fa-solid fa-chevron-right text-[10px] text-slate-300 group-hover:text-rose transition-colors"></i>
                </div>
                <div className="p-3 bg-white shadow-soft rounded-xl flex items-center justify-between border border-slate-50 group">
                   <span className="text-xs font-medium text-body">空间构图心理学</span>
                   <i className="fa-solid fa-chevron-right text-[10px] text-slate-300 group-hover:text-rose transition-colors"></i>
                </div>
             </div>
          </section>
       </div>

       <div className="p-8 bg-white/80 backdrop-blur-md">
          <button className="w-full py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl shadow-slate-900/20 active:scale-95 transition-all">
             导出精美评测简报
          </button>
       </div>
    </div>
  );
};

export default AITutor;
