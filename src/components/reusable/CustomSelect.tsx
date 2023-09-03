import React, { useState } from 'react';
import { Container } from '../views/styledContainers';
import { useTheme } from 'styled-components';
import { useAppTheme } from '@/utils/theme';

export default function CustomSelect({
  name,
  options,
  placeholder,
  width,
}: {
  name: string;
  options: string[];
  placeholder?: string;
  width?: string;
}) {
  const [selectValue, setSelectValue] = useState<number>(0);
  const { colors } = useAppTheme();

  let inputs = options;
  if (placeholder) inputs = [`-- ${placeholder} --`, ...options];

  return (
    <Container mobileWidth="100%">
      <div className="select-box">
        <div className="select-box__current" tabIndex={1}>
          {inputs.map((el, i) => (
            <div className="select-box__value" key={el + Math.random()}>
              <input
                className="select-box__input"
                type="radio"
                id={name + '_' + el}
                value={el}
                name={name}
                checked={i === selectValue}
                onChange={() => setSelectValue(i)}
              />
              <p className="select-box__input-text">{el}</p>
            </div>
          ))}
          <img
            className="select-box__icon"
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
          />
        </div>
        <div className="select-box__list">
          {options?.map((el) => (
            <label
              key={el + Math.random()}
              className="select-box__option"
              htmlFor={name + '_' + el}
            >
              {el}
            </label>
          ))}
        </div>
      </div>
      <style jsx>{`
        .select-box {
          position: relative;
          display: block;
          width: ${width ?? '300px'};
          margin: 0 auto;
          font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri',
            'Arial', sans-serif;
          font-size: 1.5rem;
          color: #60666d;
        }
        .select-box__current {
          position: relative;
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
          border: 1px solid ${colors.footer};
          cursor: pointer;
          outline: none;
        }
        .select-box__current:focus + .select-box__list {
          opacity: 1;
          -webkit-animation-name: none;
          animation-name: none;
        }
        .select-box__current:focus
          + .select-box__list
          .select-box__option {
          cursor: pointer;
        }
        .select-box__current:focus .select-box__icon {
          transform: translateY(-50%) rotate(180deg);
        }
        .select-box__icon {
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          width: 20px;
          opacity: 0.3;
          transition: 0.2s ease;
        }
        .select-box__value {
          display: flex;
        }
        .select-box__input {
          display: none;
        }
        .select-box__input:checked + .select-box__input-text {
          display: block;
        }
        .select-box__input-text {
          display: none;
          width: 100%;
          margin: 0;
          padding: 10px;
          background-color: #fff;
        }
        .select-box__list {
          position: absolute;
          width: 100%;
          padding: 0;
          list-style: none;
          opacity: 0;
          -webkit-animation-name: HideList;
          animation-name: HideList;
          -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
          -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
          -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
          -webkit-animation-timing-function: step-start;
          animation-timing-function: step-start;
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
          z-index: 1;
        }
        .select-box__option {
          display: block;
          padding: 15px;
          background-color: #fff;
        }
        .select-box__option:hover,
        .select-box__option:focus {
          color: #546c84;
          background-color: #fbfbfb;
        }

        @-webkit-keyframes HideList {
          from {
            transform: scaleY(1);
          }
          to {
            transform: scaleY(0);
          }
        }

        @keyframes HideList {
          from {
            transform: scaleY(1);
          }
          to {
            transform: scaleY(0);
          }
        }
      `}</style>
    </Container>
  );
}
