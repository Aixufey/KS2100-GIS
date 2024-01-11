import { MouseEvent, memo } from 'react';
type ControlsViewProps = {
  className?: string;
  onClickCounties?: (e: MouseEvent<HTMLAnchorElement>) => void;
};
const ControlsView: React.FC<ControlsViewProps> = ({
  className,
  onClickCounties,
}) => {
  return (
    <div className={className}>
      <header className="text-3xl">Layers</header>
      <a href="#" onClick={onClickCounties}>
        Show counties
      </a>
    </div>
  );
};
const MemoizedControlsView = memo(ControlsView);
export default MemoizedControlsView;
