import { useEffect } from "react";

const UseTitleName = (title) => {
  useEffect(() => {
    document.title = title + " | OCU Logistics Club";
  }, [title])
}

export default UseTitleName;