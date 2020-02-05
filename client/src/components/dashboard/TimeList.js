import React from 'react';

const TimeList = ({ data }) => {
    return (
        <div>
            <table width="100%" border="1" bordercolor="#ddd" style={{ borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <td>Task Name</td>
                    <td>Project</td>
                    <td>Start Time</td>
                    <td>End Time</td>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((each, i) => {
                        const { taskname, project, starttime, endtime } = each;
                        return (
                            <tr key={i}>
                                <td>{taskname}</td>
                                <td>{project}</td>
                                <td>{starttime}</td>
                                <td>{endtime}</td>
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
