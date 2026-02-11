
import React, { useState } from 'react';

interface CompositionAnalysisProps {
  onBack: () => void;
}

const CompositionAnalysis: React.FC<CompositionAnalysisProps> = ({ onBack }) => {
  const [activeLayer, setActiveLayer] = useState<'golden' | 'tri' | 'spiral'>('golden');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
       <div className="p-6 flex items-center justify-between">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-dusk">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h1 className="text-xl font-bold text-title">构图分析</h1>
          <div className="w-10"></div>
       </div>

       <div className="flex-1 px-6 pb-24">
          <div className="bg-white rounded-3xl p-3 shadow-xl relative overflow-hidden">
             <div className="aspect-[3/4] rounded-2xl bg-slate-200 overflow-hidden relative">
                <img src="https://picsum.photos/600/800?stage" className="w-full h-full object-cover" alt="Stage" />
                
                {/* Composition Overlays */}
                <div className="absolute inset-0 pointer-events-none transition-all duration-700">
                   {activeLayer === 'golden' && (
                     <div className="w-full h-full border-dusk/30 border flex flex-wrap">
                        <div className="w-1/3 h-1/3 border-r border-b border-amber/30"></div>
                        <div className="w-1/3 h-1/3 border-r border-b border-amber/30"></div>
                        <div className="w-1/3 h-1/3 border-b border-amber/30"></div>
                        <div className="w-1/3 h-1/3 border-r border-b border-amber/30"></div>
                        <div className="w-1/3 h-1/3 border-r border-b border-amber/30 bg-amber/5"></div>
                        <div className="w-1/3 h-1/3 border-b border-amber/30"></div>
                        <div className="w-1/3 h-1/3 border-r border-amber/30"></div>
                        <div className="w-1/3 h-1/3 border-r border-amber/30"></div>
                        <div className="w-1/3 h-1/3"></div>
                     </div>
                   )}

                   {activeLayer === 'tri' && (
                      <svg className="w-full h-full text-amber/40" viewBox="0 0 300 400">
                         <line x1="0" y1="0" x2="300" y2="400" stroke="currentColor" strokeWidth="1" />
                         <line x1="300" y1="0" x2="0" y2="400" stroke="currentColor" strokeWidth="1" />
                         <path d="M150,0 L0,400 L300,400 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                      </svg>
                   )}

                   {activeLayer === 'spiral' && (
                      <svg className="w-full h-full text-amber/60" viewBox="0 0 300 400">
                         <path d="M300,400 Q0,400 0,200 T150,50 T220,130 T180,160" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                      </svg>
                   )}
                </div>

                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                   <span className="text-[10px] font-bold text-title">构图得分: 88</span>
                </div>
             </div>

             <div className="mt-4 flex justify-between p-2">
                {['golden', 'tri', 'spiral'].map((layer) => (
                   <button
                    key={layer}
                    onClick={() => setActiveLayer(layer as any)}
                    className={`flex-1 py-3 mx-1 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${activeLayer === layer ? 'bg-amber text-white shadow-lg' : 'bg-slate-50 text-helper'}`}
                   >
                      {layer === 'golden' ? '九宫格' : layer === 'tri' ? '三角形' : '黄金螺旋'}
                   </button>
                ))}
             </div>
          </div>

          <div className="mt-8 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-title">构图优化建议</h3>
                <span className="text-xs text-amber font-medium">点击查看详情</span>
             </div>

             <div className="space-y-4">
                <div className="p-4 bg-white rounded-2xl shadow-soft border-l-4 border-amber">
                   <h4 className="text-sm font-bold text-title mb-1">画面平衡感</h4>
                   <p className="text-xs text-helper">当前舞者位置略偏向左侧，建议在右侧增加道具或利用灯光进行视觉平衡补偿。</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-soft border-l-4 border-rose">
                   <h4 className="text-sm font-bold text-title mb-1">视觉引导线</h4>
                   <p className="text-xs text-helper">舞者的肢体延伸完美契合了对角线引导，能很好地将观众视线吸引到中心表现区。</p>
                </div>
             </div>
          </div>
       </div>

       {/* Floating Action Menu */}
       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-16 bg-dusk/95 backdrop-blur-xl rounded-full shadow-xl flex items-center justify-around px-8">
          <button className="text-white opacity-60 hover:opacity-100 transition-opacity"><i className="fa-solid fa-camera"></i></button>
          <button className="text-white opacity-60 hover:opacity-100 transition-opacity"><i className="fa-solid fa-crop"></i></button>
          <button className="w-12 h-12 rounded-full bg-amber text-white shadow-lg shadow-amber/40 flex items-center justify-center -mt-6 border-4 border-slate-100"><i className="fa-solid fa-wand-magic-sparkles"></i></button>
          <button className="text-white opacity-60 hover:opacity-100 transition-opacity"><i className="fa-solid fa-download"></i></button>
          <button className="text-white opacity-60 hover:opacity-100 transition-opacity"><i className="fa-solid fa-share-nodes"></i></button>
       </div>
    </div>
  );
};

export default CompositionAnalysis;
