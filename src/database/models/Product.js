module.exports = (sequelize, dataTypes) => {

    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },
        description: {
            type: dataTypes.STRING,
            notNull: true
        },
        price: {
            type: dataTypes.FLOAT,
            notNull: true,
        },
    
        image: {
            type: dataTypes.STRING

        },
        destacado: {
            type: dataTypes.BOOLEAN,
            notNull: true
        },
        category_id: dataTypes.INTEGER,
        type_id: dataTypes.INTEGER
    };

    let config = {
        timestamps: true,
        tableName: 'products',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    };

    const Product = sequelize.define(alias,cols,config);
    
    Product.associate = function(models){
        Product.belongsTo(models.Type, {
            foreignKey: "type_id",
            as: 'types'
        });
        Product.belongsTo(models.Category,{
            foreignKey: 'category_id',
            as:'categories'
            
        })
    };

  
      
  

    return Product;
}