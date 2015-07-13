'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

let comments = [];

class CommentStore extends BaseStore {
    handleCreateComment (comment) {
        console.log('handleCreateComment: ', comment);
        comments.push(comment);

        this.emitChange();
    }

    getState () {
        return {
            comments: comments
        };
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
         comments = state.comments;
    }
}

CommentStore.storeName = 'CommentStore';

CommentStore.handlers = {
    'CREATE_COMMENT': 'handleCreateComment'
};

export default CommentStore;
