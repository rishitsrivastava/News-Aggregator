const express = require('express');
const userRoutes = require('./routes/userRoutes');
const newsRoutes = require('./routes/newsRoutes');

app.use(cors());

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/news", newsRoutes);


export default app;