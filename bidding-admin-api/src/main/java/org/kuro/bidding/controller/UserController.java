package org.kuro.bidding.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.kuro.bidding.model.page.PageResult;
import org.kuro.bidding.model.result.Result;
import org.kuro.bidding.model.vo.UserVo;
import org.kuro.bidding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@Api(value = "员工模块", tags = "员工模块")
public class UserController {

    @Autowired
    private UserService userService;


    @ApiOperation(value = "员工列表", notes = "分页获取员工列表")
    @GetMapping("/list")
    public Result userListApi(
            @ApiParam(name = "page", value = "当前页", defaultValue = "1")
            @RequestParam(value = "page", required = false, defaultValue = "1") Integer page,
            @ApiParam(name = "limit", value = "每页显示条数", defaultValue = "10")
            @RequestParam(value = "limit", required = false, defaultValue = "10") Integer limit
    ) {
        PageResult<UserVo> result = userService.queryUserByPage(page, limit);
        return Result.ok().data(result);
    }
}
