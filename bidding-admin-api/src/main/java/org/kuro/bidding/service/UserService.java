package org.kuro.bidding.service;

import org.kuro.bidding.model.bo.UserImportBo;
import org.kuro.bidding.model.entity.User;
import org.kuro.bidding.model.page.PageResult;
import org.kuro.bidding.model.vo.UserVo;

public interface UserService {

    /**
     * 根据手机号查询用户
     *
     * @param mobile 手机号
     * @return 用户对象
     */
    User queryUserByMobile(String mobile);


    /**
     * 根据ID查询用户
     *
     * @param id 用户ID
     * @return 用户对象
     */
    User queryUserById(String id);


    /**
     * 分页查询用户列表
     *
     * @param page  当前页
     * @param limit 每页显示条数
     * @return 用户列表
     */
    PageResult<UserVo> queryUserByPage(Integer page, Integer limit);


    /**
     * 创建员工
     *
     * @param bo 员工参数
     */
    void createUser(UserImportBo bo);
}
