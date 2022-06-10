package org.kuro.bidding.model.bo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
@ApiModel(value = "LoginInfoBo对象", description = "登录参数")
public class LoginInfoBo {

    @Pattern(regexp = "^[1][3-9][0-9]{9}$", message = "手机号格式错误！")
    @NotBlank(message = "手机号不能为空！")
    @ApiModelProperty(value = "手机号")
    private String mobile;


    @NotBlank(message = "密码不能为空！")
    @ApiModelProperty(value = "密码")
    private String password;


    @Pattern(regexp = "^[0-9a-zA-Z]{4}$", message = "验证码格式不合法！")
    @NotBlank(message = "验证码不能为空！")
    @ApiModelProperty(value = "验证码")
    private String code;


    @NotBlank(message = "KEY不能为空！")
    @ApiModelProperty(value = "验证码KEY")
    private String key;
}
