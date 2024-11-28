import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init(options);
    // Cleanup to prevent re-initialization issues
    return () => {
      AOS.refreshHard(); // Forces reinitialization
    };
  }, [options]);
};

export default useAOS;
