import { memo } from 'react';

type AsideViewProp = {
  title: string;
  childrenTop?: React.ReactNode;
  childrenBottom?: React.ReactNode;
  className?: string;
};
const AsideView: React.FC<AsideViewProp> = ({
  childrenTop,
  childrenBottom,
  title,
  className,
}) => {
  return (
    <div className={className}>
      <div className="basis-1/5 flex flex-col justify-start items-center pt-2 w-full">
        <header className="text-3xl">{title}</header>
        {childrenTop}
      </div>
      <div className="basis-4/5 flex justify-center items-start pt-2">
        {childrenBottom}
      </div>
    </div>
  );
};
const MemoizedAsideView = memo(AsideView);
export default MemoizedAsideView;
