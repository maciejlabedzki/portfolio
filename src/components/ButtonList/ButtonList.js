import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';

const ButtonList = ({ data, onClick, selected }) => {
  const [currentSeleted, setCurrentSelected] = useState(selected);

  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  const handleClick = (item) => {
    setCurrentSelected(item);
    onClick?.(item);
  };

  return (
    <div className="flex flex-row">
      {data?.map((item) => (
        <Button
          key={item?.value}
          onClick={() => handleClick(item)}
          name={item?.name}
          color={currentSeleted?.value === item?.value ? 'blue' : 'tranparent'}
        />
      ))}
    </div>
  );
};

export default ButtonList;
