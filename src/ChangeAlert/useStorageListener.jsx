import React from "react";

function useStorageListener(syncTodos) {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    console.log("Listener mounted");

    const onStorageChange = (event) => {
      console.log("Storage event:", event);

      if (event.key === "Todos_V1") {
        console.log("Storage change detected");
        setStorageChange(true);
      }
    };

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  const toggleShow = () => {
    syncTodos();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };