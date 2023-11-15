import Sequelize from "sequelize";
import { SequelizeAttributes } from "../../typings/SequelizeAttributes";

export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserInstance
  extends Sequelize.Instance<UserAttributes>,
    UserAttributes {}

export interface UserModel
  extends Sequelize.Model<UserInstance, UserAttributes> {}

export const UserFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): UserModel => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
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

  const User = sequelize.define<UserInstance, UserAttributes>(
    "User",
    attributes,
    {
      tableName: "user",
      timestamps: true,
      paranoid: false,
    }
  ) as UserModel;

  return User;
};
