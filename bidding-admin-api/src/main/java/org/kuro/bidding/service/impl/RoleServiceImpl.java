package org.kuro.bidding.service.impl;

import org.kuro.bidding.mapper.RoleMapper;
import org.kuro.bidding.model.entity.Role;
import org.kuro.bidding.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleMapper roleMapper;


    @Override
    public List<Role> allRoleList() {
        return roleMapper.selectAll();
    }


    @Override
    public Role queryById(String id) {
        return roleMapper.selectByPrimaryKey(id);
    }
}
