const express = require("express");
const router = express.Router();

// Rota GET para '/teste'
router.get("/teste", (req, res) => {
  res.status(418);
  res.send("Rota GET para /teste");
});

module.exports = router;
