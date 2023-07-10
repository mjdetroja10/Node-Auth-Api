export const NotFoundController = (req, res) => {
  try {
    res.send({ message: "sorry, not found" });
  } catch (error) {
    res.send(error);
  }
};
