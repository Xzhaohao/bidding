package org.kuro.bidding.service.impl;

import cn.hutool.core.util.IdUtil;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.kuro.bidding.mapper.UserMapper;
import org.kuro.bidding.mapper.UserRoleMapper;
import org.kuro.bidding.model.bo.UserImportBo;
import org.kuro.bidding.model.entity.Role;
import org.kuro.bidding.model.entity.User;
import org.kuro.bidding.model.entity.UserRole;
import org.kuro.bidding.model.page.PageResult;
import org.kuro.bidding.model.vo.UserVo;
import org.kuro.bidding.service.RoleService;
import org.kuro.bidding.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserRoleMapper userRoleMapper;

    @Autowired
    private RoleService roleService;


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
        List<User> users = userMapper.selectAll();

        List<UserVo> vos = new ArrayList<>();
        for (User user : users) {
            UserVo vo = new UserVo();
            BeanUtils.copyProperties(user, vo);

            List<UserRole> userRoles = userRoleMapper.selectUserRoleByUserId(user.getId());
            List<Role> roles = new ArrayList<>();
            for (UserRole userRole : userRoles) {
                Role role = roleService.queryById(userRole.getRoleId());
                roles.add(role);
            }
            vo.setRoles(roles);
            vos.add(vo);
        }

        PageInfo<UserVo> info = new PageInfo<>(vos);
        return new PageResult<>(info.getTotal(), vos);
    }


    @Transactional
    @Override
    public void createUser(UserImportBo bo) {
        User user = new User();
        BeanUtils.copyProperties(bo, user);

        String userId = IdUtil.getSnowflakeNextIdStr();
        user.setId(userId);

        userMapper.insertSelective(user);

        List<Role> roles = roleService.allRoleList();
        for (String argRole : bo.getRoles()) {
            for (Role role : roles) {
                if (argRole.equals(role.getRoleName())) {
                    UserRole userRole = new UserRole();
                    userRole.setRoleId(role.getId());
                    userRole.setUserId(userId);
                    userRole.setId(IdUtil.getSnowflakeNextIdStr());
                    userRole.setCreateTime(new Date());

                    userRoleMapper.insertSelective(userRole);
                }
            }
        }
    }


    @Override
    public void deleteUserById(String id) {
        // 删除admin_user表的数据
        userMapper.deleteByPrimaryKey(id);
        // 同时删除admin_user_role表的数据
        userRoleMapper.deleteByUserId(id);
    }
}
