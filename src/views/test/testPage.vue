<template>
  <el-button type="primary" @click="showVulunteer = true" class="add-button">添加List</el-button>

  <!-- 登录 -->
  <el-button type="primary" @click="showlogin = true" class="add-button">登录</el-button>

  <el-dialog
    v-model="showlogin"
    title="登录"
    width="30vw"
    align-center
  >
    <el-form
      class="demo-form-inline"
      :model="loginForm"
      :rules="loginRules"
    >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" placeholder="请输入密码" />
    </el-form-item>

    </el-form>


  <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleLogin">提交</el-button>
        <el-button @click="">重置</el-button>
      </div>
    </template>

  </el-dialog>



  <!-- 注册 -->
  <el-button type="primary" @click="showRegister = true" class="add-button">注册</el-button>

  <el-dialog
    v-model="showRegister"
    title="注册"
    width="30vw"
    align-center
  >
    <el-form
      class="demo-form-inline"
      :model="registerForm"
      :rules="registerRules"
    >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="registerForm.username" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="registerForm.password" placeholder="请输入密码" />
    </el-form-item>

    </el-form>


  <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleRegister">提交</el-button>
        <el-button @click="">重置</el-button>
      </div>
    </template>

  </el-dialog>

  <!-- 表格 -->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="create_time" label="开始日期" width="200" />
    <el-table-column prop="resolves_time" label="结束日期" width="200" />
    <el-table-column prop="content" label="内容" width="200" />
    <el-table-column prop="over" label="状态" width="180" >
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.over ? '已完成' : '未完成'}}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="请搜索内容" />
        <el-button type="primary" @click="searchTableData" size="small">
          搜索
        </el-button>
      </template>
      <template #default="{ row }">
        <el-button
          size="small"
          type="info"
          @click="centerDialogVisible = true"
        >
          详情
        </el-button>
        <el-button size="small" @click="editButton(row)">
          编辑
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="deleteButton(row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>


  <!-- 分页 -->
      <el-pagination
        background
        small
        v-model:current-page="params.page"
        v-model:page-size="params.size"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper"
        :total="total"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
    />


  <!-- 添加 -->
  <el-dialog v-model="showVulunteer" title="添加ToDo"
    width="700"
    :before-close="handleClose">
    <el-form :inline="true" :model="projectForm"    class="demo-form-inline" :label-position="top"  label-width="auto">
  <el-form-item label="内容" prop="content">
    <el-input v-model="projectForm.content"></el-input>
  </el-form-item>
  <el-form-item label="状态" prop="over">
    <el-select v-model="projectForm.over" placeholder="请选择状态">
      <el-option label="未完成" value="false"></el-option>
      <el-option label="已完成" value="true"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="开始时间" prop="create_time">
    <el-input v-model="projectForm.create_time"></el-input>
  </el-form-item>

  <el-form-item label="结束时间" prop="resolves_time">
    <el-input v-model="projectForm.resolves_time"></el-input>
  </el-form-item>
    </el-form>

<template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="commitButton">提交</el-button>
        <el-button @click="">重置</el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 编辑 -->
  <el-dialog
    v-model="centerDialogVisible"
    title="编辑ToDo"
    width="55vw"
    align-center
  >
  <el-form :inline="true" :model="editForm"    class="demo-form-inline" :label-position="top"  label-width="auto">
  <el-form-item label="内容" prop="content">
    <el-input v-model="editForm.content"></el-input>
  </el-form-item>
  <el-form-item label="状态" prop="over">
    <el-select v-model="editForm.over" placeholder="请选择状态">
      <el-option label="未完成" value="false"></el-option>
      <el-option label="已完成" value="true"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="开始时间" prop="create_time">
    <el-input v-model="editForm.create_time"></el-input>
  </el-form-item>

  <el-form-item label="结束时间" prop="resolves_time">
    <el-input v-model="editForm.resolves_time"></el-input>
  </el-form-item>
    </el-form>
  <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="updateButton">提交</el-button>
        <el-button @click="">重置</el-button>
      </div>
    </template>

  </el-dialog>

</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import {getTodoList,addTodo,deleteTodo,updateTodo} from '@/api/test'
import {login,register} from '@/api/user'
import {ElMessage,ElMessageBox} from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'


const centerDialogVisible = ref(false)


const showlogin = ref(false)
const showVulunteer=ref(false)
const search = ref('')
const showRegister=ref(false)

// 获取数据
const tableData = ref([])

const params = ref({
  over: '',
  content: '',
  page: 1,
  size: 10,
})

const total = ref(0)

const getTodoListData = async () => {
  const res = await getTodoList(params.value)
  tableData.value = res.data.data
  console.log(res)
  total.value = res.data.total
}
getTodoListData()

const projectForm = ref({
  content: '',
  create_time: '',
  resolves_time: '',
  over: '',
})

const loginForm = ref({
  username: '',
  password: '',
})

const loginRules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})

// 登录
const userStore = useUserStore()
const router = useRouter()
const handleLogin = async () => {
  try{
    const res = await login(loginForm.value)
  if (res.data.code === 1) {
    ElMessage.success('登录成功')
    userStore.setToken(res.data.token)
    showlogin.value = false
    getTodoListData()
  }else{
    console.log(res.data.code)
    ElMessage.error(res.msg)
  }
  }catch(e){
    console.log(e);
    ElMessage.error(e.response.data.error)
  }
}

// 注册
const registerForm = ref({
  username: '',
  password: '',
})

const registerRules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})


const handleRegister = async () => {
  try{
    const res = await register(registerForm.value)
  if (res.data.code === 1) {
    ElMessage.success('注册成功')
    showRegister.value = false
  }
  }catch(e){
    console.log(e);
    ElMessage.error(e.response.data.error)
  }
}


// 分页
const onSizeChange = (val) => {
  params.value.size = val
  params.value.page = 1
  getTodoListData(params.value)
}

const onCurrentChange = (val) => {
  params.value.page = val
  params.value.size = 10
  getTodoListData(params.value)
}

// 搜索数据
const searchTableData = async () => {
  params.value.content = search.value
  const res = await getTodoList(params.value)
  total.value = res.data.total
  tableData.value = res.data.data
}

const commitButton = async () => {
  try{
    console.log(projectForm);
    
    // 将over转换为布尔值
    projectForm.value.over = projectForm.value.over === 'true' ? true : false
    const res = await addTodo(projectForm.value)
    if (res.data.code === 1) {
    ElMessage.success('添加成功')
    showVulunteer.value = false
    getTodoListData()
  }
  }catch(e){
    console.log(e);
    ElMessage.error(e.response.data.error)
  }
}

const deleteButton = async (row)=>{
  await ElMessageBox.confirm('确定删除吗?', '提示', {
    type: 'warning',
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
  await deleteTodo(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getTodoListData()
}


const id=ref()
const editForm=reactive({
  content: '',
  create_time: '',
  resolves_time: '',
  over: '',
})

const editButton= (row)=>{
  console.log(row);
  id.value=row.id
  for(let key in editForm){
    editForm[key]=row[key]
  }
  centerDialogVisible.value=true
}

const updateButton = async () => {
  console.log(editForm);
  
  // 将over转换为布尔值
  editForm.over = editForm.over === 'true' ? true : false

  // 将over转换为字符串
  // editForm.over = editForm.over.toString()

try{
  const res = await updateTodo(id.value,editForm)
  if (res.data.code === 1) {
    ElMessage.success('修改成功')
    centerDialogVisible.value = false
    getTodoListData()
  }else{
    ElMessage.error(res.msg)
  }
}catch(e){
  console.log(e);
  ElMessage.error(e.response.data.error)
}
}
</script>

<style scoped>
.add-button{
  margin-bottom: 20px;
  margin-right: 20px;
}
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

/* 分页 */
.el-pagination{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>