package org.kuro.bidding.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.kuro.bidding.model.entity.Permission;
import org.kuro.bidding.model.entity.Role;
import org.kuro.bidding.model.page.PageResult;
import org.kuro.bidding.model.result.Result;
import org.kuro.bidding.service.PermissionService;
import org.kuro.bidding.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@Api(value = "权限验证", tags = "权限验证模块")
public class AuthController {

    @Autowired
    private RoleService roleService;

    @Autowired
    private PermissionService permissionService;


    @ApiOperation(value = "所有角色", notes = "获取所有角色")
    @PostMapping("/role")
    public Result allRoleApi() {
        List<Role> roleList = roleService.allRoleList();
        return Result.ok().data(roleList);
    }


    @ApiOperation(value = "权限列表", notes = "分页获取权限列表，不传参数获取所有")
    @PostMapping("/permission")
    public Result permissionListApi(
            @ApiParam(name = "page", value = "当前页")
            @RequestParam(value = "page", required = false) Integer page,
            @ApiParam(name = "limit", value = "每页显示条数")
            @RequestParam(value = "limit", required = false) Integer limit
    ) {
        PageResult<Permission> result = permissionService.permissionList(page, limit);
        return Result.ok().data(result);
    }
}
