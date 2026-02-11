
import React from 'react';
import { UserRole, ModuleInfo } from '../types';

interface DashboardProps {
  role: UserRole;
  onNavigate: (view: string) => void;
  onLogout: () => void;
}

// 定义每个模块特有的线条艺术插画组件
const ModuleIllustration: React.FC<{ type: string; color: string }> = ({ type, color }) => {
  const commonProps = {
    fill: "none",
    stroke: color,
    strokeWidth: "1.2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "opacity-20 group-hover:opacity-40 transition-opacity duration-500"
  };

  switch (type) {
    case 'upload':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -bottom-2 -right-2">
          <path d="M30 70 Q30 50 50 50 Q70 50 70 70" {...commonProps} />
          <path d="M20 75 Q15 60 30 55 Q35 35 55 35 Q75 35 80 55 Q90 60 85 75 Z" {...commonProps} />
          <line x1="52.5" y1="55" x2="52.5" y2="70" {...commonProps} strokeDasharray="2 2" />
          <path d="M47.5 60 L52.5 55 L57.5 60" {...commonProps} />
        </svg>
      );
    case 'action':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -bottom-2 -right-2">
          <circle cx="50" cy="25" r="8" {...commonProps} />
          <path d="M50 33 L50 55 L35 80 M50 55 L65 80" {...commonProps} />
          <path d="M30 40 Q50 35 70 45" {...commonProps} />
          <circle cx="35" cy="80" r="2" fill={color} className="opacity-40" />
          <circle cx="65" cy="80" r="2" fill={color} className="opacity-40" />
        </svg>
      );
    case 'composition':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -bottom-2 -right-2">
          <rect x="20" y="20" width="60" height="60" rx="4" {...commonProps} />
          <line x1="40" y1="20" x2="40" y2="80" {...commonProps} strokeDasharray="3 3" />
          <line x1="60" y1="20" x2="60" y2="80" {...commonProps} strokeDasharray="3 3" />
          <line x1="20" y1="40" x2="80" y2="40" {...commonProps} strokeDasharray="3 3" />
          <line x1="20" y1="60" x2="80" y2="60" {...commonProps} strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="15" {...commonProps} className="opacity-10" />
        </svg>
      );
    case 'music':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -bottom-2 -right-2">
          <path d="M20 50 Q30 30 40 50 T60 50 T80 50" {...commonProps} />
          <path d="M25 60 Q35 40 45 60 T65 60 T85 60" {...commonProps} className="opacity-10" />
          <circle cx="30" cy="45" r="2" fill={color} />
          <circle cx="50" cy="55" r="2" fill={color} />
        </svg>
      );
    case 'artistic':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -bottom-2 -right-2">
          <path d="M20 80 Q50 20 80 80" {...commonProps} strokeWidth="0.8" />
          <path d="M30 80 Q50 40 70 80" {...commonProps} strokeWidth="0.8" />
          <path d="M50 15 L53 22 L60 22 L55 27 L57 34 L50 30 L43 34 L45 27 L40 22 L47 22 Z" fill={color} className="opacity-10" />
        </svg>
      );
    case 'ai-tutor':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -bottom-2 -right-2">
          <rect x="30" y="30" width="40" height="30" rx="5" {...commonProps} />
          <circle cx="40" cy="40" r="2" fill={color} />
          <circle cx="60" cy="40" r="2" fill={color} />
          <path d="M45 50 Q50 55 55 50" {...commonProps} />
          <path d="M25 45 L30 45 M70 45 L75 45" {...commonProps} />
        </svg>
      );
    case 'feedback':
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -bottom-2 -right-2">
          <path d="M25 35 H75 V60 H45 L35 70 V60 H25 Z" {...commonProps} />
          <line x1="35" y1="45" x2="65" y2="45" {...commonProps} strokeWidth="0.5" />
          <line x1="35" y1="52" x2="55" y2="52" {...commonProps} strokeWidth="0.5" />
        </svg>
      );
    default:
      return null;
  }
};

const Dashboard: React.FC<DashboardProps> = ({ role, onNavigate, onLogout }) => {
  // 模拟模块是否有数据，用于决定是否显示“暂无内容”提示
  const modules: (ModuleInfo & { hasData: boolean })[] = [
    { id: 'upload', title: '上传作业', description: '递交您的舞蹈创编视频', icon: 'fa-cloud-arrow-up', accent: '#E6B8AF', path: 'upload', hasData: false },
    { id: 'action', title: '动作分析', description: 'AI人体骨骼关键点追踪', icon: 'fa-person-skating', accent: '#7D8B9B', path: 'action-analysis', hasData: true },
    { id: 'composition', title: '构图分析', description: '画面比例与艺术构图评估', icon: 'fa-shapes', accent: '#D4A373', path: 'composition-analysis', hasData: true },
    { id: 'music', title: '音乐分析', description: '节奏匹配与声谱动态可视化', icon: 'fa-music', accent: '#7D8B9B', path: 'music-analysis', hasData: true },
    { id: 'artistic', title: '表现力', description: '艺术感染力多维度综合评估', icon: 'fa-wand-magic-sparkles', accent: '#E6B8AF', path: 'artistic-analysis', hasData: true },
    { id: 'ai-tutor', title: 'AI助教', description: '基于大模型的专业评语反馈', icon: 'fa-robot', accent: '#D4A373', path: 'ai-tutor', hasData: true },
    { id: 'feedback', title: '反馈评价', description: '师生协作评价与视频复盘', icon: 'fa-comments', accent: '#7D8B9B', path: 'feedback', hasData: true },
  ];

  return (
    <div className="min-h-screen pb-24 bg-paper relative flex flex-col">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-rose p-0.5">
            <img src="https://picsum.photos/100" className="w-full h-full rounded-full object-cover" alt="User" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-title">{role === 'student' ? '学生用户' : '教师专家'}</h2>
            <p className="text-[10px] text-helper">在线</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-dusk hover:bg-slate-200 transition-colors">
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </button>
          <button onClick={onLogout} className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-error/80 hover:bg-error/10 transition-colors">
            <i className="fa-solid fa-right-from-bracket text-sm"></i>
          </button>
        </div>
      </header>

      {/* Hero Stats */}
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-title mb-1">欢迎回来！</h1>
          <p className="text-sm text-helper">今日有 <span className="text-amber font-bold">3</span> 个待处理的新任务</p>
        </div>

        <div className="bg-gradient-to-r from-rose/5 to-amber/5 rounded-2xl p-4 flex items-center justify-between shadow-soft border border-white/50">
          <div className="space-y-1">
            <p className="text-xs text-helper uppercase tracking-wider">完成进度</p>
            <p className="text-xl font-bold text-dusk">78%</p>
          </div>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`w-1.5 h-8 rounded-full ${i <= 4 ? 'bg-dusk' : 'bg-slate-200'}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="px-6 grid grid-cols-2 gap-4">
        {modules.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => onNavigate(m.path)}
            className={`flex flex-col text-left p-5 bg-white rounded-2xl shadow-soft border border-slate-50 relative overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 ${idx === modules.length - 1 ? 'col-span-2 aspect-auto h-32' : 'aspect-square'}`}
          >
            {/* 线条艺术插画 - 作为背景装饰 */}
            <ModuleIllustration type={m.id} color={m.accent} />

            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-auto transition-transform group-hover:scale-110 relative z-10" style={{ backgroundColor: `${m.accent}15`, color: m.accent }}>
              <i className={`fa-solid ${m.icon} text-lg`}></i>
            </div>
            
            <div className="z-10 mt-2">
              <h3 className="text-base font-bold text-title">{m.title}</h3>
              {m.hasData ? (
                <p className="text-[10px] text-helper leading-tight line-clamp-2">{m.description}</p>
              ) : (
                <div className="flex items-center space-x-1 mt-1">
                  <span className="w-1 h-1 rounded-full bg-rose"></span>
                  <p className="text-[9px] text-rose font-medium">暂无内容，点击开启</p>
                </div>
              )}
            </div>

            {/* Status Indicator */}
            {m.hasData && (
              <div className="absolute top-4 right-4">
                 <div className="w-2 h-2 rounded-full bg-success opacity-80"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)] h-20 px-10 flex items-center justify-between z-50">
        <button className="flex flex-col items-center space-y-1 text-dusk">
          <i className="fa-solid fa-house text-lg"></i>
          <span className="text-[10px] font-bold">首页</span>
          <div className="w-1 h-1 rounded-full bg-dusk"></div>
        </button>
        <button className="flex flex-col items-center space-y-1 text-helper/60">
          <i className="fa-solid fa-chart-line text-lg"></i>
          <span className="text-[10px]">统计</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-helper/60">
          <i className="fa-solid fa-gear text-lg"></i>
          <span className="text-[10px]">设置</span>
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
