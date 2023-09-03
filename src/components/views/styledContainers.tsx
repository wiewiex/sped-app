import styled, { css } from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';

export const Container = styled.div(
  (props: {
    mobileWidth?: string;
    width?: string;
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

export const PrimaryButtonContainer = styled.button(
  (props: { icon: string; $rotate: boolean }) => css`
    position: relative;
    cursor: pointer;
    background-color: transparent;
    font-size: 15px;
    padding: 20px 30px;
    border: none;
    max-width: 180px;
    text-align: center;
    font-weight: 600;
    transform: ${props.$rotate ? 'rotate(90deg)' : 'initial'};

    &&::after {
      content: '';
      position: absolute;
      background-color: ${(props) => props.theme.colors.accent};
      background-position: center;
      left: 0;
      right: 0;
      bottom: 0;
      height: 4px;
    }

    @media ${mediaQueries.tabletHorizontal} {
      &&:hover {
        &&::after {
          transition: 0.3s;
          height: 100%;
          background-image: url(${props.icon});
          background-repeat: no-repeat;
          background-size: 35px;
        }
      }
    }
  `
);

export const SecondaryButtonContainer = styled.button`
  background-color: ${(props) =>
    props.disabled ? '#cec9c9' : props.theme.colors.accent};
  height: 50px;
  width: 100%;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;

  &&:active {
    transition: 0.2s;
    box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.3);
  }
`;

export const PrimaryTextInputContainer = styled.input<{ error: boolean }>`
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.text};
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  background-color: transparent;

  &&::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;

export const GlassBackground = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8.4px);
  -webkit-backdrop-filter: blur(8.4px);
`;
