import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';
import { ToastContainer } from 'react-toastify';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export const Toast = styled(ToastContainer).attrs(() => ({
  autoClose: 1000,
  style: { width: '30vw', minWidth: '250px' },
  icon: false,
  position: 'bottom-right',
}))`
  .Toastify__toast--success {
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.success};
  }
  .Toastify__toast--warning {
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.error};
  }
  .Toastify__progress-bar--success {
    background-color: ${(props) => props.theme.colors.success};
  }
  .Toastify__progress-bar--warning {
    background-color: ${(props) => props.theme.colors.error};
  }
`;

export const Tooltip = styled(ReactTooltip).attrs({
  className: 'custom-tooltip',
})`
  &.custom-tooltip {
    display: none;
    @media ${mediaQueries.desktop} {
      display: block;
      background-color: ${(props) => props.theme.colors.secondaryAccent};
      color: ${(props) => props.theme.colors.mainBackground};
      font-family: ${(props) => props.theme.fonts.primary};
    }
  }
`;
