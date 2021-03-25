import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
`;

export const Header = () => <HeaderWrapper>Header</HeaderWrapper>;
