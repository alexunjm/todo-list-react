import React from "react";
import { connect } from 'react-redux'
import cx from "classnames";

import { todoFilterActionCreators } from '../../redux/actionCreators'
import { TODO_FILTERS } from "../../constants";
import { todoFilterSelector } from "../../redux/selectors";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(TODO_FILTERS).map(filterKey => {
        const currentFilter = TODO_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {setFilter(currentFilter)}}
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
const { setFilter } = todoFilterActionCreators;
const { getActiveFilter } = todoFilterSelector;
const mapStateToProps = state => {
  return ({
    activeFilter: getActiveFilter(state)
  })
};

const mapDispatchToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);