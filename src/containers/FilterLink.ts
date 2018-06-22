import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import { Dispatch, Store } from 'redux';
import Link from '../components/Link';

const mapStateToProps = (state: StateInterface, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps) => ({
    setFilter: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);