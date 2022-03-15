import { FC } from 'react';
import { ButtonStories } from '@demo-app/stories/button';
import { LoaderStories } from '@demo-app/stories/loader';
import { PulloverStories } from '@demo-app/stories/pullover';
import { AutocompleteStories } from '@demo-app/stories/autocomplete';
import { MockStory } from '@demo-app/storybox';
import { UseBoundsStories } from '@demo-app/stories/useBounds';
import { UseMutationObserverStories } from '@demo-app/stories/useMutationObserver';
import { UseResizeObserverStories } from '@demo-app/stories/useResizeObserver';
import { UseModifyStylesStories } from '@demo-app/stories/useModifyStyles';
import { AnimateStories } from '@demo-app/stories/animate';

const Stories = {
    ButtonStories,
    LoaderStories,
    PulloverStories,
    AutocompleteStories,
    UseBoundsStories,
    UseMutationObserverStories,
    UseResizeObserverStories,
    UseModifyStylesStories,
    AnimateStories,
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
