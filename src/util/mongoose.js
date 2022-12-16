module.exports = {
    combineMutipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map((mongoose) => mongoose.toObject());
    },

    combineMongooseToObject: function (mongooseArray) {
        return mongooseArray ? mongooseArray.toObject() : mongooseArray;
    },
};
