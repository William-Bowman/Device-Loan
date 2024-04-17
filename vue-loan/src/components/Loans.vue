<script setup>
    import { ref } from 'vue'

    const late = ref('late')
    const tableButton = ref('tableButton')
</script>

<template>
    <div>
        <div id="title">Loans</div>
        <table id="loanTable">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>iPads</th>
                <th>Crayons</th>
                <th>Keyboards</th>
                <th>Room</th>
                <th>End Date</th>
            </tr>
            <tr :class="late">
                <td>3</td>
                <td>Brian Christe</td>
                <td>21</td>
                <td>0</td>
                <td>No</td>
                <td>T07</td>
                <td>26-03-24</td>
                <td><button :class="tableButton">Edit</button></td>
                <td><button :class="tableButton">Close</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Josh Stahre</td>
                <td>10</td>
                <td>0</td>
                <td>Yes</td>
                <td>W10</td>
                <td>10-04-24</td>
                <td><button :class="tableButton">Edit</button></td>
                <td><button :class="tableButton">Close</button></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    #loanTable {
        text-align: left;
        font-size: 1.75rem;
        border-collapse: collapse;
        border-spacing: 0px;
    }
    td, th{
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    td {
        border-top: 1px white solid;
        border-bottom: 1px white solid;
    }
</style>