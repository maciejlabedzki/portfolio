import { useEffect, useState } from 'react';
import { Button } from '../../components';

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
          theme={
            currentSeleted?.value === item?.value ? 'primary' : 'transparent'
          }
          space="small"
          margin="small"
          additionalClasses={'px-2'}
        />
      ))}
    </div>
  );
};

export default ButtonList;
