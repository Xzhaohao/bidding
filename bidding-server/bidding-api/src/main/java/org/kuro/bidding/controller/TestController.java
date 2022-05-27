package org.kuro.bidding.controller;

import com.github.xiaoymin.knife4j.annotations.ApiSupport;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.kuro.bidding.common.result.Result;
import org.kuro.bidding.common.utils.SMSUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@ApiSupport(order = 8)
@RestController
@RequestMapping("api/v1")
@Api(value = "权限验证模块", tags = {"权限验证"})
public class TestController {

    @Autowired
    private SMSUtils smsUtils;

    @ApiOperation(value = "账号登录", notes = "code和password选填一个（依据登录类型）", httpMethod = "POST")
    @ApiResponses({
            @ApiResponse(code = 200, message = "登录成功!"),
            @ApiResponse(code = 505, message = "验证码过期或不匹配，请稍后重试!"),
            @ApiResponse(code = 507, message = "账号被冻结，请联系管理员!"),
            @ApiResponse(code = 999, message = "请求失败!")
    })
    @PostMapping("/pub/passport/login")
    public Result loginApi() {
        return smsUtils.sendSMS("13777777777", "123456");
    }
}
