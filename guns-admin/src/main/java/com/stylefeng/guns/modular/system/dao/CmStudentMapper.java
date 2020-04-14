package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.modular.system.model.CmStudent;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.stylefeng.guns.modular.system.model.User;

/**
 * <p>
 * VIEW Mapper 接口
 * </p>
 *
 * @author qqzj
 * @since 2018-12-18
 */
public interface CmStudentMapper extends BaseMapper<CmStudent> {
    public User getByAccount(String account);
}
