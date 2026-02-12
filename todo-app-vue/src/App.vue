

<script setup>
// import { ref,watch } from 'vue';
import { ref } from 'vue';
import axios from 'axios';

// const str = ref({
//     text: "",
// });

// function add(newValue, oldValue) {
//     console.log('newValue:' + newValue, 'oldValue:' + oldValue  
//     );
// }

// watch(str,add,
//     {
//         deep: true,
//     }
// )
// function add() {
//   console.log(str.value);
// //   str.value = "8888";
// }

// 完成配置
const str = ref("")
const list = ref([]);

// const list = ref([
//     {
//         isCompleted: false,
//         text: 'EAT',
//     },
//     {
//         isCompleted: false,
//         text: 'WASH',   
//     },
//     {
//         isCompleted: false,
//         text: 'CLEAN',
//     },
// ]);

//获取列表
async function getList() {
    const res = await axios({
        url:'https://q6zv39.laf.run/get_list',
        method:'GET',
    })

    list.value = res.data.list
    // console.log(res)
}

// function add() {
//     list.value.push({
//         isCompleted: false,
//         text: str.value,
//     });

//     str.value = "";
// }

// 添加待办事项
async function add() {
    await  axios({
        url:'https://q6zv39.laf.run/add_todo',
        method:'POST',
        data:{
            value:str.value,
            isCompleted:false,
        }
    })

    // list.value.push({
    //     isCompleted: false,
    //     text: str.value,
    // });

    // str.value = "";
    getList()
}

//更新状态
async function update(item) {
    await axios({
        url:'https://q6zv39.laf.run/update_todo',
        method:'POST',
        data:{
            id:item._id,
            isCompleted:!item.isCompleted,
        }
    })
    getList()

    value.value = ""
}

// 删除待办事项
async function del(item) {
    // list.value.splice(index, 1)
    await axios({
        url:'https://q6zv39.laf.run/delete_todo',
        method:'POST',
        data:{
            id:item._id,
        }
    })
    getList()
} 
</script>

<template>
    <div class="todo-app">
        <div class="title">Todo App</div>
          
        <div class="todo-from">
            <input 
            v-model="str"
            type="text"
            class='todo-input' 
            placeholder="add a todo">
            <div @click="add" class="todo-button" >Add Todo</div>
        </div>

        <div 
            v-for="(item,index) in list" 
            :class="[item.isCompleted ? 'item completed' : 'item']">
            <div>
                <!-- <input type="checkbox" v-model="item.isCompleted"> -->
                <input type="checkbox" @click="update(item)" v-model="item.isCompleted"/>
                <span class="name">{{item.text}}</span>
            </div>

            <div @click="del(item)" class="del">DEL</div>
        </div>


        <!-- <div class="item comleted">
            <div>
                <input type="checkbox">
                <span class="name">WASH</span>
            </div>

            <div class="del">DEL</div>
        </div>


        <div class="item">
            <div>
                <input type="checkbox">
                <span class="name">CLEAN</span>
            </div>

            <div class="del">DEL</div>
        </div> -->
    </div>
</template>

<style scoped>   

  .completed{
            text-decoration: line-through;
            opacity: 0.4
        }
        .del{
            color:red;
        }
        .item{
            display: flex;
            align-items:center;
            justify-content: space-between;
            box-sizing: border-box;
            width: 80%;
            height: 50px;
            margin: 8px auto;
            padding: 16px;
            border-radius: 20px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
        .todo-button{
            width: 100px;
            height: 52px;
            border-radius: 0 20px 20px 0;
            line-height: 52px;
            text-align: center;
            background:linear-gradient(
                to right,
                rgb(113,65,168),
                rgba(44,114,251,1)
            );
            cursor: pointer;
            user-select: none;
            color: #ffff;
            
        }
        .todo-input{
            margin-bottom: 20px;
            padding-left: 15px;
            width: 60%;
            height: 50px;
            border-radius: 20px 0 0 20px;
            border: 1px solid #dfe6e5;
            outline: none;
        }
        .todo-from{
            display: flex;
            margin-top: 20px;
            margin-left: 30px;
        }
        body    {
            background:linear-gradient(to right,rgb(113,65,168),rgba(44,114,251,1));
        }   
        .todo-app {
            width: 98%;
            height: 500px;
            padding-top: 30px;
            box-sizing: border-box;
            background-color: white;
            border-radius: 5px;
            margin-top: 40px;
            margin-left: 1%;
        }
        .title{
            font-size: 30px;
            font-weight: 700;
            text-align: center;}


</style>