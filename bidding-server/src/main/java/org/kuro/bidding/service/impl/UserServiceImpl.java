package org.kuro.bidding.service.impl;

import cn.hutool.core.util.IdUtil;
import cn.hutool.crypto.digest.BCrypt;
import org.kuro.bidding.mapper.UserMapper;
import org.kuro.bidding.model.entity.User;
import org.kuro.bidding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User queryUserByMobile(String mobile) {
        return userMapper.selectUserByMobile(mobile);
    }


    @Override
    public void createUser(User user) {
        user.setId(IdUtil.getSnowflakeNextIdStr());
        String pwd = BCrypt.hashpw(user.getPassword());
        user.setPassword(pwd);
        user.setCreateTime(new Date());

        userMapper.insertSelective(user);
    }
}
