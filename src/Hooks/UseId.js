import { useID } from "react";

const useUniqueId = () => {
  const id = useID();
  return id;
};

export default useUniqueId;
