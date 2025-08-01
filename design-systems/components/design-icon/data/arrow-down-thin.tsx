import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ArrowDownThinProps extends SvgIconProps {
  //
}

const ArrowDownThin = (props: ArrowDownThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V17.1893L17.4697 12.4697C17.7626 12.1768 18.2374 12.1768 18.5303 12.4697C18.8232 12.7626 18.8232 13.2374 18.5303 13.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303L5.46967 13.5303C5.17678 13.2374 5.17678 12.7626 5.46967 12.4697C5.76256 12.1768 6.23744 12.1768 6.53033 12.4697L11.25 17.1893V5C11.25 4.58579 11.5858 4.25 12 4.25Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ArrowDownThin;
