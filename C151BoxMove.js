//https://sourceb.in/x654yAG2nU
AFRAME.registerComponent('log', {
    schema: {
        msg: {type: 'string', default: 'Hello World!'}
    },
    init: function () {
        window.alert(this.data.msg);
    }
});

AFRAME.registerComponent('movablecomponent', {
    schema: {
        px: {type: 'number', default: -3}
    },
    tick: function () {
        let pos = this.el.getAttribute('position');
        this.data.px += 0.01;
        if (pos.x > 3) {
            this.data.px = -3;
            pos.x = -3;
        }
        else pos.x = this.data.px;
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
    }
});
