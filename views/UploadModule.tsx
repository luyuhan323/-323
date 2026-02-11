
import React, { useState } from 'react';

interface UploadModuleProps {
  onBack: () => void;
}

const UploadModule: React.FC<UploadModuleProps> = ({ onBack }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const simulateUpload = () => {
    setIsUploading(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          setIsSuccess(true);
        }, 500);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="p-6 flex items-center space-x-4">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-dusk">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h1 className="text-xl font-bold text-title">上传作业</h1>
      </div>

      <div className="flex-1 px-8 flex flex-col justify-center items-center pb-20">
        {!isSuccess ? (
          <div className="w-full">
            <div 
              className={`w-full aspect-[4/5] bg-white rounded-3xl shadow-neumorph flex flex-col items-center justify-center p-8 transition-all duration-500 ${isUploading ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
              onClick={!isUploading ? simulateUpload : undefined}
            >
              <div className="relative w-32 h-32 mb-8">
                {/* Pulsing ring */}
                <div className={`absolute inset-0 rounded-full border-2 border-dusk/30 ${isUploading ? 'animate-ping' : 'pulse-ring'}`}></div>
                <div className="absolute inset-4 rounded-full bg-dusk/10 flex items-center justify-center text-dusk">
                  <i className={`fa-solid ${isUploading ? 'fa-spinner fa-spin' : 'fa-cloud-arrow-up'} text-4xl`}></i>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-title mb-2">
                  {isUploading ? `正在上传 ${progress}%` : '拖拽或点击上传'}
                </h3>
                <p className="text-xs text-helper max-w-[200px] mx-auto leading-relaxed">
                  支持 MP4, MOV 格式<br/>建议视频时长 1-5 分钟
                </p>
              </div>

              {isUploading && (
                <div className="w-full h-1 bg-slate-100 rounded-full mt-10 overflow-hidden">
                  <div 
                    className="h-full bg-dusk transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
            
            <div className="mt-10 space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-white/50 rounded-2xl">
                <div className="w-5 h-5 rounded bg-rose/10 text-rose flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-info-circle text-[10px]"></i>
                </div>
                <p className="text-xs text-helper leading-relaxed">请确保拍摄背景整洁，光线充足，以便AI助手能更准确地识别您的每一个舞步。</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full animate-in fade-in zoom-in duration-500">
            {/* Polaroid Result Animation */}
            <div className="w-full aspect-[4/5] bg-white p-4 shadow-xl rounded-sm transform rotate-3 flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-200 overflow-hidden mb-4 relative">
                 <img src="https://picsum.photos/400/400?dance" className="w-full h-full object-cover grayscale-[0.5]" alt="Uploaded" />
                 <div className="absolute top-2 right-2 px-2 py-1 bg-success text-white text-[10px] rounded-full flex items-center space-x-1">
                    <i className="fa-solid fa-check"></i>
                    <span>已完成</span>
                 </div>
              </div>
              <div className="w-full py-4 px-2 space-y-2">
                 <div className="h-4 bg-slate-50 w-3/4 rounded animate-pulse"></div>
                 <div className="h-3 bg-slate-50 w-1/2 rounded animate-pulse"></div>
              </div>
              <div className="mt-auto text-[10px] text-helper/40 font-serif italic italic text-right w-full">
                2024.10.24 Uploaded
              </div>
            </div>
            <div className="text-center mt-12 space-y-4">
               <h2 className="text-2xl font-bold text-title">上传成功!</h2>
               <p className="text-sm text-helper">系统正在为您进行初步的AI骨骼数据提取...</p>
               <button onClick={onBack} className="px-10 py-3 bg-dusk text-white rounded-full shadow-lg hover:shadow-xl transition-all">
                  返回首页查看
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadModule;
