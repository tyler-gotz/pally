const express = require('express')
const pa11y = require('pa11y')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))

app.get('/api/test', async (req, res) => {
    const { url } = req.query
    if (!url) {
        res.status(400).json({ error: 'url is required'})
    }

    try {
        const results = await pa11y(url)
        res.json(results)
    } catch (error) {
        res.status(400).json({ error: 'Unable to get results'})
    }
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})