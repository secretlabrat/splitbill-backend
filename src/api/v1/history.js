const router = require("express").Router();

router.get("/", (req, res) => {
  res.json([
    {
      billNo: "uuid1",
      billName: "name",
      billDate: "2024-01-01 00:00:000",
      billDetails: {
        billMenus: [
          { item1: "Menu1Name", price: 100, people: ["A", "B"] },
          { item2: "Menu2Name", price: 50, people: ["B", "C"] },
        ],
        people: [
          {
            A: { amount: 50, paid: 0 },
            B: { amount: 75, paid: 0 },
            C: { amount: 25, paid: 0 },
          },
        ],
      },
    },
    {
      billNo: "uuid2",
      billName: "name",
      billDate: "2024-01-01 00:00:000",
      billDetails: {
        billMenus: [
          { item1: "Menu1Name", price: 100, people: ["A", "B"] },
          { item2: "Menu2Name", price: 50, people: ["B", "C"] },
        ],
        people: [
          {
            A: { amount: 50, paid: 0 },
            B: { amount: 75, paid: 0 },
            C: { amount: 25, paid: 0 },
          },
        ],
      },
    },
  ]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    billNo: id,
    billName: "name",
    billDate: "2024-01-01 00:00:000",
    billDetails: {
      billMenus: [
        { item1: "Menu1Name", price: 100, people: ["A", "B"] },
        { item2: "Menu2Name", price: 50, people: ["B", "C"] },
      ],
      people: [
        {
          A: { amount: 50, paid: 0 },
          B: { amount: 75, paid: 0 },
          C: { amount: 25, paid: 0 },
        },
      ],
    },
  });
});

router.post("/", (req, res) => {
  res.json(req.body);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

module.exports = router;
