import { memo } from 'react';

type AsideViewProp = {
  children?: React.ReactNode;
  className?: string;
};
const AsideView: React.FC<AsideViewProp> = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="basis-1/5 flex justify-center items-start pt-2">
        {children}
      </div>
      <div className="basis-4/5 flex justify-center items-start pt-2">asdf</div>
    </div>
  );
};
const MemoizedAsideView = memo(AsideView);
export default MemoizedAsideView;
