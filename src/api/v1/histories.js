const router = require("express").Router();
const { fireStore } = require("../../config/firebase-config.js");
const {
  authenticateFirebaseAuthToken,
} = require("../../middleware/firebase-auth.js");

const { Timestamp } = require("firebase-admin/firestore");
const crypto = require("node:crypto");

router.get("/", authenticateFirebaseAuthToken, async (req, res) => {
  const { user } = req;
  const bills = [];
  const collection = fireStore.collection(`/histories/${user.user_id}/bills`);
  const result = await collection.get();
  result.forEach((doc) => {
    const { billNo, billName, billDate } = doc.data();
    bills.push({ billNo, billName, billDate: billDate.toDate() });
  });

  res.json(bills);
});

router.get("/:id", authenticateFirebaseAuthToken, async (req, res) => {
  const { user } = req;
  const { id } = req.params;
  const doc = fireStore.doc(`/histories/${user.user_id}/bills/${id}`);
  const result = await doc.get();
  const data = result.data();
  if (!data) {
    return res
      .status(404)
      .json({ status: "error", message: "record not found" });
  }
  const { billDate } = data;
  res.json({ ...data, billDate: billDate.toDate() });
});

router.post("/", authenticateFirebaseAuthToken, async (req, res) => {
  const { user } = req;
  let { body } = req;
  const uuid = crypto.randomUUID();
  const doc = fireStore.doc(`/histories/${user.user_id}/bills/${uuid}`);

  body.billNo = uuid;
  body.billDate = Timestamp.now();
  await doc.set(body);
  res.json({ status: "success", message: "record created" });
});

router.put("/:id", authenticateFirebaseAuthToken, (req, res) => {
  const { user } = req;
  const { id } = req.params;
  const doc = fireStore.doc(`histories/${user.user_id}/bills/${id}`);
  doc.update(req.body);
  res.json({ status: "success", message: "record edited" });
});

router.delete("/:id", authenticateFirebaseAuthToken, async (req, res) => {
  const { user } = req;
  const { id } = req.params;
  const doc = fireStore.doc(`/histories/${user.user_id}/bills/${id}`);
  await doc.delete();
  res.json({ status: "success", message: "record deleted" });
});

module.exports = router;
