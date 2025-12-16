import React from 'react';
import { BookOpen, Calculator, Brain, ChevronRight } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#e6d5b8] flex flex-col items-center justify-center p-6 text-center">
       <div className="max-w-md w-full bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-4 border-white ring-4 ring-indigo-100 flex flex-col items-center gap-6 transform transition-all hover:shadow-xl">
          
          <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg text-white mb-2 ring-4 ring-indigo-200">
             <BookOpen size={48} strokeWidth={1.5} />
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">Интерактивна Тетратка</h1>
            <h2 className="text-xl font-bold text-indigo-600 uppercase tracking-wider">Операции со Множества</h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed">
             Добредојдовте! Оваа тетратка содржи 10 интерактивни задачи кои ќе ви помогнат да ги совладате пресекот, унијата и разликата на множества преку вежби и Венови дијаграми.
          </p>

          <div className="flex gap-6 justify-center text-slate-500 text-sm mb-4 w-full border-t border-slate-100 pt-4">
             <div className="flex flex-col items-center gap-2 group">
                <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                  <Calculator size={24} className="text-indigo-500" />
                </div>
                <span className="font-medium">Пресметки</span>
             </div>
             <div className="flex flex-col items-center gap-2 group">
                <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                  <Brain size={24} className="text-indigo-500" />
                </div>
                <span className="font-medium">Логика</span>
             </div>
          </div>

          <button 
            onClick={onStart}
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3"
          >
            Отвори Тетратка <ChevronRight size={24} strokeWidth={3} />
          </button>
          
          <div className="text-xs text-slate-400 mt-2 font-medium">
             VI/VII Одделение • Математика
          </div>
       </div>
    </div>
  );
};