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
  // הוספת סטייט לשפה לדוגמה
  const [language, setLanguage] = useState(initialLanguage);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    refreshLanguage(lang);
  };

  return (
    <div lang={language} data-mode={initialMode}>
      {/* אפשר להוסיף כאן כותרת/ניווט לפי הצורך */}
      {children}
    </div>
  );
};

export default Page;
