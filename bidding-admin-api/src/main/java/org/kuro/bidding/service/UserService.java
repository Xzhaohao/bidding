package org.kuro.bidding.service;

import org.kuro.bidding.model.entity.User;

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
}
