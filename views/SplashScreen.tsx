
import React, { useEffect, useState } from 'react';
import { UserRole } from '../types';

interface SplashScreenProps {
  onSelectRole: (role: UserRole) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onSelectRole }) => {
  const [showCards, setShowCards] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(true), 1500);
    const timer2 = setTimeout(() => setShowCards(true), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-paper to-slate-50 relative">
      {/* Decorative Lines Background */}
      <div className="absolute top-0 left-0 w-full h-1/3 overflow-hidden pointer-events-none opacity-30">
        <svg viewBox="0 0 400 200" className="w-full h-full text-dusk">
          <path
            d="M50,150 Q100,50 150,120 T250,80 T350,140"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="line-drawing"
          />
          <path
            d="M20,100 Q80,20 180,100 T380,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="line-drawing"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      {/* Logo and Title */}
      <div className={`text-center mb-12 transition-all duration-1000 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative inline-block mb-10">
          {/* Animated Background Aura */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-rose/10 to-amber/10 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Main Logo - Artistic "舞" Character */}
          <div className="relative w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-soft border border-slate-100 overflow-hidden transform transition-all duration-700 hover:scale-110">
            {/* Subtle Texture Layer */}
            <div className="absolute inset-0 opacity-10 bg-paper-texture pointer-events-none"></div>
            
            {/* The Character "舞" */}
            <span className="text-7xl font-serif text-title select-none relative z-10">
              舞
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber/40 rounded-full blur-[2px]"></span>
            </span>
            
            {/* Circular decorative line */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-20" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="48" 
                fill="none" 
                stroke="url(#grad1)" 
                strokeWidth="0.5" 
                strokeDasharray="10, 5"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#D4A373', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#E6B8AF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-sm font-medium text-dusk tracking-[0.4em] opacity-80 uppercase pl-[0.4em]">
            舞蹈课堂采集系统
          </h1>
          
          <div className="relative inline-block px-10 py-4">
             {/* Decorative Corner Brackets - Refined */}
             <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber/30"></div>
             <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber/30"></div>
             
             <h2 className="text-4xl font-bold text-title tracking-widest leading-none">
                幼儿舞蹈创编
             </h2>
          </div>

          <div className="flex items-center justify-center space-x-3 pt-4">
            <span className="h-[1px] w-6 bg-rose/40"></span>
            <p className="text-[10px] text-helper font-medium tracking-[0.2em] uppercase opacity-70">
              艺术教育 · 智慧采集 · 科学评价
            </p>
            <span className="h-[1px] w-6 bg-rose/40"></span>
          </div>
        </div>
      </div>

      {/* Identity Cards */}
      <div className="w-full space-y-4">
        <button
          onClick={() => onSelectRole('student')}
          className={`group w-full p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-soft flex items-center space-x-6 border border-slate-50 hover:border-rose/30 hover:bg-rose/5 transition-all duration-300 transform ${showCards ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center text-rose group-hover:scale-110 transition-transform shadow-inner">
            <i className="fa-solid fa-user-graduate text-xl"></i>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-title tracking-wide">我是学生</h3>
            <p className="text-xs text-helper mt-0.5">上传作业 · 查看反馈 · 个人成长</p>
          </div>
        </button>

        <button
          onClick={() => onSelectRole('teacher')}
          className={`group w-full p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-soft flex items-center space-x-6 border border-slate-50 hover:border-amber/30 hover:bg-amber/5 transition-all duration-300 transform ${showCards ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber group-hover:scale-110 transition-transform shadow-inner">
            <i className="fa-solid fa-chalkboard-user text-xl"></i>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-title tracking-wide">我是教师</h3>
            <p className="text-xs text-helper mt-0.5">查看分析 · 评价作品 · 课堂管理</p>
          </div>
        </button>
      </div>

      <div className="mt-16 text-center">
        <p className="text-helper text-[9px] tracking-[0.3em] opacity-40 font-light uppercase">
          Digital Dance Collection & Analysis System
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
