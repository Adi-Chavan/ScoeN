const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const User = require("../models/User");
const Unit = require("../models/Unit");

const router = express.Router();

// 1️⃣ Configure Multer Storage for PDF Uploads
const storage = multer.diskStorage({
    destination: "./uploads", // PDFs are stored in 'uploads/' folder
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});
const upload = multer({ storage });

// 2️⃣ Route to Upload PDF & Create Unit (Admin Only)
// router.post("/upload", upload.single("pdf"), async (req, res) => {
//     try {
//         const { title } = req.body;

//         if (!req.file) {
//             return res.status(400).json({ message: "No PDF file uploaded" });
//         }

//         const newUnit = new Unit({
//             title,
//             pdfUrl: `/uploads/${req.file.filename}`, // Save file path
//         });

//         await newUnit.save();
//         res.status(201).json({ message: "Unit created successfully", unit: newUnit });
//     } catch (error) {
//         console.error("Error uploading PDF:", error);
//         res.status(500).json({ message: "Error creating unit" });
//     }
// });

router.post("/upload", upload.single("pdf"), async (req, res) => {
    const { name, price, title } = req.body; // Require all fields
    if (!name || !subjectId || !price || !req.file) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const newUnit = new Unit({
        name,
        // subject: subjectId,  // Must be a valid Subject ID
        price,
        pdfUrl: `/uploads/${req.file.filename}`,
    });
    await newUnit.save();
    res.status(201).json({ message: "Unit created", unit: newUnit });
});

// 3️⃣ Route to Fetch All Units (Only Shows PDFs If Paid)
router.get("/all", async (req, res) => {
    try {
        const userId = req.query.userId; // Get user ID from frontend
        const units = await Unit.find();

        if (!userId) {
            return res.status(401).json({ message: "User ID required" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Show "Buy" option if user hasn't purchased, else show PDF URL
        const formattedUnits = units.map(unit => ({
            _id: unit._id,
            title: unit.title,
            pdfUrl: user.purchasedUnits.includes(unit._id) ? unit.pdfUrl : null,
            purchased: user.purchasedUnits.includes(unit._id),
        }));

        res.json(formattedUnits);
    } catch (error) {
        console.error(" Error fetching units:", error);
        res.status(500).json({ message: "Error fetching units" });
    }
});

// 4️⃣ Route to Serve PDFs (Restrict Access If Not Purchased)
router.get("/pdf/:unitId", async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(401).json({ message: "User authentication required" });
        }

        const unit = await Unit.findById(req.params.unitId);
        if (!unit) {
            return res.status(404).json({ message: "Unit not found" });
        }

        const filePath = path.join(__dirname, "..", "uploads", unit.pdfUrl);
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: "PDF file not found on server" });
        }

        res.sendFile(filePath);
    } catch (error) {
        console.error("❌ Error fetching PDF:", error);
        res.status(500).json({ message: "Server error while fetching PDF" });
    }
});
module.exports = router;
