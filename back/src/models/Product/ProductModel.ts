import Sequelize from "sequelize";
import { SequelizeAttributes } from "../../typings/SequelizeAttributes";

export interface ProductAttributes {
  id?: number;
  name: string;
  description: string;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductInstance
  extends Sequelize.Instance<ProductAttributes>,
    ProductAttributes {}

export interface ProductsModel
  extends Sequelize.Model<ProductInstance, ProductAttributes> {}

export const ProductFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): ProductsModel => {
  const attributes: SequelizeAttributes<ProductAttributes> = {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    value: {
      allowNull: false,
      type: DataTypes.NUMERIC,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "created_at",
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "updated_at",
    },
  };

  const Product = sequelize.define<ProductInstance, ProductAttributes>(
    "Product",
    attributes,
    {
      tableName: "product",
      timestamps: true,
      paranoid: false,
    }
  ) as ProductsModel;

  return Product;
};
