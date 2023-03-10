import express from "express";

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("./form/form", { title: "Create message " });
});

router.post("/new", (req, res) => {
  const { author_name, message_text } = req.body;
  messages.push({ text: message_text, user: author_name, added: new Date() });
  res.redirect("/");
});

export default router;
