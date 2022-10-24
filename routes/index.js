import { Router } from "express";

const router = Router();

//methods
router.get("/", (req, res) => {
  res.render("index.ejs", { title: 'first website with node'});
});

router.get("/about", (req, res) => {
  res.render("about.ejs", {about:'acerca de mi'});
});

router.get("/contact", (req, res) => {
  res.render("contact.ejs",{title: 'contact me', myNumber:'1165365380'});
});

export default router;
