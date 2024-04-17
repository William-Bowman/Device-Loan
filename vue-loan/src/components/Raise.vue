<script setup>
    import { ref } from 'vue'
    const title = ref('title')
    const text = ref('text')
    const today = ref(new Date().toLocaleDateString('fr-ca'))
</script>
<template>
    <div class="raiseContainer">
        <div class="raiseWrapper">
            <div :id="title">iPad Request Form</div>
            <form :class="text">
                <div class="inputWrapper">
                    <div class="labelContainer">
                        <label for="ipad">How many iPads would you like? </label>
                        <label for="crayon">How many Crayons would you like? </label>
                        <label for="keyboard">Would you like keyboards? </label>
                        <label for="student">What type of students are these items for? </label>
                        <label for="room">What room will you be in?</label>
                        <label for="date">What dates will you be using these items?</label>
                        <div>-</div>
                    </div>
                    <div class="inputContainer">
                        <input id="ipad" type="number" min="0" max="20" required/>
                        <input id="crayon" type="number" min="0" max="20" required/>
                        <input id="keyboard" type="checkbox" />
                        <select id="student">
                            <option disabled selected></option>
                            <option>Senior School</option>
                            <option>Tec Prep</option>
                            <option>Fulltimers</option>
                        </select>
                        <select id="room" required>
                            <option disabled selected></option>
                            <option>T11</option>
                            <option>W10</option>
                            <option>CW03</option>
                        </select>
                        <div><label for="dateStart">Start: </label><input id="dateStart" type="date" :min="today" required></div>
                        <div><label for="dateEnd">End: </label><input id="dateStart" type="date" :min="today" required></div>
                    </div>
                </div>
                    <div><label for="note">Additional notes:</label></div>
                    <textarea id="note" :class="text"></textarea>
            </form>
        </div>
    </div>
</template>


<style scoped>
.raiseContainer {
    margin: auto auto;
}
.raiseWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.inputWrapper {
    display: flex;
    flex-direction: row;
    gap: 3rem;
}

.inputContainer, .labelContainer {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1rem;
}

form {
    gap: 1rem;
}

form div {
    display: flex;
    align-items: center;
    gap: 10px;
}

input, select {
    max-width: fit-content;
    font-size: 1.5rem;
}
#keyboard {
    transform: scale(2) translate(0.2rem);
}
#note {
    width: 100%;
    height: 8rem;
    overflow: visible;
    resize: none;
}
</style>