const router = require('express').Router();

const userController = require('../../controllers/admin/userController');
const uploadController = require('../../controllers/admin/uploadController');

const {csvUploader} = require("../../controllers/admin/userController")


router.post('/user/export', userController.exportUsers);
router.get('/user/download-all-cvs', userController.downloadAllCVs);
router.post('/user/download-selected-cvs', userController.downloadSelectedCVs); 

// user
router.post('/user/export', userController.exportUsers);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.viewUser);
router.get('/user/delete/:id', userController.getDeleteUser);

// GET - Uploads Page (404 fix ke liye)
router.get('/uploads', (req, res) => {
    res.render('uploads', { 
        url: '/uploads'     // ye sidenav ke active class ke liye zaroori hai
    });
});

router.post('/bulk-cv-upload', 
  uploadController.bulkCVUpload, 
  uploadController.processBulkCV
);

// message
router.get('/message', userController.getAllMessages);
router.get('/message_view/:id', userController.viewMessages);
router.get('/message/delete/:id', userController.getDeleteMessages);

router.post('/user/import-csv', csvUploader, userController.importUsersFromCSV);




module.exports = router;
