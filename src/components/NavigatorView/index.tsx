import { MouseEvent } from 'react';

type NavigatorProps = {
  className?: string;
  onResetClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  onShowLocationClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};
const NavigatorView: React.FC<NavigatorProps> = ({
  className,
  onResetClick,
  onShowLocationClick,
}) => {
  return (
    <nav className={className}>
      <a href="#" onClick={onResetClick}>
        Reset view
      </a>

      <a href="#" onClick={onShowLocationClick}>
        Show my location
      </a>
    </nav>
  );
};
export default NavigatorView;
