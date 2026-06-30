const categories = [];

export const getAll = (req, res) => {
  res.status(200).json({
    message: "category fetched",
    success: true,
    data: categories,
  });
};

export const getById = (req, res) => {
  const { id } = req.params; // becasue req.params give object
  const category = categories.find(
    (categories) => categories._id === Number(id),
  );

  if (!category) {
    res.status(404).json({
      message: "category not found",
      sucess: false,
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: `category fetched by id ${id}`,
    success: true,
    data: category,
  });
};

export const create = (req, res) => {
  const { name, items, quantity } = req.body;
  categories.push({
    name,
    email,
    password,
    createdAt: new Date(Date.now()),
    _id: categories.length + 1,
  });
  res.status(201).json({
    message: "category created",
    success: true,
    data: categories[categories.length - 1],
  });
};

export const update = (req, res) => {
  //   res.send("<h1>category updated</h1>");
  const { id } = req.params;
  const index = categories.findIndex((category) => category._id === Number(id));

  const { name, items, quantity } = req.body;

  if (index === -1) {
    res.status(404).json({
      message: "category not found",
      sucess: false,
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: `category updated by id ${id}`,
    success: true,
    data: {
      ...categories[index],
      name,
      email,
      password,
    },
  });
};

export const remove = (req, res) => {
  //   res.send("<h1>category deleted</h1>");
  const { id } = req.params;

  const index = categories.findIndex((category) => category._id === Number(id));
  if (index === -1) {
    res.status(404).json({
      message: "category not found",
      sucess: false,
      data: null,
    });
    return;
  }
  categories.splice(index, 1);
  res.status(200).json({
    message: `category deleted by id ${id}`,
    success: true,
    data: null,
  });
};
