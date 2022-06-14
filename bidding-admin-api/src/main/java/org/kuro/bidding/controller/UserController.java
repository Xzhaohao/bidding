package org.kuro.bidding.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.kuro.bidding.model.bo.UserImportBo;
import org.kuro.bidding.model.page.PageResult;
import org.kuro.bidding.model.result.Result;
import org.kuro.bidding.model.vo.UserVo;
import org.kuro.bidding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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


    @ApiOperation(value = "批量导入员工", notes = "Excel批量导入员工")
    @PostMapping("/batch/import")
    public Result batchImportUserApi(@RequestBody @Valid List<UserImportBo> bos) {
        for (UserImportBo bo : bos) {
            userService.createUser(bo);
        }
        return Result.ok();
    }
}
