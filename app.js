const express = require('express');
const cookieSession = require('cookie-session');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(
    cookieSession({
        name: 'session',
        keys: ['your-secret-key'],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
);


// Serve static files (CSS, JavaScript, etc.)
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


// Import route files
const authRoutes = require('./routes/auth');
const logoutRoutes = require('./routes/logout');
const curUser = require('./routes/cur-user');
const otherUser = require('./routes/other-user');
const otherView = require('./routes/other-view');

const homeRoutes = require('./routes/home');
const songRoutes = require('./routes/song');
const chordRoutes = require('./routes/chord');

const fetchPosts = require('./routes/fetch-post');
const fetchComments = require('./routes/fetch-comment');
const fetchChords = require('./routes/fetch-chord');
const chordView = require('./routes/fetch-chord-view');

const createPost = require('./routes/create-post');
const createChord = require('./routes/create-chord');
const createComment = require('./routes/create-comment');

const deleteChord = require('./routes/delete-chord');

const likesPost = require('./routes/like-post');
const likesChord = require('./routes/like-chord');

const savesPost = require('./routes/save-post');

const editInfo = require('./routes/edit-user');
const editPass = require('./routes/edit-pass');




// Use route files
app.use('/', authRoutes);
app.use('/', logoutRoutes);
app.use('/', curUser);
app.use('/', otherUser);
app.use('/', otherView);

app.use('/', homeRoutes);
app.use('/', songRoutes);
app.use('/', chordRoutes);

app.use('/', fetchPosts);
app.use('/', fetchComments);
app.use('/', fetchChords);
app.use('/', chordView);

app.use('/', createPost);
app.use('/', createChord);
app.use('/', createComment);

app.use('/', deleteChord);

app.use('/', likesPost);
app.use('/', likesChord);

app.use('/', savesPost);

app.use('/', editInfo);
app.use('/', editPass);




// Testing other page
app.get('/userprofile', (req, res) => {
    res.sendFile(__dirname + '/views/userprofile.html')
})
app.get('/chordlike', (req, res) => {
    res.sendFile(__dirname + '/views/chordlike.html')
})
app.get('/postsave', (req, res) => {
    res.sendFile(__dirname + '/views/postsave.html')
})
app.get('/userchord', (req, res) => {
    res.sendFile(__dirname + '/views/userchord.html')
})
app.get('/setting', (req, res) => {
    res.sendFile(__dirname + '/views/setting.html')
})
app.get('/otheruserprofile', (req, res) => {
    res.sendFile(__dirname + '/views/otheruserprofile.html')
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});