import React, { ReactNode, useState } from "react";

interface PageProps {
  initialLanguage: string;
  initialMode: string;
  refreshLanguage: (lang: string) => void;
  children: ReactNode;
}

const Page = ({
  initialLanguage,
  initialMode,
  refreshLanguage,
  children,
}: PageProps) => {
 
  const [language, setLanguage] = useState(initialLanguage);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    refreshLanguage(lang);
  };

  return (
    <div lang={language} data-mode={initialMode}>
      
      {children}
    </div>
  );
};

export default Page;
