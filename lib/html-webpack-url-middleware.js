const path = require('path');

module.exports = (pages, base, publicPath) => {
    if (!Array.isArray(pages))
        pages = [pages];
    const urls = pages.map((page) => path.join(base, page).replace(/\\/g, '/'));

    return (ctx, next) => {
        if (ctx.url === '/')
            ctx.url = path.join(publicPath, 'index.html').replace(/\\/g, '/');
        else {
            const index = urls.indexOf(ctx.url);
            ~index && (ctx.url = path.join(publicPath, pages[index] + '.html').replace(/\\/g, '/'));
        }
        return next();
    };
};