import * as React from 'react'
import {Route, Switch} from 'react-router-dom'

import {HomePage} from 'src/react/sections/home/HomePage'
import {AboutPage} from 'src/react/sections/about/AboutPage'
import {CoursePage} from 'src/react/sections/courses'
import {FourOhFourPage} from 'src/react/components/FourOhFourPage'

export const RootRoutes: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route exact path='/'  component={HomePage} />
      <Route path='/about'   component={AboutPage} />
      <Route path='/courses' component={CoursePage} />
      <Route component={FourOhFourPage} />
    </Switch>
  )
}