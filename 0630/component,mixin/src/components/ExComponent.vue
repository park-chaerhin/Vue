<!-- <template>
    <div>
        <div class="msg_box1">
            메시지1 :
            <input type="text" :value="msg1" @input="$emit('update:msg1', $event.target.value)" />
        </div>

        <div class="msg_box2">
            메시지2 :
            <input type="text" :value="msg2" @input="$emit('update:msg2', $event.target.value)" />
        </div>
    </div>
</template>

<script>

    export default{
        props: ['msg1', 'msg2'],
        emits:['update:msg1', 'update:msg2']
    }
</script> -->

<template>
    <div>
        <h2>하위 컴포넌트</h2>
        {{ msg1 }}{{ msg2 }}
    </div>
</template>

<script>
export default{
    inject: ['msg1','msg2']
}
</script>
