import { ButtonStories } from '@demo-app/stories/components/button';
import { LoaderStories } from '@demo-app/stories/components/loader';
import { AutocompleteStories } from '@demo-app/stories/hooks/useAutocomplete';
import { FC } from 'react';

const MockStory: FC = () => null;

const Stories = {
    ButtonStories,
    LoaderStories,
    AutocompleteStories,
    BoundsStories: MockStory,
    MutationObserverStories: MockStory,
    ResizeObserverStories: MockStory,
    UseTooManyUpdatesWatcherStories: MockStory,
    UseModifyStylesStories: MockStory,
    FindFirstParentWithPredicateStories: MockStory,
};

type Story = {name: string, Story: FC}

export const AllStories: Story[] = Object
    .keys(Stories)
    .reduce((acc: Story[], key: string) => [
        ...acc,
        {
            name: key.replace(/Stories$/, ''),
            Story: Stories[key as keyof typeof Stories],
        },
    ], []);
