exports.getHellos = (req, res, next) => {
    console.log(__dirname);
  res.status(200).json({ success: true, msg: "hello" });
};
