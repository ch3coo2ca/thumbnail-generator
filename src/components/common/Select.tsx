import {useState} from 'react';

import styled from 'styled-components';

const WIDTH = 195;
const MAX_HEIGHT = 150;
const SelectBox = styled.div`
  width: ${WIDTH}px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5em;
  border-radius: 3px;
  outline: none;
  border: 1px solid #cbd1e0;
  color: #626673;
  background-color: white;
  font-size: 1em;
  display: flex;
  justify-content: space-between;

  &:focus {
    border-color: #82a2ff;
    border-width: 2px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const List = styled.ul`
  width: 100%;
  max-width: ${WIDTH}px;
  max-height: ${MAX_HEIGHT}px;
  list-style: none;
  position: absolute;
  padding: 0;
  margin: 0;
  margin-top: 5px;
  border: 1px solid #efeff1;
  border-radius: 5px;
  box-shadow: -2px 2px 9px #d9dadd;
  z-index: 10;
  background-color: white;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Option = styled.li`
  padding: 0.5em 1em;
  font-size: 0.9em;
  &:hover {
    cursor: pointer;
    background-color: #f6f7fa;
  }
`;

export interface SelectItemType {
  name: string;
  value: string | number;
}

interface SelectProps {
  value: string | number;
  items: SelectItemType[];
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({value, items, onChange}) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleList = () => setOpen((prevState) => !prevState);

  const handleClickItem = (e: React.MouseEvent<HTMLUListElement>) => {
    const index = Number((e.target as HTMLUListElement).getAttribute('value'));

    onChange(items[index].name);
    toggleList();
  };

  /**
   * toggle list when clicking outside the select.
   * check if list item is clicked when blur event fires.
   * @param e FocusEvent
   */
  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    const isListItem = e.relatedTarget && e.relatedTarget.nodeName === 'LI';
    if (!isListItem) toggleList();
  };

  return (
    <SelectBox>
      <Button onBlur={handleBlur} onClick={toggleList}>
        <span>{value || items[0]?.value}</span>
        <span> {open ? '▲' : '▼'} </span>
      </Button>

      {open && (
        <List onClick={handleClickItem}>
          {items.map(({name, value}, index) => (
            <Option key={value} tabIndex={-1} value={index}>
              {name}
            </Option>
          ))}
        </List>
      )}
    </SelectBox>
  );
};

export default Select;
