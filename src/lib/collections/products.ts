import {
  AfterChangeHook,
  BeforeChangeHook,
} from "payload/dist/collections/config/types";
// import { PRODUCT_CATEGORIES } from "../../config";
import { Access, CollectionConfig } from "payload/types";
import { Product, User } from "../../types/payload-types";
import { createPaystackProduct } from "../utils/paystack/products/create";
import { updatePaystackProduct } from "../utils/paystack/products/update";

// import { stripe } from "../../lib/stripe";

const addUser: BeforeChangeHook<Product> = async ({ req, data }) => {
  const user = req.user;

  return { ...data, user: user.id };
};

const syncUser: AfterChangeHook<Product> = async ({ req, doc }) => {
  const fullUser = await req.payload.findByID({
    collection: "users",
    id: req.user.id,
  });

  if (fullUser && typeof fullUser === "object") {
    const { products } = fullUser;

    const allIDs = [
      ...(products?.map((product) =>
        typeof product === "object" ? product.id : product
      ) || []),
    ];

    const createdProductIDs = allIDs.filter(
      (id, index) => allIDs.indexOf(id) === index
    );

    const dataToUpdate = [...createdProductIDs, doc.id];

    await req.payload.update({
      collection: "users",
      id: fullUser.id,
      data: {
        products: dataToUpdate,
      },
    });
  }
};

const isAdminOrHasAccess =
  (): Access =>
  ({ req: { user: _user } }) => {
    const user = _user as User | undefined;

    if (!user) return false;
    if (user.role === "admin") return true;

    const userProductIDs = (user.products || []).reduce<Array<string>>(
      (acc, product) => {
        if (!product) return acc;
        if (typeof product === "string") {
          acc.push(product);
        } else {
          acc.push(product.id);
        }

        return acc;
      },
      []
    );

    return {
      id: {
        in: userProductIDs,
      },
    };
  };

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: isAdminOrHasAccess(),
    update: isAdminOrHasAccess(),
    delete: isAdminOrHasAccess(),
  },
  hooks: {
    afterChange: [syncUser],
    beforeChange: [
      addUser,
      async (args) => {
        if (args.operation === "create") {
          const data = args.data as Product;

          //   const createdProduct = await stripe.products.create({
          //     name: data.name,
          //     default_price_data: {
          //       currency: "USD",
          //       unit_amount: Math.round(data.price * 100),
          //     },
          //   });

          const createdProduct = await createPaystackProduct({
            name: data.name,
            description: data.description || "",
            price: Math.round(data.price * 100),
            currency: "KES",
            unlimited: true,
            // quantity: 0,
          });

          const updated: Product = {
            ...data,
            paystackId: createdProduct?.id,
            // priceId: createdProduct.default_price as string,
          };

          return updated;
        } else if (args.operation === "update") {
          const data = args.data as Product;

          //   const updatedProduct = await stripe.products.update(data.stripeId!, {
          //     name: data.name,
          //     default_price: data.priceId!,
          //   });
          const updatedProduct = await updatePaystackProduct(data.paystackId!, {
            name: data.name,
            description: data.description || "",
            price: Math.round(data.price * 100),
            currency: "KES",
            unlimited: true,
            // quantity: 0,
          });

          const updated: Product = {
            ...data,
            paystackId: updatedProduct.id,
            // priceId: updatedProduct.default_price as string,
          };

          return updated;
        }
      },
    ],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Product details",
    },
    {
      name: "price",
      label: "Price in KES",
      min: 0,
      type: "number",
      required: true,
    },
    // {
    //   name: "category",
    //   label: "Category",
    //   type: "select",
    //   options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
    //   required: true,
    // },

    // {
    //   name: "priceId",
    //   access: {
    //     create: () => false,
    //     read: () => false,
    //     update: () => false,
    //   },
    //   type: "text",
    //   admin: {
    //     hidden: true,
    //   },
    // },
    {
      name: "paystackId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      admin: {
        hidden: true,
      },
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      label: "Product image",
      required: true,
      relationTo: "media",
    },
  ],
};
