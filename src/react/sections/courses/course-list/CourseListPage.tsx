import * as React from 'react'
import {connect} from 'react-redux'

import {RootState, RootDispatch, loadCourses, saveCourse} from 'src/redux'
import {CourseList} from './components/CourseList'
import {bindActionCreator} from 'src/util/reduxUtil'
import {IReactRouterProps} from 'src/util/reactRouterUtil'

export type ICourseListPageProps =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  & IReactRouterProps<any>

export class CourseListPage extends React.Component<ICourseListPageProps> {
  private redirectToAddCourseListPage = () => {
    // To be consistent with the schema, the id for this new
    // course should be a guid. But I don't want to add another
    // dependency just for that when we're working with mock
    // data here anyway.
    const crappyId = Math.floor(Math.random() * 999999999)

    // 'history' is supplied through the react context
    // by react-router, which basically means that it
    // will automatically be in the props of every
    // component
    this.props.history.push(`/courses/${crappyId}`)
  }

  public render() {
    return (
      <CourseList
        courses={this.props.courses}
        onAddCourse={this.redirectToAddCourseListPage}
      />
    )
  }
}

function mapStateToProps(state: RootState) {
  let courses = state.courseState.courses
  if (!courses) return {}

  const copiedCourses = [...courses]
  copiedCourses.sort((a, b) => a.title.localeCompare(b.title))

  return {courses: copiedCourses}
}

function mapDispatchToProps(dispatch: RootDispatch) {
  // Binding action creators individually results in correct
  // static typing of this method, whereas using Redux.bindActionCreators
  // does not.
  return {actions: {
    loadCourses: bindActionCreator(loadCourses, dispatch),
    saveCourse: bindActionCreator(saveCourse, dispatch),
  }}
}

const container = connect(mapStateToProps, mapDispatchToProps)(CourseListPage)
export {container as default}