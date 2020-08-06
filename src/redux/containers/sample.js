import { connect } from 'react-redux'

import { addTodo, toggleTodo, setFilter } from '../actionCreators'
import VisibilityFilters from '../../components/Tasks/VisibilityFilters'

const mapStateToProps = (state/* , ownProps */) => ({
  // ... computed data from state and optionally ownProps
})

const mapDispatchToProps = {
  addTodo, toggleTodo, setFilter
}
/* 
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)
// and that function returns the connected, wrapper component:
const ConnectedComponent = connectToStore(Component)
 */
// We normally do both in one step, like this:
connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters)