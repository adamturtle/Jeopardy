<template>
    <div class="modal-mask" v-show="show" transition="scale" @keyup.esc="show=false">
        <div class="modal-wrapper">

            <div class="modal-container">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" @click="show = false">×</button>
                            <h4 class="modal-title">
                                <slot name="header">
                                Heading
                                </slot>
                            </h4>
                        </div>
                        <div class="modal-body">
                            <slot name="body" @click="show = false">
                                Modal body
                            </slot>
                        </div>
                        <div class="modal-footer">
                            <slot name="footer">
                                default footer
                                <button type="button" class="btn btn-default" @click="show = false">Close</button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

 </template>
<script>
export default {
    name: 'Modal',

    data () {
        return {
        }
    },

    props: {
        show: {
            type: Boolean,
            required: true,
            twoWay: true
        }
    },

    ready () {
        document.addEventListener('keydown', (e) => {
            if (this.show && e.keyCode === 27) {
                this.show = false
            }
        })
    }
}
</script>
<style lang="css" scoped>
.modal {
    display: block;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    margin: 0px auto;
    transition: all .3s ease;
}

.modal-header {
    padding: 15px 25px;
}

.modal-body {
    padding: 10px 25px;
}

.modal-default-button {
    float: right;
}

/*
 * the following styles are auto-applied to elements with
 * v-transition="modal" when their visiblity is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.scale-enter, .scale-leave {
    opacity: 0;
}

.scale-enter .modal-container {
    transform: scale(0.7);
}

.scale-leave .modal-container {
    transform: scale(0.7);
}
</style>
