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
    $wrap?: boolean;
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
  }) => css`
    position: ${props.relative ? 'relative' : 'initial'};
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
    align-self: ${props.mobileAlignSelf ? props.mobileAlignSelf : 'auto'};
    width: ${props.mobileWidth ? props.mobileWidth : 'auto'};
    max-width: ${props.mobileMaxWidth ? props.mobileMaxWidth : 'initial'};
    min-width: ${props.mobileMinWidth ? props.mobileMinWidth : 'initial'};
    max-height: ${props.mobileMaxHeight
      ? props.mobileMaxHeight
      : 'initial'};
    min-height: ${props.mobileMinHeight
      ? props.mobileMinHeight
      : 'initial'};
    padding: ${props.mobilePadding ? props.mobilePadding : 'initial'};
    margin: ${props.mobileMargin ? props.mobileMargin : 'initial'};
    flex-wrap: ${props.$wrap ? 'wrap' : 'nowrap'};
    height: ${props.mobileHeight ? props.mobileHeight : 'auto'};
    background-color: ${props.backgroundColor
      ? props.backgroundColor
      : 'transparent'};
    flex: ${props.flex ? props.flex : 'initial'};
    border-radius: ${props.borderRadius ? props.borderRadius : 'initial'};
    opacity: ${props.opacity ? props.opacity : 'initial'};
    border: ${props.border ? props.border : 'initial'};
    cursor: ${props.cursor ? props.cursor : 'initial'};
    z-index: ${props.zIndex ? props.zIndex : 'initial'};
    box-shadow: ${props.boxShadow ? props.boxShadow : 'initial'};
    background-image: ${props.backgroundGradient
      ? (props) => props.theme.backgroundGradient
      : 'initial'};
    border-top: ${props.borderTop ? props.borderTop : 'initial'};
    border-bottom: ${props.borderBottom ? props.borderBottom : 'initial'};
    border-left: ${props.borderLeft ? props.borderLeft : 'initial'};
    border-right: ${props.borderRight ? props.borderRight : 'initial'};

    > img {
      object-position: ${props.imgPosition ? props.imgPosition : 'center'};
      width: 100%;
      height: 100%;
      object-fit: ${props.imgFit ? props.imgFit : 'contain'};
      border-radius: ${props.borderRadius
        ? props.borderRadius
        : 'initial'};
    }

    @media ${mediaQueries.tabletHorizontal} {
      width: ${props.width ? props.width : props.mobileWidth || 'auto'};
      max-width: ${props.minWidth
        ? props.minWidth
        : props.mobileMinWidth || 'initial'};
      max-width: ${props.maxWidth
        ? props.maxWidth
        : props.mobileMaxWidth || 'initial'};
      height: ${props.height
        ? props.height
        : props.mobileHeight || 'auto'};
      max-height: ${props.maxHeight
        ? props.maxHeight
        : props.mobileMaxHeight || 'initial'};
      min-height: ${props.minHeight
        ? props.minHeight
        : props.mobileMinHeight || 'initial'};
      justify-content: ${props.justifyContent
        ? props.justifyContent
        : props.mobileJustifyContent || 'center'};
      align-items: ${props.alignItems
        ? props.alignItems
        : props.mobileAlignItems || 'center'};
      flex-direction: ${props.flexDirection
        ? props.flexDirection
        : props.mobileFlexDirection || 'column'};
      align-self: ${props.alignSelf ? props.alignSelf : 'auto'};
      padding: ${props.padding
        ? props.padding
        : props.mobilePadding || 'initial'};
      margin: ${props.margin
        ? props.margin
        : props.mobileMargin || 'initial'};
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
    z-index: ${props.zIndex ? props.zIndex : 'initial'};
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
