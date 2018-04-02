<!-- 用户管理 -->
<template>
  <section>
      <!--工具条-->
      <el-col :span='24' class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline=true :model='filters'>
              <el-form-item>
                  <el-input v-model="filters.account" placeholder="账号"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click='getUser'>查询</el-button>
              </el-form-item>
              <el-form-item>
                  <el-button type='primary' @click='handleAdd'>增加</el-button>
              </el-form-item>
          </el-form>
      </el-col>
      <!--列表-->
      <el-col :span='24'>
          <el-table :data='users' highlight-current-row style='width:100%;'>
              <el-table-column type='index' width="60"></el-table-column>
              <el-table-column prop='account' label='账号' width='120' sortable></el-table-column>
              <el-table-column prop='pwd' label='密码' width='120' ></el-table-column>  
              <el-table-column prop='nickname' label='昵称' width='120'></el-table-column>
              <el-table-column prop='uid' label='UID' width='120' show-overflow-tooltip></el-table-column>
              <el-table-column prop='com_code' label='公司编码' width='120'></el-table-column>
              <el-table-column prop='authority' label='权限' width='100'></el-table-column>
              <el-table-column prop='addtime' label='创建时间' min-width='120'></el-table-column>
              <el-table-column label='操作' width='150'>
                  <template scope='scope'>
                      <el-button size='small' @click='handleEdit(scope.$index,scope.row)'>编辑</el-button>
                      <el-button type='danger' size='small' @click='handleDel(scope.$index,scope.row)'>删除</el-button>
                  </template>
              </el-table-column>
          </el-table>
      </el-col>
      <!--编辑界面-->
      <el-dialog title='用户信息编辑' v-model='editFormVisible' >
          <el-form :model='editForm' ref='editForm' label-width="80px" :rules='editFormRules'>
              <el-form-item label='账号' prop='account'>
                  <el-input  v-model='editForm.account'></el-input>
              </el-form-item>
              <el-form-item label='密码' prop='pwd'>
                  <el-input  v-model='editForm.pwd' ></el-input>
              </el-form-item>
              <el-form-item label='昵称'>
                  <el-input  v-model='editForm.nickname'></el-input>
              </el-form-item>
              <el-form-item label='公司编码' prop='com_code'>
                  <el-select v-model='editForm.com_code' placeholder="请选择公司编码">
                      <el-option label='平台' value='pt'></el-option>
                      <el-option label='政成' value='zc'></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label='权限' prop='authority'>
                  <el-select v-model='editForm.authority' placeholder='请选择权限'>
                      <el-option label='平台权限' value=1></el-option>
                      <el-option label='公司权限' value=2></el-option>
                  </el-select>
              </el-form-item>
          </el-form>
            <div slot='footer'>
                <el-button @click.native='editFormVisible=false'>取消</el-button>
                <el-button type='primary' @click.native='editSubmit' >提交</el-button>
            </div>
      </el-dialog>
      <!--增加界面-->
      <el-dialog title='增加用户' v-model='addFormVisible'>
          <el-form :model='addForm' :rules='addFormRules' label-width="80px" ref='addForm'>
              <el-form-item label='UID'>
                  <el-input v-model='addForm.uid' disabled></el-input>
              </el-form-item>
              <el-form-item label="账号" prop='account'>
                  <el-input v-model="addForm.account"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop='pwd'>
                  <el-input v-model='addForm.pwd' pro='pwd'></el-input>
              </el-form-item>
              <el-form-item label='昵称'>
                  <el-input v-model='addForm.nickname'></el-input>
              </el-form-item>
              <el-form-item label='公司编码' prop='com_code'>
                  <el-select v-model='addForm.com_code'>
                      <el-option label='平台' value='pt'></el-option>
                      <el-option label='政成' value='zc'></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label='权限' prop='authority'>
                  <el-select v-model='addForm.authority'>
                      <el-option label='平台权限' value=1></el-option>
                      <el-option label='公司权限' value=2></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label='增加时间'>
                  <el-input v-model='addForm.addtime' disabled></el-input>
              </el-form-item>
          </el-form>
          <div slot='footer' class="">
              <el-button @click='addFormVisible=false'>取消</el-button>
              <el-button type='primary' @click='addSubmit'>提交</el-button>
          </div>
      </el-dialog>
  </section>
</template>

<script>
import {getDbData} from '@/api/api'
import common from '@/common/js/common'
export default {
    data () {
        return {
            filters:{
                account:''
            },
            users:[],
            editFormVisible:false,
            editFormRules:{
                account:[
                    {required:true,message:'请输入账号',trigger:'blur'}
                ],
                pwd:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {min:3,message:'密码不能少于3位',trigger:'blur'}
                ],
                com_code:[
                    {required:true,message:'请选择公司编码',trigger:'change'}
                ],
                authority:[
                    {required:true,message:'请选择权限',trigger:'change'}
                ]

            },
            editForm:{
                account:'',
                pwd:'',
                nickname:'',
                com_code:'',
                authority:-1,
                id:0,

            },
            addFormVisible:false,
            addFormRules:{
                account:[
                    {required:true,message:'请输入账号',trigger:'blur'}
                ],
                pwd:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {min:3,message:'密码不能少于3位',trigger:'blur'}
                ],
                com_code:[
                    {required:true,message:'请选择公司编码',trigger:'change'}
                ],
                authority:[
                    {required:true,message:'请选择权限',trigger:'change'}
                ]
            },
            addForm:{
                account:'',
                pwd:'',
                nickname:'',
                com_code:'',
                authority:0,
                uid:'',
                addtime:'',
                id:0
            }
        };
    },
    mounted(){
        this.getUser();
    },
    methods:{
        handleAdd(){
            this.addFormVisible=true;
            this.addForm={
                account:'',
                pwd:'',
                nickname:'',
                com_code:'',
                authority:0,
                uid:common.getGuid(),
                addtime:common.getTime(),
                id:0
            }
        },
        handleDel(index,row){
            this.$confirm('确认删除该记录吗','提示',{type:'warning'}).then(()=>{
                let para={id:row.id};
                getDbData('userDel',para).then((res)=>{
                    this.$message({
                        message:'删除成功',
                        type:'success'
                    });
                    this.getUser();
                });
            });
        },
        handleEdit(index,row){
            this.editFormVisible=true;
            this.editForm=Object.assign({},row);
        },
        editSubmit(){
            this.$refs.editForm.validate((valid)=>{
                if(valid){
                    this.$confirm('确认提交吗?','提示',{}).then(()=>{
                        let para=Object.assign({},this.editForm);
                        para.addtime=common.getTime();
                        getDbData('userS',para).then((res)=>{
                            console.log("res",res);
                            this.$message({
                                message:'提交成功',
                                type:'success'
                            });
                            this.$refs.editForm.resetFields();
                            this.editFormVisible=false;
                            this.getUser();
                        });
                    });
                }
            });
        },
        addSubmit(){
            this.$refs.addForm.validate((valid)=>{
                if(valid){
                    this.$confirm('确认提交吗?','提示',{}).then(()=>{
                        let para=Object.assign({},this.addForm);
                        getDbData('userS',para).then((res)=>{
                            this.$message({
                                message:'提交成功',
                                type:'success'
                            });
                            this.$refs.addForm.resetFields();
                            this.addFormVisible=false;
                            this.getUser();
                        });
                    });
                }
            });
        },
        getUser(){
            let para={
                account:this.filters.account
            };
            getDbData('getUser',para).then(rd=>{
              //console.log('getUser:',rd);
              var data=rd.data;
              this.users=data;
            });
        },
    }

}

</script>
<style lang='css' scoped>
</style>