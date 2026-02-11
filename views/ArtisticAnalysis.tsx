
import React from 'react';

interface ArtisticAnalysisProps {
  onBack: () => void;
}

const ArtisticAnalysis: React.FC<ArtisticAnalysisProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-paper flex flex-col p-6 space-y-8">
       <div className="flex items-center justify-between">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-dusk">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <h1 className="text-xl font-bold text-title">艺术表现力评估</h1>
          <button className="text-amber"><i className="fa-solid fa-share-nodes text-lg"></i></button>
       </div>

       {/* Radar Chart Section */}
       <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
             {/* Simple Custom Radar Chart Mockup */}
             <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Background hexagons */}
                <polygon points="100,20 180,60 180,140 100,180 20,140 20,60" fill="none" stroke="#7D8B9B20" strokeWidth="1" />
                <polygon points="100,40 160,75 160,125 100,160 40,125 40,75" fill="none" stroke="#7D8B9B10" strokeWidth="1" />
                
                {/* Data area */}
                <polygon points="100,45 155,70 165,135 110,165 45,115 60,65" fill="#E6B8AF30" stroke="#E6B8AF" strokeWidth="2" />
                
                {/* Labels */}
                <text x="100" y="15" textAnchor="middle" className="text-[10px] fill-title font-bold">情感投入</text>
                <text x="190" y="100" textAnchor="middle" className="text-[10px] fill-title font-bold">力度对比</text>
                <text x="100" y="195" textAnchor="middle" className="text-[10px] fill-title font-bold">空间利用</text>
                <text x="10" y="100" textAnchor="middle" className="text-[10px] fill-title font-bold">表情配合</text>
             </svg>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                   <p className="text-[10px] text-helper uppercase">表现力得分</p>
                   <p className="text-3xl font-serif text-title">A+</p>
                </div>
             </div>
          </div>
       </div>

       {/* Heatmap Highlights */}
       <div className="space-y-4">
          <h3 className="text-base font-bold text-title flex items-center space-x-2">
             <i className="fa-solid fa-fire-flame-curved text-rose"></i>
             <span>感染力高光时刻</span>
          </h3>
          <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
             {[1, 2, 3].map(i => (
                <div key={i} className="flex-shrink-0 w-48 bg-white rounded-2xl shadow-soft overflow-hidden border border-slate-50">
                   <div className="relative h-24 bg-slate-200">
                      <img src={`https://picsum.photos/300/200?dance-moment-${i}`} className="w-full h-full object-cover" alt="Highlight" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 text-white text-[10px] font-bold">01:24 - 01:27</div>
                   </div>
                   <div className="p-3">
                      <p className="text-[10px] text-helper leading-tight">此处舞者的延伸动作配合了精准的面部表情，极具童趣感染力。</p>
                   </div>
                </div>
             ))}
          </div>
       </div>

       {/* Artistic Tips */}
       <div className="p-6 bg-gradient-to-br from-rose/10 to-dusk/10 rounded-3xl border border-white/50 space-y-4">
          <h3 className="text-sm font-bold text-title">导师建议: 表现力进阶</h3>
          <p className="text-xs text-body leading-relaxed italic">
             "在幼儿舞蹈创编中，动作的夸张度与眼神的交流比纯粹的技术完成度更重要。建议在第二段小节处，加入更多与虚拟观众的‘对话感’动作。"
          </p>
          <div className="flex items-center space-x-3">
             <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-xs text-rose font-bold">AI</div>
             <p className="text-[10px] text-helper">基于您的表演习惯自动生成</p>
          </div>
       </div>
    </div>
  );
};

export default ArtisticAnalysis;
