
import React, { useState } from 'react';

interface MusicAnalysisProps {
  onBack: () => void;
}

const MusicAnalysis: React.FC<MusicAnalysisProps> = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col p-6 overflow-hidden">
       <div className="flex items-center space-x-4 mb-8">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center text-white">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <h1 className="text-xl font-bold text-white">音乐节奏分析</h1>
       </div>

       <div className="flex-1 flex flex-col items-center justify-center space-y-12">
          {/* Animated Waveform Visualization */}
          <div className="w-full h-64 flex items-center justify-center space-x-1">
             {Array.from({ length: 40 }).map((_, i) => (
                <div 
                   key={i} 
                   className={`w-1 rounded-full bg-gradient-to-t from-dusk to-rose transition-all duration-300 ease-in-out ${isPlaying ? 'animate-pulse' : 'opacity-40'}`}
                   style={{ 
                      height: `${Math.random() * (isPlaying ? 100 : 20) + 10}%`,
                      animationDelay: `${i * 0.05}s`
                   }}
                ></div>
             ))}
          </div>

          <div className="w-full space-y-8">
             <div className="flex items-center justify-between text-white">
                <div className="text-center">
                   <p className="text-[10px] uppercase opacity-40 mb-1">当前BPM</p>
                   <p className="text-2xl font-bold tracking-tighter">124</p>
                </div>
                <div className="text-center">
                   <p className="text-[10px] uppercase opacity-40 mb-1">节奏匹配度</p>
                   <p className="text-2xl font-bold tracking-tighter text-amber">94%</p>
                </div>
                <div className="text-center">
                   <p className="text-[10px] uppercase opacity-40 mb-1">掉拍次数</p>
                   <p className="text-2xl font-bold tracking-tighter text-error">2</p>
                </div>
             </div>

             <div className="p-5 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="text-sm font-bold text-white/80">节奏关键点</h3>
                   <span className="text-[10px] text-rose bg-rose/10 px-2 py-0.5 rounded-full">高难度点</span>
                </div>
                <div className="flex flex-wrap gap-2">
                   {[ '00:15', '00:42', '01:05', '01:48' ].map(time => (
                      <button key={time} className="px-3 py-2 bg-white/10 rounded-xl text-xs text-white/60 hover:bg-white/20 transition-colors">
                        {time}
                      </button>
                   ))}
                </div>
             </div>
          </div>
       </div>

       {/* Floating Dock */}
       <div className="mt-auto pb-6">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-4 flex items-center space-x-4 border border-white/5 shadow-2xl">
             <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-amber text-white flex items-center justify-center shadow-lg shadow-amber/20"
             >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-xl`}></i>
             </button>
             <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-white/40">
                   <span>小星星协奏曲 - 变奏版</span>
                   <span>01:34 / 03:22</span>
                </div>
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                   <div className="absolute top-0 left-0 h-full bg-amber w-[45%]"></div>
                   {/* Sync Error Markers */}
                   <div className="absolute top-0 left-[20%] w-0.5 h-full bg-error"></div>
                   <div className="absolute top-0 left-[75%] w-0.5 h-full bg-error"></div>
                </div>
             </div>
             <button className="text-white/40 p-2"><i className="fa-solid fa-repeat"></i></button>
          </div>
       </div>
    </div>
  );
};

export default MusicAnalysis;
