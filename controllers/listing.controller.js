import Listing from "../models/listing.model.js"

export const createListing = async (req, res, next) => {
  try {
    console.log('start');
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error)
  }
}
export const test = (req, res) => {
  res.json({
    massage: 'Hello World 2 =' + req.params.id,
  })
}