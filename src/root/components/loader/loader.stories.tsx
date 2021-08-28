import React from 'react';
import { LoaderProps } from '@components/loader/loader.type';
import { Loader } from '@components/loader/loader.component';
import { StorybookTemplate } from '@utils/type';

export default {
    component: Loader,
    title: 'components/Loader',
    argTypes: {
        isShown: {
            control: { type: 'boolean' },
        },
        type: {
            options: ['default', 'clock', 'neon', 'atom'],
            control: { type: 'select' },
        },
        size: {
            control: {
                type: 'range', min: 10, max: 500, step: 1,
            },
        },
        duration: {
            control: {
                type: 'range', min: 10, max: 500, step: 1,
            },
        },
        animation: {
            options: [
                'linear',
                'ease',
                'ease-in-out',
                'ease-in-out-sign',
                'ease-in-out-cubic',
                'ease-in-out-slow-fast',
                'ease-in-out-fast',
                'ease-out-fast',
            ],
            control: { type: 'select' },
        },
        entry: {
            options: ['scale', 'opacity', 'rough'],
            control: { type: 'select' },
        },
    },
};

const Template: StorybookTemplate<LoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
    isShown: true,
    size: 60,
    duration: 100,
    entry: 'scale',
    type: 'default',
    animation: 'ease',
};

export const Clock = Template.bind({});

Clock.args = {
    ...Default.args,
    type: 'clock',
    animation: 'linear',
};

export const Neon = Template.bind({});

Neon.args = {
    ...Default.args,
    type: 'neon',
    animation: 'ease',
};

export const Atom = Template.bind({});

Atom.args = {
    ...Default.args,
    type: 'atom',
    animation: 'linear',
};
