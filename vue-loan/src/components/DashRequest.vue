<script setup>
    import { ref } from 'vue'

    const late = ref('late')
    const tableButton = ref('tableButton')
</script>

<template>
    <div>
        <div id="title">Requests</div>
        <table id="requestTable">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>iPads</th>
                <th>Crayons</th>
                <th>Keyboards</th>
                <th>Room</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Type</th>
                <th>Notes</th>

            </tr>
            <tr :class="late">
                <td>1</td>
                <td>William Bowman</td>
                <td>4</td>
                <td>5</td>
                <td>No</td>
                <td>P01</td>
                <td>27-03-24</td>
                <td>18-04-24</td>
                <td>Fulltime</td>
                <td>N/A</td>
                <td><button :class="tableButton">Resolve</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Josh Stahre</td>
                <td>10</td>
                <td>0</td>
                <td>Yes</td>
                <td>W10</td>
                <td>07-04-24</td>
                <td>10-04-24</td>
                <td>Student</td>
                <td>Needs Camera</td>
                <td><button :class="tableButton">Resolve</button></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    #requestTable {
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