package org.kuro.bidding.mapper;

import org.kuro.bidding.model.entity.User;
import org.kuro.bidding.model.vo.UserVo;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface UserMapper extends Mapper<User> {

    /**
     * 根据手机号查询用户
     *
     * @param mobile 手机号
     * @return 用户对象
     */
    User selectUserByMobile(String mobile);


    /**
     * 分页查询用户列表
     *
     * @return 用户列表
     */
    List<UserVo> queryUserByPage();
}
