// Polyfill
if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };

module.exports = {
    path: 'comments',
    getComponents (cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/list.jsx'));
        });
    }
};