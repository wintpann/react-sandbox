import { FC, useEffect } from 'react';
import { warn } from '@utils/logger';
import { ButtonStories } from '@demo-app/stories/components/button';
import { LoaderStories } from '@demo-app/stories/components/loader';
import { AutocompleteStories } from '@demo-app/stories/hooks/useAutocomplete';
import { PulloverStories } from '@demo-app/stories/components/pullover';

const MockStory: FC = () => {
    useEffect(() => warn('Story is not ready'));
    return null;
};

const Stories = {
    ButtonStories,
    LoaderStories,
    AutocompleteStories,
    PulloverStories,
    UseBoundsStories: MockStory,
    UseMutationObserverStories: MockStory,
    UseResizeObserverStories: MockStory,
    UseTooManyUpdatesWatcherStories: MockStory,
    UseModifyStylesStories: MockStory,
    FindFirstParentWithPredicateStories: MockStory,
    UseAnimateStories: MockStory,
    UseCancelledStateStories: MockStory,
    UseClickOutsideStories: MockStory,
    UseDebouncedValue: MockStory,
};

type Story = { name: string; Story: FC };

export const AllStories: Story[] = Object.keys(Stories).reduce(
    (acc: Story[], key: string) => [
        ...acc,
        {
            name: key.replace(/Stories$/, ''),
            Story: Stories[key as keyof typeof Stories],
        },
    ],
    [],
);
