package org.kuro.bidding.service.impl;

import org.kuro.bidding.mapper.UserMapper;
import org.kuro.bidding.model.entity.User;
import org.kuro.bidding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;


    @Override
    public User queryUserByUsername(String username) {
        return userMapper.selectUserByUsername(username);
    }


    @Override
    public User queryUserById(String id) {
        return userMapper.selectByPrimaryKey(id);
    }
}
