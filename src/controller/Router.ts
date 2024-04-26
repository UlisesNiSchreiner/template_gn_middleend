import { Context } from 'graph-navigation-js'
import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import container from "../infraestructure/containers";

const router = Router();

const taskValidationRules = [
  body("nextStep").notEmpty().withMessage("nextStep is required"),
];

router.post("/", taskValidationRules, async (req: Request, res: Response) => {
  console.log("POST")
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const fluxContext = new Context(req.body);

  const mobileVersion = container.resolve("mobileVersion");
  const desktopVersion = container.resolve("desktopVersion");
  const androidMobileVersion = container.resolve("androidMobile");

  let result;
  console.log("header ", req.headers.client)
  if (req.headers.client == "desktop_web") {
    result = await desktopVersion.versionPostNavigate(fluxContext);
  } else if (req.headers.client == "mobile_android") {
    result = await androidMobileVersion.versionPostNavigate(fluxContext);
  } else {
    result = await mobileVersion.versionPostNavigate(fluxContext);
  }

  res.status(200).json(result);
});

router.put("/", taskValidationRules, async (req: Request, res: Response) => {
  console.log("PUT")
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const fluxContext = new Context(req.body);

  const mobileVersion = container.resolve("mobileVersion");
  const desktopVersion = container.resolve("desktopVersion");
  const androidMobileVersion = container.resolve("androidMobile");

  let result;
  console.log("header ", req.headers.client)
  if (req.headers.client == "desktop_web") {
    result = await desktopVersion.versionPutNavigate(fluxContext);
  } else if (req.headers.client == "mobile_android") {
    result = await androidMobileVersion.versionPutNavigate(fluxContext);
  } else {
    result = await mobileVersion.versionPutNavigate(fluxContext);
  }
  
  res.status(200).json(result);
});

export default router;
