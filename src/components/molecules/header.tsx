import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setList, setGrid } from '../../redux/actions/view';
import { setSearchTerm } from '../../redux/actions/search';
import { RootState } from '../../interfaces/root-state';
import ActionButton from '../atoms/action-button';
import Input from '../atoms/input';

import gridIcon from '../../assets/grid-icon.svg';
import listIcon from '../../assets/list-icon.svg';

export default function Header(): JSX.Element {
  const dispatch = useDispatch();

  const view: 'list' | 'grid' = useSelector((state: RootState) => state.view);
  const search: string = useSelector((state: RootState) => state.search);

  return (
    <header className="h-[120px] pt-[30px] l:pt-0 l:h-[80px] top-0 w-full mx-auto">
      <div className="max-w-[calc(100%-40px)] xxl:max-w-[1360px] mx-auto flex items-center justify-between h-full">
        <Input
          label="Search"
          className="py-[10px]"
          value={search}
          onChange={e => dispatch(setSearchTerm(e.target.value))}
        />
        <div className="flex gap-[10px] lg-sm:gap-[20px]">
          <ActionButton
            icon={listIcon}
            onClick={() => dispatch(setList())}
            active={view === 'list'}
          />
          <ActionButton
            icon={gridIcon}
            onClick={() => dispatch(setGrid())}
            active={view === 'grid'}
          />
        </div>
      </div>
    </header>
  );
}
