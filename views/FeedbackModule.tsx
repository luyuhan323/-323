
import React, { useState } from 'react';

interface FeedbackModuleProps {
  onBack: () => void;
}

const FeedbackModule: React.FC<FeedbackModuleProps> = ({ onBack }) => {
  const [showComments, setShowComments] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<number | null>(null);

  const comments = [
    { id: '1', user: '李教授', text: '这段眼神交流很到位，能更好地激发幼儿的情绪反应。', time: '01:12', pos: 30 },
    { id: '2', user: '张助教', text: '手臂延伸的幅度可以再大一点点，增加空间感。', time: '02:05', pos: 55 },
    { id: '3', user: 'AI助手', text: '检测到掉拍，建议复习《节奏感强化》章节。', time: '02:45', pos: 78 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
       <div className="p-6 flex items-center space-x-4">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-dusk">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h1 className="text-xl font-bold text-title">反馈与评价</h1>
      </div>

      <div className="flex-1 px-6 pb-24 space-y-8">
         {/* Video Preview Card */}
         <div className="bg-white rounded-3xl p-3 shadow-xl overflow-hidden">
            <div className="aspect-video bg-slate-200 rounded-2xl relative overflow-hidden">
               <img src="https://picsum.photos/640/360?dance-recap" className="w-full h-full object-cover" alt="Video" />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white">
                     <i className="fa-solid fa-play text-2xl ml-1"></i>
                  </div>
               </div>
            </div>
            
            {/* Timeline with Anchors */}
            <div className="px-4 py-8 relative">
               <div className="h-1 w-full bg-slate-100 rounded-full relative">
                  <div className="absolute top-0 left-0 h-full bg-dusk w-[60%]"></div>
                  
                  {/* Anchors */}
                  {comments.map((c) => (
                     <button
                        key={c.id}
                        onClick={() => setActiveAnchor(Number(c.id))}
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md transition-all duration-300 ${activeAnchor === Number(c.id) ? 'bg-amber scale-150 z-10' : 'bg-rose'}`}
                        style={{ left: `${c.pos}%` }}
                     ></button>
                  ))}
               </div>
            </div>
         </div>

         {/* Detailed Feedback Feed */}
         <div className="space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="text-lg font-bold text-title">专业反馈汇聚</h3>
               <button onClick={() => setShowComments(!showComments)} className="text-xs text-dusk font-bold">
                  {showComments ? '收起全部' : '展开详情'}
               </button>
            </div>

            <div className="space-y-4">
               {comments.map((c) => (
                  <div 
                    key={c.id} 
                    className={`p-5 bg-white rounded-2xl shadow-soft border-l-4 transition-all duration-500 ${activeAnchor === Number(c.id) ? 'border-amber ring-2 ring-amber/5 translate-x-1' : 'border-slate-100'}`}
                  >
                     <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                           <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-dusk font-bold">
                              {c.user[0]}
                           </div>
                           <span className="text-xs font-bold text-title">{c.user}</span>
                        </div>
                        <span className="text-[10px] text-helper font-mono">{c.time}</span>
                     </div>
                     <p className="text-xs text-body leading-relaxed">{c.text}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Interactive Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100">
         <div className="flex items-center space-x-3">
            <div className="flex-1 bg-slate-100 rounded-full h-12 px-5 flex items-center">
               <input 
                  type="text" 
                  placeholder="添加您的评论或问题..." 
                  className="bg-transparent border-none outline-none text-xs w-full placeholder:text-helper/50"
               />
               <button className="text-dusk ml-2"><i className="fa-regular fa-face-smile"></i></button>
            </div>
            <button className="w-12 h-12 rounded-full bg-dusk text-white flex items-center justify-center shadow-lg shadow-dusk/20">
               <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
         </div>
      </div>
    </div>
  );
};

export default FeedbackModule;
