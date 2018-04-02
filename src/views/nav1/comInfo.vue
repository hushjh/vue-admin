<!-- 公司信息管理 -->
import { getDbData } from '../../api/api';
<template>
  <section>
      <!--工具条-->
      <el-col :span='24' class='toolbar' style='padding-bottom:0px;'>
          <el-form :model='filters' :inline='true'>
              <el-form-item>
                  <el-input v-model='filters.com_name'></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button @click='getComInfo'>查询</el-button>
                  <el-button type='primary' @click='handleAdd'>增加</el-button>
              </el-form-item>
          </el-form>
      </el-col>
      <!--列表-->
      <el-col :span='24'>
          <el-table :data='comInfos' highlight-current-row>
              <el-table-column type='index' width='60'></el-table-column>
              <el-table-column prop='com_code' label='公司编码' width='100'></el-table-column>
              <el-table-column prop='com_name' label='公司名称' width='100'></el-table-column>
              <el-table-column prop='tin1-code' label='三证合一编码' width='120'></el-table-column>
              <el-table-column prop='legal_per' label='企业法人' width='100'></el-table-column>
              <el-table-column prop='tel' label='电话' width='100'></el-table-column>
              <el-table-column prop='addr' label='地址' width='120' show-overflow-tooltip></el-table-column>
              <el-table-column prop='website' label='网站' width='120'></el-table-column>
              <el-table-column prop='category' label='行业类别' width='120'></el-table-column>
              <el-table-column prop='user_number' label='用户数量' width='120'></el-table-column>
              <el-table-column prop='addtime' label='增加时间' width='120'></el-table-column>
          </el-table>
      </el-col>
      <!--新增界面-->
      <el-dialog :visible.sync="addFormVisible" title='新增公司信息' >
          <el-form :model='addForm' ref='addForm' :rules='addFormRules' label-width='120px'>
              <el-form-item label='公司编码'>
                  <el-input v-model='addForm.com_code' disabled></el-input>
              </el-form-item>
              <el-form-item label='公司名称' prop='com_name'>
                  <el-input v-model='addForm.com_name'></el-input>
              </el-form-item>
              <el-form-item label='三证合一编码' prop='tin1_code'>
                  <el-input v-model='addForm.tin1_code'></el-input>
              </el-form-item>
              <el-form-item label='企业法人' prop='legal_per'>
                  <el-input v-model='addForm.legal_per'></el-input>
              </el-form-item>
              <el-form-item label='电话' prop='tel'>
                  <el-input v-model='addForm.tel'></el-input>
              </el-form-item>
              <el-form-item label='地址' >
                  <el-input v-model='addForm.addr'></el-input>
              </el-form-item>
              <el-form-item label='网站'>
                  <el-input v-model='addForm.website'></el-input>
              </el-form-item>
              <el-form-item label='行业类别'>
                  <el-input v-model='addForm.category'></el-input>
              </el-form-item>
              <el-form-item label='用户数量'>
                  <el-input v-model='addForm.user_number'></el-input>
              </el-form-item>
              <el-form-item label='地区'>
                  <el-input v-model='addForm.coord'></el-input>
              </el-form-item>
              <el-form-item label='证件图片'>
                  <el-input v-model='addForm.cer_pic_url'></el-input>
              </el-form-item>
          </el-form>
          <span slot='footer'>
              <el-button @click='addFormVisible=false'>取消</el-button>
              <el-button type='primary' @click='addSubmit'>提交</el-button>
          </span>
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
                com_name:''
            },
            comInfos:[],
            addFormVisible:false,
            addFormRules:{
                com_name:[
                    {require:true,message:'请填写公司名称!',trigger:'blur'}
                ],
                tin1_code:[
                    {require:true,message:'请填写三证合一码!',trigger:'blur'}
                ],
                legal_per:[
                    {require:true,message:'请填写公司法人!',trigger:'blur'}
                ],
                tel:[
                    {require:true,message:'请填写联系电话!',trigger:'blur'}
                ]
            },
            addForm:{
                id:0,
                com_code:'',
                com_name:'',
                tin1_code:'',
                legal_per:'',
                tel:'',
                addr:'',
                website:'',
                category:'',
                coord:'',
                user_number:0,
                cer_pic_url:'',
                addtime:''
            }
        };
    },
    mounted(){
        this.getComInfo();
    },
    methods:{
        handleAdd(){
            this.addFormVisible=true;
            this.addForm.com_code=common.getGuid();
        },
        handleEdit(index,row){},
        handleDel(index,row){},
        addSubmit(){
            this.$refs.addForm.validate((valid)=>{
                if(valid){
                    this.$confirm('确认保存吗?','提示',{}).then(()=>{
                        let para=Object.assign({},this.addForm);
                        para.addtime=common.getTime();
                        getDbData('comInfoS',para).then((res)=>{
                            this.$message({
                                message:'保存成功',
                                type:'success'
                            });
                            this.$refs.addForm.resetFields();
                            this.addFormVisible=false;
                            this.getComInfo();
                        });
                    });
                }
            });
            
        },
        getComInfo(){
            let para=Object.assign({},this.filters);
            getDbData('getComInfo',para).then((res)=>{
                var data=res.data;
                this.conInfos=data;
            });
        }
    }
}

</script>
<style lang='css' scoped>
</style>