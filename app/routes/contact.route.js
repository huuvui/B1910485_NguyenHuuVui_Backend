const express = require("express");
const contacts = require("../controllers/contact.controller.js");

const router = express.Router();

router.route("/")
    .delete(contacts.deleteALL)
    .get(contacts.findALL)
    .post(contacts.create);

router.route("/favorite")
    .get(contacts.findALLFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;