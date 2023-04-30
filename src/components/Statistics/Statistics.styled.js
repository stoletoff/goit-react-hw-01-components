import styled from 'styled-components';
import RandomColor from '../utils/RandomColor';
export const StatisticsCard = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 10px;
  width: 300px;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const StatisticsTitle = styled.h2`
  margin: 0;
  padding: 20px;
  text-align: center;
`;
export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1 1;
  background-color: ${RandomColor};
  margin: 0;
  padding: 10px;
  &:first-child {
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-bottom-right-radius: 10px;
  }
`;
export const StatisticsLabel = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: white;
`;
export const StatisticsPercentage = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;
