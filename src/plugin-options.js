const backslashSoup = pattern => new RegExp(pattern.replace(/\\/g, '\\\\'));

module.exports = (plugins = []) => ({
    extensions: ['js'],
    include: dirPath => plugins.some(plugin => backslashSoup(`(\\|/)(katulong-plugin-${plugin})+(\\|/)src(\\|/)index.js$`).test(dirPath)),
    recurse: true
});
