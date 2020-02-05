import React from 'react';
import Moment from 'react-moment'

const TimeList = ({ data }) => {
    return (
        <div>
            <table width="100%" border="1" bordercolor="#ddd" className="customTable">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Task Name</th>
                    <th>Project</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((each, i) => {
                        const { taskname, project, startdate, enddate } = each;
                        console.log(startdate)
                        return (
                            <tr key={i}>
                                <td><Moment format="DD/MM/YYYY">{startdate}</Moment></td>
                                <td>{taskname}</td>
                                <td>{project}</td>
                                <td><Moment format="h:mm a">{startdate}</Moment></td>
                                <td><Moment format="h:mm a">{enddate}</Moment></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

TimeList.propTypes = {

}

export default TimeList
