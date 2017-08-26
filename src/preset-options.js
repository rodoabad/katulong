const backslashSoup = pattern => new RegExp(pattern.replace(/\\/g, '\\\\'));

module.exports = (presets = []) => ({
    extensions: ['js'],
    include: dirPath => presets.some(preset => backslashSoup(`(\\|/)(katulong-preset-${preset})+(\\|/)lib(\\|/)index.js$`).test(dirPath)),
    recurse: true
});
