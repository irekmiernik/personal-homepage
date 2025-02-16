import styled from "styled-components";

export const Container = styled.div`
  max-width: 1250px;
  padding:20px;
  margin: auto;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  padding: 10px;
}
`;

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
} 
`;