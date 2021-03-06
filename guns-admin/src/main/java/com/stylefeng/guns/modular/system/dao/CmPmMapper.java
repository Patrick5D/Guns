package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.modular.system.model.CmPm;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.stylefeng.guns.modular.system.model.User;

/**
 * <p>
 * VIEW Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2018-12-18
 */
public interface CmPmMapper extends BaseMapper<CmPm> {
    public User getByAccount(String account);
}
