import Express = require("express");

const router = Express.Router();

router.get("/teste", (req: Express.Request, res: Express.Response) => {
  return res.json({ ok: true });
});

export = router;
