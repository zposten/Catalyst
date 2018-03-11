import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Grid, Row, Col } from 'react-bootstrap'

import { Navigation } from './common/Navigation'
import { HomePage }  from './home/HomePage'
import { AboutPage } from './about/AboutPage'
import { CoursesPage } from './courses/CoursesPage'

/* eslint-disable react/jsx-no-bind */

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
       <div>
          <Navigation />

          <Grid>
            <Row>
              <Col xs={12}>
                <Switch>
                  <Route exact path="/"  component={HomePage} />
                  <Route path="/about"   component={AboutPage} />
                  <Route path="/courses" component={CoursesPage} />
                  <Route component={() => <h3>404 page not found</h3>} />
                </Switch>
              </Col>
            </Row>
        </Grid>
       </div>
      </MuiThemeProvider>
    )
  }
}