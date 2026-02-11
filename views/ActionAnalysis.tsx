
import React, { useState } from 'react';

interface ActionAnalysisProps {
  onBack: () => void;
}

const ActionAnalysis: React.FC<ActionAnalysisProps> = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConsole, setShowConsole] = useState(false);

  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* Video Content Layer */}
      <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/800/1200?dance-step" className="w-full h-full object-cover opacity-80" alt="Video frame" />
        
        {/* Skeleton Overlay SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 600">
           {/* Head */}
           <circle cx="200" cy="150" r="15" fill="none" stroke="#7D8B9B" strokeWidth="2" />
           {/* Spine */}
           <line x1="200" y1="165" x2="200" y2="300" stroke="#7D8B9B" strokeWidth="2" />
           {/* Shoulders */}
           <line x1="150" y1="180" x2="250" y2="180" stroke="#7D8B9B" strokeWidth="2" />
           {/* Arms */}
           <line x1="150" y1="180" x2="120" y2="250" stroke="#7D8B9B" strokeWidth="2" />
           <line x1="250" y1="180" x2="280" y2="250" stroke="#7D8B9B" strokeWidth="2" />
           {/* Legs */}
           <line x1="200" y1="300" x2="160" y2="450" stroke="#7D8B9B" strokeWidth="2" />
           <line x1="200" y1="300" x2="240" y2="450" stroke="#E6B8AF" strokeWidth="2" />
           
           {/* Joints Points */}
           {[ [200,150], [150,180], [250,180], [120,250], [280,250], [200,300], [160,450], [240,450] ].map(([x,y], i) => (
             <circle key={i} cx={x} cy={y} r="4" fill="white" stroke="#7D8B9B" strokeWidth="1" className="animate-pulse" />
           ))}

           {/* Joint label */}
           <foreignObject x="250" y="440" width="80" height="40">
              <div className="bg-amber text-white text-[8px] p-1 rounded-sm shadow-sm font-bold">
                 重心平衡: 92%
              </div>
           </foreignObject>
        </svg>
      </div>

      {/* Interface Overlays */}
      <div className="z-10 p-6 flex items-start justify-between">
         <button onClick={onBack} className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
            <i className="fa-solid fa-chevron-left"></i>
         </button>
         <button onClick={() => setShowConsole(!showConsole)} className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
            <i className="fa-solid fa-sliders"></i>
         </button>
      </div>

      <div className="mt-auto z-10 p-6 pb-12">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-white/10 space-y-4">
           <div className="flex items-center justify-between text-white mb-2">
              <span className="text-xs font-bold tracking-widest uppercase">AI 实时姿态提取</span>
              <span className="text-[10px] opacity-60">帧率: 60FPS</span>
           </div>
           
           <div className="flex items-center space-x-4">
              <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                 <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} ml-0.5`}></i>
              </button>
              <div className="flex-1 space-y-2">
                 <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-amber w-1/3"></div>
                 </div>
                 <div className="flex justify-between text-[10px] text-white/60">
                    <span>01:12</span>
                    <span>03:45</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Sliding Console */}
      <div className={`absolute right-0 top-0 h-full w-2/3 bg-white/95 backdrop-blur-2xl z-20 shadow-2xl transition-transform duration-500 ease-out flex flex-col p-6 ${showConsole ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-title">数据控制台</h3>
            <button onClick={() => setShowConsole(false)} className="text-dusk">
               <i className="fa-solid fa-xmark text-xl"></i>
            </button>
         </div>

         <div className="space-y-8 flex-1 overflow-y-auto hide-scrollbar">
            <div className="space-y-4">
               <label className="text-xs font-bold text-helper uppercase">骨骼显示精度</label>
               <div className="flex items-center space-x-3">
                  <div className="flex-1 h-1 bg-slate-100 rounded-full">
                     <div className="h-full bg-dusk w-3/4 rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-dusk rounded-full"></div>
                     </div>
                  </div>
                  <span className="text-xs font-bold text-title">75%</span>
               </div>
            </div>

            <div className="space-y-4">
               <label className="text-xs font-bold text-helper uppercase">关键指标监控</label>
               <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-xl">
                     <p className="text-[10px] text-helper">动作流畅度</p>
                     <p className="text-lg font-bold text-title">优秀</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                     <p className="text-[10px] text-helper">空间占位</p>
                     <p className="text-lg font-bold text-title">85%</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                     <p className="text-[10px] text-helper">节奏一致性</p>
                     <p className="text-lg font-bold text-title">A-</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                     <p className="text-[10px] text-helper">力量控制</p>
                     <p className="text-lg font-bold text-title">中等</p>
                  </div>
               </div>
            </div>

            <div className="pt-6">
               <button className="w-full py-4 bg-dusk text-white rounded-full font-bold shadow-lg shadow-dusk/20">
                  生成完整动作报告
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ActionAnalysis;
