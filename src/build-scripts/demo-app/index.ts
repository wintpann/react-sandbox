import { ButtonStories } from '@demo-app/stories/components/button';
import { LoaderStories } from '@demo-app/stories/components/loader';
import { FC } from 'react';

const Stories = {
    ButtonStories,
    LoaderStories,
};

type Story = {name: string, Story: FC}

export const AllStories: Story[] = Object
    .keys(Stories)
    .reduce((acc: Story[], key: string) => [
        ...acc,
        {
            name: key.replace(/Stories$/, '').toLowerCase(),
            Story: Stories[key as keyof typeof Stories],
        },
    ], []);
