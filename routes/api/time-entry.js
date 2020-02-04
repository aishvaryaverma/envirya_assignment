const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const TimeEntry = require('../../models/TimeEntry');
const { check, validationResult } = require('express-validator/check');

/**
 * @Route       GET api/time-entry
 * @desc        Get all time entry of auth user
 * @access      Private
 */
router.get('/', auth, async (req, res) => {
    try {
        const timeentries = await TimeEntry.find( { user: req.user.id });
        
        // Send response
        res.status(200).json(timeentries);

    } catch(err) {
        // Sending error response
        console.error(err);
        res.status(500).send('Server Error');
    }
});

/**
 * @Route       POST api/time-entry
 * @desc        Create time entry
 * @access      Private
 */
router.post('/', [auth, [
    // Checking required fields
    check('taskname', 'Task name is required').not().isEmpty(),
    check('project', 'Project is required').not().isEmpty(),
    check('startdate', 'Project is required').not().isEmpty(),
    check('enddate', 'Project is required').not().isEmpty()
]], async (req, res) => {

    // Pushing validation result in errors const
    const errors = validationResult(req);

    // Checking is there is an error
    if(!errors.isEmpty()) {
        // Sending error response
        return res.status(400).json({ errors: errors.array() })
    }

    // Find logged in user id
    const user = await User.findById(req.user.id).select('-password');
    console.log(user)
    if(!user) {
        // Sending error response
        return res.status(400).json({ errors: [{ msg: 'Bad request.' }] });
    }

    // Pulling data from request body
    const { taskname, project, startdate, enddate } = req.body;
    
    try {
        
        // Adding entry into database
        timeentry = new TimeEntry({
            user,
            taskname,
            project,
            startdate,
            enddate
        });

        // Send and Save entry to database using mongoose
        await timeentry.save();
        
        // Send response
        res.status(201).json({ msg: 'Time entry created.' });

    } catch(err) {
        // Sending error response
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;