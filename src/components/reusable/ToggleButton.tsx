import { useAppTheme } from '@/utils/theme';
import React from 'react';

export default function CustomSelect({
  offText,
  onText,
}: {
  offText: string;
  onText: string;
}) {
  const { fonts } = useAppTheme();

  return (
    <div>
      <div className="switch-button">
        <input className="switch-button-checkbox" type="checkbox"></input>
        <label className="switch-button-label" htmlFor="">
          <span className="switch-button-label-span">{offText}</span>
        </label>
      </div>
      <style jsx>{`
        .switch-button {
          border-radius: 30px;
          overflow: hidden;
          width: 240px;
          text-align: center;
          font-size: 1.5rem;
          letter-spacing: 1px;
          font-family: ${fonts.primary};
          position: relative;
          padding-right: 120px;
          position: relative;
          font-family: arial;
        }
        .switch-button:before {
          content: 'LTL';
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          pointer-events: none;
        }
        .switch-button-checkbox {
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 2;
        }
        .switch-button-checkbox:checked + .switch-button-label:before {
          transform: translateX(120px);
          transition: transform 300ms linear;
        }
        .switch-button-checkbox + .switch-button-label {
          position: relative;
          padding: 15px 0;
          display: block;
          user-select: none;
          pointer-events: none;
        }
        .switch-button-checkbox + .switch-button-label:before {
          content: '';
          background: #fff;
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 30px;
          transform: translateX(0);
          transition: transform 300ms;
        }
        .switch-button-checkbox
          + .switch-button-label
          .switch-button-label-span {
          position: relative;
        }
      `}</style>
    </div>
  );
}
