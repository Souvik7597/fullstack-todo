// import todoSchema from "../models/todoSchema.js";

// export const createTodo = async (req, res) => {
//   try {
//     const { title } = req.body;
//     const data = await todoSchema.create({
//       title,
//     });
//     if (data) {
//       return res.status(200).json({
//         success: true,
//         message: "Todo created successfully",
//         data: data,
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


import todoSchema from "../models/todoSchema.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    const duplicate = await todoSchema.aggregate([
      {
        $match: {
          title: { $regex: `^${title}$`, $options: "i" } // case-insensitive exact match
        }
      }
    ]);

    if (duplicate.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Todo with same name already exists (case-insensitive)",
      });
    }

    // Create Todo
    const data = await todoSchema.create({ title });

    return res.status(200).json({
      success: true,
      message: "Todo created successfully",
      data,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};