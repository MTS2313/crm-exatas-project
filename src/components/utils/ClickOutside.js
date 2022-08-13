import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref, callBack, ref2) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callBack()
      }
    }
    
    function handleClickOutsideRef2(event) {
      if (ref.current && !ref.current.contains(event.target) 
            && ref2.current && !ref2.current.contains(event.target)) {
        callBack()
      }
    }

    // -------------- IF THERE ARE 2 REFS
    if(ref && ref2){
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutsideRef2);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutsideRef2);
        };
    }

    // -------------- IF THERE IS 1 REFS
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
