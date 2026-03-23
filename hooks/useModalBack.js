import { useState, useEffect } from "react";

export function useModalBack() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (!window.location.hash.includes("#details")) {
        setSelectedItem(null);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    window.location.hash = "details";
  };

  const closeModal = () => {
    setSelectedItem(null);
    if (window.location.hash === "#details") {
      window.history.back();
    }
  };

  return { selectedItem, openModal, closeModal };
}
