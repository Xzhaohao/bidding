package org.kuro.bidding.mapper;

import org.kuro.bidding.model.entity.User;
import tk.mybatis.mapper.common.Mapper;

public interface UserMapper extends Mapper<User> {

    /**
     * 根据用户名查询用户
     *
     * @param username 用户名
     * @return 用户对象
     */
    User selectUserByUsername(String username);
}
