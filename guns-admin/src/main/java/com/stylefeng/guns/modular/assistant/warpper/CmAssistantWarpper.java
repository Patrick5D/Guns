package com.stylefeng.guns.modular.assistant.warpper;

import com.stylefeng.guns.core.base.warpper.BaseControllerWarpper;
import com.stylefeng.guns.core.common.constant.factory.ConstantFactory;
import com.stylefeng.guns.modular.system.model.CmAssistant;

import java.util.List;
import java.util.Map;

public class CmAssistantWarpper extends BaseControllerWarpper {
    public CmAssistantWarpper(List<Map<String, Object>> list){
        super(list);
    }
    @Override
    protected void warpTheMap(Map<String, Object> map) {
        map.put("deptName", ConstantFactory.me().getDeptName((Integer) map.get("deptid")));
        map.put("statusName", ConstantFactory.me().getStatusName((Integer) map.get("status")));
    }
}
