package org.kuro.bidding.service;

import org.kuro.bidding.model.entity.User;

public interface UserService {

    /**
     * 根据用户名查询用户
     *
     * @param username 用户名
     * @return 用户对象
     */
    User queryUserByUsername(String username);


    /**
     * 根据ID查询用户
     *
     * @param id 用户ID
     * @return 用户对象
     */
    User queryUserById(String id);
}
