import React from "react";
import { connect } from 'react-redux'
import cx from "classnames";

import taskActionCreator from '../../redux/modules/reduxTaskModule/taskActions/taskActionCreator'
import FILTERS from "../../redux/modules/reduxTaskModule/taskConstantFilter";
import taskSelector from "../../redux/modules/reduxTaskModule/taskSelector";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(FILTERS).map(filterKey => {
        const currentFilter = FILTERS[filterKey];
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
const mapStateToProps = state => {
  return ({
    activeFilter: taskSelector.getActiveFilter(state)
  })
};

const mapDispatchToProps = {
  setFilter: taskActionCreator.setFilter()
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);