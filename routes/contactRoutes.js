const express = require("express");

// new router object
const router = express.Router();
const contactController = require("../controllers/contactController");
const contactControl = require("../middleware/contactControl");

//alternative
// router.get("/",contactController.getAllContacts)
// router.post("/",contactController.createContact)

router
  .route("/")
  .get(contactController.getAllContacts)
  .post(contactController.createContact);

  router
  .route("/:id")
  .delete(contactControl,contactController.deleteContact)
  .put(contactControl,contactController.updateContact)
  .get(contactControl,contactController.getById);



// the router object is exported
module.exports = router;