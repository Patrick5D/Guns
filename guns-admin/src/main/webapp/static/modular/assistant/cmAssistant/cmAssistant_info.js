/**
 * 初始化助教管理详情对话框
 */
var CmAssistantInfoDlg = {
    cmAssistantInfoData : {},
    validateFields: {
        account: {
            validators: {
                notEmpty: {
                    message: '账户不能为空'
                }
            }
        },
        name: {
            validators: {
                notEmpty: {
                    message: '姓名不能为空'
                }
            }
        }
    }
};

/**
 * 清除数据
 */
CmAssistantInfoDlg.clearData = function() {
    this.cmAssistantInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmAssistantInfoDlg.set = function(key, val) {
    // if(typeof value == "undefined"){
    //     if(typeof $("#" + key).val() =="undefined"){
    //         var str="";
    //         var ids="";
    //         $("input[name='"+key+"']:checkbox").each(function(){
    //             if(true == $(this).is(':checked')){
    //                 str+=$(this).val()+",";
    //             }
    //         });
    //         if(str){
    //             if(str.substr(str.length-1)== ','){
    //                 ids = str.substr(0,str.length-1);
    //             }
    //         }else{
    //             $("input[name='"+key+"']:radio").each(function(){
    //                 if(true == $(this).is(':checked')){
    //                     ids=$(this).val()
    //                 }
    //             });
    //         }
    //         this.userInfoData[key] = ids;
    //     }else{
    //         this.userInfoData[key]= $("#" + key).val();
    //     }
    // }
    //
    // return this;
    this.cmAssistantInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmAssistantInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmAssistantInfoDlg.close = function() {
    parent.layer.close(window.parent.CmAssistant.layerIndex);
}

/**
 * 收集数据
 */
CmAssistantInfoDlg.collectData = function() {
    this
    .set('id')
    .set('avatar')
    .set('account')
    .set('password')
    .set('salt')
    .set('name')
    .set('birthday')
    .set('sex')
    .set('email')
    .set('phone')
    .set('roleid')
    .set('deptid')
    .set('status')
    .set('createtime')
    .set('version')
    .set('classId');
}

/**
 * 提交添加
 */
CmAssistantInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    if (!this.validate()) {
        return;
    }

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmAssistant/add", function(data){
        Feng.success(data+"!");
        window.parent.CmAssistant.table.refresh();
        CmAssistantInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmAssistantInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmAssistantInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmAssistant/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmAssistant.table.refresh();
        CmAssistantInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmAssistantInfoData);
    ajax.start();
}

/**
 * 验证数据是否为空
 */
CmAssistantInfoDlg.validate = function () {
    $('#assistantuserInfoForm').data("bootstrapValidator").resetForm();
    $('#assistantuserInfoForm').bootstrapValidator('validate');
    return $("#assistantuserInfoForm").data('bootstrapValidator').isValid();
};

$(function() {
    Feng.initValidator("assistantuserInfoForm", CmAssistantInfoDlg.validateFields);
});
