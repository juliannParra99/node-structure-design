import { Router } from "express";

const router = Router();

//methods
router.get("/", (req, res) => {
  res.render("index.ejs", { title: 'First website with node'});
});

router.get("/about", (req, res) => {
  res.render("about.ejs", {title: 'About me',about:'acerca de mi'});
});

router.get("/contact", (req, res) => {
  res.render("contact.ejs",{title: 'Contact me', myNumber:'1165365380'});
});

export default router;
