import { FC } from 'react';
import { ButtonStories } from '@demo-app/stories/components/button';
import { LoaderStories } from '@demo-app/stories/components/loader';
import { PulloverStories } from '@demo-app/stories/components/pullover';
import { MockStory } from '@demo-app/stories/storybox';

const Stories = {
    ButtonStories,
    LoaderStories,
    PulloverStories,
    AutocompleteStories: MockStory,
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
    UseThrottledValue: MockStory,
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
