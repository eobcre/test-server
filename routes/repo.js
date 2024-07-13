const express = require('express');
const router = express.Router();
const cors = require('cors');
require('dotenv').config();

// router.use(cors({ origin: process.env.CLIENT_URL }));
router.use(cors());

// router.get('/', async (req, res) => {
//   try {
//     res.json('Reached to repo API router.');
//   } catch (error) {
//     console.error('Error reaching to repo API.', error);
//     res.status(500).json({ error: 'Error' });
//   }
// });

router.get('/repos', async (req, res) => {
  const repoURL = 'https://api.github.com/search/repositories?q=user:eobcre+sort:author-date-asc';

  try {
    const response = await fetch(repoURL);
    const data = await response.json();
    const repos = data.items.slice(0, 6);
    res.json(repos);
  } catch (error) {
    console.error('Error fetching data.', error);
    res.status(500).json({ error: 'Error fetching data.' });
  }
});

module.exports = router;
