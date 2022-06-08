package org.kuro.bidding.mapper;

import org.kuro.bidding.model.entity.User;
import org.springframework.data.repository.query.Param;
import tk.mybatis.mapper.common.Mapper;

public interface UserMapper extends Mapper<User> {

    /**
     * 根据手机号查询用户
     *
     * @param mobile 手机号
     * @return User
     */
    User selectUserByMobile(@Param("mobile") String mobile);
}
