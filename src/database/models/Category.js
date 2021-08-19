module.exports = (sequelize, dataTypes) => {

    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        }
        
    };

    let config ={
        timestamps: false,
        tableName: 'categories',
        //createdAt: 'created_at',
        //updatedAt: 'updated_at',
        underscored: true
    };
    
    const Category = sequelize.define(alias,cols,config);
    
    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        })};

    return Category
}