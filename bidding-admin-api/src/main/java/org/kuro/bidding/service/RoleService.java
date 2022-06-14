package org.kuro.bidding.service;

import org.kuro.bidding.model.entity.Role;

import java.util.List;

public interface RoleService {

    /**
     * 获取所有角色
     *
     * @return 角色列表
     */
    List<Role> allRoleList();


    /**
     * 根据ID查询角色
     *
     * @param id 角色ID
     * @return 角色信息
     */
    Role queryById(String id);
}
