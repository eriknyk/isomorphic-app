'use strict';

import Fluxible from 'fluxible';

let app = new Fluxible({
    component: require('./routes.js')
});

app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/TimeStore'));
app.registerStore(require('./stores/PageStore'));
app.registerStore(require('./stores/PageStore'));
app.registerStore(require('./bundles/comments/stores/CommentStore'));

export default app;
