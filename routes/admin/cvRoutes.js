const router = require('express').Router();
const cvController = require('../../controllers/admin/cvUploadController');

// Upload page
router.get('/cv-upload', cvController.getUploadPage);
router.post('/cv-upload', cvController.cvUploader, cvController.postUploadCVs);

// Search & List
router.get('/cv-search', cvController.searchCVs);

// View single CV
router.get('/cv-view/:id', cvController.viewCV);

// Delete CV
router.get('/cv-delete/:id', cvController.deleteCV);

// Download CV
router.get('/cv-download/:id', cvController.downloadCV);

// Stats AJAX
router.get('/cv-stats', cvController.getStats);

module.exports = router;
