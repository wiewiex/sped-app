import styled, { css } from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';

export const Container = styled.div(
  (props: {
    mobileWidth?: string;
    width?: string;
    mobileMinWidth?: string;
    minWidth?: string;
    mobileMaxWidth?: string;
    maxWidth?: string;
    mobileHeight?: string;
    height?: string;
    mobileMaxHeight?: string;
    maxHeight?: string;
    mobileMinHeight?: string;
    minHeight?: string;
    padding?: string;
    margin?: string;
    mobilePadding?: string;
    mobileMargin?: string;
    backgroundColor?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    mobileJustifyContent?: string;
    mobileAlignItems?: string;
    mobileFlexDirection?: string;
    $mobileWrap?: boolean;
    $wrap?: 'wrap' | 'nowrap';
    mobileAlignSelf?: string;
    alignSelf?: string;
    flex?: number;
    imgFit?: string;
    imgPosition?: string;
    borderRadius?: string;
    opacity?: string;
    relative?: boolean;
    cursor?: string;
    border?: string;
    zIndex?: number;
    boxShadow?: string;
    backgroundGradient?: boolean;
    borderTop?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
    hiddenOnDesktop?: boolean;
    hiddenOnMobile?: boolean;
    theme: any;
  }) => css`
    display: flex;
    justify-content: ${props.mobileJustifyContent
      ? props.mobileJustifyContent
      : 'center'};
    align-items: ${props.mobileAlignItems
      ? props.mobileAlignItems
      : 'center'};
    flex-direction: ${props.mobileFlexDirection
      ? props.mobileFlexDirection
      : 'column'};
    ${props.relative && 'position: relative;'}
    ${props.mobileAlignSelf && `align-self: ${props.mobileAlignSelf};`}
    ${props.mobileWidth && `width: ${props.mobileWidth};`}
    ${props.mobileHeight && `height: ${props.mobileHeight};`}
    ${props.mobileMaxWidth && `max-width: ${props.mobileMaxWidth};`}
    ${props.mobileMinWidth && `min-width: ${props.mobileMinWidth};`}
    ${props.mobileMaxHeight && `max-height: ${props.mobileMaxHeight};`}
    ${props.mobileMinHeight && `min-height: ${props.mobileMinHeight};`}
    ${props.mobilePadding && `padding: ${props.mobilePadding};`}
    ${props.mobileMargin && `margin: ${props.mobileMargin};`}
    ${props.$mobileWrap && 'flex-wrap: wrap;'}    
    ${props.flex && `flex: ${props.flex};`}
    ${props.opacity && `opacity: ${props.opacity};`}
    ${props.border && `border: ${props.border};`}
    ${props.borderRadius && `border-radius: ${props.borderRadius};`}
    ${props.cursor && `cursor: ${props.cursor};`}
    ${props.zIndex && `z-index: ${props.zIndex};`}
    ${props.boxShadow && `box-shadow: ${props.boxShadow};`}   
    ${props.borderTop && `border-top: ${props.borderTop};`}
    ${props.borderBottom && `border-bottom: ${props.borderBottom};`}
    ${props.borderLeft && `border-left: ${props.borderLeft};`}
    ${props.borderRight && `border-right: ${props.borderRight};`}
    ${props.backgroundColor &&
    `background-color: ${props.backgroundColor};`}
    ${props.backgroundGradient &&
    `background-image: ${props.theme.backgroundGradient};`}
    ${props.hiddenOnMobile && `display: none;`} 

    ${props.imgFit &&
    css`
      > img {
        ${props.imgFit && `object-fit: ${props.imgFit};`}
        ${props.imgPosition && `object-position: ${props.imgPosition};`}
        width: 100%;
        height: 100%;
        ${props.borderRadius && `border-radius: ${props.borderRadius};`}
      }
    `}   

    @media ${mediaQueries.tabletHorizontal} {
      ${props.width && `width: ${props.width};`}
      ${props.height && `height: ${props.height};`}
      ${props.maxWidth && `max-width: ${props.maxWidth};`}
      ${props.minWidth && `min-width: ${props.minWidth};`}
      ${props.maxHeight && `max-height: ${props.maxHeight};`}
      ${props.minHeight && `min-height: ${props.minHeight};`}
      ${props.padding && `padding: ${props.padding};`}
      ${props.margin && `margin: ${props.margin};`}
      ${props.alignSelf && `align-self: ${props.alignSelf};`}
      ${props.justifyContent &&
      `justify-content: ${props.justifyContent};`}
      ${props.alignItems && `align-items: ${props.alignItems};`}
      ${props.flexDirection && `flex-direction: ${props.flexDirection};`}
      ${props.$wrap && `flex-wrap: ${props.$wrap};`}
      ${props.hiddenOnMobile && `display: flex;`}
      ${props.hiddenOnDesktop && `display: none;`}
    }
  `
);

export const ElementPositionWrapper = styled.div(
  (props: {
    position?: string;
    zIndex?: number;
    mobileTop?: string;
    mobileBottom?: string;
    mobileLeft?: string;
    mobileRight?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  }) => css`
    display: flex;
    flex-direction: column;
    ${props.zIndex && `z-index: ${props.zIndex};`}
    position: ${props.position ? props.position : 'absolute'};
    top: ${props.mobileTop ? props.mobileTop : 'auto'};
    bottom: ${props.mobileBottom ? props.mobileBottom : 'auto'};
    left: ${props.mobileLeft ? props.mobileLeft : 'auto'};
    right: ${props.mobileRight ? props.mobileRight : 'auto'};

    @media ${mediaQueries.tabletHorizontal} {
      top: ${props.top ? props.top : props.mobileTop || 'auto'};
      bottom: ${props.bottom
        ? props.bottom
        : props.mobileBottom || 'auto'};
      left: ${props.left ? props.left : props.mobileLeft || 'auto'};
      right: ${props.right ? props.right : props.mobileRight || 'auto'};
    }
  `
);

export const GlassBackground = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(8.4px);
`;
