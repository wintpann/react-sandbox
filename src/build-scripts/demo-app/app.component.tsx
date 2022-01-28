import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { camelspace } from '@utils/string';
import css from '@demo-app/stories/app.module.css';
import * as Styled from '@demo-app/app.styled';
import { Global } from '@components/global/global.component';
import { AllStories } from '@demo-app/index';
import { Pullover } from '@components/pullover/pullover.component';

export const App: FC = () => (
    <Global>
        <Router>
            <Pullover iconSize={40}>
                <Styled.LinksStyled>
                    {AllStories.map(({ name }) => (
                        <Styled.LinkStyled key={name}>
                            <NavLink to={`/${name.toLowerCase()}`} activeClassName={css.activeLink}>
                                {camelspace(name)}
                            </NavLink>
                        </Styled.LinkStyled>
                    ))}
                </Styled.LinksStyled>
            </Pullover>
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
        <ToastContainer theme="dark" />
    </Global>
);
