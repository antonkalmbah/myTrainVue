<template>
    <div>
            <input v-model="text"><br>
            <p>Вводимый текст выше: {{text}}</p>

            <span v-text="message"></span>
            <p>{{ message }}</p>
        <hr>
            <input class="checkbox" type="checkbox" v-model="checked">
            <p>{{ checked }}</p>
        <hr>
            <h1  v-show="checked">Hello!</h1>
        <hr>
            <h2 v-if="checked">true оно</h2>
            <h2 v-else>false оно</h2>
        <hr>
            <div v-for="item in items" :key="item.text">
                {{ item.text }} and {{ item.value }}
            </div>
        <hr>
            <button @click="increaseNumber">Button</button>
            <p>{{ number }}</p>
        <hr>
            <span v-pre>{{ Пропущенная компиляция: {{ checked }} }}</span>
        <hr>
            <p v-cloak>Текст появялется после полной компиляции</p>
        <hr>

    </div>
</template>

<script>
export default {
    name: "OnePageComponent",
    data () {
        return {
            text: '',
            message: 'text',
            checked: true,
            items: [
                { text: 'first' , value: 'meaning_1' },
                { text: 'second', value: 'meaning_2' }
            ],
            number: 0
        }
    },
    created() {
        console.log('created')
    },
    methods: {
        increaseNumber() {
            this.number = ++this.number
        }
    }
}
</script>

<style scoped>

[v-cloak]{
    display: none
}

</style>
