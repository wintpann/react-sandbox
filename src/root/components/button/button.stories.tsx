import React from 'react';
import { ButtonProps } from '@components/button/button.type';
import { Button } from '@components/button/button.component';
import { StorybookTemplate } from '@utils/type';

export default {
    component: Button,
    title: 'components/Button',
    argTypes: {
        appearance: {
            options: ['default', 'primary', 'link', 'danger', 'success'],
            control: { type: 'select' },
        },
        size: {
            options: ['large', 'medium', 'small'],
            control: { type: 'select' },
        },
    },
};

const Template: StorybookTemplate<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Change visibility',
    appearance: 'default',
    size: 'medium',
};

export const Primary = Template.bind({});

Primary.args = {
    children: 'Gists',
    appearance: 'primary',
    size: 'medium',
};

export const Success = Template.bind({});

Success.args = {
    children: 'Create repo',
    appearance: 'success',
    size: 'medium',
};

export const Danger = Template.bind({});

Danger.args = {
    children: 'Delete repo',
    appearance: 'danger',
    size: 'large',
};

export const Link = Template.bind({});

Link.args = {
    children: 'Check out docs',
    appearance: 'link',
    size: 'large',
};
