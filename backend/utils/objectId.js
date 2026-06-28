import mongoose from "mongoose";

/**
 * Validates whether a string is a valid MongoDB ObjectId.
 * @param {string} id - Value to validate
 * @returns {boolean}
 */
export function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id) && String(new mongoose.Types.ObjectId(id)) === id;
}
