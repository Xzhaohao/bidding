package org.kuro.bidding.mapper;

import org.kuro.bidding.model.entity.User;
import tk.mybatis.mapper.common.Mapper;

public interface UserMapper extends Mapper<User> {

    /**
     * 根据手机号查询用户
     *
     * @param mobile 手机号
     * @return 用户对象
     */
    User selectUserByMobile(String mobile);
}
