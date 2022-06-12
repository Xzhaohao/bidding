package org.kuro.bidding.controller;

import cn.dev33.satoken.stp.SaTokenInfo;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.crypto.digest.BCrypt;
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
public class PassportController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Result loginApi(@RequestBody @Valid LoginFromBo bo) {
        User user = userService.queryUserByUsername(bo.getUsername());
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


    @GetMapping("/profile")
    public Result profileApi() {
        String loginUserID = StpUtil.getLoginIdAsString();
        User user = userService.queryUserById(loginUserID);
        return Result.ok().data(user);
    }


    @PostMapping("/logout")
    public Result logoutApi() {
        StpUtil.logout();
        return Result.ok(ResultCode.LOGOUT_SUCCESS);
    }
}
