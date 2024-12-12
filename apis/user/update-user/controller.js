const express = require("express");
const service = require("./service");
const router = express.Router();

/**
 * @openapi
 * /files/update-user:
 *   post:
 *     summary: Adds the user to Mongo DB
 *     tags: [Open API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User was successfully added.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *       500:
 *         description: An error occurred while adding the User.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */
router.post("/update-user", service);

module.exports = router;
