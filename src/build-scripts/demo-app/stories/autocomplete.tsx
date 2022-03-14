import React, { FC, useEffect } from 'react';
import faker from 'faker';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { DemoBaseStyled, StoryBox, useButtonControl, useStringControl } from '@demo-app/storybox';
import { useAutocomplete } from '@hooks/useAutocomplete';
import { arrayOf } from '@utils/array';

const ListStyled = styled.div`
    height: 300px;
    width: 400px;
    overflow: auto;
    background: rgba(255, 255, 255, 0.2);
    padding: 0 20px;
`;

type User = { id: string; name: string };

const users: User[] = arrayOf(50, () => ({ name: faker.name.firstName(), id: uuid() }));

const userMatched = (user: User, search: string) =>
    user.name.toLowerCase().includes(search.toLowerCase());

export const AutocompleteStories: FC = () => {
    const [autocompletedUsers, setUsersSearch, showNextUsers] = useAutocomplete({
        items: users,
        pageSize: 10,
        predicate: userMatched,
    });

    const [search] = useStringControl({
        defaultValue: '',
        name: 'Search value',
        maxLength: 10,
    });
    useButtonControl({
        name: 'Show next 10 users',
        onClick: showNextUsers,
    });

    useEffect(() => {
        setUsersSearch(search);
    }, [search, setUsersSearch]);

    return (
        <StoryBox>
            <DemoBaseStyled>
                <ListStyled>
                    {autocompletedUsers.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ListStyled>
            </DemoBaseStyled>
        </StoryBox>
    );
};
