import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface EyeOffProps extends SvgIconProps {
  //
}

const EyeOff = (props: EyeOffProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.92448 7.3329C3.30816 9.07352 2 11.4973 2 12C2 12.8025 5.5038 18.5 12 18.5C13.5895 18.5 14.9998 18.1589 16.2235 17.6319L14.0356 15.444C13.4393 15.7973 12.7433 16 12 16C9.79086 16 8 14.2091 8 12C8 11.2567 8.20275 10.5607 8.55598 9.9644L5.92448 7.3329ZM15.9919 11.7435C15.865 9.7387 14.2613 8.135 12.2565 8.0081L9.93795 5.68952C10.5857 5.56775 11.273 5.5 12 5.5C18.6667 5.5 22 11.1975 22 12C22 12.386 21.1894 13.9044 19.6251 15.3767L15.9919 11.7435ZM9.67383 11.0823C9.56164 11.3664 9.5 11.676 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C12.324 14.5 12.6336 14.4384 12.9177 14.3262L9.67383 11.0823Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default EyeOff;
