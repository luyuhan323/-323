
import React, { useState, useEffect } from 'react';
import { UserRole } from './types';
import SplashScreen from './views/SplashScreen';
import Dashboard from './views/Dashboard';
import UploadModule from './views/UploadModule';
import ActionAnalysis from './views/ActionAnalysis';
import CompositionAnalysis from './views/CompositionAnalysis';
import MusicAnalysis from './views/MusicAnalysis';
import ArtisticAnalysis from './views/ArtisticAnalysis';
import AITutor from './views/AITutor';
import FeedbackModule from './views/FeedbackModule';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(null);
  const [currentView, setCurrentView] = useState<string>('splash');

  const navigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'splash':
        return <SplashScreen onSelectRole={(selectedRole) => {
          setRole(selectedRole);
          navigate('dashboard');
        }} />;
      case 'dashboard':
        return <Dashboard role={role} onNavigate={navigate} onLogout={() => navigate('splash')} />;
      case 'upload':
        return <UploadModule onBack={() => navigate('dashboard')} />;
      case 'action-analysis':
        return <ActionAnalysis onBack={() => navigate('dashboard')} />;
      case 'composition-analysis':
        return <CompositionAnalysis onBack={() => navigate('dashboard')} />;
      case 'music-analysis':
        return <MusicAnalysis onBack={() => navigate('dashboard')} />;
      case 'artistic-analysis':
        return <ArtisticAnalysis onBack={() => navigate('dashboard')} />;
      case 'ai-tutor':
        return <AITutor onBack={() => navigate('dashboard')} />;
      case 'feedback':
        return <FeedbackModule onBack={() => navigate('dashboard')} />;
      default:
        return <Dashboard role={role} onNavigate={navigate} onLogout={() => navigate('splash')} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-paper relative overflow-hidden shadow-2xl">
      {renderView()}
    </div>
  );
};

export default App;
