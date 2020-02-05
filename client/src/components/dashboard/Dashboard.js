import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTimeList } from '../../actions/time';
import Spinner from '../layout/Spinner';
import TimeList from './TimeList';

const Dashboard = ({ time: { loading, data }, getTimeList }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        getTimeList();
        // eslint-disable-next-lines
    }, [getTimeList]);

    return loading ? <Spinner /> : (
        <Fragment>
            <h1 className="large text-primary">Dashboard</h1>
            <TimeList data={data} />
        </Fragment>
    )
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStatetoProps = state => ({
    auth: state.auth,
    time: state.time
});

export default connect(mapStatetoProps, { getTimeList })(Dashboard);