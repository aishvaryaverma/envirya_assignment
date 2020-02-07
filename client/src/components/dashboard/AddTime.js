import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { createTimeEntry } from '../../actions/time';

const AddTime = ({ setAlert, createTimeEntry }) => {
    const [formData, setFormData] = useState({
        taskname: '',
        project: '',
        startdate: '',
        enddate: ''
    });

    const { taskname, project, startdate, enddate } = formData;
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    
    const onFormSubmit = async e => {
        e.preventDefault();
        let newSD = dateFormat(startdate);
        let newED = dateFormat(enddate);
        createTimeEntry({taskname, project, startdate: newSD, enddate: newED})
    };

    const dateFormat = val => {
        let newVal = val.split(':');
        let date = new Date();
        date = date.setHours(newVal[0]);
        date = new Date(date).setMinutes(newVal[1]);
        console.log(new Date(date))
        return new Date(date).toISOString()
    }

	return (
		<Fragment>
			<p className="lead">
				Add new task
			</p>
			<form className="form" onSubmit={e => onFormSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
                        name="taskname"
                        placeholder="Task name"
                        value={taskname}
                        onChange={e => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
                        name="project"
                        placeholder="Project"
                        value={project}
                        onChange={e => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="time"
                        name="startdate"
                        placeholder="Start time"
                        value={startdate}
                        onChange={e => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="time"
                        name="enddate"
                        placeholder="End time"
                        value={enddate}
                        onChange={e => onChange(e)}
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Add Task" />
			</form>
		</Fragment>
	);
};

AddTime.propType = {
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStatetoProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStatetoProps, { setAlert, createTimeEntry })(AddTime);