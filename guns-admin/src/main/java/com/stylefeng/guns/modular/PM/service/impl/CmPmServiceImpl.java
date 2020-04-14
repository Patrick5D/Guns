package com.stylefeng.guns.modular.PM.service.impl;

import com.stylefeng.guns.modular.PM.service.excelHandler.ReadExcel;
import com.stylefeng.guns.modular.system.model.CmPm;
import com.stylefeng.guns.modular.system.dao.CmPmMapper;
import com.stylefeng.guns.modular.PM.service.ICmPmService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.stylefeng.guns.modular.system.model.User;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * <p>
 * VIEW 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2018-12-18
 */
@Service
public class CmPmServiceImpl extends ServiceImpl<CmPmMapper, CmPm> implements ICmPmService {

    @Override
    public List<CmPm> readExcelFile(MultipartFile file) {
        ReadExcel readExcel=new ReadExcel();
        List<CmPm> userList = readExcel.getExcelInfo(file);
        if(userList != null && !userList.isEmpty()){
            return userList;
//            result = "上传成功";
        }else{
            return null;
//            result = "上传失败";
        }
    }

    @Override
    public User getByAccount(String account) {
        return this.baseMapper.getByAccount(account);
    }
}
