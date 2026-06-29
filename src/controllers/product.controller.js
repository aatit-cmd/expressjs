const products = [];

export const getAll = (req, res) => {
  //   res.send("<h1>Product page</h1>");
  res.status(200).json({
    message: "all products fetched",
    success: true,
    data: products,
  });
}

export const getById =(req, res) => {
  // const id = req.params.id
  const { id } = req.params; // as req.prarams give object
  const product = products.find((product) => product._id === Number(id));

  if (!product) {
    res.status(404).json({
      message: "product not found",
      sucess: false,
      data: null,
    });
    return;
  }

  res.status(200).json({
    message: `product by id ${id} fetched`,
    success: true,
    data: product,
  });
}

export const create =(req, res) => {
  //   res.send("<h1>Product created</h1>");
  const { name, price, brand } = req.body;
  products.push({
    name,
    price,
    brand,
    createdAt: Date.now(),
    _id: products.length + 1,
  });
  res.status(201).json({
    message: "product created",
    success: true,
    data: products[products.length - 1],
  });
}

 export const update = (req, res) => {
  //   res.send("<h1>Product updated</h1>");
  const { id } = req.params;
  const index = products.findIndex((products) => products._id === Number(id));

  const { name, price, brand } = req.body;

  if (index === -1) {
    res.status(404).json({
      message: "product not found",
      sucess: false,
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: `product updated by id ${id}`,
    success: true,
    data: {
      ...products[index],
      name,
      price,
      brand,
    },
  });
}

export const remove = (req, res) => {
  //   res.send("<h1>Product deleted</h1>");
  const id = req.params.id;
  res.status(200).json({
    message: `product by id ${id} deleted`,
    success: true,
    data: {
      _id: id,
      name: "product1",
      brand: "brand",
    },
  });
}