// src/hooks/useSEO.ts
import { useEffect } from "react";

export default function useSEO(title: string, description: string) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (metaDescription) {
      metaDescription.content = description;
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);
}
