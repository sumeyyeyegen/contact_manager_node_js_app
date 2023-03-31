const express = require("express");

// new router object
const router = express.Router();
const contactController = require("../controllers/contactController")

//alternative
// router.get("/",contactController.getAllContacts)
// router.post("/",contactController.createContact)

router
  .route("/")
  .get(contactController.getAllContacts)
  .post(contactController.createContact);

  router
  .route("/:id")
  .delete(contactController.deleteContact)
  .put(contactController.updateContact)
  .get(contactController.getById);



// the router object is exported
module.exports = router;