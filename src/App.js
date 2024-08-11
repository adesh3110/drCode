import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main_layout';
import CodePulse from './pages/code_pulse_page';
import HomePage from './pages/home_page';
import AiChatPage from './pages/ai_chat_page';
import CodeReviewPage from './pages/code_review_page';
import SettingPage from './pages/setting_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/code-pulse' element={<CodePulse />} />
          <Route path='/code-review' element={<CodeReviewPage />} />
          <Route path='/ai-chat' element={<AiChatPage />} />
          <Route path='/settings' element={<SettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
