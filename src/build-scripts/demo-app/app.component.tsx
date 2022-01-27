import React, { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import { camelspace } from '@utils/string';
import css from '@demo-app/stories/app.module.css';
import * as Styled from '@demo-app/app.styled';
import { Global } from '@components/global/global.component';
import { AllStories } from '@demo-app/index';

export const App: FC = () => (
    <Global>
        <Router>
            <Styled.LinksStyled>
                {AllStories.map(({ name }) => (
                    <Styled.LinkStyled key={name}>
                        <NavLink
                            to={`/${name.toLowerCase()}`}
                            activeClassName={css.activeLink}
                        >
                            {camelspace(name)}
                        </NavLink>
                    </Styled.LinkStyled>
                ))}
            </Styled.LinksStyled>
            <Styled.AppStyled>
                <Switch>
                    {AllStories.map(({ name, Story }) => (
                        <Route exact path={`/${name}`} key={name}>
                            <Story />
                        </Route>
                    ))}
                </Switch>
            </Styled.AppStyled>
        </Router>
    </Global>
);
