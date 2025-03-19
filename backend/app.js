const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const flash = require('connect-flash');
const bcrypt = require('bcryptjs');
const cors = require("cors");
require('dotenv').config();
const MongoStore = require('connect-mongo');

const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');


const app = express();

//Database Connection Handling
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ScoeN', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("MongoDB Connection Error:", err));

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
});

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"],//Add frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"] 
}));

app.set("trust proxy", 1);


app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' }));

app.use(session({ 
    secret: process.env.SESSION_SECRET || 'defaultSecret', 
    resave: false, 
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: process.env.MONGO_URI, 
        collectionName: 'sessions' 
    }), 
    cookie: {
        httpOnly: true,
        secure: false, 
        sameSite: "lax", 
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email });
            if (!user) return done(null, false, { message: 'No user found' });

            const isMatch = await bcrypt.compare(password, user.password);
            return isMatch ? done(null, user) : done(null, false, { message: 'Incorrect password' });
        } catch (error) {
            return done(error);
        }
    }
));


passport.serializeUser((user, done) => {
    console.log("Serializing User:", user); 
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        console.log("Deserializing User ID:", id);
        if (!id) {
            console.log("No user ID found in session!");
            return done(null, false);
        }

        const user = await User.findById(id);
        if (!user) {
            console.log("User not found in DB for ID:", id);
            return done(null, false);
        }

        console.log("Successfully deserialized User:", user);
        done(null, user);
    } catch (error) {
        console.error( "Error in deserialization:", error);
        done(error);
    }
});


app.use((req, res, next) => {
    console.log("Session Data:", req.session); 
    console.log("User from Session:", req.user); 
    next();
});


//Routes
app.use('/auth', authRoutes);


app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
