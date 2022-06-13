package org.kuro.bidding.controller;

import cn.dev33.satoken.stp.SaTokenInfo;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.crypto.digest.BCrypt;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.kuro.bidding.model.bo.LoginFromBo;
import org.kuro.bidding.model.entity.User;
import org.kuro.bidding.model.result.Result;
import org.kuro.bidding.model.result.ResultCode;
import org.kuro.bidding.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/sys")
@Api(value = "登陆模块", tags = "登陆相关")
public class PassportController {

    @Autowired
    private UserService userService;

    @ApiOperation(value = "登陆", notes = "登陆")
    @PostMapping("/login")
    public Result loginApi(@RequestBody @Valid LoginFromBo bo) {
        User user = userService.queryUserByMobile(bo.getMobile());
        // 用户不存在
        if (user == null) {
            return Result.error(ResultCode.ACCOUNT_INFO_ERROR);
        }

        // 密码错误
        boolean isMatch = BCrypt.checkpw(bo.getPassword(), user.getPassword());
        if (!isMatch) {
            return Result.error(ResultCode.ACCOUNT_INFO_ERROR);
        }

        // 账号被冻结，提示账号不存在
        if (user.getStatus() == 2) {
            return Result.error(ResultCode.ACCOUNT_NOT_EXIST);
        }

        StpUtil.login(user.getId());
        SaTokenInfo info = StpUtil.getTokenInfo();
        return Result.ok(ResultCode.LOGIN_SUCCESS).data("token", info.tokenValue);
    }


    @ApiOperation(value = "登陆信息", notes = "获取登陆用户信息")
    @GetMapping("/profile")
    public Result profileApi() {
        String loginUserID = StpUtil.getLoginIdAsString();
        User user = userService.queryUserById(loginUserID);
        return Result.ok().data(user);
    }


    @ApiOperation(value = "退出登陆", notes = "退出登陆")
    @PostMapping("/logout")
    public Result logoutApi() {
        StpUtil.logout();
        return Result.ok(ResultCode.LOGOUT_SUCCESS);
    }
}
