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
}
