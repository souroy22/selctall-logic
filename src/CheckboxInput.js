import React, { useState, useEffect } from "react";

const CheckboxInput = ({isAllSelected, value, setIsAllSelected}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
     if(isAllSelected){
          setIsSelected(true);
     }else{
        setIsAllSelected(false);
     }
  }, [isAllSelected]);

  const handleOnClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div>
      Value {value + 1}
      <input checked={isSelected} type="checkbox" onClick={handleOnClick} />
    </div>
  );
};

export default CheckboxInput;
