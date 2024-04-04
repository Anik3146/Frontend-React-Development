// App.tsx
import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import MainContent from './components/mainComponent';
import Footer from './components/footer';
import Dropcomp from './components/dropdownComp';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <Sidebar />
        <MainContent />
        <Dropcomp/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
