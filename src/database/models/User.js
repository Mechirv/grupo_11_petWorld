module.exports = (sequelize, dataTypes) => {

    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        nombre: {
            type: dataTypes.STRING,
            notNull: true
        },
        apellido: {
            type: dataTypes.STRING,
            notNull: true
        },
        email: {
            type: dataTypes.STRING,
            notNull: true,
            uniqueKey: true
        },
        pass: {
            type: dataTypes.STRING,
            notNull: true
        },
        image: {
            type: dataTypes.STRING

        },
        admin: {
            type: dataTypes.BOOLEAN,
            notNull: true

        }
    };

    let config = {
        timestamps: false,
        tableName: 'users',
        underscored: true
    };

    const User = sequelize.define(alias,cols,config);
    return User;
}