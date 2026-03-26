import React from "react";

function withStorageListener(WrappedComponent){
  return function WrappedComponentWithStorageListener(props){
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
      const onStorageChange = (change) => {
        if (change.key === 'Todos_V1') {
          console.log('Storage change detected');
          setStorageChange(true);
        }
      };

      window.addEventListener('storage', onStorageChange);

      return () => {
        window.removeEventListener('storage', onStorageChange);
      };
    }, []);

    const toggleShow = () => {
      props.syncTodos();
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  };
}

export { withStorageListener };