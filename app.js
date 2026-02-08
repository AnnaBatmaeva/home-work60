import express from "express"
import users from "./routes/users.js";
import articles from "./routes/articles.js";

const app = express()

const PORT = process.env.PORT || 6258

app.use("/users", users);
app.use("/articles", articles);

app.listen(PORT, () => {
    console.log(`server is running om port ${PORT}`);
})
