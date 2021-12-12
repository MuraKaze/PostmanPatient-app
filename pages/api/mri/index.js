import dbConnect from "../../../utils/dbConnect";
import MRI from "../../../models/MRI";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const mris = await MRI.find({});

        res.status(200).json({ success: true, data: mris });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const mri = await MRI.create(req.body);

        res.status(201).json({ success: true, data: mri });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
