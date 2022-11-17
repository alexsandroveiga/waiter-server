# Waiter App

## Models
> ### Product
* Id
* String
* Description
* Image path
* Price
* Ingredients
* Category

> ### Category
* Id
* Name
* Icon

> ### Order
* Id
* Table
* Status
* Created at
* Products

## Use cases
* ✅ List categories
* ✅ Create category
* ✅ List products
* ✅ Create product
* ✅ Get products by category
* ✅ List orders
* ✅ Create order
* ✅ Change order status
* ✅ Delete/Cancel order

## TODO
* Validator

## Tree Structure
```terminal
.
├── src
│   ├── application
│   │   ├── controllers
│   │   │   ├── cancel-order.ts
│   │   │   ├── change-order-status.ts
│   │   │   ├── controller.ts
│   │   │   ├── create-category.ts
│   │   │   ├── create-order.ts
│   │   │   ├── create-product.ts
│   │   │   ├── index.ts
│   │   │   ├── load-categories.ts
│   │   │   ├── load-orders.ts
│   │   │   ├── load-products-by-category.ts
│   │   │   └── load-products.ts
│   │   ├── errors
│   │   │   ├── http.ts
│   │   │   └── index.ts
│   │   └── helpers
│   │       ├── http.ts
│   │       └── index.ts
│   ├── domain
│   │   ├── contracts
│   │   │   ├── gateways
│   │   │   │   ├── file-storage.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── uuid.ts
│   │   │   └── repositories
│   │   │       ├── category.ts
│   │   │       ├── index.ts
│   │   │       ├── order.ts
│   │   │       └── product.ts
│   │   ├── models
│   │   │   ├── category.ts
│   │   │   ├── index.ts
│   │   │   ├── order.ts
│   │   │   └── product.ts
│   │   └── use-cases
│   │       ├── cancel-order.ts
│   │       ├── categories-loader.ts
│   │       ├── change-order-status.ts
│   │       ├── create-category.ts
│   │       ├── create-order.ts
│   │       ├── create-product.ts
│   │       ├── index.ts
│   │       ├── orders-loader.ts
│   │       ├── products-by-category-loader.ts
│   │       └── products-loader.ts
│   ├── infra
│   │   ├── gateways
│   │   │   ├── aws-s3-file-storage.ts
│   │   │   ├── index.ts
│   │   │   └── uuid-handler.ts
│   │   └── repositories
│   │       └── mongodb
│   │           ├── category.ts
│   │           ├── index.ts
│   │           ├── models
│   │           │   ├── category.ts
│   │           │   ├── index.ts
│   │           │   ├── order.ts
│   │           │   └── product.ts
│   │           ├── order.ts
│   │           └── product.ts
│   └── main
│       ├── adapters
│       │   ├── express-router.ts
│       │   ├── index.ts
│       │   └── multer.ts
│       ├── config
│       │   ├── app.ts
│       │   ├── env.ts
│       │   ├── middlewares.ts
│       │   ├── module-alias.ts
│       │   └── routes.ts
│       ├── factories
│       │   ├── application
│       │   │   └── controllers
│       │   │       ├── cancel-order.ts
│       │   │       ├── change-order-status.ts
│       │   │       ├── create-category.ts
│       │   │       ├── create-order.ts
│       │   │       ├── create-product.ts
│       │   │       ├── index.ts
│       │   │       ├── load-categories.ts
│       │   │       ├── load-orders.ts
│       │   │       ├── load-products-by-category.ts
│       │   │       └── load-products.ts
│       │   ├── domain
│       │   │   └── use-cases
│       │   │       ├── cancel-order.ts
│       │   │       ├── categories-loader.ts
│       │   │       ├── change-order-status.ts
│       │   │       ├── create-category.ts
│       │   │       ├── create-order.ts
│       │   │       ├── create-product.ts
│       │   │       ├── index.ts
│       │   │       ├── orders-loader.ts
│       │   │       ├── products-by-category-loader.ts
│       │   │       └── products-loader.ts
│       │   └── infra
│       │       ├── gateways
│       │       │   ├── aws-s3-file-storage.ts
│       │       │   ├── index.ts
│       │       │   └── uuid-handler.ts
│       │       └── repositories
│       │           └── mongodb
│       │               ├── category.ts
│       │               ├── index.ts
│       │               ├── order.ts
│       │               └── product.ts
│       ├── index.ts
│       ├── routes
│       │   ├── category.ts
│       │   ├── order.ts
│       │   └── product.ts
│       └── types
│           └── express.d.ts
├── commitlint.config.js
├── jest.config.js
├── jest.integration.config.js
├── tsconfig-build.json
└── tsconfig.json
```
