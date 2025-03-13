import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return { isOpen, setIsOpen, handleClose };
};

export default useSidebar;
