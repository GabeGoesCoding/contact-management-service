const express = require('express');
const router = express.Router();
const { 
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact, 
} = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler')

router.use(validateToken);

// Common paths can have chained HTTP Methods
router.route('/').get(getContacts).post(createContact);

// Common paths can have chained HTTP Methods
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;