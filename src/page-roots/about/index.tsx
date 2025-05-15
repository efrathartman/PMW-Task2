import React from "react";
import Page from "./root";
import AboutContent from "@/components/pages/about/AboutContent";

interface AboutPageRootProps {
  initialLanguage: string;
  initialMode: string;
  refreshLanguage: (lang: string) => void;
}

const AboutPageRoot = ({
  initialLanguage,
  initialMode,
  refreshLanguage,
}: AboutPageRootProps) => {
  return (
    <Page
      initialLanguage={initialLanguage}
      initialMode={initialMode}
      refreshLanguage={refreshLanguage}
    >
      <AboutContent />
    </Page>
  );
};

export default AboutPageRoot;
