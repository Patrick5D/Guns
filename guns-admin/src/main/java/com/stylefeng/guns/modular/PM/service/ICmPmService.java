package com.stylefeng.guns.modular.PM.service;

import com.stylefeng.guns.modular.system.model.CmPm;
import com.baomidou.mybatisplus.service.IService;
import com.stylefeng.guns.modular.system.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * <p>
 * VIEW 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2018-12-18
 */
public interface ICmPmService extends IService<CmPm> {
    List<CmPm> readExcelFile(MultipartFile file);

    public User getByAccount(String account);
}
