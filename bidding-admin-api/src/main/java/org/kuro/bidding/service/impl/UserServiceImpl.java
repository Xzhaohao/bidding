package org.kuro.bidding.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.kuro.bidding.mapper.UserMapper;
import org.kuro.bidding.model.entity.User;
import org.kuro.bidding.model.page.PageResult;
import org.kuro.bidding.model.vo.UserVo;
import org.kuro.bidding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;


    @Override
    public User queryUserByMobile(String mobile) {
        return userMapper.selectUserByMobile(mobile);
    }


    @Override
    public User queryUserById(String id) {
        return userMapper.selectByPrimaryKey(id);
    }


    @Override
    public PageResult<UserVo> queryUserByPage(Integer page, Integer limit) {
        PageHelper.startPage(page, limit);
        List<UserVo> vos = userMapper.queryUserByPage();
        PageInfo<UserVo> info = new PageInfo<>(vos);
        return new PageResult<>(info.getTotal(), vos);
    }
}
