/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../utils/dbConnect";
import MRI from "../../../models/MRI";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const mri = await MRI.findById(id);
        if (!mri) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: mri });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const mri = await MRI.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!mri) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: mri });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedMRI = await MRI.deleteOne({ _id: id });
        if (!deletedMRI) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      return res.status(400).json({ success: false });
      break;
  }
};
