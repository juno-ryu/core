import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CategoryProps extends SvgIconProps {
  //
}

const Category = (props: CategoryProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3 17C3 16.4477 3.44772 16 4 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17Z" />
      </svg>
    </SvgIcon>
  );
};

export default Category;
