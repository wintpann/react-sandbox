import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import faker from 'faker';
import styled from 'styled-components';
import { useAutocomplete } from '@hooks/useAutocomplete';

const DemoStyled = styled.div`
    width: 500px;
    height: 300px;
    background: rgba(255,255,255,0.1);
`;

const UsersStyled = styled.div`
    width: 200px;
    height: 100px;
    overflow: auto;
    background: rgba(255,255,255,0.1);
`;

type User = { name: string; id: string; index: number}
const users: User[] = Array.from({ length: 30 }, (item, index) => ({
    name: faker.name.firstName(),
    id: uuid(),
    index,
}));

const matchUser = (user: User, search: string): boolean => user
    .name
    .toUpperCase()
    .includes(search.toUpperCase());

export const AutocompleteStories: FC = () => {
    const [items, setSearch, showNext] = useAutocomplete({
        items: users,
        predicate: matchUser,
        pageSize: 5,
    });
    return (
        <DemoStyled>
            <button type="button" onClick={showNext}>show next</button>
            <br />
            search:
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <UsersStyled>
                {items.map((user) => <div key={user.id}>{`${user.name} ${user.index}`}</div>)}
            </UsersStyled>
        </DemoStyled>
    );
};
