import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface SocialFacebookProps extends SvgIconProps {
  //
}

const SocialFacebook = (props: SocialFacebookProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12.0604C22 6.50448 17.5226 2 12 2C6.47745 2 2 6.50448 2 12.0604C2 17.081 5.65637 21.2424 10.4378 22V14.9691H7.89759V12.0604H10.4378V9.84385C10.4378 7.32046 11.931 5.92897 14.2142 5.92897C15.3083 5.92897 16.4544 6.12516 16.4544 6.12516V8.59926H15.1903C13.9502 8.59926 13.5622 9.37599 13.5622 10.1719V12.0584H16.3334L15.8904 14.9671H13.5622V21.998C18.3436 21.2444 22 17.082 22 12.0604Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default SocialFacebook;
