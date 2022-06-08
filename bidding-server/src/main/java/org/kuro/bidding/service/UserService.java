package org.kuro.bidding.service;

import org.kuro.bidding.model.entity.User;

public interface UserService {

    /**
     * 根据手机号查询用户
     *
     * @param mobile 手机号
     * @return User对象
     */
    User queryUserByMobile(String mobile);


    /**
     * 用户注册
     *
     * @param user 用户对象
     */
    void createUser(User user);
}
