package org.kuro.bidding.service;

import org.kuro.bidding.model.page.PageResult;
import org.kuro.bidding.model.vo.PermissionVo;

public interface PermissionService {

    /**
     * 查询权限列表，参数为null查全部
     *
     * @param page  当前页
     * @param limit 每页显示条数
     * @return 权限列表
     */
    PageResult<PermissionVo> permissionList(Integer page, Integer limit);
}
