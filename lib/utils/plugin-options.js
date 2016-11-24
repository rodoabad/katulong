module.exports = {
    extensions: ['js'],
    include: dirPath => /(\\|\/)(katulong-plugin-)[a-zA-Z0-9]+(\\|\/)lib(\\|\/)index.js$/.test(dirPath),
    recurse: false
};
