module.exports = (sequelize, dataTypes) => {

    let alias = 'Type';
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
        tableName: 'types',
        //createdAt: 'created_at',
        //updatedAt: 'updated_at',
        underscored: true
    };
    
    const Type = sequelize.define(alias,cols,config);

    Type.associate = function(models){
        Type.hasMany(models.Product, {
            as: "products",
            foreignKey: "type_id"
        })
    };
    
    return Type
}