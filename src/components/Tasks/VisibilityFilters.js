import React from "react";
import { connect } from 'react-redux'
import cx from "classnames";

import { setFilter } from '../../redux/actionCreators'
import { VISIBILITY_FILTERS } from "../../constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {setFilter(currentFilter)} /** waiting for setFilter handler*/}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

/***
 * Container
 */
const mapStateToProps = state => {
  return ({
    activeFilter: state.visibilityFilter.activeFilter
  })
}

const mapDispatchToProps = {
  setFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters)