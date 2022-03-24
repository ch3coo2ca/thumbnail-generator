import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  color: #434959;
  font-weight: bold;
  margin-right: 1em;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
`;

interface EditorItemProps {
  title: string;
  children: JSX.Element;
}

export const EditorItem: React.FC<EditorItemProps> = ({title, children}) => {
  return (
    <Item>
      <Title> {title}</Title>
      {children}
    </Item>
  );
};
