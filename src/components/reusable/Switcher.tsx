import styled from 'styled-components';

export default function Switcher({
  checked,
  handleChange,
}: {
  checked: boolean;
  handleChange: () => void;
}) {
  return (
    <SwitcherContainer>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          checked
        />
      </div>
    </SwitcherContainer>
  );
}

const SwitcherContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-width: 5rem;
  max-width: 8rem;

  div {
    transform: scale(1.8);
  }
`;
