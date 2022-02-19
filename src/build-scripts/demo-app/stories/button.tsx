import React, { FC } from 'react';
import { DemoBaseStyled, StoryBox, useRadioControl, useStringControl } from '@demo-app/storybox';
import { Button } from '@components/button/button.component';
import { ButtonProps } from '@components/button/button.type';

export const ButtonStories: FC = () => {
    const [text] = useStringControl({
        name: 'Text',
        defaultValue: 'Check out ideas',
    });
    const [appearance] = useRadioControl({
        name: 'Appearance',
        options: ['default', 'primary', 'link', 'danger', 'success'],
        defaultValue: 'default',
    });
    const [size] = useRadioControl({
        name: 'Size',
        options: ['large', 'medium', 'small'],
        defaultValue: 'medium',
    });

    return (
        <StoryBox>
            <DemoBaseStyled>
                <Button
                    appearance={appearance as ButtonProps['appearance']}
                    size={size as ButtonProps['size']}
                >
                    {text}
                </Button>
            </DemoBaseStyled>
        </StoryBox>
    );
};
